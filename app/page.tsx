const skills = [
  "Windows & Linux Support",
  "Proxmox Virtualization",
  "Docker",
  "VLANs & Network Segmentation",
  "DNS & Reverse Proxying",
  "ZFS & Storage",
  "Microsoft 365",
  "Python / PowerShell",
  "Technical Documentation",
  "Troubleshooting & Escalation",
];

const projects = [
  {
    title: "Segmented Self-Hosted Homelab",
    description:
      "Designed and maintain a security-focused Proxmox and Docker environment with trust-based VLAN segmentation, internal DNS, reverse proxy routing, monitoring, remote access, and ZFS-backed storage.",
    tags: ["Proxmox", "Linux", "Docker", "VLANs", "DNS", "ZFS", "Monitoring"],
    href: "/projects/homelab",
    github: "https://github.com/Wheelbc-Virtura/homelab",
    status: "Featured case study",
  },
  {
    title: "Green Parts Inventory",
    description:
      "Internal inventory and equipment-tracking application built around real operational needs, including role-based access, model lookup, QR workflows, audit history, and technician-focused usability.",
    tags: ["Next.js", "TypeScript", "RBAC", "QR Workflows", "Operations"],
    href: "#contact",
    github: "",
    status: "Case study coming next",
  },
  {
    title: "IT Automation & Support Toolkit",
    description:
      "A growing collection of support automation and troubleshooting work covering scripting, DNS repair, system checks, backups, and repeatable operational tasks.",
    tags: ["Python", "PowerShell", "Automation", "Support", "Documentation"],
    href: "#contact",
    github: "",
    status: "Case study in progress",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top">BW</a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">IT Support • Systems • Infrastructure • Automation</p>
          <h1>Brian Wheeler</h1>
          <p className="lede">
            IT professional focused on solving real support problems, building reliable infrastructure,
            and automating repetitive work. My portfolio centers on systems I have designed, deployed,
            documented, and maintained—not tutorial demos.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">View projects</a>
            <a className="button secondary" href="https://github.com/Wheelbc-Virtura" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Focus areas">
          <p className="panel-label">Current focus</p>
          <strong>Moving deeper into systems administration, infrastructure, and automation.</strong>
          <div className="mini-grid">
            <span>3+ years IT</span>
            <span>Hands-on homelab</span>
            <span>Support + infrastructure</span>
            <span>Business-built tools</span>
          </div>
        </aside>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects that prove the work</h2>
          <p>Each project is framed around the problem, technical decisions, implementation, troubleshooting, and result.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="card-topline">
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="card-links">
                <a href={project.href}>View project →</a>
                {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Capabilities</p>
          <h2>Technical skills grounded in hands-on work</h2>
          <p>
            My strongest work sits at the intersection of end-user support, infrastructure, networking,
            documentation, and practical automation.
          </p>
        </div>
        <div className="skill-list">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="experience" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Support experience with an infrastructure mindset</h2>
        </div>
        <div className="experience-card">
          <div>
            <h3>IT Support Professional</h3>
            <p className="muted">Technical support, device setup, troubleshooting, user communication, process improvement</p>
          </div>
          <div className="experience-copy">
            <p>
              I work across remote and hands-on support scenarios, helping users resolve technical issues while improving
              repeatability through documentation, checklists, training, and internal tools.
            </p>
            <p>
              My earlier hospitality background strengthened the parts of IT support that are easy to underestimate:
              communicating under pressure, setting expectations, triaging competing priorities, and keeping the user experience
              in view while solving the technical problem.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section shell contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to the next step in IT.</h2>
          <p>
            I am targeting opportunities in desktop support, systems administration, infrastructure,
            Microsoft 365 support, NOC/support engineering, and automation-focused IT roles.
          </p>
        </div>
        <div className="contact-links">
          <a className="button primary" href="https://github.com/Wheelbc-Virtura" target="_blank" rel="noreferrer">View GitHub</a>
          <a className="button secondary" href="mailto:brian.wheeler03@yahoo.com">Email me</a>
        </div>
      </section>

      <footer className="footer shell">
        <span>Brian Wheeler</span>
        <span>Built with Next.js • Deployed on Vercel</span>
      </footer>
    </main>
  );
}
