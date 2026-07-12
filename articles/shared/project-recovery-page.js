"use strict";

(function () {
  const root = document.getElementById("article-app");
  const code = document.body.dataset.lang || "en";
  const a = window.PROJECT_RECOVERY_ARTICLE?.[code];

  if (!root || !a) {
    console.error("Project recovery article could not be loaded.");
    return;
  }

  const urls = {
    en: "/articles/en/how-to-recover-a-delayed-software-project.html",
    pt: "/articles/pt/como-recuperar-um-projeto-de-software-atrasado.html",
    es: "/articles/es/como-recuperar-un-proyecto-de-software-retrasado.html"
  };

  const paragraphs = (items = [], lead = false) =>
    items.map((text, i) => `
      <p class="${lead && i === 0 ? "text-lg" : "mt-5"} leading-relaxed text-muted-foreground">${text}</p>
    `).join("");

  const list = (items = []) => items.length ? `
    <ul class="mt-6 grid gap-4 text-muted-foreground">
      ${items.map((text, i) => `
        <li class="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <span class="font-bold text-accent">${String(i + 1).padStart(2, "0")}</span>
          <span>${text}</span>
        </li>
      `).join("")}
    </ul>` : "";

  const table = (t) => !t ? "" : `
    <div class="mt-6 overflow-auto rounded-2xl border border-border">
      <table class="w-full min-w-[760px] text-left">
        <thead class="bg-secondary/40">
          <tr>${t.headers.map(h => `<th class="px-6 py-4 text-sm font-semibold text-foreground">${h}</th>`).join("")}</tr>
        </thead>
        <tbody class="text-sm text-muted-foreground">
          ${t.rows.map(r => `<tr class="border-t border-border">${
            r.map((c, i) => `<td class="px-6 py-4 ${i === 0 ? "font-medium text-foreground" : ""}">${c}</td>`).join("")
          }</tr>`).join("")}
        </tbody>
      </table>
    </div>`;

  const section = (s) => `
    <section class="mt-14">
      <h2 class="font-display text-3xl text-foreground">${s.title}</h2>
      ${paragraphs(s.paragraphs)}
      ${table(s.table)}
      ${list(s.list)}
    </section>`;

  const languages = ["en", "pt", "es"].map(lang => `
    <a
      href="${urls[lang]}"
      hreflang="${lang === "pt" ? "pt-BR" : lang}"
      ${lang === code ? 'aria-current="page"' : ""}
      class="rounded-full px-3 py-1 ${
        lang === code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
      }"
    >${lang.toUpperCase()}</a>`).join("");

  const framework = a.framework.map((step, i) => `
    <div class="rounded-lg border border-border bg-background px-4 py-3 text-center text-sm font-medium">${step}</div>
    ${i < a.framework.length - 1 ? '<span class="text-accent">→</span>' : ""}
  `).join("");

  const related = a.related.map(([title, url]) => `
    <article class="rounded-2xl border border-border bg-card p-6">
      <a href="${url}" class="font-display text-xl text-primary hover:text-accent">${title} →</a>
    </article>`).join("");

  root.innerHTML = `
    <header class="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="/" class="flex items-center gap-2.5">
          <img src="/assets/img/logo.webp" alt="LS AgileWorks" class="h-9 w-auto">
          <span class="font-display text-lg font-bold text-primary">LS AgileWorks</span>
        </a>
        <nav class="flex items-center gap-1 text-sm">${languages}</nav>
        <a href="/#contact" class="hidden h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground lg:inline-flex">${a.ctaButton}</a>
      </div>
    </header>

    <main>
      <section class="relative overflow-hidden" style="background: var(--gradient-hero);">
        <div class="relative mx-auto max-w-3xl px-6 py-20 text-white md:py-24">
          <div class="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">${a.category}</div>
          <h1 class="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl">
            ${a.heroTitle}
            <span class="text-accent">${a.heroHighlight}</span>
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-white/80">${a.heroText}</p>
          <div class="mt-8 text-sm text-white/70">${a.readingTime}</div>
        </div>
      </section>

      <article class="mx-auto max-w-3xl px-6 py-16 md:py-20">
        ${paragraphs(a.intro, true)}

        <section class="mt-14">
          <h2 class="font-display text-3xl text-foreground">${a.frameworkTitle}</h2>
          <div class="mt-8 flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center">${framework}</div>
        </section>

        ${a.sections.map(section).join("")}


        <aside class="mt-16 rounded-2xl border border-border bg-secondary/40 p-8" style="margin-top: 10px;">
          <h2 class="font-display text-2xl text-foreground">${a.ctaTitle}</h2>
          <p class="mt-4 leading-relaxed text-muted-foreground">${a.ctaText}</p>
          <a href="/#contact" class="mt-6 inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground">${a.ctaButton}</a>
        </aside>

        <div class="mt-12 border-t border-border pt-8">
          <a href="/#insights" class="text-sm font-medium text-primary">← ${a.back}</a>
        </div>
      </article>
    </main>

    <footer class="border-t border-border bg-background">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <span>LS AgileWorks</span>
        <span>${a.copyright}</span>
        <a href="mailto:contact@lsagileworks.com.br">contact@lsagileworks.com.br</a>
      </div>
    </footer>
  `;
})();
