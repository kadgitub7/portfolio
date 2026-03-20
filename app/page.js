import ContactForm from './components/ContactForm';

const profile = {
  name: 'Your Name',
  subtitleLines: [
    'Software Engineer',
    'Healthcare & Transportation • Future-focused builds',
  ],
  about:
    'I build sleek, reliable web experiences and full-stack systems. My goal is to turn real-world problems into polished products: fast UI, clean architecture, and thoughtful engineering tradeoffs.',
  pills: ['React', 'Next.js', 'Java', 'PostgreSQL', 'Docker'],
};

const projects = [
  {
    title: 'Mern Memories',
    meta: 'Next.js • Full-stack memories app',
    tags: ['React', 'Next.js', 'MongoDB'],
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Next Event',
    meta: 'React • Event discovery experience',
    tags: ['React', 'UI/UX'],
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Devspace',
    meta: 'Platform-style project hub',
    tags: ['Frontend', 'Design'],
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Google Clone',
    meta: 'React • Search UI study',
    tags: ['React', 'Accessibility'],
    links: [{ label: 'Code', href: '#' }],
  },
  {
    title: 'Portfolio V1',
    meta: 'Clean layout + sections',
    tags: ['CSS', 'Content design'],
    links: [{ label: 'Live', href: '#' }],
  },
  {
    title: 'Dresscode',
    meta: 'Next/React • Style + recommendations',
    tags: ['React', 'Next.js'],
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Music App',
    meta: 'React • Playback + library UI',
    tags: ['React', 'Media UX'],
    links: [{ label: 'Live', href: '#' }],
  },
  {
    title: 'Artemis',
    meta: 'Next • Product-style showcase',
    tags: ['Architecture', 'UI polish'],
    links: [{ label: 'Code', href: '#' }],
  },
];

const experience = [
  {
    title: 'Pickleball.com',
    date: 'Jan 2024 - Present',
    descriptionLines: [
      'Developed and shipped enterprise features using React and Next.js.',
      'Led frontend engineering: planning approaches, reviewing code, and improving reliability and performance.',
      'Collaborated cross-functionally to translate requirements into production-ready UI.',
    ],
  },
  {
    title: 'Atlantbh',
    date: 'Jun 2022 - Jan 2024',
    descriptionLines: [
      'Built full-stack applications with React, PostgreSQL, and Docker.',
      'Performed code reviews to maintain high code quality and team consistency.',
      'Mentored junior developers and supported onboarding.',
    ],
  },
  {
    title: 'Bosnia and Herzegovina Futures Foundation',
    date: 'Sep 2021 - Present',
    descriptionLines: [
      'Mentored high school students on soft skills and career planning.',
      'Volunteered in web development (building and maintaining informational pages).',
    ],
  },
];

const skills = [
  {
    heading: 'Core Web',
    items: ['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'UI/UX'],
  },
  {
    heading: 'Backend & Data',
    items: ['Java', 'Spring Boot', 'PostgreSQL', 'APIs', 'Docker'],
  },
];

export default function Page() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <nav className="nav" aria-label="Primary">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="sidebar-social">
          <div className="social-links">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:you@example.com">Email</a>
          </div>
        </div>
      </aside>

      <main className="content">
        <section className="header section" id="home">
          <div className="header">
            <h1>
              {profile.name}{' '}
              <span className="korean">(Your Tagline/Native Name)</span>
            </h1>
            <div className="subtitle">— {profile.subtitleLines[0]}</div>
            <div className="subtitle">— {profile.subtitleLines[1]}</div>
          </div>

          <div className="header-divider" />

          <div className="hero-card">
            <div className="hero-grid">
              <div className="hero-copy">{profile.about}</div>
              <div className="cta-row">
                <a className="btn btn-primary" href="#projects">
                  View projects →
                </a>
                <a className="btn" href="mailto:you@example.com">
                  Download CV (link later)
                </a>
              </div>

              <div className="pill-row" aria-label="Technologies">
                {profile.pills.map((p) => (
                  <span key={p} className="pill">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-item">Selected Projects</div>
          <div className="description">
            A few polished builds inspired by real engineering workflows. Replace the
            placeholders with your repo links, screenshots, and impact metrics.
          </div>

          <div className="projects-grid">
            {projects.map((p) => (
              <article key={p.title} className="project-card">
                <div className="project-title">{p.title}</div>
                <div className="project-meta">{p.meta}</div>
                <div className="pill-row" style={{ marginTop: 0 }}>
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links" style={{ marginTop: '0.85rem' }}>
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-item">Experience</div>

          <div className="description">
            Highlight outcomes and ownership: what you built, what improved, and what
            you learned. Keep each bullet action-oriented.
          </div>

          <div style={{ marginTop: '1rem' }}>
            {experience.map((e) => (
              <div key={e.title} className="experience-item">
                <div className="experience-title">{e.title}</div>
                <div className="experience-date">{e.date}</div>
                <div className="description" style={{ marginTop: 0 }}>
                  <ul style={{ paddingLeft: '1.1rem' }}>
                    {e.descriptionLines.map((line) => (
                      <li key={line} style={{ color: 'rgba(255,255,255,0.9)' }}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-item">Skills</div>
          <div className="description">
            Keep this scannable. Recruiters often skim for keywords and relevant stacks.
          </div>

          <div className="skills-grid">
            {skills.map((g) => (
              <div key={g.heading} className="skill-group">
                <h3>{g.heading}</h3>
                <div className="skills-list">
                  {g.items.map((s) => (
                    <span key={s} className="pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-item">Contact</div>
          <div className="description">
            Send a note and I’ll reply soon. (This form opens your email client via
            `mailto:`.)
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

