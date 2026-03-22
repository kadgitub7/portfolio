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
  about:
    'Research scientist specialized in ECE and big data analytics, with published work in novel sensor materials and machine learning for energy systems. Experienced in FPGA/Verilog design, computer architecture, and data science; active in academic research, startups, and community mentoring. Outside engineering, I enjoy soccer, innovation challenges, and translating technical research into practical applications.',
  pills: ['FPGA', 'Verilog', 'Computer Architecture', 'Embedded Systems', 'Big Data'],
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
    descriptionLines: [
      'Develop and prototype novel nickel oxide/graphene composite temperature sensors for flexible electronics.',
      'Lead FPGA/Verilog design tasks for embedded signal conditioning and low-latency data acquisition.',
      'Coordinate data collection and big data analysis pipelines for sensor performance and lifecycle modeling.',
    ],
  },
  {
    title: 'Graduate Researcher — Electrical & Computer Engineering',
    date: 'Jan 2023 - Aug 2024',
    descriptionLines: [
      'Built predictive analytics models linking housing/environment variables with quality-of-life metrics.',
      'Created spatial analysis tools for biodiversity correlation using Python, GIS, and large-scale datasets.',
      'Authored technical reports and co-authored peer-reviewed journal articles.',
    ],
  },
  {
    title: 'Software Engineer Intern — System Design',
    date: 'Jun 2022 - Dec 2022',
    descriptionLines: [
      'Designed and implemented embedded system modules using C/C++, Verilog, and Xilinx FPGAs.',
      'Improved module efficiency by 17% through architectural refinements and simulation-driven optimization.',
      'Worked in a cross-functional team to integrate IoT sensor firmware with cloud analytics.',
    ],
  },
];

const skills = [
  {
    heading: 'Computer Architecture',
    items: ['FPGA', 'Verilog', 'VHDL', 'Computer Architecture', 'SoC Design'],
  },
  {
    heading: 'Research & Big Data',
    items: ['Embedded Systems', 'Signal Processing', 'Big Data Analytics', 'Python', 'Data Visualization'],
  },
];

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
        const currentProjects = projectTab === 'highlighted' ? highlightedProjects : projectTab === 'school' ? schoolProjects : personalProjects;
        return (
          <section className="section" id="projects">
            <div className="section-item">Projects</div>
            <div className="description">
              Explore my projects across different categories. Click on any project to see more details.
            </div>

            <div className="project-tabs">
              <button className={projectTab === 'personal' ? 'tab active' : 'tab'} onClick={() => setProjectTab('personal')}>Personal</button>
              <button className={projectTab === 'school' ? 'tab active' : 'tab'} onClick={() => setProjectTab('school')}>School</button>
              <button className={projectTab === 'highlighted' ? 'tab active' : 'tab'} onClick={() => setProjectTab('highlighted')}>Highlighted</button>
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
                  <div className="experience-title">{e.title}</div>
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
                {profile.name} ({profile.nativeName})
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
        );
    }
  })();

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

