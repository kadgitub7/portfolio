/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';

const profile = {
  name: 'Kadhir Ponnambalam',
  nativeName: 'கதிர்',
  subtitleLines: [
    'BEng (Co-op) Engineering 1 @ McMaster University (2025–2029)',
    'Research Assistant • Linux systems evaluation • Data pipelines',
  ],
  aboutLines: [
  'I am a McMaster University engineering student with research experience evaluating **open-source data processing software** on **constrained Linux systems**.',
  'I benchmark **performance**, **memory usage**, and **throughput**, and document engineering trade-offs between **compute**, **latency**, and **accuracy** for deployment feasibility.',
  'I have contributed to **peer-reviewed publications** in flexible temperature sensing through experimental, sensor-based work with **microcontrollers** and **electronics**.',
  'I am seeking hands-on engineering roles where I can grow in **embedded systems**, **backend/system tooling**, and applied **hardware-adjacent development**.',
  ],
  pills: ['FPGA', 'Verilog', 'Computer Architecture', 'Embedded Systems', 'Python'],
  photo: '/imageAssets/Kadhir_Ponnambalam_Sketch.png',
};

const schoolProjects = [
  {
    title: 'Electronically Controlled Mountable Storage System (AccessoBox)',
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
    images: [
      { src: '/imageAssets/accessobox-final-prototype.png', alt: 'AccessoBox final mounted prototype' },
      { src: '/imageAssets/accessobox-circuit-prototype.png', alt: 'AccessoBox circuit prototype wiring' },
      { src: '/imageAssets/accessobox-cad-prototype.png', alt: 'AccessoBox CAD prototype render' },
    ],
  },
];

const personalProjects = [
  {
    title: 'Autonomous Anomaly Detection for Logging-system',
    meta: 'Project • Distributed backend • Jan 2026',
    tags: ['Flask', 'REST APIs', 'HDFS', 'Spark', 'SQL'],
    description:
      'Designed and implemented a distributed backend system using Flask REST APIs to ingest telemetry-style log data from a web client.\n\n' +
      'Built a scalable data pipeline using HDFS, Spark, and SQL to process, store, and serve structured analytic data.\n\n' +
      'Implemented logging, error handling, and API endpoints to expose system metrics and processed outputs for downstream monitoring.',
    github: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system',
    demoVideo: 'https://www.youtube.com/watch?v=TJmfjUQGjUo&t=152s',
    links: [
      { label: 'Demo Video', href: 'https://www.youtube.com/watch?v=TJmfjUQGjUo&t=152s' },
      { label: 'GitHub', href: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system' },
    ],
  },
  {
    title: 'EZ-MLAI (Automated machine learning models)',
    meta: 'Project • Backend-driven web platform • Jun 2024',
    tags: ['REST APIs', 'Data validation', 'Job execution', 'Live prediction'],
    description:
      'Developed a backend-driven web platform with REST APIs enabling dataset upload, model execution, and persistent access to results.\n\n' +
      'Implemented backend workflows for data validation, job execution, result storage, and live prediction.',
    github: 'https://github.com/kadgitub7/ez-mlai-Automated-Machine-Learning-',
    demoVideo: 'https://www.youtube.com/watch?v=PeN1xNjkYBw',
    links: [
      { label: 'Demo Video', href: 'https://www.youtube.com/watch?v=PeN1xNjkYBw' },
      { label: 'GitHub', href: 'https://github.com/kadgitub7/ez-mlai-Automated-Machine-Learning-' },
    ],
  },
];

const experience = [
  {
    title: 'Research Assistant — Computer Engineering Lab (Dr. Abdelhadi), McMaster University',
    date: 'Oct 2025 - Present',
    icon: '/imageAssets/HADI_Labs_Logo.png',
    descriptionLines: [
      'Optimized constrained Linux evaluation workflows for CaImAn by building reproducible benchmark runs across throughput, memory, and latency profiles.',
      'Executed comparative system studies to isolate bottlenecks, then translated findings into deployment-ready trade-off guidance for compute vs. accuracy constraints.',
      'Documented architecture, experiment design, and recommendation pathways so results could be reused quickly by collaborators and incoming researchers.',
    ],
  },
  {
    title: 'Research Assistant — Electrical & Computer Engineering Lab (Dr. Jamal Deen), McMaster University',
    date: 'Jun 2023 - Sep 2023',
    icon: '/imageAssets/McMaster_Logo.jpg',
    descriptionLines: [
      'Built and tested microcontroller-driven sensing experiments, improving reliability of data collection during iterative lab trials.',
      'Collaborated with graduate researchers on flexible temperature sensor studies and contributed to peer-reviewed publication outputs.',
    ],
  },
];



const skills = {
  S: [
    {
      name: 'Python',
      blurb: 'Primary tool for research automation, data processing, and experiment analytics.',
      meaning: 'Python is my default language for building reproducible engineering workflows quickly.',
      usage: 'I used Python scripts to benchmark Linux workloads, parse experiment outputs, and generate decision-ready summaries for collaborators.',
      evidence: [{ label: 'Autonomous Anomaly Detection (GitHub)', href: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system' }],
    },
    {
      name: 'Embedded Systems',
      blurb: 'Applied in accessibility-focused hardware builds with integrated electronics and actuator control.',
      meaning: 'Embedded systems is where I combine circuits, firmware, and physical constraints into practical devices.',
      usage: 'I implemented button-driven control logic, integrated servo wiring, and iterated hardware behavior for reliable user interaction.',
      evidence: [
        { label: 'AccessoBox Capstone (GitHub)', href: 'https://github.com/kadgitub7/AccessoBox-Source-Code-Capstone-project-Year-1/tree/main' },
        { label: 'AccessoBox Demo Video', href: 'https://youtube.com/shorts/jYOuo-QSWQE?feature=share' },
      ],
    },
    {
      name: 'Verilog',
      blurb: 'Strong foundation in digital logic implementation and simulation.',
      meaning: 'Verilog is my core HDL for expressing and validating digital hardware behavior.',
      usage: 'I used Verilog in architecture-focused coursework to reason about datapaths, state machines, and timing-driven logic correctness.',
      evidence: [{ label: 'Engineering coursework at McMaster', href: 'https://www.eng.mcmaster.ca/' }],
    },
  ],
  A: [
    {
      name: 'FPGA',
      blurb: 'Hands-on exposure to FPGA flow from logic mapping to prototype validation.',
      meaning: 'FPGA development lets me test hardware ideas quickly before committing to fixed implementations.',
      usage: 'I worked through synthesis/debug cycles and validated digital logic behavior in lab-style hardware workflows.',
      evidence: [{ label: 'Engineering coursework at McMaster', href: 'https://www.eng.mcmaster.ca/' }],
    },
    {
      name: 'Computer Architecture',
      blurb: 'Solid understanding of datapaths, memory movement, and low-level trade-offs.',
      meaning: 'Computer architecture helps me reason about performance bottlenecks from first principles.',
      usage: 'I apply architecture thinking when interpreting throughput/latency results and when balancing compute-vs-accuracy deployment decisions.',
      evidence: [{ label: 'Research Assistant experience', href: 'https://www.mcmaster.ca/' }],
    },
    {
      name: 'Data Visualization',
      blurb: 'Uses clear visual summaries to communicate benchmarks and experiment outcomes.',
      meaning: 'Data visualization is how I turn technical results into decisions stakeholders can act on.',
      usage: 'I built readable summaries for benchmark and experiment outputs so collaborators could quickly compare system trade-offs.',
      evidence: [{ label: 'Research Assistant experience', href: 'https://www.mcmaster.ca/' }],
    },
  ],
  B: [
    {
      name: 'REST APIs',
      blurb: 'Built backend endpoints for ingestion and analytics workflows.',
      meaning: 'REST APIs are my preferred interface for dependable data exchange between client, backend, and analytics services.',
      usage: 'I designed endpoints for telemetry ingestion, metric retrieval, and downstream monitoring integrations.',
      evidence: [
        { label: 'Anomaly Detection project', href: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system' },
        { label: 'EZ-MLAI project', href: 'https://github.com/kadgitub7/ez-mlai-Automated-Machine-Learning-' },
      ],
    },
    {
      name: 'Flask',
      blurb: 'Used to ship backend services for telemetry/log ingestion and metrics delivery.',
      meaning: 'Flask helps me build lightweight backend services fast while keeping routing and service logic explicit.',
      usage: 'I implemented project APIs, request handling, and service wiring for log processing and model-serving style workflows.',
      evidence: [{ label: 'Anomaly Detection project', href: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system' }],
    },
    {
      name: 'SQL',
      blurb: 'Applies relational querying for processed analytics data and reporting.',
      meaning: 'SQL is the language I use to turn raw processed outputs into filterable, decision-ready views.',
      usage: 'I used SQL in data pipelines to query processed telemetry, generate summaries, and support analytics endpoints.',
      evidence: [{ label: 'Anomaly Detection project', href: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system' }],
    },
  ],
  C: [
    {
      name: 'VHDL',
      blurb: 'Working familiarity from coursework and exploratory digital design projects.',
      meaning: 'VHDL broadened my HDL fluency and helped me compare different hardware description styles.',
      usage: 'I used VHDL in coursework to implement and test basic digital modules while strengthening simulation discipline.',
      evidence: [{ label: 'Engineering coursework at McMaster', href: 'https://www.eng.mcmaster.ca/' }],
    },
    {
      name: 'SoC Design',
      blurb: 'Early exposure to system-level integration concepts with growing practical depth.',
      meaning: 'SoC design connects processing, memory, and peripherals into one coherent hardware system.',
      usage: 'I explored SoC-level trade-offs through architecture-focused learning and hardware integration activities.',
      evidence: [{ label: 'Engineering coursework at McMaster', href: 'https://www.eng.mcmaster.ca/' }],
    },
    {
      name: 'Spark/HDFS',
      blurb: 'Project experience with distributed processing and storage for analytics pipelines.',
      meaning: 'Spark/HDFS let me scale data processing beyond single-machine workflows.',
      usage: 'I implemented ingestion-to-processing pipelines that used HDFS for storage and Spark for distributed computation.',
      evidence: [
        { label: 'Anomaly Detection project', href: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system' },
        { label: 'Anomaly Detection demo', href: 'https://www.youtube.com/watch?v=TJmfjUQGjUo&t=152s' },
      ],
    },
  ],
};

function renderEmphasizedText(line) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${part}-${index}`} className="bio-emphasis">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

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
    year: '2026',
    title: 'Autonomous Anomaly Detection for Logging-system',
    detail: 'Designed a distributed backend and data pipeline for telemetry-style log ingestion, processing, and monitoring.',
  },
  {
    year: '2025–Present',
    title: 'Research Assistant — Computer Engineering Lab (Dr. Abdelhadi), McMaster University',
    detail: 'Evaluated CaImAn on constrained Linux systems and documented performance trade-offs for deployment feasibility.',
  },
  {
    year: '2025',
    title: 'Peer-reviewed publications (co-author)',
    detail: 'Co-authored publications on nickel oxide/graphene flexible temperature sensing (Advanced Materials Technologies; Sensors and Actuators A: Physical).',
  },
  {
    year: '2025–2029',
    title: 'Bachelor of Engineering Co-op (BEng) — Engineering 1, McMaster University',
    detail: 'GPA: 12.0. Entrance Scholarship: $3,500.',
  },
  {
    year: '2023',
    title: 'Research Assistant — Electrical & Computer Engineering Lab (Dr. Jamal Deen), McMaster University',
    detail: 'Conducted experimental and sensor-based work using microcontrollers and electronic components; contributed to peer-reviewed publications.',
  },
];



const blogPosts = [
  {
    date: 'Coming soon',
    topic: 'LinkedIn post — Systems benchmarking notes',
    content:
      'I’ll be publishing short technical posts here (mirroring my LinkedIn) on constrained-system benchmarking, deployment trade-offs, and practical engineering notes. Links will be added once published.',
  },
  {
    date: 'Coming soon',
    topic: 'LinkedIn post — Building distributed pipelines',
    content:
      'A brief write-up on designing REST ingestion, telemetry-style log modeling, and processing workflows with HDFS/Spark/SQL.',
  },
  {
    date: 'Coming soon',
    topic: 'LinkedIn post — Embedded prototyping lessons',
    content:
      'A short reflection on staged prototyping, wiring validation, and how we iterated AccessoBox toward a demo-ready build.',
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
                    {p.images?.length ? (
                      <div className="project-thumb-wrap">
                        <img
                          src={p.images[0].src}
                          alt={p.images[0].alt}
                          className="project-thumb"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : null}
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
                  <div className="hero-photo-wrap">
                    <img src={profile.photo} alt="Kadhir Ponnambalam" className="profile-photo" />
                  </div>
                  <div className="hero-text-wrap">
                    {profile.aboutLines.map((line) => (
                      <p key={line} className="bio-line">
                        {renderEmphasizedText(line)}
                      </p>
                    ))}
                  </div>
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
          <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            {selectedProject.images?.length ? (
              <div className="modal-hero">
                <img
                  src={selectedProject.images[0].src}
                  alt={selectedProject.images[0].alt}
                  className="modal-hero-image"
                />
              </div>
            ) : null}
            <h2>{selectedProject.title}</h2>
            <p className="modal-intro">{selectedProject.description}</p>

            {selectedProject.caseStudy && (
              <div className="case-study-wrap">
                <h3>1) Motivation</h3>
                <p>{selectedProject.caseStudy.motivation}</p>

                <h3>2) 3D Modeling and Circuitry Prototypes</h3>
                <ul className="case-study-list">
                  {selectedProject.caseStudy.prototypingNarrative.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {selectedProject.images?.length ? (
                  <div className="project-image-gallery">
                    {selectedProject.images.map((image) => (
                      <figure key={image.src} className="project-image-card">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="project-image"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.parentElement.style.display = 'none';
                          }}
                        />
                        <figcaption>{image.alt}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state" style={{ marginTop: '0.85rem' }}>
                    Prototype images are not currently available in this build.
                  </div>
                )}

                <h3>3) Mechanism Flowchart, Demo Video, and Device Explanation</h3>
                <pre className="flowchart-block">
{`[Button Press]
      ↓
[Read Input + Lid State]
      ↓
[Toggle Open/Close State]
      ↓
[Rotate Servo]
      ↓
[Move Lid to Target Position]
      ↓
[Return to Ready State]`}
                </pre>
                <ul className="case-study-list">
                  {selectedProject.caseStudy.mechanismFlow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
                <p>{selectedProject.caseStudy.demoExplanation}</p>

                <h3>4) Skills</h3>
                <ul className="case-study-list">
                  {selectedProject.caseStudy.skills.map((skill) => (
                    <li key={skill.name}>
                      <strong>{skill.name}:</strong> {skill.detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
            <div className="skill-detail-grid">
              <article className="skill-detail-card">
                <h3>What this means</h3>
                <p>{selectedSkill.meaning}</p>
              </article>
              <article className="skill-detail-card">
                <h3>How I used it</h3>
                <p>{selectedSkill.usage}</p>
              </article>
            </div>
            {selectedSkill.evidence?.length ? (
              <div className="skill-links-block">
                <h3>Where I implemented this</h3>
                <div className="modal-links">
                  {selectedSkill.evidence.map((item) => (
                    <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

