"use strict";

(function () {
  const root = document.getElementById("article-app");
  const language = document.body.dataset.lang || "en";
  const content = window.LEAD_CYCLE_ARTICLE?.[language];

  if (!root || !content) {
    console.error("Article content could not be loaded.");
    return;
  }

  document.documentElement.lang = content.htmlLang;
  document.title = `${content.title} | LS AgileWorks`;

  const canonical = `https://lsagileworks.com.br/articles/${language}/lead-time-vs-cycle-time.html`;

  document.querySelector('meta[name="description"]')?.setAttribute("content", content.description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", content.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", content.description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonical);

  const languageLinks = ["en", "pt", "es"]
    .map((code) => {
      const active = code === language;
      return `
        <a
          href="/articles/${code}/lead-time-vs-cycle-time.html"
          hreflang="${code === "pt" ? "pt-BR" : code}"
          ${active ? 'aria-current="page"' : ""}
          class="rounded-full px-3 py-1 ${
            active
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground transition hover:text-primary"
          }"
        >
          ${code.toUpperCase()}
        </a>
      `;
    })
    .join("");

  const cards = content.cards
    .map(([title, text]) => `
      <div class="rounded-2xl border border-border bg-card p-6">
        <h3 class="font-display text-xl text-foreground">${title}</h3>
        <p class="mt-3 leading-relaxed text-muted-foreground">${text}</p>
      </div>
    `)
    .join("");

  const scenarios = content.scenarios
    .map(([title, text]) => `
      <div class="rounded-2xl border border-border bg-secondary/40 p-6">
        <h3 class="font-display text-xl text-foreground">${title}</h3>
        <p class="mt-3 leading-relaxed text-muted-foreground">${text}</p>
      </div>
    `)
    .join("");

  const mistakes = content.mistakes
    .map((text, index) => `
      <li class="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
        <span class="mt-0.5 font-bold text-accent" aria-hidden="true">
          ${String(index + 1).padStart(2, "0")}
        </span>
        <span>${text}</span>
      </li>
    `)
    .join("");

  const conclusion = content.conclusion
    .map((text) => `
      <p class="mt-5 leading-relaxed text-muted-foreground">${text}</p>
    `)
    .join("");

  root.innerHTML = `
    <header class="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="/" class="flex items-center gap-2.5" aria-label="LS AgileWorks">
          <img src="/assets/img/logo.webp" alt="LS AgileWorks" class="h-9 w-auto">
          <span class="font-display text-lg font-bold tracking-tight text-primary">
            LS AgileWorks
          </span>
        </a>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <a href="/#services" class="text-sm font-medium text-muted-foreground transition hover:text-primary">${content.nav.services}</a>
          <a href="/#why" class="text-sm font-medium text-muted-foreground transition hover:text-primary">${content.nav.why}</a>
          <a href="/#products" class="text-sm font-medium text-muted-foreground transition hover:text-primary">${content.nav.products}</a>
          <a href="/#insights" class="text-sm font-medium text-primary" aria-current="page">${content.nav.insights}</a>
          <a href="/#contact" class="text-sm font-medium text-muted-foreground transition hover:text-primary">${content.nav.contact}</a>
        </nav>

        <nav class="flex items-center gap-1 text-sm" aria-label="Language selector">
          ${languageLinks}
        </nav>

        <a
          href="/#contact"
          class="hidden h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 lg:inline-flex"
        >
          ${content.nav.cta}
        </a>
      </div>
    </header>

    <main>
      <section class="relative overflow-hidden" style="background: var(--gradient-hero);">
        <div
          class="absolute inset-0 opacity-[0.15]"
          aria-hidden="true"
          style="background-image:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,.4) 0, transparent 40%),
            radial-gradient(circle at 80% 60%, rgba(90,180,255,.5) 0, transparent 45%);"
        ></div>

        <div class="relative mx-auto max-w-3xl px-6 py-20 text-white md:py-24">
          <nav aria-label="Breadcrumb" class="mb-8 text-sm text-white/70">
            <a href="/" class="transition hover:text-white">${content.breadcrumb.home}</a>
            <span aria-hidden="true"> / </span>
            <a href="/#insights" class="transition hover:text-white">${content.breadcrumb.insights}</a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Lead Time vs Cycle Time</span>
          </nav>

          <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
            <span class="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true"></span>
            ${content.category}
          </div>

          <h1 class="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl">
            ${content.heroTitle}
            <span class="text-accent">${content.heroHighlight}</span>
          </h1>

          <p class="mt-6 text-lg leading-relaxed text-white/80">
            ${content.heroText}
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>LS AgileWorks</span>
            <span aria-hidden="true">•</span>
            <span>${content.readingTime}</span>
            <span aria-hidden="true">•</span>
            <span>Delivery Metrics</span>
          </div>
        </div>
      </section>

      <article class="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p class="text-lg leading-relaxed text-muted-foreground">${content.intro1}</p>
        <p class="mt-6 text-lg leading-relaxed text-muted-foreground">${content.intro2}</p>

        <section class="mt-14">
          <h2 class="font-display text-3xl text-foreground">${content.leadTitle}</h2>
          <p class="mt-5 leading-relaxed text-muted-foreground">${content.leadText}</p>

          <div class="mt-6 rounded-2xl border border-border bg-secondary/40 p-6">
            <div class="text-xs font-semibold uppercase tracking-wider text-accent">${content.example}</div>
            <p class="mt-3 leading-relaxed text-foreground">${content.leadExample}</p>
            <p class="mt-3 font-medium text-primary">${content.leadValue}</p>
          </div>

          <p class="mt-6 leading-relaxed text-muted-foreground">${content.leadConclusion}</p>
        </section>

        <section class="mt-14">
          <h2 class="font-display text-3xl text-foreground">${content.cycleTitle}</h2>
          <p class="mt-5 leading-relaxed text-muted-foreground">${content.cycleText}</p>

          <div class="mt-6 rounded-2xl border border-border bg-secondary/40 p-6">
            <div class="text-xs font-semibold uppercase tracking-wider text-accent">${content.sameExample}</div>
            <p class="mt-3 leading-relaxed text-foreground">${content.cycleExample}</p>
            <p class="mt-3 font-medium text-primary">${content.cycleValue}</p>
          </div>

          <p class="mt-6 leading-relaxed text-muted-foreground">${content.cycleConclusion}</p>
        </section>

        <section class="mt-14">
          <h2 class="font-display text-3xl text-foreground">${content.differenceTitle}</h2>

          <div class="mt-6 overflow-auto rounded-2xl border border-border">
            <table class="w-full text-left">
              <thead class="bg-secondary/40">
                <tr>
                  <th class="px-6 py-4 text-sm font-semibold text-foreground">${content.table.metric}</th>
                  <th class="px-6 py-4 text-sm font-semibold text-foreground">${content.table.start}</th>
                  <th class="px-6 py-4 text-sm font-semibold text-foreground">${content.table.end}</th>
                  <th class="px-6 py-4 text-sm font-semibold text-foreground">${content.table.question}</th>
                </tr>
              </thead>
              <tbody class="text-sm text-muted-foreground">
                <tr class="border-t border-border">
                  <td class="px-6 py-4 font-medium text-foreground">Lead Time</td>
                  <td class="px-6 py-4">${content.table.leadStart}</td>
                  <td class="px-6 py-4">${content.table.completion}</td>
                  <td class="px-6 py-4">${content.table.leadQuestion}</td>
                </tr>
                <tr class="border-t border-border">
                  <td class="px-6 py-4 font-medium text-foreground">Cycle Time</td>
                  <td class="px-6 py-4">${content.table.cycleStart}</td>
                  <td class="px-6 py-4">${content.table.completion}</td>
                  <td class="px-6 py-4">${content.table.cycleQuestion}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="mt-14">
          <h2 class="font-display text-3xl text-foreground">${content.leadersTitle}</h2>
          <p class="mt-5 leading-relaxed text-muted-foreground">${content.leadersIntro}</p>
          <div class="mt-8 grid gap-5">${cards}</div>
        </section>

        <section class="mt-14">
          <h2 class="font-display text-3xl text-foreground">${content.scenariosTitle}</h2>
          <div class="mt-8 grid gap-5">${scenarios}</div>
        </section>

        <section class="mt-14">
          <h2 class="font-display text-3xl text-foreground">${content.mistakesTitle}</h2>
          <ul class="mt-6 grid gap-4 text-muted-foreground">${mistakes}</ul>
        </section>

        <section class="mt-14">
          <h2 class="font-display text-3xl text-foreground">${content.conclusionTitle}</h2>
          ${conclusion}
        </section>

        <aside class="mt-16 rounded-2xl border border-border bg-secondary/40 p-8">
          <div class="text-xs font-semibold uppercase tracking-[0.2em] text-accent">LS AgileWorks</div>
          <h2 class="mt-3 font-display text-2xl text-foreground">${content.ctaTitle}</h2>
          <p class="mt-4 leading-relaxed text-muted-foreground">${content.ctaText}</p>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href="/#contact"
              class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              ${content.ctaButton}
            </a>

            <a
              href="/#insights"
              class="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary"
            >
              ${content.otherContent}
            </a>
          </div>
        </aside>

        <div class="mt-12 border-t border-border pt-8">
          <a href="/#insights" class="text-sm font-medium text-primary transition hover:text-accent">
            ← ${content.back}
          </a>
        </div>
      </article>
    </main>

    <footer class="border-t border-border bg-background">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <div class="flex items-center gap-2">
          <img src="/assets/img/logo.webp" alt="" class="h-8 w-auto">
          <span class="font-display font-bold text-primary">LS AgileWorks</span>
        </div>

        <div>${content.copyright}</div>

        <a href="mailto:contact@lsagileworks.com.br" class="transition hover:text-primary">
          contact@lsagileworks.com.br
        </a>
      </div>
    </footer>
  `;
})();
