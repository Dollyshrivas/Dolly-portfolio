import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    title: "AXIS",
    tag: "AI Device Assistant",
    desc: "An AI-powered assistant concept designed to help users interact with devices and automate everyday tasks.",
    tech: ["Python", "FastAPI", "Gemini AI"],
    github: "https://github.com/Dollyshrivas/AXIS/tree/main",
  },
  {
    title: "Pizza24",
    tag: "Full-Stack E-commerce",
    desc: "A pizza ordering platform with React frontend, Django API, cart flow and MongoDB integration.",
    tech: ["React", "Django", "MongoDB"],
    github: "https://pizza24-ga81-git-main-dollyshrivas-projects.vercel.app/",
  },
  {
    title: "Job Portal",
    tag: "Web Application",
    desc: "A recruitment platform concept connecting job seekers and recruiters with a Python chatbot.",
    tech: ["React", "Python", "MongoDB"],
    github: "https://jobportal-vusi.onrender.com/",
  },
  {
    title: "CRM Software",
    tag: "Java Springboot Application",
    desc: "A recruitment platform concept connecting job seekers and recruiters with a Python chatbot.",
    tech: ["React", "SpringBoot", "MySQL"],
    github: "https://crm-software-nine.vercel.app/",
  },
];

function HeroVideo() {
  return (
    <div className="hero-video-wrapper">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hello dolly.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function App() {
  const [typedText, setTypedText] = useState("");
  const typingText = "Hi, I'm Dolly. I create modern web applications, AI-powered tools and interactive experiences.";

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTypedText(typingText.slice(0, index));

      if (index >= typingText.length) {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const revealSections = document.querySelectorAll(
      ".reveal-section, .section, .contact"
    );

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.88;

      revealSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const isVisible =
          rect.top < triggerBottom && rect.bottom > 120;

        section.classList.toggle("is-visible", isVisible);
        section.classList.toggle("is-hidden", !isVisible);
      });
    };

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <div className="site">
      <div className="noise" />

      {/* NAVIGATION */}
      <header className="nav">
        <button
          className="logo"
          onClick={() => scrollTo("home")}
        >
          D<span>.</span>
        </button>

        <nav>
          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("skills")}>
            Skills
          </button>

          <button onClick={() => scrollTo("projects")}>
            Projects
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </nav>

        <a
          className="nav-cta"
          href="mailto:dollyshrivas2005@example.com"
        >
          Hire me ↗
        </a>

         <a
          className="nav-cta"
          href="/Dolly Resume.pdf.pdf"
          target="_blank"
          rel="noreferrer"
        >
          My Resume ↗
        </a>
      </header>

      <main className="page-shell">

        {/* HERO */}
        <section
          id="home"
          className="hero reveal-section"
        >
          <div className="hero-copy">

            <p className="eyebrow">
              WEB DEVELOPER · AI ENTHUSIAST
            </p>

            <h1>
              Building digital
              <br />
              <span>experiences</span>
            </h1>

            <p className="hero-text hero-typewriter" aria-live="polite">
              <span className="typewriter-text">{typedText}</span>
              <span className="typewriter-cursor" aria-hidden="true">|</span>
            </p>

            <div className="hero-actions">
              <button
                className="primary"
                onClick={() => scrollTo("projects")}
              >
                Explore my work ↓
              </button>

              <a
                className="secondary"
                href="mailto:your.email@example.com"
              >
                Let's talk ↗
              </a>
            </div>

            <div className="mini-stats">
              <div>
                <strong>03+</strong>
                <span>Featured projects</span>
              </div>

              <div>
                <strong>JS</strong>
                <span>React ecosystem</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Building with AI</span>
              </div>
            </div>
          </div>

          <div className="hero-canvas">
            <HeroVideo />
          </div>

          <div className="scroll-label">
            SCROLL TO EXPLORE ↓
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="section about"
        >
          <div className="section-label">
            01 / ABOUT
          </div>

          <div className="about-copy">
            <h2 className="about-title">
              <span className="title-line">Curious developer.</span>
              <br />
              <em className="title-line accent-line">Builder at heart.</em>
            </h2>

            <p>
              I'm a B.Tech student and developer focused on
              turning ideas into useful, polished software.
              My work sits between frontend engineering,
              backend APIs, databases and AI.
            </p>

            <p>
              I enjoy learning by building — from ecommerce
              platforms and job portals to ambitious AI
              assistant concepts like AXIS.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="section skills"
        >
          <div className="section-label">
            02 / SKILLS
          </div>

          <div className="skill-grid">
            {[
              [
                "01",
                "React JS",
                "Interactive frontend experiences",
              ],
              [
                "02",
                "JavaScript",
                "Modern web development",
              ],
              [
                "03",
                "Django",
                "Modern web development",
              ],
              [
                "04",
                "Python",
                "Backend & AI development",
              ],
              [
                "05",
                "MongoDB",
                "Database & data modeling",
              ],
              [
                "06",
                "MySQL",
                "Database & data modeling",
              ],
              [
                "07",
                "HTML / CSS",
                "Responsive UI foundations",
              ],
              [
                "08",
                "AI / APIs",
                "Gemini, FastAPI & integrations",
              ],
              [
                "09",
                "Data Structures & Algorithms(Python)",
                "Gemini, FastAPI & integrations",
              ],
            ].map(([n, name, desc]) => (
              <article
                className="skill-card"
                key={name}
              >
                <span>{n}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
                <b>↗</b>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section projects"
        >
          <div className="section-label">
            03 / SELECTED WORK
          </div>

          <div className="projects-head">
            <h2>
              Things I've
              <br />
              <em>built.</em>
            </h2>

            <p>
              Some of my recent development projects
              and experiments.
            </p>
          </div>

          <div className="project-list">
            {projects.map((p, i) => (
              <a
                className="project"
                key={p.title}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title} GitHub repository`}
              >
                <div className="project-number">
                  0{i + 1}
                </div>

                <div className="project-main">
                  <span className="project-tag">
                    {p.tag}
                  </span>

                  <h3>{p.title}</h3>

                  <p>{p.desc}</p>

                  <div className="tech">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-orb">
                  <div>{p.title[0]}</div>
                </div>

                <span className="project-arrow">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="contact"
        >
          <div className="contact-glow" />

          <p className="eyebrow">
            04 / CONTACT
          </p>

          <h2>
            Have an idea?
            <br />
            <em>Let's build it.</em>
          </h2>

          <p>
            I'm open to freelance projects,
            collaborations and interesting ideas.
          </p>

          <a
            className="email-link"
            href="mailto:your.email@example.com"
          >
             ↗dollyshrivas2005@gmail.com
          </a>
          <p href="tel:+919971018840">
            +91 9971018840
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <span>
          © 2026 Dolly 
        </span>

        <span>
          Built with React
        </span>

        <span>
          Available for opportunities
        </span>
      </footer>
    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);