
import "./App.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Java", "SQL"];

const projects = [
  {
    number: "01",
    title: "Emergency Communication System",
    type: "IoT · Academic Project",
    description:
      "An offline emergency communication prototype using ESP32, LoRa and GPS to send SOS information when regular networks are unavailable.",
    tags: ["ESP32", "LoRa", "GPS"],
    status: "Academic project",
  },
  {
    number: "02",
    title: "Uniform Selling Website",
    type: "Web Development",
    description:
      "A website concept for browsing and presenting uniform products, with a focus on a clear layout and a simple user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Project work",
  },
  {
    number: "03",
    title: "Job Portal",
    type: "Full Stack Development",
    description:
      "A job portal project exploring how frontend pages, backend APIs and a database work together.",
    tags: ["React", "Java", "Spring Boot"],
    status: "Learning project",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">rutuja<span>.</span></a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M RUTUJA BHUSARI</p>

            <h1>
              Learning, building,
              <br />
              and finding my way
              <br />
              <span>in tech.</span>
            </h1>

            <p className="intro">
              I'm a Computer Science student at Gh. Raisoni,
              interested in web development and building useful
              things with code. I'm learning something new with
              every project.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                See my projects ↗
              </a>
              <a className="text-link" href="#contact">
                Let's connect
              </a>
            </div>

            <p className="small-note">
              Currently exploring frontend and full-stack development.
            </p>
          </div>

          <div className="photo-area">
            <div className="photo-frame">
              <img
                src="/linkedin_profile_photo.jpg.jpeg"
                alt="Rutuja Bhusari"
                className="profile-photo"
              />
            </div>
            <p className="photo-caption">a little bit of me ♡</p>
          </div>
        </section>

        <section className="about section" id="about">
          <p className="eyebrow">A LITTLE INTRODUCTION</p>
          <h2>About me</h2>

          <div className="about-content">
            <p>
              I'm pursuing my B.Tech in Computer Science at Gh.
              Raisoni, Amravati. I enjoy understanding how websites
              work and turning what I learn into small, practical
              projects.
            </p>
            <p>
              Right now, I'm strengthening my programming
              fundamentals, learning full-stack technologies and
              preparing for internship opportunities. I may still
              be learning, but I'm happy to keep experimenting,
              solving problems and improving my work.
            </p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <p className="eyebrow">WHAT I'M LEARNING</p>
          <h2>My skills & tools</h2>
          <p className="section-intro">
            The technologies I'm exploring as I grow as a developer.
          </p>

          <div className="skill-list">
            {skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <p className="eyebrow">THINGS I'VE BEEN WORKING ON</p>
          <h2>Selected projects</h2>
          <p className="section-intro">
            A few projects from my learning journey.
          </p>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <p className="project-status">{project.status}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Let's talk.</h2>
          <p>
            I'm looking forward to learning from real projects,
            meeting other developers and finding an internship
            where I can grow.
          </p>

          
<div className="social-links">
  <a href="mailto:rutubhusari7@gmail.com">
    Email me ↗
  </a>

  <a href="tel:+918668419430">
    Call me ↗
  </a>

  <a
    href="https://linkedin.com/in/rutuja-bhusari-b5b024269"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/rutujabhusari07-wq"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>
</div>

<p className="contact-note">
  Nagpur, Maharashtra
</p>
</section>

    </main>

      <footer className="footer">
        <a className="logo" href="#home">rutuja<span>.</span></a>
        <p>Made with care</p>
        <p>© {new Date().getFullYear()} Rutuja Bhusari</p>
      </footer>
    </div>
  );
}

export default App;
