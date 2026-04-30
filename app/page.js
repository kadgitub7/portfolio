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
  'I benchmark **performance**, **memory usage**, and **throughput**, and evaluate engineering trade-offs between **compute**, **latency**, and **accuracy** for deployment feasibility.',
  'I have contributed to **peer-reviewed publications** in flexible temperature sensing through experimental, sensor-based work with **microcontrollers** and **electronics**.',
  'I am seeking hands-on engineering roles where I can grow in **embedded systems**, **FPGA development**, **backend/system tooling**, and applied **hardware-adjacent development**.',
  ],
  pills: ['FPGA', 'Verilog', 'Computer Architecture', 'Embedded Systems', 'Python'],
  photo: '/imageAssets/Kadhir_Ponnambalam_Sketch.png',
};

const projects = {
  embeddedSystems: [
    {
      title: 'Electronically Controlled Mountable Storage System (AccessoBox)',
      meta: 'Embedded Systems • Accessibility Engineering • 4 months',
      tags: ['Arduino', 'Embedded Systems', 'CAD', 'C Programming'],
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
  ],

  fpgaAndDigitalDesign: [
    {
      title: 'Pipelined Matrix Multiplier with Arduino Integration',
      meta: 'FPGA / Digital Design • Hardware Acceleration • Oct 2025',
      tags: ['Verilog', 'FPGA', 'Pipelining', 'Arduino'],
      description:
        'Designed and implemented a pipelined matrix multiplication accelerator with Arduino integration for external interfacing and validation.',
      demoVideo: 'https://lnkd.in/ggQTuggi',
      links: [
        { label: 'Demo Video', href: 'https://lnkd.in/ggQTuggi' },
      ],
    },
    {
      title: '4-bit Even Parity Generator',
      meta: 'Digital Logic Project • FPGA Foundations • Mar 2025',
      tags: ['Verilog', 'Boolean Logic', 'Digital Circuits'],
      description:
        'Implemented and verified a 4-bit even parity generator while learning foundational FPGA and digital logic concepts.',
    },
    {
      title: '7-Segment Display Decoder',
      meta: 'Digital Logic Project • FPGA Foundations • Mar 2025',
      tags: ['Verilog', 'Digital Logic', 'Combinational Circuits'],
      description:
        'Built and simulated a seven-segment display decoder to strengthen understanding of combinational logic design and FPGA-oriented implementation.',
    },
  ],

  backendAndDistributedSystems: [
    {
      title: 'Autonomous Anomaly Detection for Logging-system',
      meta: 'Distributed Backend • Jan 2026',
      tags: ['Flask', 'REST APIs', 'HDFS', 'Spark', 'SQL'],
      description:
        'Designed and implemented a distributed backend system using Flask REST APIs to ingest telemetry-style log data from a web client.',
      github: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system',
      demoVideo: 'https://www.youtube.com/watch?v=TJmfjUQGjUo&t=152s',
      links: [
        { label: 'Demo Video', href: 'https://www.youtube.com/watch?v=TJmfjUQGjUo&t=152s' },
        { label: 'GitHub', href: 'https://github.com/kadgitub7/Anomaly-detection-for-Logging-system' },
      ],
    },
  ],

  machineLearningAndDataSystems: [
    {
      title: 'EZ-MLAI (Automated Machine Learning Models)',
      meta: 'ML Platform • Jun 2024',
      tags: ['REST APIs', 'Machine Learning', 'Backend Systems'],
      description:
        'Developed a backend-driven ML platform enabling dataset upload, automated model execution, result storage, and live prediction workflows.',
      github: 'https://github.com/kadgitub7/ez-mlai-Automated-Machine-Learning-',
      demoVideo: 'https://www.youtube.com/watch?v=PeN1xNjkYBw',
      links: [
        { label: 'Demo Video', href: 'https://www.youtube.com/watch?v=PeN1xNjkYBw' },
        { label: 'GitHub', href: 'https://github.com/kadgitub7/ez-mlai-Automated-Machine-Learning-' },
      ],
    },
  ],
};

const education = {
  title: 'McMaster University — Bachelor of Engineering (Co-op)',
  date: 'Sep 2025 - Apr 2029 (Expected)',
  icon: '/imageAssets/McMaster_Logo.jpg',
  gpa: '4.0',
  program: 'Computer Engineering',
  focus: 'Embedded Systems, FPGA Design, Hardware/Software Systems',
  areasOfStudy: 'Computer Architecture, Digital Logic, Embedded Systems, Backend Systems',
};

const experience = [
  {
    title: 'Research Assistant — Computer Engineering Lab (Dr. Abdelhadi), McMaster University',
    date: 'Oct 2025 - Present',
    icon: '/imageAssets/HADI_Labs_Logo.png',
    descriptionLines: [
      'TODO: Add quantifiable details about benchmark workflows (e.g., number of profiles tested, specific tools used)',
      'TODO: Specify metrics from system studies (e.g., number of configurations, specific bottlenecks identified, measurable performance improvements)',
      'TODO: Add concrete outcomes from documentation work (e.g., how many team members used results, adoption impact)',
    ],
  },
  {
    title: 'Research Assistant — Electrical & Computer Engineering Lab (Dr. Jamal Deen), McMaster University',
    date: 'Jun 2023 - Sep 2023',
    icon: '/imageAssets/McMaster_Logo.jpg',
    descriptionLines: [
      'TODO: Provide specific reliability metrics and test parameters for sensor firmware validation',
      'TODO: Add quantifiable improvements to sensor performance (percentages, specific parameters improved)',
      'TODO: Confirm publication details (titles, venues, authorship status)',
      'TODO: Specify number of collaborators and their contributions',
    ],
  },
  {
    title: 'Research Assistant — Natural Intelligence & Computational Detection Systems, McMaster University',
    date: 'Jan 2024 - Present',
    icon: '/imageAssets/McMaster_Logo.jpg',
    descriptionLines: [
      'TODO: Quantify improvements to arrhythmia detection algorithm (accuracy %, sensitivity metrics, specific parameters improved)',
      'TODO: Define scope of CDS approach development (methods tested, iterations, validation approach)',
      'TODO: Add measurable outcomes or deliverables from this research position',
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
  flexibleElectronicsAndSensors: [
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

  dataAnalyticsAndSpatialAnalysis: [
    {
      title: 'Utilizing spatial analysis to identify correlations between plant species and biological variety',
      authors: 'STEM Fellowship Journal',
      journal: 'STEM Fellowship Journal | Vol. 10, Issue 1',
      year: 2024,
      link: 'https://drive.google.com/file/d/1FQdiLhWUZClTKJGZopIoWdu7cKeh5VWF/view',
      citation: 'STEM Fellowship Journal. (2024). Utilizing spatial analysis to identify correlations between plant species and biological variety. Vol. 10, Issue 1. https://doi.org/10.17975/sfj-2024-004',
      blurb: 'The paper uses spatial correlation techniques to link plant biodiversity with environmental variables. It provides a framework for data-driven conservation strategies and biodiversity management.',
    },
  ],

  socioeconomicDataAnalysis: [
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



const honours = [
  {
    year: '2024',
    detail: 'Jan 2024 — STEM Fellowship High School Big Data Challenge National Finalist',
    title: 'Selected as Top 10 in Canada for paper: Utilizing Spatial Analysis to Identify Correlations between Plant Species and Biological Variety.',
    link: 'https://www.stemfellowship.org/hsbdc-projects/2023',
  },
  {
    year: '2023',
    detail: 'Jan 2023 — STEM Fellowship High School Big Data Challenge National Finalist',
    title: 'Selected as Top 10 in Canada for paper: Investigating the correlation between housing factors and life satisfaction.',
    link: 'https://www.stemfellowship.org/hsbdc-projects/2022',
  },
  {
    year: '2023',
    detail: 'May 2023 — Canada Wide Science Fair Silver Medalist',
    title: 'Awarded Silver Medal for project: Electrotaxis of the Tardigrade Species Hypsibius sp',
    link: 'https://youthscience.ca/wp-content/uploads/2023/05/CWSF2023-Award-Results-Scholarships-EN.pdf',
  },
  {
    year: '2022',
    detail: 'May 2022 — Canada Wide Science Fair Silver Medalist',
    title: 'Awarded Silver Medal for project: Effect Of Electrical Field On Tardigrades In A Microfluidic Environment.',
    link: 'https://youthscience.ca/wp-content/uploads/2022/05/CWSF-2022-Award-Scholarship-Results-EN.pdf',
  },
  {
    year: '2023',
    detail: 'Mar 2023 — McMaster University Faculty of Engineering Scholarship',
    title: '$3,500 scholarship awarded upon entry into the Computer Engineering program.',
    link: 'https://www.mcmaster.ca/',
  },
  {
    year: '2021',
    detail: 'Mar 2021 — Canada Wide Science Fair Finalist',
    title: 'Selected as finalist by Bay Area Science and Engineering Fair for: Investigation of the Water Vapor Collection Efficiency of Various Household Materials.',
    link: 'https://www.basef.ca/past-fairs/basef2021/2021-award-winners/',
  },
  {
    year: '2022',
    detail: 'Oct 2022 — Innovation Nation Junior STEM Star Award',
    title: 'Awarded 3rd place (Junior STEM Star Award) amongst high school and university student projects.',
    link: 'https://www.csii.ca/innovation-nation/past-winners',
  },
  {
    year: '2022',
    detail: 'Nov 2022 — RCM Level 7 Theory and Practical First Class Honors',
    title: 'Achieved Royal Conservatory of Music Level 7 Theory and Practical certification with First Class Honors.',
    link: 'https://www.rcmusic.com/',
  },
  {
    year: '2025',
    detail: 'Jan 2025 — Co-author Publications',
    title: 'Published peer-reviewed research on nickel oxide/graphene flexible temperature sensing in Advanced Materials Technologies and Sensors & Actuators A: Physical.',
    link: 'https://advanced.onlinelibrary.wiley.com/doi/pdfdirect/10.1002/admt.202500060',
  },
];


const blogPosts = [
  {
    date: 'Sep 3, 2025',
    topic: 'Summer update: publications, coursework, and projects',
    content:
      'Published two research papers, shared first-year engineering study resources, and documented project builds including EZ-MLAI and SQL/Neural Network work.',
    links: [
      { label: 'Paper 1: Nickel Oxide/Graphene Composite Sensor', href: 'https://lnkd.in/gGT8DyJm' },
      { label: 'Paper 2: Nickel oxide/graphene-based temperature sensor', href: 'https://lnkd.in/g2MmXKWU' },
      { label: 'Calculus 2 (Khan Academy)', href: 'https://lnkd.in/grv33awG' },
      { label: 'Linear Algebra (Khan Academy)', href: 'https://lnkd.in/gyTYsVJ9' },
      { label: 'CS50 Intro to Computer Science', href: 'https://lnkd.in/gxVmcxSp' },
      { label: 'Odin Foundations', href: 'https://lnkd.in/gzzSPxTm' },
      { label: 'AI Chip Accelerators series', href: 'https://lnkd.in/gYN2RRRH' },
      { label: 'EZ-MLAI GitHub', href: 'https://lnkd.in/gUiiPKgE' },
      { label: 'EZ-MLAI YouTube demo', href: 'https://lnkd.in/gwrk2teb' },
      { label: 'SQL/Neural Network GitHub', href: 'https://lnkd.in/gg3rZByS' },
      { label: 'SQL/Neural Network YouTube demo', href: 'https://lnkd.in/gZiqd_Za' },
      { label: 'AI Chip Cost Estimator GitHub', href: 'https://lnkd.in/gisQUGuq' },
    ],
  },
  {
    date: 'Oct 7, 2025',
    topic: 'Research start, matrix multiplier build, and MVP prototyping',
    content:
      'Started a volunteer research assistant role at McMaster under Dr. Abdelhadi, built a pipelined matrix multiplier with Arduino integration, and launched multiple Base44 MVP prototypes.',
    links: [
      { label: 'Pipelined Matrix Multiplier GitHub', href: 'https://lnkd.in/g4wdHiV6' },
      { label: 'Pipelined Matrix Multiplier YouTube', href: 'https://lnkd.in/ggQTuggi' },
      { label: 'Base44 Prototype 1', href: 'https://lnkd.in/gbA4v_Qv' },
      { label: 'Base44 Prototype 2', href: 'https://lnkd.in/gw9XxVTg' },
      { label: 'Base44 Prototype 3', href: 'https://lnkd.in/gCih_eVu' },
      { label: 'Base44 Prototype 4', href: 'https://lnkd.in/g-Uh5ptg' },
    ],
  },
  {
    date: 'Feb 20, 2026',
    topic: 'Post-exam update: distributed anomaly detection project',
    content:
      'After first-semester engineering exams, I built a full-stack log processing system using HDFS + SQL + ML classification for anomaly detection and expanded my Docker/full-stack integration skills.',
    links: [
      { label: 'Project GitHub', href: 'https://lnkd.in/eWdcERhc' },
      { label: 'YouTube demo', href: 'https://lnkd.in/eBf5MUj7' },
    ],
  },
  {
    date: 'Mar 20, 2025',
    topic: 'Hackathons + FPGA foundations sprint',
    content:
      'Attended first hackathons (UTRA Hacks and Mac-a-Thon), built Glitch-E and GemAds, and started deeper FPGA fundamentals through Boolean algebra/digital logic projects.',
    links: [
      { label: 'Glitch-E Devpost', href: 'https://lnkd.in/efbM2fur' },
      { label: 'GemAds Devpost', href: 'https://lnkd.in/eRfiFDqa' },
      { label: '4-bit Even Parity Generator', href: 'https://lnkd.in/erpV77kW' },
      { label: '7 Segment Display Decoder', href: 'https://lnkd.in/ed_U9MQp' },
    ],
  },
];

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'skills', label: 'Skills' },
  { id: 'honours', label: 'Honours' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Page() {
  const [activeId, setActiveId] = useState('home');
  const [projectTab, setProjectTab] = useState('embeddedSystems');
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

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        setSelectedSkill(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const activeSection = (() => {
    switch (activeId) {
      case 'projects':
        const currentProjects = projects[projectTab] || [];
        return (
          <section className="section" id="projects">
            <div className="section-item">Projects</div>
            <div className="description">
              Technical projects across embedded systems, FPGA design, backend systems, and machine learning infrastructure.
            </div>

            <div className="project-tabs">
              {Object.keys(projects).map((category) => (
                <button
                  key={category}
                  className={projectTab === category ? 'tab active' : 'tab'}
                  onClick={() => setProjectTab(category)}
                >
                  {category
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (s) => s.toUpperCase())}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {currentProjects.map((p) => (
                <article
                  key={p.title}
                  className="project-card"
                  onClick={() => setSelectedProject(p)}
                >
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
                  <div className="project-title">{p.title}</div>
                  <div className="project-meta">{p.meta}</div>

                  <div className="pill-row" style={{ marginTop: 0 }}>
                    {p.tags.map((t) => (
                      <span key={t} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links" style={{ marginTop: '0.85rem' }}>
                    {p.links?.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
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
              Research experience focused on engineering experimentation, system evaluation, technical documentation, and applied hardware-adjacent work.
            </div>

            <div className="education-card" style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                {education.icon && (
                  <img
                    src={education.icon}
                    alt=""
                    className="experience-icon"
                    style={{ width: '60px', height: '60px', flexShrink: 0 }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>{education.title}</div>
                  <div style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1rem' }}>{education.date}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <div><strong>Program:</strong> {education.program}</div>
                    <div><strong>GPA:</strong> {education.gpa}</div>
                    <div><strong>Focus Areas:</strong> {education.focus}</div>
                    <div><strong>Key Coursework:</strong> {education.areasOfStudy}</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>Professional Experience</h3>

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
              <h3>Flexible Electronics & Sensors</h3>
              {research.flexibleElectronicsAndSensors.map((paper) => (
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
              <h3>Data Analytics & Spatial Analysis</h3>
              {research.dataAnalyticsAndSpatialAnalysis.map((paper) => (
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
              <h3>Socioeconomic Data Analysis</h3>
              {research.socioeconomicDataAnalysis.map((paper) => (
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

      case 'honours':
        return (
          <section className="section" id="honours">
            <div className="section-item">Honours</div>

            <div className="timeline" style={{ marginTop: '1.2rem' }}>
              {honours.map((item, index) => (
                <div key={`${item.year}-${item.detail}-${index}`} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <div className="timeline-year">{item.detail}</div>
                    <div 
                      className="timeline-title" 
                      onClick={() => item.link && window.open(item.link, '_blank')}
                      style={{ cursor: item.link ? 'pointer' : 'default', textDecoration: item.link ? 'underline' : 'none' }}
                      role={item.link ? 'button' : 'heading'}
                    >
                      {item.title}
                    </div>
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
              LinkedIn-style updates on projects, research milestones, and technical learning sprints.
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
                    aria-expanded={isOpen}
                  >
                    <div className="blog-tab-header">
                      <div>
                        <div className="blog-date">{post.date}</div>
                        <div className="blog-topic">{post.topic}</div>
                      </div>
                      <div className="blog-toggle">{isOpen ? '−' : '+'}</div>
                    </div>

                    {isOpen && (
                      <div className="blog-content">
                        <p>{post.content}</p>
                        {post.links?.length ? (
                          <div className="blog-links">
                            {post.links.map((link) => (
                              <a
                                key={`${post.topic}-${link.href}`}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )}
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
              Send a note and I&apos;ll reply soon. (This form opens your email client via
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
                  <a
                    className="btn"
                    href="/imageAssets/KadhirPonnambalamRESUME.pdf"
                    download
                  >
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
          <div className="modal-content project-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close project details" onClick={() => setSelectedProject(null)}>×</button>
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
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {selectedProject.demoVideo && (
                <a
                  href={selectedProject.demoVideo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo Video
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {selectedSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close skill details" onClick={() => setSelectedSkill(null)}>×</button>
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

