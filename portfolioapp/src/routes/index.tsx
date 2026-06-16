import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Mustafa | Portfolio" },
      { name: "description", content: "Muhammad Mustafa — full-stack developer building user interfaces and robust web applications." },
      { property: "og:title", content: "Muhammad Mustafa | Portfolio" },
      { property: "og:description", content: "Full-stack developer crafting interfaces and robust web applications." },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const services = [
  { title: "Full Stack Developer", desc: "Building responsive, accessible websites with modern frameworks like React and Next.js.", icon: "◈" },
  { title: "Backend Engineer", desc: "Designing scalable APIs and services with Node.js, FastAPI and PostgreSQL.", icon: "◆" },
  { title: "Frontend Developer", desc: "Crafting interfaces with attention to motion, hierarchy and detail.", icon: "❖" },
  { title: "Python Developer", desc: "Turning ambiguous requirements into clean, maintainable software.", icon: "✺" },
];

const stack = [
  { name: "JavaScript", color: "#F7DF1E", letter: "JS" },
  { name: "TypeScript", color: "#3178C6", letter: "TS" },
  { name: "Python", color: "#FFD43B", letter: "Py" },
  { name: "React", color: "#61DAFB", letter: "⚛" },
  { name: "Node.js", color: "#3C873A", letter: "N" },
  { name: "FastAPI", color: "#10B981", letter: "⚡" },
  { name: "PostgreSQL", color: "#336791", letter: "Pg" },
  { name: "Tailwind", color: "#38BDF8", letter: "TW" },
  { name: "Next.js", color: "#FFFFFF", letter: "Nx" },
  { name: "Supabase", color: "#3ECF8E", letter: "SB" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Tech />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-bold tracking-wide">
          Mustafa<span className="text-primary"> | Tech.MM</span>
        </a>
        <ul className="hidden gap-10 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="flex items-stretch gap-8">
          <div className="relative w-1 shrink-0">
            <div className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-transparent" />
            <div className="absolute left-1/2 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_24px_oklch(0.66_0.27_305)]" />
          </div>
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Hi, I'm <span className="text-gradient-violet">Muhammad Mustafa</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              I develop user interfaces and build robust web applications.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow-ring"
              >
                Get in touch
              </a>
              <a
                href="#about"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/90 hover:border-primary/60 transition"
              >
                About me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="scroll-mouse" />
      </div>
    </section>
  );
}

const education = [
  {
    school: "PIAIC — Presidential Initiative for Artificial Intelligence & Computing",
    description: "A government-backed initiative in Pakistan aimed at training the next generation of AI, blockchain, cloud computing, and IoT professionals. Actively enrolled and building practical AI skills through project-based learning.",
  },
  {
    school: "HPGS — Happy Palace Group of Schools",
    description: "Currently studying in Grade 9. Balancing formal schooling with intensive self-driven learning in AI and technology.",
  },
];

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground">INTRODUCTION</p>
      <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">Overview.</h2>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        I'm an aspiring AI developer and Agentic AI specialist currently studying at PIAIC (Presidential Initiative for Artificial Intelligence & Computing) and HPGS (Happy Palace Group of Schools). I have a deep passion for building autonomous AI systems that can reason, plan, make decisions, and take actions with minimal human supervision. I specialize in Python, OpenAI Agents SDK, MCP, and spec-driven development to create production-ready AI solutions that solve meaningful, real-world problems.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="card-violet group relative p-7 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_oklch(0.55_0.22_295/0.6)]"
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-2xl text-primary">
              {s.icon}
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">EDUCATION</p>
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="card-violet group relative p-7 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_oklch(0.55_0.22_295/0.6)]">
            <h3 className="text-lg font-semibold">{e.school}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tech() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-wrap items-center justify-center gap-10">
        {stack.map((t) => (
          <div key={t.name} className="floaty group flex flex-col items-center" style={{ animationDelay: `${Math.random() * 2}s` }}>
            <div
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border/60 bg-card text-lg font-bold transition group-hover:scale-110"
              style={{ color: t.color, boxShadow: `0 12px 40px -10px ${t.color}55` }}
            >
              {t.letter}
            </div>
            <span className="mt-3 text-xs text-muted-foreground opacity-0 transition group-hover:opacity-100">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const socialLinks = [
  { label: "GitHub", url: "https://github.com/mustafa861", icon: "GH" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-mustafa-9a8974394", icon: "LI" },
  { label: "Gmail", url: "mailto:mustafa1212adnan@gmail.com", icon: "GM" },
  { label: "Instagram", url: "https://www.instagram.com/muhammadmustafa6506", icon: "IG" },
];

function SocialLinks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-3xl font-extrabold tracking-tight text-center">Available on</p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target={s.url.startsWith("mailto") ? undefined : "_blank"}
            rel={s.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="card-violet group flex items-center gap-3 rounded-xl border border-border/60 bg-card px-6 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_oklch(0.55_0.22_295/0.5)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary text-xs font-bold">
              {s.icon}
            </span>
            <span className="text-foreground">{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-2 w-2 rounded-full bg-white/40" />
        <div className="absolute right-32 top-40 h-1 w-1 rounded-full bg-white/40" />
        <div className="absolute left-1/3 bottom-32 h-1.5 w-1.5 rounded-full bg-white/40" />
        <div className="absolute right-10 bottom-20 h-1 w-1 rounded-full bg-white/40" />
      </div>
      <div className="mx-auto max-w-2xl px-6 py-32">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground">GET IN TOUCH</p>
          <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">Contact.</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-10 space-y-6 card-violet p-8 text-left"
          >
            <Field
              label="Your Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="What's your good name?"
            />
            <Field
              label="Your Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="What's your web address?"
            />
            <div>
              <label className="block text-sm font-semibold mb-2">Your Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What you want to say?"
                className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground glow-ring transition hover:opacity-90"
            >
              {sent ? "Sent ✓" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Muhammad Mustafa. Crafted with care.
    </footer>
  );
}
