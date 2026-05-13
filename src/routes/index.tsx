import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import {
  ArrowUpRight, Github, Linkedin, Mail, Mic2, Users,
  Briefcase, Code2, Search, Languages, Cpu, Database,
} from "lucide-react";

const SITE = {
  name: "Natália Naomi Sumida",
  role: "Software Engineer · Search & Information Retrieval",
  url: "https://natalianaomi.dev",
  email: "contato@natalianaomi.dev",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Software Engineer II",
  worksFor: { "@type": "Organization", name: "iFood" },
  url: SITE.url,
  sameAs: [
    "https://www.linkedin.com/in/natalianaomi",
    "https://github.com/natalianaomi",
  ],
  knowsAbout: [
    "Search and Information Retrieval", "Ranking", "ElasticSearch",
    "Large Language Models", "Linguistic Diversity", "Python", "FastAPI", "Java",
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${SITE.name} — Search & IR Engineering`,
  provider: { "@type": "Person", name: SITE.name },
  areaServed: "Global",
  serviceType: ["Search Engineering", "Information Retrieval", "LLM Research"],
  url: SITE.url,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Natália Naomi Sumida — Software Engineer · Search & IR" },
      { name: "description", content: "Engenheira de Software com foco em Search and Information Retrieval. Ranking, latência e LLMs no iFood. Pesquisa em diversidade linguística." },
      { name: "keywords", content: "Natália Naomi Sumida, Software Engineer, Search, Information Retrieval, ElasticSearch, LLMs, iFood, TDC" },
      { name: "author", content: SITE.name },
      { name: "theme-color", content: "#0d1117" },
      { property: "og:type", content: "profile" },
      { property: "og:title", content: "Natália Naomi Sumida — Search & IR Engineer" },
      { property: "og:description", content: "Software Engineer II no iFood. Ranking, latência e pesquisa em LLMs e diversidade linguística." },
      { property: "og:url", content: SITE.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Natália Naomi Sumida" },
      { name: "twitter:description", content: "Search & Information Retrieval · LLMs · Ranking" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: SITE.url },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: Portfolio,
});

const experiences = [
  {
    role: "Software Engineer II",
    company: "iFood",
    period: "2024 — Presente",
    focus: "Ranking & Latência",
    bullets: [
      "Lidera iniciativas de ranking de busca, otimizando relevância e CTR em escala.",
      "Reduz latência P99 do pipeline de search com tuning em ElasticSearch e serviços em Java/Python.",
      "Experimentação A/B contínua e métricas de qualidade de retrieval (NDCG, MRR).",
    ],
  },
  {
    role: "Software Engineer I",
    company: "iFood",
    period: "2022 — 2024",
    focus: "Search Platform",
    bullets: [
      "Construção de microsserviços em FastAPI para indexação e query understanding.",
      "Integração de modelos de linguagem em pipelines de retrieval.",
      "Promovida a SE II por impacto consistente em métricas de produto.",
    ],
  },
];

const talks = [
  {
    title: "Search & Ranking em Escala: lições do iFood",
    event: "TDC — The Developer's Conference",
    year: "2024",
    slidesUrl: "#",
    eventUrl: "https://thedevconf.com",
  },
];

const stack = [
  { name: "Python", icon: Code2 },
  { name: "FastAPI", icon: Cpu },
  { name: "Java", icon: Code2 },
  { name: "ElasticSearch", icon: Search },
  { name: "LLMs", icon: Languages },
  { name: "Postgres", icon: Database },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded">Pular para o conteúdo</a>

      <Header />

      <main id="main">
        <Hero />
        <Stack />
        <Experience />
        <Speaking />
        <Research />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  const links = [
    { href: "#experience", label: "Experiência" },
    { href: "#speaking", label: "Speaking" },
    { href: "#research", label: "Pesquisa" },
    { href: "#contact", label: "Contato" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav aria-label="Principal" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-gradient">nns</span>
          <span className="text-muted-foreground">.dev</span>
        </Link>
        <ul className="hidden gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground transition hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-primary hover:text-primary">
          Falar comigo <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Software Engineer II · iFood
        </p>
        <h1 id="hero-title" className="max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
          Construindo <span className="text-gradient">search</span> que entende
          intenção, contexto e linguagem.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Sou {SITE.name.split(" ")[0]} — engenheira de software com foco em{" "}
          <strong className="text-foreground">Search and Information Retrieval</strong>.
          Trabalho com ranking, latência e LLMs em escala, e pesquiso diversidade
          linguística em modelos de linguagem.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#experience" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow">
            Ver trajetória <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#research" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:text-primary">
            Pesquisa em LLMs
          </a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, description, children }: {
  id: string; eyebrow: string; title: string; description?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-3xl font-bold md:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-muted-foreground">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section aria-label="Tecnologias" className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">Stack principal</p>
        <ul className="flex flex-wrap gap-3">
          {stack.map(({ name, icon: Icon }) => (
            <li key={name} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm transition hover:border-primary hover:text-primary">
              <Icon className="h-4 w-4" /> {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="01 / Experiência"
      title="Trajetória no iFood"
      description="Evolução de Software Engineer I para II, com foco contínuo em ranking, qualidade de retrieval e latência de busca."
    >
      <ol className="relative space-y-6 border-l border-border pl-8">
        {experiences.map((exp) => (
          <li key={exp.period}>
            <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-primary glow" aria-hidden />
            <article className="rounded-xl border border-border bg-card/60 p-6 transition hover:border-primary/50">
              <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {exp.role} <span className="text-muted-foreground">· {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </header>
              <p className="mb-3 inline-flex items-center gap-1.5 text-xs text-primary">
                <Briefcase className="h-3.5 w-3.5" /> {exp.focus}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="text-primary">→</span>{b}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Speaking() {
  return (
    <Section
      id="speaking"
      eyebrow="02 / Speaking"
      title="Palestras & Comunidade"
      description="Compartilhando aprendizados sobre search em escala com a comunidade técnica brasileira."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {talks.map((t) => (
          <article key={t.title} className="group rounded-xl border border-border bg-card/60 p-6 transition hover:border-primary/50">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Mic2 className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-widest">{t.event} · {t.year}</span>
            </div>
            <h3 className="mb-4 text-xl font-semibold leading-snug">{t.title}</h3>
            <div className="flex gap-3">
              <a href={t.slidesUrl} className="inline-flex items-center gap-1.5 text-sm text-foreground transition hover:text-primary">
                Slides <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a href={t.eventUrl} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-primary">
                Evento <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Research() {
  return (
    <Section
      id="research"
      eyebrow="03 / Acadêmico & Pesquisa"
      title="Diversidade Linguística em LLMs"
      description="Investigando o Digital Language Divide — como modelos de linguagem refletem (e amplificam) desigualdades de representação entre idiomas."
    >
      <article className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
        <div className="mb-6 inline-flex items-center gap-2 text-accent">
          <GraduationCap className="h-5 w-5" />
          <span className="font-mono text-xs uppercase tracking-widest">Pesquisa em andamento</span>
        </div>
        <h3 className="mb-4 max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">
          Como LLMs tratam idiomas de baixos recursos? E o que isso significa para sistemas de busca multilíngues?
        </h3>
        <p className="mb-6 max-w-3xl text-muted-foreground">
          A pesquisa explora a lacuna entre idiomas dominantes e sub-representados
          em corpora de treino, propondo métricas de equidade linguística para
          aplicações de IR e geração assistida.
        </p>
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Foco", value: "Linguistic Diversity" },
            { label: "Domínio", value: "LLMs & IR" },
            { label: "Tópico", value: "Digital Language Divide" },
          ].map((i) => (
            <li key={i.label} className="rounded-lg border border-border bg-background/40 p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{i.label}</p>
              <p className="mt-1 text-sm font-medium">{i.value}</p>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="04 / Contato"
      title="Vamos conversar"
      description="Aberta a colaborações em search, IR, LLMs, palestras e pesquisa."
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Prefere outro canal? Estou nas redes abaixo. Para propostas de palestra
            ou colaborações, use o formulário ao lado.
          </p>
          <ul className="space-y-3">
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 text-foreground transition hover:text-primary">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/natalianaomi" className="inline-flex items-center gap-3 text-foreground transition hover:text-primary">
                <Linkedin className="h-4 w-4" /> linkedin.com/in/natalianaomi
              </a>
            </li>
            <li>
              <a href="https://github.com/natalianaomi" className="inline-flex items-center gap-3 text-foreground transition hover:text-primary">
                <Github className="h-4 w-4" /> github.com/natalianaomi
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card/60 p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
        <p className="font-mono text-xs">Built with focus on Core Web Vitals · WCAG 2.1</p>
      </div>
    </footer>
  );
}
