import { type ReactNode } from "react";
import {
  experienceStartYear,
  techStack,
  gradientPresets,
  navLinks,
  projects,
} from "./content";
import { ColorBends } from "./components/ColorBends";

const iconSlugs: Record<string, string> = {
  HTML: "html5",
  CSS: "csswizardry",
  "Next JS": "nextdotjs",
  "Chakra UI": "chakraui",
  "Node JS": "nodedotjs",
  "Express/KOA": "express",
  "Git CD/CI": "git",
};

const iconForSkill = (skill: string) => {
  const slug =
    iconSlugs[skill] ??
    skill
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  return `https://cdn.simpleicons.org/${slug}`;
};

const Brand = () => (
  <div className="brand">
    <img
      className="brand-photo"
      src="/assets/mypic.jpeg"
      alt="Giacomo portrait"
    />
    <div className="brand-text">
      <span className="brand-name">Giacomo Impoco</span>
    </div>
  </div>
);

const NavBar = () => (
  <div className="nav-pill">
    <Brand />
    <div className="nav-links">
      {navLinks.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const Hero = ({ experienceYears }: { experienceYears: number }) => (
  <section id="hero" className="hero">
    <div className="eyebrow">
      Full-Stack Developer · {experienceYears}+ years
    </div>
    <h1>
      Building experiences with{" "}
      <span className="highlight">clarity and curiosity</span>
    </h1>
    <p className="lead">
      Barcelona-based developer creating modern, performant products with
      thoughtful UX and clean engineering.
    </p>
    <div className="chip-row"></div>
  </section>
);

const Card = ({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) => (
  <section id={id} className="card">
    <div className="card-header">
      <h3>{title}</h3>
    </div>
    <div className="card-body">{children}</div>
  </section>
);

const About = () => (
  <section id="about" className="feature-card about-panel">
    <div className="feature-header">
      <span className="pill-label">Story so far</span>
    </div>
    <div className="about-body">
      <div className="glow-accent" aria-hidden="true" />
      <div className="about-copy">
        <p>
          Originally from Italy, I moved out of the country when I was 17 and
          I've been soaking up London life for almost 7 years. I kicked off my
          career in customer service, starting as a waiter and chef in a
          restaurant, and then working my way up to delivering customer support
          to one of the UK's biggest companies, John Lewis.
        </p>
        <p>
          All along, I had this itch to dive into software development, and here
          I am on that journey to become a full-fledged developer. In my free
          time, I love diving into tutorials and keeping up with the latest tech
          trends. I'm like a sponge for learning, always staying in the loop
          with what's happening in the tech world. I aspire to craft innovative
          solutions and create my own impactful piece in the tech landscape.
          When it comes to work, I thrive in fast-paced, teamwork-heavy setups.
          I'm your go-to person for delivering results on time. Outside the
          coding realm, catch me on long walks, biking through new spots, and
          jamming on the piano.
        </p>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [...techStack];
  return (
    <section id="experience" className="feature-card stack-panel">
      <div className="feature-header">
        <span className="pill-label">Tools in my stack</span>
      </div>
      <div className="tech-grid">
        {skills.map((skill) => (
          <div key={skill} className="tech-card">
            <div className="tech-icon">
              <img src={iconForSkill(skill)} alt={`${skill} icon`} />
            </div>
            <div className="tech-label">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => (
  <Card id="projects" title="Projects">
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <img src={project.image} alt={project.title} />
          <div className="project-meta">
            <h4>{project.title}</h4>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Card>
);

const App = () => {
  const experienceYears = new Date().getFullYear() - experienceStartYear;
  const activePreset = gradientPresets[1];

  return (
    <div className="page">
      <ColorBends
        className="color-bends-overlay"
        style={{ position: "fixed", inset: 0 }}
        colors={activePreset.colors}
        rotation={activePreset.rotation}
        speed={activePreset.speed}
        warpStrength={activePreset.warpStrength}
        frequency={activePreset.frequency}
        mouseInfluence={1.6}
        parallax={0.4}
        noise={0.08}
        autoRotate={0.6}
      />
      <div className="frame">
        <header className="top-bar">
          <NavBar />
        </header>
        <main className="content">
          <Hero experienceYears={experienceYears} />

          <section className="stacked-sections">
            <About />
            <Skills />
          </section>
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default App;
