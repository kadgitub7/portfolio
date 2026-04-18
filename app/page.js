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
  aboutLines: [
  'I am an Engineering student at McMaster University with research experience across electrical, computer, and data-driven engineering work.',
  'My experience includes experimental lab work with microcontrollers and electronic components, as well as technical evaluation on constrained Linux systems.',
  'I have contributed to published research in flexible temperature sensing and have worked on documenting system performance, bottlenecks, and engineering trade-offs.',
  'I am interested in hardware, embedded systems, and practical engineering development roles where I can build strong technical depth through hands-on work.',
  ],
  pills: ['FPGA', 'Verilog', 'Computer Architecture', 'Embedded Systems', 'Python'],
  photo: '/imageAssets/Kadhir_Ponnambalam_Sketch.png',
};

const schoolProjects = [
  {
    title: 'AccessoBox — Electronically Controlled Mountable Storage System',
    meta: 'Capstone project • Embedded Systems • 4 months',
    tags: ['Arduino', 'Circuit Design', 'CAD / 3D Printing', 'C Programming'],
    description:
      'Designed and built AccessoBox, an electronically controlled storage system mounted to a wheelchair armrest for a client who needed easier access to personal items.\n\n' +
      'The final prototype uses an Arduino-controlled servo mechanism to open and close the lid with a low-force button press and an approximately 90 degree opening range. The button pad includes a custom 3D-printed cap to increase surface area and reduce required pressure, and the system responds in under one second.\n\n' +
      'I contributed across circuit design, coding, and mechanical integration: I developed and simulated control circuits, helped wire and integrate motors/buttons, wrote Arduino C logic for open/close state control, and designed the button-lid CAD geometry used in the final assembly.\n\n' +
      'Development followed multiple iterations (cardboard concept models, early electrical testing with LED stand-ins before part arrival, and revised 3D-printed housings). These iterations resolved motor clearance, linkage alignment, and enclosure design issues before final demo.\n\n' +
      'This project strengthened my ability to translate accessibility requirements into engineering constraints, validate ideas through staged prototyping, and deliver a practical hardware solution under material and timeline constraints.',
    caseStudy: {
      motivation:
        'The project was motivated by a real client need: a wheelchair user had limited access to personal belongings while moving. Existing storage solutions were hard to operate, unstable, and not designed for low-force interaction. Our goal was to create a lightweight, mountable, and easy-to-use device that gave the client independent access to essentials at any time.',
      prototypingNarrative: [
        '3D modeling began with simple enclosure concepts to validate fit on a wheelchair armrest and enough internal space for electronics. Early feedback focused on button size, lid thickness, and mechanical clearance for servo movement.',
        'The circuitry design started with simulated logic and a test circuit where an LED represented the actuator state while the servo motor was still being sourced. This helped validate button-driven state logic and wiring flow before full hardware integration.',
        'After parts arrived, we moved through multiple prototype iterations: initial printed housing, revised geometry for motor opening and linkage spacing, and a final casing with exposed accessibility-focused buttons and improved visual finish.',
      ],
      prototypeImages: [
        { src: '/imageAssets/accessobox-cad-prototype.png', alt: 'AccessoBox CAD prototype model', caption: 'CAD concept: internal volume and lid geometry planning.' },
        { src: '/imageAssets/accessobox-circuit-prototype.png', alt: 'AccessoBox circuit prototype on breadboard', caption: 'Circuit prototype: button input and actuator control logic validation.' },
        { src: '/imageAssets/accessobox-final-prototype.png', alt: 'AccessoBox final mounted prototype', caption: 'Final prototype: mountable enclosure with integrated controls.' },
      ],
      mechanismFlow: [
        'User presses low-force button with enlarged cap.',
        'Arduino reads button input and checks current lid state.',
        'Control logic toggles target state (open or close).',
        'Servo rotates linkage to move lid to target angle (~90 degrees when opening).',
        'System waits briefly for stability, then returns to input-ready state.',
      ],
      demoExplanation:
        'In the demo, the user can open and close the storage lid quickly with a single button interaction. The mechanism shows low-latency response and consistent movement, demonstrating how the device improves daily accessibility when attached to a wheelchair armrest.',
      skills: [
        { name: 'Circuit Design & Simulation', detail: 'Built and validated button-actuator logic with simulated and physical test circuits before final integration.' },
        { name: 'Embedded C (Arduino)', detail: 'Implemented state-based open/close firmware logic for reliable servo control and user interaction.' },
        { name: 'CAD & 3D Printing', detail: 'Co-developed enclosure geometry and button-cap design for accessibility, manufacturability, and motor clearance.' },
        { name: 'Prototype Iteration', detail: 'Used staged prototyping to resolve parts delays, mechanical faults, and integration issues under project timelines.' },
      ],
    },
    github: 'https://github.com/kadgitub7/AccessoBox-Source-Code-Capstone-project-Year-1/tree/main',
    demoVideo: 'https://youtube.com/shorts/jYOuo-QSWQE?feature=share',
    links: [
      { label: 'Demo Video', href: 'https://youtube.com/shorts/jYOuo-QSWQE?feature=share' },
      { label: 'GitHub', href: 'https://github.com/kadgitub7/AccessoBox-Source-Code-Capstone-project-Year-1/tree/main' },
    ],
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

const highlights = [
  {
    year: '2025',
    title: 'McMaster University Entrance Scholarship',
    detail: 'Awarded a $3,500 entrance scholarship upon entering Engineering 1 at McMaster University.',
  },
  {
    year: '2025',
    title: 'Bachelor of Engineering Co-op — Engineering 1',
    detail: 'Started first year in Engineering 1 at McMaster University with a 12.0 GPA listed on resume.',
  },
  {
    year: '2025',
    title: 'Co-author on peer-reviewed publications',
    detail: 'Credited as co-author on research publications related to nickel oxide/graphene flexible temperature sensing.',
  },
  {
    year: '2023',
    title: 'Research Assistant — Electrical and Computer Engineering Lab',
    detail: 'Worked in a McMaster engineering research lab on experimental and sensor-based work with microcontrollers and electronics.',
  },
  {
    year: 'Past',
    title: 'Canada-Wide Science Fair',
    detail: 'Participated in a major national-level science fair setting.',
  },
  {
    year: 'Past',
    title: 'CAIS Soccer Silver Medalist — Division 2',
    detail: 'Earned silver medal placement in competitive school athletics.',
  },
  {
    year: 'Past',
    title: 'Piano',
    detail: 'Long-term extracurricular involvement in piano.',
  },
];



const blogPosts = [
  {
    date: 'March 2026',
    topic: 'Placeholder — FPGA design reflections',
    content:
      'Placeholder for a future post on FPGA development, design iteration, debugging workflow, and lessons learned from implementation work.',
  },
  {
    date: 'February 2026',
    topic: 'Placeholder — Research and engineering workflow',
    content:
      'Placeholder for a future post on research execution, documenting experiments, balancing accuracy with constraints, and turning technical work into clear outcomes.',
  },
  {
    date: 'January 2026',
    topic: 'Placeholder — Hardware project notes',
    content:
      'Placeholder for a future post on embedded systems, electronics prototyping, and practical engineering trade-offs.',
  },
];

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'highlights', label: 'Honours & Activities' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Page() {
  const [activeId, setActiveId] = useState('home');
  const [projectTab, setProjectTab] = useState('personal');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [openBlog, setOpenBlog] = useState(null);

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
              {currentProjects.length > 0 ? (
                currentProjects.map((p) => (
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
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))
              ) : (
                <div className="empty-state">
                  Personal hardware-focused projects can be added here later.
                </div>
              )}
            </div>
          </section>
        );
      case 'experience':
        return (
          <section className="section" id="experience">
            <div className="section-item">Experience</div>

            <div className="description">
              Research experience focused on engineering experimentation, system evaluation, technical documentation, and applied hardware-adjacent work.
            </div>

            <div className="experience-stack" style={{ marginTop: '1rem' }}>
              {experience.map((e) => (
                <div key={e.title} className="experience-item">
                  <div className="experience-header-row">
                    {e.icon && (
                      <img
                        src={e.icon}
                        alt=""
                        className="experience-icon"
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
            <div className="section-item">Research/Journal Papers</div>
            <div className="description">
              Research and technical experience across engineering labs, data analysis, and applied experimentation.
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
              Tools and technical areas based on current use, project exposure, and research experience.
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

      case 'highlights':
        return (
          <section className="section" id="highlights">
            <div className="section-item">Honours & Activities</div>
            <div className="description">
              A chronological view of awards, research milestones, academic progress, and extracurricular involvement.
            </div>

            <div className="timeline" style={{ marginTop: '1.2rem' }}>
              {highlights.map((item, index) => (
                <div key={`${item.year}-${item.title}-${index}`} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-detail">{item.detail}</div>
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
              Placeholder entries for future technical writing, project reflections, and engineering notes.
            </div>

            <div className="blog-list" style={{ marginTop: '1rem' }}>
              {blogPosts.map((post, index) => {
                const isOpen = openBlog === index;
                return (
                  <button
                    key={`${post.date}-${post.topic}`}
                    type="button"
                    className={isOpen ? 'blog-tab open' : 'blog-tab'}
                    onClick={() => setOpenBlog(isOpen ? null : index)}
                  >
                    <div className="blog-tab-header">
                      <div>
                        <div className="blog-date">{post.date}</div>
                        <div className="blog-topic">{post.topic}</div>
                      </div>
                      <div className="blog-toggle">{isOpen ? '−' : '+'}</div>
                    </div>

                    {isOpen && <div className="blog-content">{post.content}</div>}
                  </button>
                );
              })}
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
                  {profile.aboutLines.map((line) => (
                    <p key={line} className="bio-line">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="cta-row">
                  <a className="btn btn-primary" href="#projects">
                    View projects →
                  </a>
                  <a className="btn" href="/imageAssets/KadhirPonnambalamRESUME.pdf" download>
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
            <a href="mailto:kadhir.ponnambalam@gmail.com">Email</a>
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
      {selectedSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSkill(null)}>×</button>
            <h2>{selectedSkill.name}</h2>
            <p>{selectedSkill.blurb}</p>
          </div>
        </div>
      )}
    </div>
  );
}

