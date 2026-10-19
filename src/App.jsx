
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

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home" aria-label="Go to home">
          V<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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

      <main>
        <section className="hero" id="home">
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
              assurance, finding defects, validating functionality, and
              helping deliver reliable digital experiences. Explore my
              hands-on testing projects and QA documentation.
            </p>

            <div className="hero-actions">
              <a className="button button-orange" href="#projects">
                EXPLORE MY PROJECTS ↗
              </a>

              <a className="button button-outline" href="#contact">
                CONTACT ME
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Vihini234"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="#contact">Connect with me ↗</a>
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
          <div>
            <strong>04</strong>
            <span>FEATURED PROJECTS</span>
          </div>
          <div>
            <strong>03+</strong>
            <span>TESTING AREAS</span>
          </div>
          <div>
            <strong>12</strong>
            <span>CORE SKILLS</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>CONTINUOUS LEARNING</span>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious by nature.
              <br />
              <span>Quality by choice.</span>
            </h2>
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

            <a
              className="text-link"
              href="https://github.com/Vihini234"
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE MY GITHUB ↗
            </a>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">02 / MY TOOLKIT</p>
              <h2>
                Skills & technologies<span className="accent">.</span>
              </h2>
            </div>
            <p className="muted">
              Tools and techniques used across my testing projects.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{skill}</h3>
                <span className="skill-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                My QA projects<span className="accent">.</span>
              </h2>
            </div>

            <a
              className="text-link"
              href="https://github.com/Vihini234"
              target="_blank"
              rel="noreferrer"
            >
              ALL REPOSITORIES ↗
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / PROJECT</span>
                  <span>↗</span>
                </div>

                <p className="project-type">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="tag-list">
                  {project.tools.map((tool) => (
                    <span className="tag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  VIEW REPOSITORY ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="education section" id="education">
          <div>
            <p className="eyebrow">04 / EDUCATION</p>
            <h2>
              Learning & growing<span className="accent">.</span>
            </h2>
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

        <section className="contact section" id="contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>

          <h2>
            Let's build
            <br />
            <span>better software.</span>
          </h2>

          <p className="contact-copy">
            I'm interested in QA internship opportunities, testing
            collaborations, and connecting with other people in tech.
          </p>

          <div className="hero-actions contact-actions">
            <a
              className="button button-orange"
              href="https://github.com/Vihini234"
              target="_blank"
              rel="noreferrer"
            >
              VISIT MY GITHUB ↗
            </a>

            <a
              className="button button-outline"
              href="mailto:rvihini@gmail.com"
            >
              EMAIL ME ↗
            </a>
          </div>

          <p className="contact-note">
            Feel free to contact me at rvihini@gmail.com.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          V<span>.</span>
        </a>
        <p>Designed with curiosity. Built for quality.</p>
        <a
          href="https://github.com/Vihini234"
          target="_blank"
          rel="noreferrer"
        >
          © 2026 Vihini Ranasingha
        </a>
      </footer>
    </div>
  );
}

export default App;
