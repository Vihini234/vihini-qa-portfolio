import { NavLink, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "UI AUTOMATION",
    title: "Playwright Automation Portfolio",
    description:
      "UI automation tests built with Playwright and TypeScript, including form validation, dynamic interactions, and cross-browser-ready configuration.",
    tools: ["Playwright", "TypeScript", "Automation"],
    url: "https://github.com/Vihini234/playwright-qa-automation-portfolio",
  },
  {
    number: "02",
    category: "DATABASE TESTING",
    title: "SQL Test Data Validation",
    description:
      "SQL queries to validate data integrity, missing fields, calculation mismatches, and relationships between database tables.",
    tools: ["SQL", "SQLite", "Data Validation"],
    url: "https://github.com/Vihini234/sql-test-data-validation",
  },
  {
    number: "03",
    category: "API TESTING",
    title: "RESTful Booker API Test Suite",
    description:
      "Postman API tests covering CRUD operations, authentication, request chaining, response assertions, and negative scenarios.",
    tools: ["Postman", "REST API", "Newman"],
    url: "https://github.com/Vihini234/restful-booker-api-tests",
  },
  {
    number: "04",
    category: "MANUAL TESTING",
    title: "QA Portfolio — SauceDemo",
    description:
      "Manual testing documentation including test cases, defect reports, severity and priority analysis, and exploratory testing.",
    tools: ["Manual QA", "Test Cases", "Bug Reports"],
    url: "https://github.com/Vihini234/QA-Portfolio",
  },
];

const skills = [
  "Manual Testing",
  "Test Case Design",
  "Bug Reporting",
  "Playwright",
  "API Testing",
  "Postman",
  "SQL Testing",
  "Git & GitHub",
  "Regression Testing",
  "Functional Testing",
  "TypeScript Basics",
  "Agile / Scrum",
];

function Header() {
  const links = [
    { label: "Home", to: "/", end: true },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
  ];

  return (
    <header className="navbar">
      <Link className="logo" to="/" aria-label="Go to home">
        V<span>.</span>
      </Link>

      <nav aria-label="Main navigation">
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a
        className="nav-button"
        href="https://github.com/Vihini234"
        target="_blank"
        rel="noreferrer"
      >
        GITHUB ↗
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Link className="logo" to="/">
        V<span>.</span>
      </Link>
      <p>Designed with curiosity. Built for quality.</p>
      <a
        href="https://github.com/Vihini234"
        target="_blank"
        rel="noreferrer"
      >
        © 2026 Vihini Ranasingha
      </a>
    </footer>
  );
}

function PageHeading({ eyebrow, children, description }) {
  return (
    <div className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{children}</h1>
      {description && <p className="page-description">{description}</p>}
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>

          <h1>
            Vihini
            <br />
            <span>Ranasingha</span>
            <span className="accent">.</span>
          </h1>

          <h2>QA Engineer | Software Testing Enthusiast</h2>

          <p className="hero-description">
            I'm an IT undergraduate passionate about software quality
            assurance, finding defects, validating functionality, and helping
            deliver reliable digital experiences. Explore my hands-on testing
            projects and QA documentation.
          </p>

          <div className="hero-actions">
            <Link className="button button-orange" to="/projects">
              EXPLORE MY PROJECTS ↗
            </Link>
            <a className="button button-outline" href="mailto:rvihini@gmail.com">
              CONTACT ME
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Vihini234" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="mailto:rvihini@gmail.com">Connect with me ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-backdrop" />
          <div className="portrait-frame">
            <img
              src="/my-photo.jpeg"
              alt="Vihini Ranasingha"
              className="hero-photo"
            />
            <div className="photo-label">
              <span className="status-dot" />
              SOFTWARE QUALITY ASSURANCE
            </div>
          </div>

          <div className="floating-card">
            <span className="floating-icon">✓</span>
            <div>
              <strong>Quality first</strong>
              <small>Think · Test · Improve</small>
            </div>
          </div>
          <p className="visual-caption">MY QA JOURNEY / 2026</p>
        </div>

        <span className="hero-index">PORTFOLIO — 2026</span>
      </section>

      <section className="stats" aria-label="Portfolio highlights">
        <div><strong>04</strong><span>FEATURED PROJECTS</span></div>
        <div><strong>03+</strong><span>TESTING AREAS</span></div>
        <div><strong>12</strong><span>CORE SKILLS</span></div>
        <div><strong>∞</strong><span>CONTINUOUS LEARNING</span></div>
      </section>

      <section className="home-next section">
        <p className="eyebrow">EXPLORE MY WORK</p>
        <h2>Quality is built one test at a time<span className="accent">.</span></h2>
        <div className="quick-links">
          <Link className="quick-link-card" to="/skills">
            <span>01 / TOOLKIT</span><strong>Skills & technologies ↗</strong>
          </Link>
          <Link className="quick-link-card" to="/projects">
            <span>02 / SELECTED WORK</span><strong>QA projects ↗</strong>
          </Link>
          <Link className="quick-link-card" to="/about">
            <span>03 / MY STORY</span><strong>About me ↗</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

function SkillsPage() {
  return (
    <main className="page-main">
      <section className="section page-content">
        <PageHeading
          eyebrow="01 / MY TOOLKIT"
          description="Tools and techniques used across my testing projects."
        >
          Skills & technologies<span className="accent">.</span>
        </PageHeading>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill}>
              <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{skill}</h3>
              <span className="skill-arrow">↗</span>
            </article>
          ))}
        </div>

        <div className="page-cta">
          <p>Want to see these skills applied in practice?</p>
          <Link className="button button-orange" to="/projects">VIEW MY PROJECTS ↗</Link>
        </div>
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="page-main">
      <section className="section page-content">
        <PageHeading
          eyebrow="02 / SELECTED WORK"
          description="A selection of practical projects demonstrating my approach to software quality assurance."
        >
          My QA projects<span className="accent">.</span>
        </PageHeading>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number} / PROJECT</span><span>↗</span>
              </div>
              <p className="project-type">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
              </div>
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                VIEW REPOSITORY ↗
              </a>
            </article>
          ))}
        </div>

        <div className="page-cta">
          <p>Explore all my repositories on GitHub.</p>
          <a className="button button-outline" href="https://github.com/Vihini234" target="_blank" rel="noreferrer">
            ALL REPOSITORIES ↗
          </a>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-main">
      <section className="section page-content">
        <PageHeading
          eyebrow="03 / ABOUT ME"
          description="A little about my background, learning journey, and interest in software quality."
        >
          Curious by nature.<br /><span className="accent">Quality by choice.</span>
        </PageHeading>

        <div className="about about-page-layout">
          <div className="about-photo-wrap">
            <img src="/my-photo.jpeg" alt="Vihini Ranasingha" className="about-photo" />
          </div>
          <div className="about-copy">
            <p>
              I'm Vihini Ranasingha, an IT undergraduate building practical
              skills in software quality assurance and testing. I enjoy
              analysing requirements, creating test scenarios, validating
              application behaviour, and documenting defects clearly.
            </p>
            <p>
              My projects cover UI automation with Playwright, database
              validation with SQL, REST API testing with Postman, and manual
              testing documentation.
            </p>
            <a className="text-link" href="https://github.com/Vihini234" target="_blank" rel="noreferrer">
              EXPLORE MY GITHUB ↗
            </a>
          </div>
        </div>

        <section className="education about-education">
          <div>
            <p className="eyebrow">EDUCATION</p>
            <h2>Learning & growing<span className="accent">.</span></h2>
          </div>
          <article className="education-card">
            <span className="education-year">UNDERGRADUATE</span>
            <h3>Industrial Information Technology</h3>
            <p>Uva Wellassa University of Sri Lanka</p>
            <p className="muted">
              Developing knowledge in IT, software development, databases,
              and software quality assurance.
            </p>
          </article>
        </section>

        <section className="contact about-contact">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's build<br /><span>better software.</span></h2>
          <p className="contact-copy">
            I'm interested in QA internship opportunities, testing collaborations,
            and connecting with other people in tech.
          </p>
          <div className="hero-actions contact-actions">
            <a className="button button-orange" href="mailto:rvihini@gmail.com">EMAIL ME ↗</a>
            <a className="button button-outline" href="https://github.com/Vihini234" target="_blank" rel="noreferrer">
              VISIT MY GITHUB ↗
            </a>
          </div>
          <p className="contact-note">Feel free to contact me at rvihini@gmail.com.</p>
        </section>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
