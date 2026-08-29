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

const certifications = [
  "ISC2 SSCP",
  "CompTIA Security+ ce",
  "CompTIA Network+ ce",
  "CompTIA A+ ce",
  "CompTIA Project+ ce",
  "CompTIA IT Operations Specialist",
  "CompTIA Secure Infrastructure Specialist",
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
    available: true,
  },
  {
    title: "Field Service Inventory & Equipment Tracking",
    description:
      "Field service inventory and equipment-tracking application built around real operational workflows, including role-based access, model lookup, QR workflows, audit history, equipment movement, and technician-focused usability.",
    tags: ["Next.js", "TypeScript", "RBAC", "QR Workflows", "Operations"],
    href: "",
    demo: "https://field-service-inventory-showcase.vercel.app/",
    github: "https://github.com/Wheelbc-Virtura/field-service-inventory-showcase",
    status: "Live showcase",
    available: false,
  },
  {
    title: "IT Automation & Support Toolkit",
    description:
      "Support automation and troubleshooting work covering scripting, DNS repair, system checks, backups, documentation, and repeatable operational tasks.",
    tags: ["Python", "PowerShell", "Automation", "Support", "Documentation"],
    href: "",
    github: "",
    status: "Case study in development",
    available: false,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top">
          BW
        </a>

        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            IT Support • Systems • Infrastructure • Automation
          </p>

          <h1>Brian Wheeler</h1>

          <p className="lede">
            IT support and deployment professional combining hands-on technical
            experience with a background in operations leadership, customer
            service, training, and process improvement. I build and support
            systems with a focus on reliability, practical troubleshooting,
            clear documentation, and the people who depend on them.
          </p>

          <div className="actions">
            <a className="button primary" href="#projects">
              View projects
            </a>

            <a
              className="button secondary"
              href="https://github.com/Wheelbc-Virtura"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Focus areas">
          <p className="panel-label">Current focus</p>

          <strong>
            Moving deeper into systems administration, infrastructure, security,
            and automation.
          </strong>

          <div className="mini-grid">
            <span>IT Support & Deployment</span>
            <span>Systems & Infrastructure</span>
            <span>Operations Leadership</span>
            <span>Automation & Documentation</span>
          </div>
        </aside>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects that prove the work</h2>
          <p>
            Each case study focuses on the problem, technical decisions,
            implementation, troubleshooting, and lessons learned—not just the
            finished product.
          </p>
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
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="card-links">
                {project.available ? (
                  <a href={project.href}>View case study →</a>
                ) : (
                  <span className="coming-soon">Case study coming soon</span>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
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
            My strongest work sits at the intersection of end-user support,
            infrastructure, networking, security, documentation, and practical
            automation.
          </p>
        </div>

        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Professional IT Experience</p>
          <h2>Support experience with an infrastructure mindset</h2>

          <p>
            My professional IT work combines customer-facing deployment,
            troubleshooting, networking, security configuration, documentation,
            and internal process improvement.
          </p>
        </div>

        <div className="timeline">
          <article className="experience-card detailed">
            <div>
              <p className="role-date">2024 — Present</p>
              <h3>Client Onboarding Technician</h3>
              <p className="muted">Novatech • Lafayette, Louisiana</p>
            </div>

            <div className="experience-copy">
              <p>
                Configure and deploy enterprise multifunction printer systems
                across Canon, Konica Minolta, Brother, and HP environments,
                integrating hardware with customer networks and business
                workflows.
              </p>

              <ul className="experience-list">
                <li>
                  Configure IP networking, domain connectivity, print drivers,
                  SMTP, scan-to-folder, and related network services.
                </li>
                <li>
                  Troubleshoot hardware, software, connectivity, and
                  configuration problems during build, delivery, remote
                  support, and onsite deployment.
                </li>
                <li>
                  Apply device hardening and security policies to support
                  secure customer environments.
                </li>
                <li>
                  Manage multiple concurrent deployments while maintaining
                  documentation quality and customer requirements.
                </li>
                <li>
                  Train end users on device operation, scanning workflows, and
                  basic troubleshooting.
                </li>
              </ul>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <p className="role-date">2023 — 2024</p>
              <h3>IT Intern</h3>
              <p className="muted">
                Pharma-Safe Industrial Services • Lafayette, Louisiana
              </p>
            </div>

            <div className="experience-copy">
              <p>
                Supported internal IT operations across user support,
                troubleshooting, asset management, documentation, and software
                testing.
              </p>

              <ul className="experience-list">
                <li>
                  Maintained IT asset records to improve hardware and software
                  visibility and accountability.
                </li>
                <li>
                  Documented recurring issues and support procedures to improve
                  consistency and knowledge transfer.
                </li>
                <li>
                  Identified repeat support problems and helped organize
                  information for process improvement.
                </li>
                <li>
                  Tested internal software changes and communicated user
                  feedback and usability issues.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell operations-section">
        <div className="section-heading compact">
          <p className="eyebrow">Operations Background</p>

          <h2>Technical experience built on years of real-world operations</h2>
        </div>

        <div className="operations-copy">
          <p>
            Before transitioning into IT, I built extensive experience across
            hospitality, food service, retail, maintenance, and operational
            leadership. I grew up around my family's motel and restaurant
            businesses, gaining early exposure to housekeeping, maintenance,
            remodeling, accounting, customer service, and day-to-day business
            operations.
          </p>

          <p>
            My later work progressed from frontline restaurant and retail roles
            into shift leadership, dining room and kitchen management, food and
            beverage operations management in Yellowstone National Park, and
            several years as a chef supporting a West Texas workforce camp.
          </p>

          <p>
            That background still shapes how I approach IT: technical systems
            exist to support an operation. Problems have to be solved under
            pressure, priorities have to be triaged, documentation has to be
            usable, and users need clear communication while the technical work
            gets done.
          </p>
        </div>
      </section>

      <section id="credentials" className="section shell credentials-section">
        <div>
          <div className="section-heading compact">
            <p className="eyebrow">Certifications</p>
            <h2>Validated foundations with continued growth</h2>
          </div>

          <div className="credential-list">
            {certifications.map((certification) => (
              <span key={certification}>{certification}</span>
            ))}
          </div>

          <div className="future-credentials">
            <p className="panel-label">Planned / In Progress</p>
            <p>
              Continuing advanced security coursework with CCSP, CySA+, and
              PenTest+ targeted as part of ongoing professional and degree
              development.
            </p>
          </div>
        </div>

        <div className="education-card">
          <p className="eyebrow">Education</p>

          <div className="education-entry">
            <h3>Western Governors University</h3>
            <p>B.S. Cybersecurity & Information Assurance</p>
            <span>In progress • Expected 2027</span>
          </div>

          <div className="education-entry">
            <h3>South Louisiana Community College</h3>
            <p>Associate of Science in Information Technology</p>
            <span>2024 • GPA 3.65</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section shell contact-section">
        <div>
          <p className="eyebrow">Contact</p>

          <h2>Ready for the next step in IT.</h2>

          <p>
            I am targeting opportunities in systems administration,
            infrastructure support, desktop support, Microsoft 365, NOC/support
            engineering, and security-minded IT operations where I can continue
            growing beyond frontline support.
          </p>
        </div>

        <div className="contact-links">
          <a
            className="button primary"
            href="https://github.com/Wheelbc-Virtura"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>

          <a
            className="button secondary"
            href="/Brian-Wheeler-Resume.pdf"
            download
          >
            Download Résumé
          </a>

          <a
            className="button secondary"
            href="mailto:brian.wheeler03@yahoo.com"
          >
            Email me
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <span>Brian Wheeler</span>
        <span>Built with Next.js • Deployed on Vercel</span>
      </footer>
    </main>
  );
}