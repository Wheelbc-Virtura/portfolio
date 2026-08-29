export default function FieldServiceInventoryCaseStudy() {
  return (
    <main>
      <section className="case-study-hero shell">
        <p className="eyebrow">Application • Operations • Workflow Design</p>

        <h1>Field Service Inventory & Equipment Tracking System</h1>

        <p className="lede">
          A field-service operations application designed around real inventory,
          equipment-tracking, technician, and audit workflows. The public version
          is a sanitized showcase that preserves the core product experience
          while using deterministic demo data instead of production systems.
        </p>

        <div className="actions">
          <a
            className="button primary"
            href="https://field-service-inventory-showcase.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            View live demo ↗
          </a>

          <a
            className="button secondary"
            href="https://github.com/Wheelbc-Virtura/field-service-inventory-showcase"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub ↗
          </a>

          <a className="button secondary" href="/#projects">
            Back to projects
          </a>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">The Problem</p>
          <h2>Turning operational friction into a structured system</h2>
        </div>

        <div className="case-study-copy">
          <p>
            Field-service teams depend on accurate information about equipment,
            compatible parts, storage locations, technician activity, and asset
            movement. When that information is fragmented or difficult to search,
            routine work becomes slower and accountability becomes harder.
          </p>

          <p>
            This project grew out of a real printer and multifunction-device
            service environment, but the underlying problem is broader: technicians
            and managers need a reliable way to find inventory information, track
            equipment, record movement, and understand what changed over time.
          </p>

          <p>
            Rather than treat the project as a simple inventory list, I designed
            it around operational workflows and the people actually using the
            system.
          </p>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Users & Requirements</p>
          <h2>Different users needed different levels of access</h2>
        </div>

        <div className="case-study-copy">
          <p>
            The application supports multiple user roles because the needs of an
            administrator are different from those of a technician or read-only
            user.
          </p>

          <ul className="experience-list">
            <li>
              <strong>Administrators</strong> manage system-level records and
              access.
            </li>
            <li>
              <strong>Managers</strong> work with inventory, equipment, and
              operational records.
            </li>
            <li>
              <strong>Technicians</strong> need fast lookup and field-friendly
              workflows.
            </li>
            <li>
              <strong>Viewers</strong> can access information without modifying
              records.
            </li>
          </ul>

          <p>
            Core requirements included search, model and series lookup, equipment
            tracking, audit history, role-aware actions, QR-assisted workflows,
            filtering, duplicate prevention, and mobile usability.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">System Design</p>
          <h2>Designed around relationships, not isolated records</h2>
        </div>

        <div className="case-study-copy">
          <p>
            The system models inventory and equipment as related operational data
            instead of independent lists. Manufacturers, models, series, parts,
            storage locations, equipment records, users, and activity history all
            contribute to the workflows technicians and managers use.
          </p>

          <p>
            The original working application was built as a database-backed web
            application. For the public showcase, the production data layer was
            removed and replaced with deterministic browser-local demo data so the
            application remains immediately usable without access to live
            operational systems.
          </p>

          <div className="skill-list">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Role-Based Access</span>
            <span>Operational Workflows</span>
            <span>Audit History</span>
            <span>QR Workflows</span>
            <span>Responsive UI</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Key Workflows</p>
          <h2>Focused on the tasks users perform repeatedly</h2>
        </div>

        <div className="timeline">
          <article className="experience-card detailed">
            <div>
              <h3>Inventory & Model Lookup</h3>
            </div>

            <div className="experience-copy">
              <p>
                Users can search and filter records by model, series, part
                information, and related criteria so technicians can reach useful
                information quickly instead of manually navigating disconnected
                records.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>Equipment Tracking</h3>
            </div>

            <div className="experience-copy">
              <p>
                Equipment records can be added, edited, searched, and checked for
                duplicates. The workflow supports serial-based tracking and
                provides a clearer history of equipment movement.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>Taken & Transfer Events</h3>
            </div>

            <div className="experience-copy">
              <p>
                Operational events record when inventory or equipment is taken or
                transferred, giving the system an activity history rather than
                only showing the current state.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>QR-Assisted Workflows</h3>
            </div>

            <div className="experience-copy">
              <p>
                QR-based labels reduce the number of manual lookup steps required
                in technician workflows and make the application more practical
                for use around physical equipment.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Security & Access Control</p>
          <h2>Access was treated as part of the workflow design</h2>
        </div>

        <div className="case-study-copy">
          <p>
            Role-based access is a core part of the application rather than an
            afterthought. Different users are intentionally given different
            capabilities so read-only users do not receive the same controls as
            managers or administrators.
          </p>

          <p>
            The public showcase preserves those role-based interactions using
            fictional demo users. This allows the authorization model and user
            experience to remain visible without exposing production accounts or
            operational data.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Public Showcase & Sanitization</p>
          <h2>Separating the demonstration from the production system</h2>
        </div>

        <div className="case-study-copy">
          <p>
            The working project connects to real operational data, so publishing
            the production repository directly would have created unnecessary
            privacy and security risk.
          </p>

          <p>
            Instead, I created a standalone public version with production
            dependencies removed. The showcase uses fictional users, technicians,
            equipment, models, parts, locations, audit events, Taken events, and
            transfers.
          </p>

          <p>
            Production credentials, backend identifiers, internal records, live
            URLs, and real operational data are intentionally excluded. The public
            repository exists to demonstrate architecture, workflow design, and
            implementation decisions rather than expose the working environment.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Challenges & Tradeoffs</p>
          <h2>Balancing realism, usability, and public safety</h2>
        </div>

        <div className="case-study-copy">
          <p>
            One challenge was preserving enough of the original application to
            demonstrate meaningful workflows while completely separating the
            showcase from production data and services.
          </p>

          <p>
            The public version therefore favors deterministic local demo data over
            an external database. That makes the deployed showcase more reliable
            for portfolio visitors because it does not depend on a hosted database
            being active, while still allowing the interface and role-based
            workflows to be explored.
          </p>

          <p>
            Another tradeoff was deciding how much of the printer-specific
            business domain to retain. The showcase keeps the operational concepts
            that gave the project its real-world context, but presents the system
            more broadly as a field-service inventory and equipment-tracking
            platform.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Result</p>
          <h2>A working application built around an actual operational problem</h2>
        </div>

        <div className="case-study-copy">
          <p>
            The result is a usable field-service application that combines
            inventory lookup, equipment tracking, access control, operational
            events, audit history, QR-assisted workflows, and mobile-friendly
            interaction in a single system.
          </p>

          <p>
            More importantly, the project demonstrates the process of turning a
            real workflow problem into technical requirements and then building a
            system around those requirements.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">What I Learned</p>
          <h2>The hard part is understanding the operation</h2>
        </div>

        <div className="case-study-copy">
          <p>
            This project reinforced that useful software starts with understanding
            how people actually work. Search behavior, permissions, terminology,
            mobile layouts, audit records, and seemingly small workflow decisions
            all affect whether a system is useful in practice.
          </p>

          <p>
            It also reinforced the importance of separating production systems
            from public demonstrations. Creating the sanitized showcase became its
            own engineering exercise involving dependency removal, fake-data
            design, security review, deployment validation, and documentation.
          </p>

          <p>
            The project sits at the intersection of the areas I want to continue
            developing: systems thinking, operational problem-solving, security,
            automation, support, and infrastructure-aware application design.
          </p>
        </div>
      </section>

      <section className="section shell contact-section">
        <div>
          <p className="eyebrow">Explore the Project</p>
          <h2>Try the public showcase or inspect the source.</h2>
        </div>

        <div className="contact-links">
          <a
            className="button primary"
            href="https://field-service-inventory-showcase.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live demo ↗
          </a>

          <a
            className="button secondary"
            href="https://github.com/Wheelbc-Virtura/field-service-inventory-showcase"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a className="button secondary" href="/#projects">
            Back to portfolio
          </a>
        </div>
      </section>
    </main>
  );
}