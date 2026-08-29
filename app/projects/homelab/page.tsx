export default function HomelabProject() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="/">BW</a>
        <nav aria-label="Project navigation">
          <a href="/">Home</a>
          <a href="https://github.com/Wheelbc-Virtura/homelab" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section className="project-hero shell">
        <p className="eyebrow">Infrastructure case study</p>
        <h1>Segmented Self-Hosted Homelab</h1>
        <p className="lede">
          A security-focused Proxmox and Docker environment designed around trust zones, reliable internal services,
          safe administration, and hands-on learning across virtualization, networking, DNS, storage, and monitoring.
        </p>
        <div className="tags large-tags">
          {[
            "Proxmox", "Linux", "Docker", "VLANs", "ACLs", "DNS", "Reverse Proxy", "ZFS", "Monitoring"
          ].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="section shell case-grid">
        <article>
          <p className="eyebrow">Problem</p>
          <h2>One home network had to serve very different trust levels.</h2>
          <p>
            Management interfaces, family devices, guests, IoT hardware, lab systems, and gaming workloads should not all share
            the same level of access. I wanted an environment where experimentation would not put management systems or household
            devices at unnecessary risk.
          </p>
        </article>
        <article>
          <p className="eyebrow">My role</p>
          <h2>Designed, deployed, documented, and maintained the environment.</h2>
          <p>
            I planned the segmentation model, configured the virtualization and service layers, worked through routing and DNS
            behavior, documented public-safe architecture, and continue to maintain the environment as it evolves.
          </p>
        </article>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Architecture</p>
          <h2>Trust zones first, services second</h2>
          <p>The network is organized by purpose and trust level rather than treating every device as equivalent.</p>
        </div>
        <div className="zone-grid">
          {[
            ["Management / Trusted", "Administrative access to infrastructure, controllers, hypervisors, and service administration paths."],
            ["Private Family", "Household access to approved internal services such as media, files, and shared tools."],
            ["Guest", "Internet access without lateral access to internal home resources."],
            ["IoT", "Restricted smart-device network with minimal internal reachability."],
            ["Lab", "Isolated space for testing systems and experiments without affecting trusted workloads."],
            ["Gaming", "Internet-focused network for gaming devices without exposing management planes."],
          ].map(([title, text]) => (
            <article className="zone-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Services</p>
          <h2>Self-hosted services with clear operational roles</h2>
        </div>
        <div className="service-list">
          <div><strong>Virtualization</strong><span>Proxmox hosting separated VM workloads</span></div>
          <div><strong>Containers</strong><span>Docker services with Portainer-style administration</span></div>
          <div><strong>DNS</strong><span>Internal and split DNS for predictable service access</span></div>
          <div><strong>Reverse proxy</strong><span>Controlled internal routing and HTTPS certificate workflows</span></div>
          <div><strong>Monitoring</strong><span>Availability checks and alerting before users notice a failure</span></div>
          <div><strong>Storage</strong><span>ZFS-backed storage and shared household data concepts</span></div>
          <div><strong>Remote access</strong><span>Private VPN-style entry instead of exposing admin interfaces publicly</span></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Troubleshooting</p>
          <h2>Lessons came from real failure modes</h2>
        </div>
        <div className="lesson-list">
          <p><strong>VLAN configuration is end-to-end.</strong> Native VLAN and PVID choices can break the design even when the switch configuration looks correct in isolation.</p>
          <p><strong>DNS and ACLs have to be designed together.</strong> Name resolution can appear healthy while access policy makes the service feel unreliable.</p>
          <p><strong>Controller software depends on host networking.</strong> VPN adapters, firewall profiles, and desktop-hosted controllers can create behavior that looks like an infrastructure fault.</p>
          <p><strong>Backups reduce recovery time.</strong> Taking backups before major changes turns risky experimentation into a manageable rollback problem.</p>
        </div>
      </section>

      <section className="section shell contact-section">
        <div>
          <p className="eyebrow">Deep dive</p>
          <h2>Full documentation lives in GitHub.</h2>
          <p>The repository contains sanitized architecture documentation, diagrams, examples, and security-sharing guidance.</p>
        </div>
        <div className="contact-links">
          <a className="button primary" href="https://github.com/Wheelbc-Virtura/homelab" target="_blank" rel="noreferrer">Open repository</a>
          <a className="button secondary" href="/">Back to portfolio</a>
        </div>
      </section>

      <footer className="footer shell">
        <span>Brian Wheeler</span>
        <span>Infrastructure case study</span>
      </footer>
    </main>
  );
}
