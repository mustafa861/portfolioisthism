import { createFileRoute } from "@tanstack/react-router";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  { href: "#projects", label: "Projects" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#blog", label: "Blog" },
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
  const [mouse, setMouse] = useState({ x: -500, y: -500 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      setMouse({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useLayoutEffect(() => {
    const els = document.querySelectorAll(".section-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("in-view");
            entry.target.classList.add("animated");
          } else {
            entry.target.classList.remove("animated", "in-view");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("in-view");
      }
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-foreground relative">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-75"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, oklch(0.5 0.2 135 / 0.15), transparent 60%)`,
        }}
      />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Expertise />
        <Education />
        <Tech />
        <Projects />
        <Hackathons />
        <Blog />
        <SocialLinks />
        <Contact />
        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="card-violet px-4 py-2.5 text-sm font-bold tracking-wide">
          Mustafa<span className="text-primary"> | Tech.MM</span>
        </a>
        <div className="hidden md:flex gap-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="card-violet px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [heroVisible, setHeroVisible] = useState(true);
  const heroRef = useRef(null);
  useLayoutEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="top" ref={heroRef} className="relative min-h-screen overflow-hidden">
      <ParticleCanvas />
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="flex items-stretch gap-8">
          <div className="relative w-1 shrink-0">
            <div className="absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-transparent" />
            <div className="absolute left-1/2 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_24px_oklch(0.78_0.25_135)]" />
          </div>
          <div className="max-w-3xl section-animate">
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Hi, I'm <span className="text-gradient-violet">Muhammad Mustafa</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              <TypewriterLines lines={["I develop user interfaces and build robust web applications.", "Aspiring AI developer passionate about Agentic AI.", "Building autonomous systems that solve real-world problems."]} running={heroVisible} />
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
      <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground section-animate">INTRODUCTION</p>
      <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl section-animate">What I Offer</h2>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground section-animate">
        I'm an aspiring AI developer and Agentic AI specialist currently studying at PIAIC (Presidential Initiative for Artificial Intelligence & Computing) and HPGS (Happy Palace Group of Schools). I have a deep passion for building autonomous AI systems that can reason, plan, make decisions, and take actions with minimal human supervision. I specialize in Python, OpenAI Agents SDK, MCP, and spec-driven development to create production-ready AI solutions that solve meaningful, real-world problems.
      </p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="card-violet group relative p-7 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_oklch(0.72_0.2_135/0.6)] section-animate"
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

const expertise = [
  { title: "Python", desc: "Primary language for all AI and backend development, scripting, automation, and API integrations." },
  { title: "OpenAI Agents SDK", desc: "Hands-on experience building autonomous AI agents using OpenAI's official agent framework." },
  { title: "Model Context Protocol", desc: "Connecting AI models to external tools, data sources, and services in a structured way." },
  { title: "n8n", desc: "Building visual AI-powered automation workflows and integrating multiple services." },
  { title: "Agent Kit", desc: "Constructing and orchestrating multi-agent systems for complex problem-solving." },
  { title: "Claude Code", desc: "Anthropic's agentic coding tool for AI-assisted development directly in the terminal." },
  { title: "Gemini CLI", desc: "Google's command-line AI tool for AI-assisted tasks and integrations." },
  { title: "Spec-Driven Development", desc: "Disciplined approach with detailed specs before implementation for scalable solutions." },
  { title: "Spec Kit Plus", desc: "Framework to structure and manage specs for AI projects." },
  { title: "Prompt Engineering", desc: "Crafting effective prompts, prompt chaining, few-shot, and system prompt optimization." },
  { title: "LLM Techniques", desc: "Few-shot prompting, chain-of-thought, and prompt optimization for reliable AI outputs." },
  { title: "Agentic AI", desc: "Designing autonomous systems that reason, plan, decide, and act with minimal supervision." },
];

function Expertise() {
  return (
    <section id="expertise" className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground section-animate">EXPERTISE</p>
      <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl section-animate">My Skills.</h2>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((e, i) => (
          <div
            key={e.title}
            className="card-violet group relative p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_oklch(0.72_0.2_135/0.6)] section-animate"
          >
            <h3 className="text-lg font-semibold">{e.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-2xl font-extrabold tracking-tight sm:text-3xl section-animate">EDUCATION</p>
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="card-violet group relative p-7 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_oklch(0.72_0.2_135/0.6)] section-animate">
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
      <div className="flex flex-wrap items-center justify-center gap-10 section-animate">
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

const projects = [
  {
    title: "BizzFlow AI",
    desc: "A full-stack AI-powered business automation platform. Built with TypeScript frontend and Python backend.",
    url: "https://github.com/mustafa861/bizzflow-ai",
    tech: "TypeScript / Python",
  },
  {
    title: "Restaurant Management System",
    desc: "A full-stack restaurant management system with Python backend and TypeScript frontend.",
    url: "https://github.com/mustafa861/resturantclient",
    tech: "TypeScript / Python",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground section-animate">PROJECTS</p>
      <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl section-animate">My Work.</h2>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-violet group relative p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_oklch(0.72_0.2_135/0.6)] section-animate"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-xs uppercase tracking-widest text-primary/80">{p.tech}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

const hackathons = [
  {
    title: "Hackathon 0 — Personal AI Employee",
    desc: "Building Autonomous FTEs in 2026. Python-based system with Gmail/WhatsApp/filesystem watchers, orchestrator, and Claude Code integration.",
    url: "https://github.com/mustafa861/hackathon_0",
    tech: "Python / Claude Code",
  },
  {
    title: "Hackathon I — Physical AI & Humanoid Robotics",
    desc: "Intelligent textbook platform with Docusaurus frontend, FastAPI backend, and AI agent skills for quizzes, Urdu translation, and personalization.",
    url: "https://github.com/mustafa861/hackathon_I",
    tech: "Python / TypeScript / FastAPI",
  },
  {
    title: "Hackathon II — Spec-Driven Full-Stack App",
    desc: "Full-stack application built with spec-driven development methodology using Claude Code and Specify.",
    url: "https://github.com/mustafa861/hackathon-II",
    tech: "JavaScript / Node.js",
  },
  {
    title: "Hackathon III — Reusable Intelligence & Cloud-Native",
    desc: "Cloud-native platform with learnflow app and skills library for reusable AI intelligence components.",
    url: "https://github.com/mustafa861/hackathon_3",
    tech: "TypeScript / Python",
  },
  {
    title: "Hackathon IV — Course Companion FTE",
    desc: "AI-powered educational tutor with Zero-Backend-LLM architecture. Content delivery, quizzes, progress tracking, and hybrid intelligence.",
    url: "https://github.com/mustafa861/hackathon4",
    tech: "Python / TypeScript / Next.js",
  },
  {
    title: "Hackathon 5 — CRM Digital FTE Factory",
    desc: "CRM Digital FTE Factory with Python backend and database-driven architecture.",
    url: "https://github.com/mustafa861/hackathon5",
    tech: "Python / JavaScript / PostgreSQL",
  },
];

function Hackathons() {
  return (
    <section id="hackathons" className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground section-animate">HACKATHONS</p>
      <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl section-animate">All 6 Hackathons</h2>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hackathons.map((h, i) => (
          <a
            key={i}
            href={h.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-violet group relative p-6 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_oklch(0.72_0.2_135/0.6)] section-animate"
          >
            <h3 className="text-lg font-semibold">{h.title}</h3>
            <p className="mt-2 text-xs uppercase tracking-widest text-primary/80">{h.tech}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog" className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground section-animate">BLOG</p>
      <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl section-animate">Coming Soon</h2>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground section-animate">
        Working on blog posts about AI development, agentic systems, and spec-driven engineering. Stay tuned!
      </p>
    </section>
  );
}

function SocialLinks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32 scroll-mt-20">
      <p className="text-3xl font-extrabold tracking-tight text-center section-animate">Available on</p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target={s.url.startsWith("mailto") ? undefined : "_blank"}
            rel={s.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="card-violet group flex items-center gap-3 rounded-xl border border-border/60 bg-card px-6 py-4 text-sm font-semibold transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_oklch(0.72_0.2_135/0.5)] section-animate"
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
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qa60whf",
        "template_g0o7hum",
        formRef.current!,
        "qzJ0H4LQjN_S8r184"
      )
      .then(() => setSent(true))
      .catch((err) => alert("Failed to send: " + err.text));
  }

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
          <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground section-animate">GET IN TOUCH</p>
          <h2 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl section-animate">Contact.</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 card-violet p-8 text-left section-animate"
          >
            <input type="hidden" name="from_name" value={form.name} />
            <input type="hidden" name="from_email" value={form.email} />
            <input type="hidden" name="message" value={form.message} />
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

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    const count = 80;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `oklch(0.78 0.25 135 / ${p.alpha})`;
        ctx!.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();

    function onResize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" />;
}

function TypewriterLines({ lines, running }: { lines: string[]; running: boolean }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setDone(false);
    if (!running) return;
    let ci = 0;
    let li = 0;
    const timer = setInterval(() => {
      ci++;
      if (ci > lines[li].length) {
        ci = 0;
        li++;
        if (li >= lines.length) {
          clearInterval(timer);
          setDone(true);
          return;
        }
      }
      setLineIndex(li);
      setCharIndex(ci);
    }, 30);
    return () => clearInterval(timer);
  }, [lines, running]);

  return (
    <span>
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {i < lineIndex ? line : i === lineIndex ? line.slice(0, charIndex) : ""}
        </span>
      ))}
      {!done && running && <span className="animate-pulse">|</span>}
    </span>
  );
}

function Typewriter({ text, gradientStart, running }: { text: string; gradientStart?: number; running: boolean }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    if (!running) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [text, running]);
  return (
    <>
      {gradientStart != null ? (
        <>
          <span>{displayed.slice(0, gradientStart)}</span>
          <span className="text-gradient-violet">{displayed.slice(gradientStart)}</span>
        </>
      ) : (
        displayed
      )}
      {running && <span className="animate-pulse">|</span>}
    </>
  );
}

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    function onScroll() { setShow(window.scrollY > 400); }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full card-violet text-primary transition-all duration-300 hover:scale-110 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Scroll to top"
      >
        ↑
      </button>
      <a
        href="https://wa.me/923313241980"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full card-violet text-primary text-2xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Muhammad Mustafa. Crafted with care.
    </footer>
  );
}
