/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';

const profile = {
  name: 'Kadhir Ponnambalam',
  subtitleLines: [
    'Research Assistant at HADI Labs',
    'Electrical & Computer Engineering • Big Data Research',
  ],
  about:
    'Passionate researcher in Electrical & Computer Engineering and Big Data, with interests in science, innovation, soccer, and cutting-edge research. [Placeholder bio: Add more general information about yourself here. Known for contributions in science and innovation, active in soccer, and leading research projects.]',
  pills: ['React', 'Next.js', 'Java', 'PostgreSQL', 'Docker'],
  photo: '/placeholder-photo.jpg', // Placeholder for photo
};

const highlightedProjects = [
  {
    title: 'Placeholder Highlighted Project 1',
    meta: 'Next.js • Full-stack app',
    tags: ['React', 'Next.js', 'MongoDB'],
    description: 'This is a detailed description of the highlighted project. It showcases innovative features and demonstrates expertise in modern web development.',
    github: '#',
    demoVideo: '#',
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Placeholder Highlighted Project 2',
    meta: 'React • UI/UX focused',
    tags: ['React', 'UI/UX'],
    description: 'An interactive application with a focus on user experience and design principles.',
    github: '#',
    demoVideo: '#',
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Placeholder Highlighted Project 3',
    meta: 'Platform-style hub',
    tags: ['Frontend', 'Design'],
    description: 'A comprehensive platform that integrates multiple features for enhanced productivity.',
    github: '#',
    demoVideo: '#',
    links: [
      { label: 'Live', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Placeholder Highlighted Project 4',
    meta: 'Search UI study',
    tags: ['React', 'Accessibility'],
    description: 'A study in creating accessible and efficient search interfaces.',
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

const research = {
  electricalEngineering: [
    {
      title: 'Placeholder Paper 1: Advanced Signal Processing in Embedded Systems',
      authors: 'Kadhir Ponnambalam et al.',
      journal: 'IEEE Transactions on Signal Processing',
      year: 2023,
      link: '#',
      citation: 'Ponnambalam, K., et al. (2023). Advanced Signal Processing in Embedded Systems. IEEE Transactions on Signal Processing.',
      blurb: 'This paper explores innovative signal processing techniques for embedded systems, demonstrating significant improvements in efficiency and performance. It presents novel algorithms that reduce computational overhead while maintaining high accuracy. The research contributes to the field of electrical engineering by enabling more sophisticated embedded applications.',
    },
    {
      title: 'Placeholder Paper 2: IoT Security Frameworks for Smart Grids',
      authors: 'Kadhir Ponnambalam et al.',
      journal: 'Journal of Electrical Engineering',
      year: 2024,
      link: '#',
      citation: 'Ponnambalam, K., et al. (2024). IoT Security Frameworks for Smart Grids. Journal of Electrical Engineering.',
      blurb: 'Focusing on the security challenges in smart grid systems, this work develops comprehensive IoT security frameworks. It addresses vulnerabilities in interconnected devices and proposes mitigation strategies. The findings are crucial for ensuring reliable and secure energy distribution networks.',
    },
  ],
  bigData: [
    {
      title: 'Placeholder Paper 3: Machine Learning for Predictive Analytics in Big Data',
      authors: 'Kadhir Ponnambalam et al.',
      journal: 'Big Data Research Journal',
      year: 2023,
      link: '#',
      citation: 'Ponnambalam, K., et al. (2023). Machine Learning for Predictive Analytics in Big Data. Big Data Research Journal.',
      blurb: 'This research applies machine learning techniques to large-scale datasets for predictive analytics. It introduces scalable algorithms that handle massive data volumes efficiently. The study demonstrates practical applications in various industries, enhancing decision-making processes.',
    },
    {
      title: 'Placeholder Paper 4: Distributed Computing Architectures for Data Mining',
      authors: 'Kadhir Ponnambalam et al.',
      journal: 'International Journal of Big Data',
      year: 2024,
      link: '#',
      citation: 'Ponnambalam, K., et al. (2024). Distributed Computing Architectures for Data Mining. International Journal of Big Data.',
      blurb: 'Exploring distributed computing models for efficient data mining, this paper presents novel architectures that optimize performance. It compares different approaches and provides benchmarks for scalability. The work advances the capabilities of big data processing in distributed environments.',
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
  const [projectTab, setProjectTab] = useState('highlighted');
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
              <button className={projectTab === 'highlighted' ? 'tab active' : 'tab'} onClick={() => setProjectTab('highlighted')}>Highlighted</button>
              <button className={projectTab === 'school' ? 'tab active' : 'tab'} onClick={() => setProjectTab('school')}>School</button>
              <button className={projectTab === 'personal' ? 'tab active' : 'tab'} onClick={() => setProjectTab('personal')}>Personal</button>
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
                <div key={paper.title} className="research-item">
                  <h4><a href={paper.link} target="_blank" rel="noreferrer">{paper.title}</a></h4>
                  <p className="citation">{paper.citation}</p>
                  <p>{paper.blurb}</p>
                </div>
              ))}
            </div>

            <div className="research-section">
              <h3>Big Data</h3>
              {research.bigData.map((paper) => (
                <div key={paper.title} className="research-item">
                  <h4><a href={paper.link} target="_blank" rel="noreferrer">{paper.title}</a></h4>
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
                {profile.name}{' '}
                <span className="korean">(Your Tagline/Native Name)</span>
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

