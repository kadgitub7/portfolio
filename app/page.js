/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';

const profile = {
  name: 'Kadhir Ponnambalam',
  nativeName: 'கதிர்',
  subtitleLines: [
    'Research Assistant at HADI Labs',
    'Electrical & Computer Engineering • Big Data Research',
  ],
  about: `I am an Electrical and Computer Engineering student at McMaster University with experience spanning FPGA and Verilog design, embedded systems, data analytics, and applied research. My work has included research contributions in flexible sensor materials and signal-oriented engineering projects, alongside hands-on technical exploration in hardware and software systems.
  Publicly available work tied to my name includes research authorship on nickel oxide/graphene temperature sensor publications, a Google Scholar profile affiliated with McMaster, and personal technical projects involving Verilog, anomaly detection systems, and data-focused development. I am especially interested in roles where I can contribute across hardware, systems, and practical engineering problem-solving while continuing to grow through internships and real-world product work.`,
  photo: '/imageAssets/Kadhir_Ponnambalam_Sketch.png',
};

const highlightedProjects = [
  {
    title: 'Placeholder Personal Project 1',
    meta: 'Personal • Web app',
    tags: ['React', 'Node.js'],
    description: 'A personal project exploring new technologies and creative ideas.',
    github: '#',
    demoVideo: '#',
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Placeholder Personal Project 2',
    meta: 'Personal • Mobile app',
    tags: ['React Native', 'Firebase'],
    description: 'A mobile application developed for personal use and learning.',
    github: '#',
    demoVideo: '#',
    links: [{ label: 'Code', href: '#' }],
  },
  {
    title: 'Placeholder Capstone Project 1',
    meta: 'Course capstone • Advanced algorithms',
    tags: ['Java', 'Algorithms'],
    description: 'A capstone project demonstrating advanced algorithmic solutions developed during coursework.',
    github: '#',
    demoVideo: '#',
    links: [{ label: 'Code', href: '#' }],
  },
  {
    title: 'Placeholder Capstone Project 2',
    meta: 'Systems design • Embedded systems',
    tags: ['C++', 'Embedded'],
    description: 'An embedded systems project focusing on real-time processing and hardware integration.',
    github: '#',
    demoVideo: '#',
    links: [{ label: 'Code', href: '#' }],
  },
];

const schoolProjects = [
  {
    title: 'Placeholder Capstone Project 1',
    meta: 'Course capstone • Advanced algorithms',
    tags: ['Java', 'Algorithms'],
    description: 'A capstone project demonstrating advanced algorithmic solutions developed during coursework.',
    github: '#',
    demoVideo: '#',
    links: [{ label: 'Code', href: '#' }],
  },
  {
    title: 'Placeholder Capstone Project 2',
    meta: 'Systems design • Embedded systems',
    tags: ['C++', 'Embedded'],
    description: 'An embedded systems project focusing on real-time processing and hardware integration.',
    github: '#',
    demoVideo: '#',
    links: [{ label: 'Code', href: '#' }],
  },
];

const personalProjects = [
  {
    title: 'Placeholder Personal Project 1',
    meta: 'Personal • Web app',
    tags: ['React', 'Node.js'],
    description: 'A personal project exploring new technologies and creative ideas.',
    github: '#',
    demoVideo: '#',
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Placeholder Personal Project 2',
    meta: 'Personal • Mobile app',
    tags: ['React Native', 'Firebase'],
    description: 'A mobile application developed for personal use and learning.',
    github: '#',
    demoVideo: '#',
    links: [{ label: 'Code', href: '#' }],
  },
];

const experience = [
  {
    title: 'HADI Labs — Research Assistant',
    date: 'Sep 2024 - Present',
    icon: '/imageAssets/HADI_Labs_Logo.png',
    descriptionLines: [
      'Develop and prototype novel nickel oxide/graphene composite temperature sensors for flexible electronics.',
      'Lead FPGA/Verilog design tasks for embedded signal conditioning and low-latency data acquisition.',
      'Coordinate data collection and big data analysis pipelines for sensor performance and lifecycle modeling.',
    ],
  },
  {
    title: 'Research Assistant — Electrical & Computer Engineering | Jamal Deen',
    date: 'Jan 2023 - Aug 2024',
    icon: '/imageAssets/McMaster_Logo.jpg',
    descriptionLines: [
      'Built predictive analytics models linking housing/environment variables with quality-of-life metrics.',
      'Created spatial analysis tools for biodiversity correlation using Python, GIS, and large-scale datasets.',
      'Authored technical reports and co-authored peer-reviewed journal articles.',
    ],
  },
  {
    title: 'Research Assistant - Microfluidics Lab',
    date: 'Jun 2022 - Dec 2022',
    icon: '/imageAssets/McMaster_Logo.jpg',
    descriptionLines: [
      'Designed and implemented embedded system modules using C/C++, Verilog, and Xilinx FPGAs.',
      'Improved module efficiency by 17% through architectural refinements and simulation-driven optimization.',
      'Worked in a cross-functional team to integrate IoT sensor firmware with cloud analytics.',
    ],
  },
];

const [selectedSkill, setSelectedSkill] = useState(null);

const skills = {
  S: [
    { name: 'Verilog', blurb: 'Experience building and simulating digital hardware projects, with a focus on logic design, architecture concepts, and FPGA-oriented development.' },
    { name: 'FPGA', blurb: 'Hands-on exposure to FPGA workflows, digital system implementation, and hardware-oriented prototyping.' },
  ],
  A: [
    { name: 'Computer Architecture', blurb: 'Comfortable with processor/datapath concepts, ALUs, memory flow, and low-level hardware organization.' },
    { name: 'Python', blurb: 'Used for analytics, scripting, data processing, and research-oriented technical work.' },
  ],
  B: [
    { name: 'Embedded Systems', blurb: 'Familiar with embedded development concepts and hardware-software interaction in project settings.' },
    { name: 'Data Visualization', blurb: 'Able to communicate technical findings through charts, plots, and structured presentation of results.' },
  ],
  C: [
    { name: 'VHDL', blurb: 'Basic familiarity; less central than Verilog in current work.' },
    { name: 'SoC Design', blurb: 'Early-stage exposure to system-level chip design concepts.' },
  ],
};

const research = {
  electricalEngineering: [
    {
      title: 'Novel Nickel Oxide/Graphene Composite Sensor: A Low‑Temperature Approach to Flexible Temperature Sensing',
      authors: 'Taheri, M., Ponnambalam, K., Shboul, A. A., Ketabi, M., & Deen, M. J.',
      journal: 'Advanced Materials Technologies',
      year: 2025,
      link: 'https://advanced.onlinelibrary.wiley.com/doi/pdfdirect/10.1002/admt.202500060',
      citation: 'Taheri, M., Ponnambalam, K., Shboul, A. A., Ketabi, M., & Deen, M. J. (2025). Novel Nickel Oxide/Graphene Composite Sensor: A Low‐Temperature Approach to Flexible Temperature Sensing. Advanced Materials Technologies, e00060.',
      blurb: 'This research demonstrates a flexible temperature sensor architecture using nickel oxide/graphene composite, optimized for low-temperature processing. The study showcases both material stability and high sensing accuracy, enabling wearable and flexible electronics applications.',
    },
    {
      title: 'Nickel oxide/graphene-based temperature sensor: Flexible design with low processing temperatures and high stability',
      authors: 'Taheri, M., Ponnambalam, K., Al Shboul, A. M., Ketabi, M., & Deen, M. J.',
      journal: 'Sensors and Actuators A: Physical',
      year: 2025,
      link: 'https://drive.google.com/file/d/1zjfUUe13-bpC9f2m3UUUzINuQFDeqF05/view?usp=sharing',
      citation: 'Taheri, M., Ponnambalam, K., Al Shboul, A. M., Ketabi, M., & Deen, M. J. (2025). Nickel oxide/graphene-based temperature sensor: Flexible design with low processing temperatures and high stability. Sensors and Actuators A: Physical, 116693.',
      blurb: 'The paper presents a robust temperature sensor with flexible design and low thermal budget fabrication. It highlights improvements in long-term stability and sensitivity suitable for smart wearable devices.',
    },
  ],
  bigData: [
    {
      title: 'Utilizing spatial analysis to identify correlations between plant species and biological variety',
      authors: 'STEM Fellowship Journal',
      journal: 'STEM Fellowship Journal | Vol. 10, Issue 1',
      year: 2024,
      link: 'https://drive.google.com/file/d/1FQdiLhWUZClTKJGZopIoWdu7cKeh5VWF/view',
      citation: 'STEM Fellowship Journal. (2024). Utilizing spatial analysis to identify correlations between plant species and biological variety. Vol. 10, Issue 1. https://doi.org/10.17975/sfj-2024-004',
      blurb: 'The paper uses spatial correlation techniques to link plant biodiversity with environmental variables. It provides a framework for data-driven conservation strategies and biodiversity management.',
    },
    {
      title: 'Investigating the correlation between various housing factors and life satisfaction',
      authors: 'STEM Fellowship Journal',
      journal: 'STEM Fellowship Journal | Vol. 9, Issue 1',
      year: 2023,
      link: 'https://drive.google.com/file/d/15WYQlYCbAu5JXROOZGqz3tj_zpUCtROt/view',
      citation: 'STEM Fellowship Journal. (2023). Investigating the correlation between various housing factors and life satisfaction. Vol. 9, Issue 1. https://doi.org/10.17975/sfj-2023-002',
      blurb: 'This study analyzes the influence of housing conditions and neighborhood characteristics on life satisfaction. It employs statistical modeling to reveal key factors that improve community well-being and policy implications.',
    },
  ],
};

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Page() {
  const [activeId, setActiveId] = useState('home');
  const [projectTab, setProjectTab] = useState('personal');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const validIds = tabs.map((t) => t.id);

    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && validIds.includes(hash)) setActiveId(hash);
      if (!hash) {
        // Keep the URL stable for back/refresh while still starting on Home.
        window.history.replaceState(null, '', '#home');
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const activeSection = (() => {
    switch (activeId) {
      case 'projects':
        const currentProjects = projectTab === 'school' ? schoolProjects : personalProjects;
        return (
          <section className="section" id="projects">
            <div className="section-item">Projects</div>
            <div className="description">
              Explore my projects across different categories. Click on any project to see more details.
            </div>

            <div className="project-tabs">
              <button className={projectTab === 'personal' ? 'tab active' : 'tab'} onClick={() => setProjectTab('personal')}>
                Personal
              </button>
              <button className={projectTab === 'school' ? 'tab active' : 'tab'} onClick={() => setProjectTab('school')}>
                Capstones
              </button>
            </div>

            <div className="projects-grid">
              {currentProjects.map((p) => (
                <article key={p.title} className="project-card" onClick={() => setSelectedProject(p)}>
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
        );
      case 'experience':
        return (
          <section className="section" id="experience">
            <div className="section-item">Experience</div>

            <div className="description">
              Highlight outcomes and ownership: what you built, what improved, and what
              you learned. Keep each bullet action-oriented.
            </div>

            <div className="experience-stack" style={{ marginTop: '1rem' }}>
              {experience.map((e) => (
                <div key={e.title} className="experience-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {e.icon && (
                      <img
                        src={e.icon}
                        alt=""
                        style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '6px' }}
                      />
                    )}
                    <div className="experience-title">{e.title}</div>
                  </div>
                  <div className="experience-date">{e.date}</div>
                  <div className="description" style={{ marginTop: 0 }}>
                    <ul className="experience-list" style={{ paddingLeft: '1.1rem' }}>
                      {e.descriptionLines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'research':
        return (
          <section className="section" id="research">
            <div className="section-item">Research</div>
            <div className="description">
              My research work in Electrical & Computer Engineering and Big Data.
            </div>

            <div className="research-section">
              <h3>Electrical & Computer Engineering</h3>
              {research.electricalEngineering.map((paper) => (
                <div
                  key={paper.title}
                  className="research-item"
                  onClick={() => window.open(paper.link, '_blank')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') window.open(paper.link, '_blank'); }}
                >
                  <h4>{paper.title}</h4>
                  <p className="citation">{paper.citation}</p>
                  <p>{paper.blurb}</p>
                </div>
              ))}
            </div>

            <div className="research-section">
              <h3>Big Data</h3>
              {research.bigData.map((paper) => (
                <div
                  key={paper.title}
                  className="research-item"
                  onClick={() => window.open(paper.link, '_blank')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') window.open(paper.link, '_blank'); }}
                >
                  <h4>{paper.title}</h4>
                  <p className="citation">{paper.citation}</p>
                  <p>{paper.blurb}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 'skills':
        return (
          <section className="section" id="skills">
            <div className="section-item">Skills</div>
            <div className="description">
              A quick ranking of tools and domains based on current familiarity and project exposure.
            </div>

            <div className="skills-tier-list" style={{ marginTop: '1rem' }}>
              {Object.entries(skills).map(([tier, items]) => (
                <div key={tier} className="skill-tier">
                  <div className="skill-tier-label">{tier}</div>
                  <div className="skills-list">
                    {items.map((skill) => (
                      <button
                        key={skill.name}
                        type="button"
                        className="pill skill-button"
                        onClick={() => setSelectedSkill(skill)}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'blog':
        return (
          <section className="section" id="blog">
            <div className="section-item">Blog</div>
            <div className="description">
              This section is intentionally left empty for now. Future posts will go here.
            </div>
          </section>
        );
      case 'contact':
        return (
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
        );
      case 'home':
      default:
        return (
          <section className="section header" id="home">
            <div className="header">
              <h1>
                {profile.name} <span className="native-name">({profile.nativeName})</span>
              </h1>
              <div className="subtitle">— {profile.subtitleLines[0]}</div>
              <div className="subtitle">— {profile.subtitleLines[1]}</div>
            </div>

            <div className="header-divider" />

            <div className="hero-card">
              <div className="hero-grid">
                <div className="hero-copy">
                  <img src={profile.photo} alt="Kadhir Ponnambalam" className="profile-photo" />
                  {profile.about}
                </div>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#projects">
                    View projects →
                  </a>
                  <a className="btn" href="/Kadhir_Ponnambalam_RESUME.pdf" download>
                    Download Resume
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
        );
    }
  })();

  {selectedSkill && (
  <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setSelectedSkill(null)}>×</button>
      <h2>{selectedSkill.name}</h2>
      <p>{selectedSkill.blurb}</p>
    </div>
  </div>
  )}

  return (
    <div className="layout">
      <aside className="sidebar">
        <nav className="nav" aria-label="Primary">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className={t.id === activeId ? 'tab active' : 'tab'}
              aria-selected={t.id === activeId}
              onClick={() => {
                setActiveId(t.id);
                window.history.replaceState(null, '', `#${t.id}`);
              }}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-social">
          <div className="social-links">
            <a
              href="https://ca.linkedin.com/in/kadhir-ponnambalam-3211ab261"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/kadgitub7" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:you@example.com">Email</a>
          </div>
        </div>
      </aside>

      <main className="content">
        {activeSection}
      </main>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="modal-links">
              <a href={selectedProject.github} target="_blank" rel="noreferrer">GitHub</a>
              {selectedProject.demoVideo && <a href={selectedProject.demoVideo} target="_blank" rel="noreferrer">Demo Video</a>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

