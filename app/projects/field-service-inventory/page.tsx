export default function FieldServiceInventoryCaseStudy() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="/">
          BW
        </a>

        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a
            href="https://github.com/Wheelbc-Virtura/field-service-inventory-showcase"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="case-study-hero shell">
        <p className="eyebrow">Application • Operations • Workflow Design</p>

        <h1>Field Service Inventory & Equipment Tracking</h1>

        <p className="lede">
          A field-service operations application designed around real inventory,
          equipment-tracking, technician, and audit workflows. The public version
          is a sanitized showcase that preserves the core product experience while
          using deterministic demo data instead of production systems.
        </p>

        <div className="tags">
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>RBAC</span>
          <span>Inventory</span>
          <span>Equipment Tracking</span>
          <span>QR Workflows</span>
          <span>Audit History</span>
        </div>

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
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Problem</p>
          <h2>Operational data was useful, but the workflow around it was not.</h2>
        </div>

        <div className="case-study-copy">
          <p>
            Field-service teams need quick access to information about equipment,
            compatible parts, storage locations, technician activity, and asset
            movement.
          </p>

          <p>
            The original environment was centered on printer and multifunction
            device service, but the underlying problem was broader: information
            needed to be easier to search, update, trace, and use during day-to-day
            technician work.
          </p>

          <p>
            The goal was not simply to build an inventory list. It was to create a
            system around the actual operational workflows.
          </p>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">My Role</p>
          <h2>Translated operational needs into application workflows.</h2>
        </div>

        <div className="case-study-copy">
          <p>
            I designed the project around real technician and management use
            cases, including search, equipment tracking, role-based permissions,
            auditability, mobile use, and QR-assisted lookup.
          </p>

          <p>
            That meant thinking about the system as more than a front-end
            interface. User roles, record relationships, movement history, data
            integrity, and field usability all affected the design.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Users & Access</p>
          <h2>Different users needed different capabilities.</h2>
        </div>

        <div className="timeline">
          <article className="experience-card detailed">
            <div>
              <h3>Administrator</h3>
            </div>

            <div className="experience-copy">
              <p>
                Full access to system-level records, user roles, inventory,
                equipment, audit information, and administrative workflows.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>Manager</h3>
            </div>

            <div className="experience-copy">
              <p>
                Operational access to inventory, equipment, technician workflows,
                movement events, and related records without exposing every
                administrative function.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>Technician</h3>
            </div>

            <div className="experience-copy">
              <p>
                Fast access to lookup, equipment, parts, QR-assisted workflows,
                and the actions needed during field or service work.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>Viewer</h3>
            </div>

            <div className="experience-copy">
              <p>
                Read-only access for users who need information without permission
                to modify operational records.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">System Design</p>
          <h2>Built around relationships instead of isolated records.</h2>
        </div>

        <div className="case-study-copy">
          <p>
            Manufacturers, models, series, parts, storage locations, equipment,
            users, and activity history all contribute to the way the application
            behaves.
          </p>

          <p>
            The working application was originally database-backed. For the public
            showcase, that production data layer was removed and replaced with
            deterministic browser-local demo data.
          </p>

          <p>
            This keeps the public deployment immediately usable while preserving
            the important workflows and relationships.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Key Workflows</p>
          <h2>Focused on tasks users perform repeatedly.</h2>
        </div>

        <div className="timeline">
          <article className="experience-card detailed">
            <div>
              <h3>Inventory & Model Lookup</h3>
            </div>

            <div className="experience-copy">
              <p>
                Search and filtering help users move from a model, series, or part
                reference to relevant inventory information quickly.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>Equipment Tracking</h3>
            </div>

            <div className="experience-copy">
              <p>
                Equipment records support creation, editing, serial-based lookup,
                duplicate prevention, and status tracking.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>Taken & Transfer Events</h3>
            </div>

            <div className="experience-copy">
              <p>
                Movement events capture when inventory or equipment is taken or
                transferred, preserving operational history rather than only the
                current state.
              </p>
            </div>
          </article>

          <article className="experience-card detailed">
            <div>
              <h3>QR-Assisted Lookup</h3>
            </div>

            <div className="experience-copy">
              <p>
                QR labels reduce manual lookup steps and make the application more
                practical around physical equipment and technician workflows.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Security & Access Control</p>
          <h2>Permissions were part of the workflow, not an afterthought.</h2>
        </div>

        <div className="case-study-copy">
          <p>
            Role-based access controls what each user can see and modify. A
            read-only viewer should not receive the same actions as an
            administrator or manager.
          </p>

          <p>
            The public showcase keeps those role differences visible with
            fictional demo users so visitors can explore how the interface changes
            between roles.
          </p>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Public Showcase</p>
          <h2>Separated the demonstration from the production environment.</h2>
        </div>

        <div className="case-study-copy">
          <p>
            The working version connects to live operational data, so publishing
            the production repository directly would have created unnecessary
            privacy and security risk.
          </p>

          <p>
            I created a standalone public version with production dependencies
            removed and replaced live records with fictional users, technicians,
            equipment, models, parts, locations, audit events, Taken events, and
            transfers.
          </p>

          <p>
            Production credentials, internal records, backend identifiers, and
            live operational data are intentionally excluded.
          </p>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Tradeoffs</p>
          <h2>Reliability and public safety mattered more than backend realism.</h2>
        </div>

        <div className="case-study-copy">
          <p>
            The public showcase uses deterministic local data instead of an
            external hosted database. That removes dependency on service
            availability and ensures the demo is immediately usable when someone
            opens it.
          </p>

          <p>
            The showcase also broadens the presentation from printer-specific
            inventory to field-service inventory and equipment tracking while
            keeping the original operational concepts intact.
          </p>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">Result</p>
          <h2>A working system built around a real operational problem.</h2>
        </div>

        <div className="case-study-copy">
          <p>
            The finished application combines inventory lookup, equipment
            tracking, access control, audit history, operational events,
            QR-assisted workflows, and mobile-friendly interaction in one system.
          </p>

          <p>
            More importantly, it demonstrates the process of taking an operational
            problem, translating it into technical requirements, and building a
            system around those requirements.
          </p>
        </div>
      </section>

      <section className="section shell split-section">
        <div className="section-heading compact">
          <p className="eyebrow">What I Learned</p>
          <h2>The difficult part is understanding how people actually work.</h2>
        </div>

        <div className="case-study-copy">
          <p>
            Search behavior, permissions, terminology, mobile layouts, audit
            records, and small workflow decisions all affect whether a system is
            useful in practice.
          </p>

          <p>
            Creating the public showcase also became its own engineering exercise
            involving dependency removal, fake-data design, security review,
            deployment validation, and documentation.
          </p>
        </div>
      </section>

      <section className="section shell contact-section">
        <div>
          <p className="eyebrow">Explore the Project</p>
          <h2>View the application or inspect the public source.</h2>
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

          <a className="button secondary" href="/">
            Back to portfolio
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <span>Brian Wheeler</span>
        <span>Field Service Inventory Case Study</span>
      </footer>
    </main>
  );
}