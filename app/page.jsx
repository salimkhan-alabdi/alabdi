import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { geistMono, montserratAlternates } from "./fonts";
import dashboardScreen from "./dashboard.png";
import storeScreen from "./store.png";
import {
  faCss3Alt,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faXTwitter,
  faTelegram,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const skills = ["WEB", "PROGRAMMING", "DEVELOPMENT", "JAVASCRIPT", "CSS", "FIGMA", "GIT", "HTML"];

const iconMap = {
  html: faHtml5,
  css: faCss3Alt,
  figma: faFigma,
  js: faJs,
  github: faGithub,
  linkedin: faLinkedin,
  instagram: faInstagram,
  email: faEnvelope,
  x: faXTwitter,
  tg: faTelegram,
  rjs: faReact
};

const heroIcons = [
  {label:"ReactJS",icon: iconMap.rjs},
  { label: "HTML5", icon: iconMap.html },
  { label: "CSS3", icon: iconMap.css },
  { label: "Figma", icon: iconMap.figma },
  { label: "JavaScript", icon: iconMap.js },
  { label: "Git", icon: iconMap.github },
];

const experience = [
  {
    date: "Jun 2025-Apr 2026",
    role: "Frontend Course | Ustudy by Uzinfocom",
    items: [
      "Learned modern frontend development with HTML, CSS, JavaScript, React and Next.js.",
      "Built responsive web applications and UI components.",
      "Worked on individual and group projects.",
      "Practiced API integration, component-based architecture and responsive design.",
    ],
  },
  
  {
    date: "Mar 2026",
    role: "Frontend Developer — Creator Platform",
    items: [
      "Collaborated in a team to build a creator monetization platform inspired by Stan Store and Gumroad.",
      "Built responsive user interfaces and creator-focused pages.",
      "Worked on modern UI/UX and reusable frontend architecture.",
      "Implemented responsive layouts and component-based development.",
    ],
  },
  
  {
    date: "Dec 2025",
    role: "Frontend Developer — Sneakers E-commerce Store",
    items: [
      "Built a sneakers e-commerce platform with frontend integration to backend APIs.",
      "Integrated REST API powered by Python Django REST Framework (DRF).",
      "Developed product pages, filtering and responsive UI.",
      "Focused on performance and clean user experience.",
    ],
  },
  {
    date: "Oct 2025",
    role: "Frontend Developer — Dashboard Project (Team Project)",
    items: [
      "Collaborated with a team to build a responsive dashboard application.",
      "Developed UI components and dashboard pages using React / Next.js.",
      "Worked with data visualization, reusable components and responsive design.",
      "Collaborated with teammates using Git/GitHub.",
    ],
  },
];

const contacts = [
  { label: "X", icon: iconMap.x , link:"https://x.com/SalimkhanAlabdi"},
  { label: "Telegram", icon: iconMap.tg ,link:"https://t.me/salimkhan_alabdi"},
  { label: "GitHub", icon: iconMap.github ,link:"https://github.com/salimkhan-alabdi"},
  { label: "E-mail", icon: iconMap.email ,link:"mailto:salimkhanalabdi@gmail.com"},
];

const projects = [
  {
    number: "01",
    title: "Creator Platform",
    type: "Link-in-bio Store",
    text: 'Store is an all-in-one "link-in-bio" store specifically designed for content creators to monetize their audience directly from social media.',
    link: "https://stanstore-three.vercel.app/dashboard",
    image: storeScreen,
    accent: "cyan",
  },
  {
    number: "02",
    title: "Dashboard Project",
    type: "Web Dashboard",
    text: "Responsive dashboard interface with profile management, organized navigation and clean account-focused UI components.",
    link: "https://dashboard-one-ashy-16.vercel.app",
    image: dashboardScreen,
    accent: "mint",
  },
];

function SectionTitle({ children }) {
  return (
    <h2 className="section-title">
      {children}
      <span>.</span>
    </h2>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className={`${montserratAlternates.className} logo`} href="#home" aria-label="Dev portfolio home">
          alabdi<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a className="active" href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="code-frame" aria-hidden="true">
          <span className="code-mark">&lt;/&gt;</span>
        </div>
        <div className="hero-copy">
          <h1>Hi, I&apos;m <span className="name">Salimkhan Alabdi</span>.</h1>
          <p>Frontend Dev</p>
          <div className="tech-icons" aria-label="Frontend technologies">
            {heroIcons.map((item) => (
              <span key={item.label} title={item.label}>
                <FontAwesomeIcon icon={item.icon} />
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Skills list">
        <div>
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>
              {skill}
              <b>/</b>
            </span>
          ))}
        </div>
      </div>

      <section className="about section" id="about">
        <SectionTitle>About</SectionTitle>
        <div className="about-grid">
          <div className="portrait" aria-hidden="true" />
          <div className="slash" aria-hidden="true">/</div>
          <div className="about-copy">
            <p>Hi, I’m a Junior Frontend Developer focused on building modern and responsive web applications.
I work with React, Next.js, JavaScript, HTML, and CSS.
After completing frontend courses, I continue improving my skills by building projects and learning modern web development practices.
I’m currently looking for opportunities to grow as a developer and contribute to real-world projects.</p></div>
        </div>
      </section>

      <section className="section" id="experience">
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline">
          {experience.map((item) => (
            <article className="experience-item" key={item.date}>
              <time>{item.date}</time>
              <div>
                <h3>{item.role}</h3>
                {item.items ? (
                  <ul>
                    {item.items.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <SectionTitle>Projects</SectionTitle>
        <div className="project-strip">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta">
                <div>
                  <h3>
                    {project.link ? (
                      <a className="project-title-link" href={project.link} target="_blank" rel="noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p>{project.type}</p>
                </div>
                <span className={`${geistMono.className} project-number`}>{project.number}</span>
              </div>
              <div className={`project-preview preview-${project.accent}`}>
                {project.image ? (
                  <a className="project-screen-link" href={project.link} target="_blank" rel="noreferrer">
                    <Image
                      className="project-screen"
                      src={project.image}
                      alt={`${project.title} dashboard screen`}
                      sizes="(max-width: 900px) calc(100vw - 84px), 470px"
                      placeholder="blur"
                    />
                  </a>
                ) : (
                  <div className="preview-window" aria-hidden="true">
                    <div className="preview-nav">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="preview-hero">
                      <strong>{project.title}</strong>
                      <small>{project.text}</small>
                    </div>
                    <div className="preview-grid">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                )}
              </div>
              <p className="project-copy">{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <SectionTitle>Contact</SectionTitle>
        <p>Contact me or follow my social media</p>
        <div className="contact-grid">
          {contacts.map((contact) => (
            <a href={contact.link} target="_blank" key={contact.label}>
              <span className="contact-icon">
                <FontAwesomeIcon icon={contact.icon} />
              </span>
              {contact.label}
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <footer>© 2026 | Salimkhan Alabdi</footer>
    </main>
  );
}
