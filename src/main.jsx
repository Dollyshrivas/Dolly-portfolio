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
  const [contactText, setContactText] = useState("");
  const [contactStarted, setContactStarted] = useState(false);
  const typingText = "Hi, I'm Dolly. I create modern web applications, AI-powered tools and interactive experiences.";
  const contactTypingText = "Have an idea? Let's talk.";

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
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    let observer;

    try {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setContactStarted(true);
            }
          });
        },
        { threshold: 0.35 }
      );

      observer.observe(contactSection);
    } catch (error) {
      setContactStarted(true);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!contactStarted || contactText === contactTypingText) return;

    let index = contactText.length;
    const timer = setInterval(() => {
      index += 1;
      const nextText = contactTypingText.slice(0, index);
      setContactText(nextText);

      if (index >= contactTypingText.length) {
        clearInterval(timer);
      }
    }, 45);

    return () => clearInterval(timer);
  }, [contactStarted, contactText]);

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

          <button onClick={() => scrollTo("certificates")}>
            Certificates
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </nav>

        <a
          className="nav-cta"
          href="mailto:dollyshrivas2005@gmail.com"
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
              Build Digital 
              <br />
              <span>Experiences</span>
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
                <strong>JS/Django</strong>
                <span>React and Django ecosystem</span>
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
            03 / MY WORK
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

        {/* CERTIFICATES */}
        <section
          id="certificates"
          className="section certificates"
        >
          <div className="section-label">
            04 / CERTIFICATES
          </div>

          <div className="certificates-content">
            <div className="projects-head certificates-head">
              <h2>
                Learning,
                <br />
                <em>built into action.</em>
              </h2>
            </div>

            <div className="certificate-list">
              

              <article className="certificate-card primary-certificate-card">
                <div className="certificate-header">
                  <span className="certificate-year">2025-2026</span>
                  <span className="certificate-badge">Certified</span>
                </div>

                <h3>Web Development</h3>
                <p>Focused on interactive web applications and modern development practices.</p>

                <div className="certificate-footer">
                  <span className="certificate-issued">Verified achievement</span>

                  <a
                    className="certificate-link"
                    href="/DOLLY_CERTIFICATE.pdf"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Web Development certificate PDF"
                  >
                    View PDF ↗
                  </a>
                </div>
              </article>
            </div>
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

          <h2 className="contact-heading" aria-live="polite">
            <span className="contact-typewriter-text">{contactText}</span>
            <span className="typewriter-cursor" aria-hidden="true">|</span>
          </h2>

          <p>
            I'm open to freelance projects,
            collaborations and interesting ideas.
          </p>

          <a
            className="email-link"
            href="mailto:your.email@gmail.com"
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
          ©2026 Dolly
        </span>

        <div className="footer-links" aria-label="Social links">
          <a
            href="https://github.com/Dollyshrivas"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.24-.02-2.25-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.72.08-.72 1.19.08 1.82 1.23 1.82 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.04.14 2.99.41 2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.62-5.47 5.91.43.37.81 1.1.81 2.23 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/dolly-shrivas-183a79310/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="7.25" y="10.25" width="2.2" height="6.5" rx="0.8" fill="currentColor"/>
              <rect x="7.25" y="6.8" width="2.2" height="2.2" rx="0.7" fill="currentColor"/>
              <path d="M11.6 16.75V10.25h2.2v1.42c.54-.9 1.78-1.82 3.6-1.82 1.92 0 2.75 1.18 2.75 3.4v3.5h-2.2v-3.2c0-1.2-.18-1.96-1.2-1.96s-1.5 1-1.5 2.22v2.94h-2.2Z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <span>
          Made with ❤️ by Dolly
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
