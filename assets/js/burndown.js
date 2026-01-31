let burndownChart = null;

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

function parseScopeChanges(text) {
  // Format: day:amount, day:amount (day is 1-based)
  // Example: 3:+10, 6:-5
  const changes = [];
  if (!text || !text.trim()) return changes;

  const parts = text.split(',').map(s => s.trim()).filter(Boolean);
  for (const p of parts) {
    const [dayStr, amtStr] = p.split(':').map(s => (s || '').trim());
    const day = Number(dayStr);
    const amount = Number(amtStr);
    if (Number.isFinite(day) && Number.isFinite(amount) && day >= 1) {
      changes.push({ day, amount });
    }
  }
  return changes;
}

function businessDayLabels(startDateStr, days) {
  // simple labeling: Day 1..N + optional dates
  // We'll keep it readable and stable
  const labels = [];
  const start = startDateStr ? new Date(startDateStr + 'T00:00:00') : null;

  for (let i = 0; i < days; i++) {
    if (!start || isNaN(start.getTime())) {
      labels.push(`Day ${i + 1}`);
    } else {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      labels.push(`D${i + 1} (${mm}/${dd})`);
    }
  }
  return labels;
}

function generateBurndown(params) {
  const {
    startDate,
    durationDays,
    totalWork,
    model,
    variability,
    scopeChangesText
  } = params;

  const days = clamp(durationDays, 2, 120);
  const total = Math.max(1, totalWork);

  const labels = businessDayLabels(startDate, days);

  // Ideal line
  const ideal = [];
  for (let i = 0; i < days; i++) {
    const remaining = total - (total * (i / (days - 1)));
    ideal.push(Number(remaining.toFixed(2)));
  }

  // Apply scope changes over time (to the "total baseline")
  const scopeChanges = parseScopeChanges(scopeChangesText);
  // We'll compute an "effective total" per day based on scope additions/subtractions that happen on that day
  const scopeDeltaByDay = new Array(days).fill(0);
  for (const c of scopeChanges) {
    const idx = c.day - 1;
    if (idx >= 0 && idx < days) scopeDeltaByDay[idx] += c.amount;
  }

  // Actual line: start at total, burn down daily
  const actual = [];
  let remaining = total;
  let effectiveTotal = total;

  // daily burn baseline
  const baselineBurn = total / (days - 1);

  function randUnit() {
    // deterministic-ish but fine for demo; use crypto? not needed
    return (Math.random() * 2 - 1); // -1..1
  }

  for (let i = 0; i < days; i++) {
    // Scope change happens at start of day i (except day 1 still valid)
    const delta = scopeDeltaByDay[i] || 0;
    if (delta !== 0) {
      remaining += delta;
      effectiveTotal += delta;
      remaining = Math.max(0, remaining);
    }

    if (i === 0) {
      actual.push(Number(remaining.toFixed(2)));
      continue;
    }

    let burn = baselineBurn;

    if (model === 'linear') {
      burn = baselineBurn;
    } else if (model === 'realistic') {
      // add variability
      const v = clamp(variability, 0, 60) / 100; // 0..0.6
      burn = baselineBurn * (1 + randUnit() * v);
      burn = Math.max(0, burn);
    } else if (model === 'custom') {
      // custom handled elsewhere, but keep a fallback
      burn = baselineBurn;
    }

    remaining = Math.max(0, remaining - burn);

    // if remaining is 0, keep 0
    actual.push(Number(remaining.toFixed(2)));
  }

  // Recompute ideal based on effective total? In PM world, ideal often updates when scope changes.
  // We'll create "idealAdjusted" that incorporates scope changes cumulatively.
  const idealAdjusted = [];
  let totalSoFar = total;
  for (let i = 0; i < days; i++) {
    totalSoFar += scopeDeltaByDay[i] || 0;
    const rem = totalSoFar - (totalSoFar * (i / (days - 1)));
    idealAdjusted.push(Number(rem.toFixed(2)));
  }

  return { labels, ideal: idealAdjusted, actual, scopeDeltaByDay };
}

function renderTable(labels, ideal, actual, scopeDeltaByDay) {
  const tbody = document.querySelector('#bd-table tbody');
  const tfoot = document.querySelector('#bd-table tfoot');
  if (!tbody) return;

  tbody.innerHTML = '';
  for (let i = 0; i < labels.length; i++) {
    const tr = document.createElement('tr');
    const scopeDelta = scopeDeltaByDay[i] || 0;

    const status =
      actual[i] <= ideal[i] ? 'On track' :
      actual[i] <= ideal[i] * 1.15 ? 'At risk' : 'Off track';

    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${labels[i]}</td>
      <td>${ideal[i].toFixed(2)}</td>
      <td>${actual[i].toFixed(2)}</td>
      <td>${scopeDelta === 0 ? '' : (scopeDelta > 0 ? '+' : '') + scopeDelta}</td>
      <td>${status}</td>
    `;
    tbody.appendChild(tr);
  }

  const last = actual[actual.length - 1];
  const completionDay = last === 0 ? actual.findIndex(v => v === 0) + 1 : null;

  const summary = document.querySelector('#bd-summary');
  if (summary) {
    if (completionDay) {
      summary.textContent = `Projected completion: reached zero on Day ${completionDay}.`;
    } else {
      summary.textContent = `Projected completion: not reached within the selected duration.`;
    }
  }

  if (tfoot) {
    const totalScope = scopeDeltaByDay.reduce((a,b)=>a+b,0);
    tfoot.innerHTML = `
      <tr>
        <td colspan="6">
          Total scope change: <strong>${totalScope >= 0 ? '+' : ''}${totalScope}</strong>
        </td>
      </tr>
    `;
  }
}

function renderChart(labels, ideal, actual) {
  const ctx = document.getElementById('bd-chart');
  if (!ctx) return;

  if (burndownChart) burndownChart.destroy();

  burndownChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: 'Ideal (adjusted)', data: ideal, tension: 0.25, pointRadius: 2 },
        { label: 'Actual', data: actual, tension: 0.25, pointRadius: 2 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: true },
        tooltip: { enabled: true }
      },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      }
    }
  });
}

function toCSV(labels, ideal, actual, scopeDeltaByDay) {
  const rows = [
    ['day', 'label', 'ideal_remaining', 'actual_remaining', 'scope_delta']
  ];
  for (let i = 0; i < labels.length; i++) {
    rows.push([
      i + 1,
      labels[i],
      ideal[i].toFixed(2),
      actual[i].toFixed(2),
      scopeDeltaByDay[i] || 0
    ]);
  }
  return rows.map(r => r.map(v => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\n');
}

function download(filename, content) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function getParamsFromForm() {
  const startDate = document.getElementById('bd-start').value;
  const durationDays = Number(document.getElementById('bd-days').value);
  const totalWork = Number(document.getElementById('bd-total').value);
  const model = document.getElementById('bd-model').value;
  const variability = Number(document.getElementById('bd-var').value);
  const scopeChangesText = document.getElementById('bd-scope').value;

  return { startDate, durationDays, totalWork, model, variability, scopeChangesText };
}

function setDefaultValues() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');

  document.getElementById('bd-start').value = `${yyyy}-${mm}-${dd}`;
  document.getElementById('bd-days').value = 10;
  document.getElementById('bd-total').value = 100;
  document.getElementById('bd-model').value = 'realistic';
  document.getElementById('bd-var').value = 20;
  document.getElementById('bd-scope').value = '3:+10, 6:+5';
}

function run() {
  const params = getParamsFromForm();

  if (!Number.isFinite(params.durationDays) || params.durationDays < 2) {
    alert('Duration must be at least 2 days.');
    return;
  }
  if (!Number.isFinite(params.totalWork) || params.totalWork <= 0) {
    alert('Total work must be greater than 0.');
    return;
  }

  const { labels, ideal, actual, scopeDeltaByDay } = generateBurndown(params);
  renderChart(labels, ideal, actual);
  renderTable(labels, ideal, actual, scopeDeltaByDay);

  // store latest for CSV
  window.__bd_latest = { labels, ideal, actual, scopeDeltaByDay };
}

document.addEventListener('DOMContentLoaded', () => {
  setDefaultValues();

  document.getElementById('bd-generate').addEventListener('click', run);

  document.getElementById('bd-reset').addEventListener('click', () => {
    setDefaultValues();
    run();
  });

  document.getElementById('bd-csv').addEventListener('click', () => {
    const data = window.__bd_latest;
    if (!data) {
      run();
    }
    const d = window.__bd_latest;
    const csv = toCSV(d.labels, d.ideal, d.actual, d.scopeDeltaByDay);
    download('burndown.csv', csv);
  });

  // initial render
  run();
});
