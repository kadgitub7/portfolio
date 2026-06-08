'use client';

import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import { asset } from '../lib/asset';

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

const projectCategoryLabels = {
  embeddedSystems: 'Embedded Systems',
  fpgaAndDigitalDesign: 'FPGA & Digital Design',
  backendAndDistributedSystems: 'Backend & Distributed Systems',
  machineLearningAndDataSystems: 'Machine Learning & Data',
};

const skillCategories = [
  {
    name: 'Core Programming',
    items: ['Python', 'Verilog', 'Embedded Systems'],
  },
  {
    name: 'Hardware & Architecture',
    items: ['FPGA', 'Computer Architecture', 'VHDL', 'SoC Design'],
  },
  {
    name: 'Backend & Data',
    items: ['REST APIs', 'Flask', 'SQL', 'Spark/HDFS'],
  },
  {
    name: 'Analysis & Tools',
    items: ['Data Visualization', 'Linux Systems', 'CAD', 'Benchmarking'],
  },
  {
    name: 'Research Focus',
    items: ['Sensor Systems', 'Digital Logic', 'Prototyping', 'Publications'],
  },
];

const researchGroups = [
  { title: 'Flexible Electronics & Sensors', papers: research.flexibleElectronicsAndSensors },
  { title: 'Data Analytics & Spatial Analysis', papers: research.dataAnalyticsAndSpatialAnalysis },
  { title: 'Socioeconomic Data Analysis', papers: research.socioeconomicDataAnalysis },
];

function flattenProjects(projectMap) {
  return Object.entries(projectMap).flatMap(([key, items]) =>
    items.map((p) => ({
      ...p,
      category: projectCategoryLabels[key] || key,
    }))
  );
}

function findSkillByName(name) {
  for (const tier of Object.values(skills)) {
    const match = tier.find((s) => s.name === name);
    if (match) return match;
  }
  return null;
}

const allProjects = flattenProjects(projects);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Page() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [openBlog, setOpenBlog] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        setSelectedSkill(null);
        setResumeOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = resumeOpen || selectedProject || selectedSkill ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [resumeOpen, selectedProject, selectedSkill]);

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        <a href="#hero" className="nav-logo">K.P</a>
        <div className="nav-right">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#skills">Skills</a>
          <button type="button" className="nav-resume" onClick={() => setResumeOpen(true)}>
            Resume
          </button>
          <a href="https://github.com/kadgitub7" target="_blank" rel="noreferrer" className="nav-icon" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://ca.linkedin.com/in/kadhir-ponnambalam-3211ab261" target="_blank" rel="noreferrer" className="nav-icon" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:kadhir.ponnambalam@gmail.com" className="nav-icon" aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="profile-wrap">
            <div className="profile-square">
              <div className="profile-frame">
                <img
                  src={asset(profile.photo)}
                  alt="Kadhir Ponnambalam"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
          <div className="hero-text">
            <p className="hero-label">Computer Engineering Portfolio</p>
            <h1>
              {profile.name}
              <span className="hero-native"> ({profile.nativeName})</span>
            </h1>
            <p className="hero-degrees">BEng (Co-op) · McMaster University</p>
            <p className="hero-tagline">
              Embedded Systems · FPGA · Backend Systems · Research
            </p>
            <div className="hero-bio">
              {profile.aboutLines.map((line) => (
                <p key={line} style={{ marginBottom: '0.85rem' }}>
                  {renderEmphasizedText(line)}
                </p>
              ))}
            </div>
            <div className="hero-pills" aria-label="Technologies">
              {profile.pills.map((p) => (
                <span key={p} className="hero-pill">{p}</span>
              ))}
            </div>
            <div className="hero-ctas">
              <a href="#projects" className="btn-white">Projects</a>
              <button type="button" className="btn-outline-white" onClick={() => setResumeOpen(true)}>
                Resume
              </button>
              <a href="#contact" className="btn-outline-white">Contact</a>
            </div>
          </div>
        </div>
      </section>

      <div className="white-body">
        <div className="divider" />
        <section id="projects" className="section-block">
          <div className="container">
            <span className="section-label">Build</span>
            <h2>Projects</h2>
            <p className="section-intro">
              Technical work across embedded systems, FPGA design, backend infrastructure, and machine learning platforms.
            </p>
            <div className="projects-grid">
              {allProjects.map((p) => (
                <article
                  key={p.title}
                  className="p-card"
                  onClick={() => setSelectedProject(p)}
                  onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(p); }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="p-image">
                    {p.images?.length ? (
                      <img
                        src={asset(p.images[0].src)}
                        alt={p.images[0].alt}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    ) : (
                      <div className="p-ph"><span>{p.category}</span></div>
                    )}
                    <div className="p-overlay"><span className="p-more">More →</span></div>
                  </div>
                  <div className="p-body">
                    <div className="p-cat">{p.category}</div>
                    <div className="p-title">{p.title}</div>
                    <p className="p-desc">{p.description.split('\n\n')[0]}</p>
                    <div className="p-tags">
                      {p.tags.map((t) => <span key={t} className="p-tag">{t}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />
        <section id="experience" className="section-block">
          <div className="container">
            <span className="section-label">Professional</span>
            <h2>Experience</h2>
            <p className="section-intro">
              Research experience focused on engineering experimentation, system evaluation, technical documentation, and applied hardware-adjacent work.
            </p>
            <div className="exp-stack">
              {experience.map((e) => (
                <div key={e.title} className="exp-card">
                  {e.icon && (
                    <img src={asset(e.icon)} alt="" className="exp-icon" onError={(ev) => { ev.currentTarget.style.display = 'none'; }} />
                  )}
                  <div>
                    <div className="exp-title">{e.title}</div>
                    <div className="exp-date">{e.date}</div>
                    <ul className="exp-list">
                      {e.descriptionLines.map((line) => <li key={line}>{line}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />
        <section id="research" className="section-block">
          <div className="container">
            <span className="section-label">Publications</span>
            <h2>Research</h2>
            <p className="section-intro">
              Peer-reviewed publications and data-driven research across flexible electronics, spatial analysis, and socioeconomic modeling.
            </p>
            <div className="research-grid">
              {researchGroups.map((group) => (
                <div key={group.title} className="research-group">
                  <h3>{group.title}</h3>
                  {group.papers.map((paper) => (
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
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />
        <section id="skills" className="section-block">
          <div className="container">
            <span className="section-label">Toolkit</span>
            <h2>Skills &amp; Tools</h2>
            <p className="section-intro">
              Tools and technical areas based on current use, project exposure, and research experience.
            </p>
            <div className="skills-row">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="sk-box">
                  <div className="sk-cat">{cat.name}</div>
                  <div className="sk-tags">
                    {cat.items.map((name) => {
                      const skill = findSkillByName(name);
                      return (
                        <button
                          key={name}
                          type="button"
                          className="sk-tag"
                          onClick={() => skill && setSelectedSkill(skill)}
                          disabled={!skill}
                          title={skill ? `View details for ${name}` : name}
                        >
                          {name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />
        <section id="education" className="section-block">
          <div className="container">
            <span className="section-label">Academic</span>
            <h2>Education</h2>
            <div className="edu-grid">
              <div className="edu-card">
                <div className="edu-body">
                  <div>
                    <div className="edu-deg">{education.title}</div>
                    <a href="https://www.eng.mcmaster.ca/" target="_blank" rel="noreferrer" className="edu-school">
                      McMaster University
                    </a>
                    <div className="edu-meta">{education.date}</div>
                    <span className="edu-gpa">GPA {education.gpa}</span>
                    <p className="edu-detail"><strong>Program:</strong> {education.program}</p>
                    <p className="edu-detail"><strong>Focus:</strong> {education.focus}</p>
                  </div>
                  {education.icon && (
                    <img src={asset(education.icon)} alt="McMaster University" className="edu-logo" onError={(ev) => { ev.currentTarget.style.display = 'none'; }} />
                  )}
                </div>
              </div>
            </div>
            <div className="coursework-block">
              <strong>Relevant Coursework</strong>
              {education.areasOfStudy}
            </div>

            <span className="section-label" style={{ marginTop: '4rem', display: 'block' }}>Recognition</span>
            <h2 style={{ marginTop: '0.4rem' }}>Honours &amp; Awards</h2>
            <div className="cert-grid">
              {honours.map((item, index) => (
                <div key={`${item.year}-${item.detail}`} className="cert-card">
                  <div className="cert-left">
                    <div className="cert-n">{String(index + 1).padStart(2, '0')}</div>
                    <div>
                      <div className="cert-name">{item.title}</div>
                      <div className="cert-issuer">{item.detail}</div>
                    </div>
                  </div>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="cert-view">View ↗</a>
                  ) : (
                    <span className="cert-view" style={{ opacity: 0.4, pointerEvents: 'none' }}>—</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />
        <section id="blog" className="section-block">
          <div className="container">
            <span className="section-label">Updates</span>
            <h2>Blog</h2>
            <p className="section-intro">
              LinkedIn-style updates on projects, research milestones, and technical learning sprints.
            </p>
            <div className="blog-list">
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
                                onClick={(e) => e.stopPropagation()}
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
          </div>
        </section>

        <div className="divider" />
        <section id="contact" className="section-block">
          <div className="container">
            <span className="section-label">Get in Touch</span>
            <h2>Contact</h2>
            <p className="section-intro">
              Hamilton, ON · Open to co-op, internship, and research opportunities across Canada
            </p>
            <div className="contact-links">
              <a href="mailto:kadhir.ponnambalam@gmail.com" className="c-link">
                <MailIcon />
                kadhir.ponnambalam@gmail.com
              </a>
              <a href="https://ca.linkedin.com/in/kadhir-ponnambalam-3211ab261" target="_blank" rel="noreferrer" className="c-link">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href="https://github.com/kadgitub7" target="_blank" rel="noreferrer" className="c-link">
                <GitHubIcon />
                GitHub
              </a>
            </div>
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-inner">
          <span>Kadhir Ponnambalam — Computer Engineering</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content project-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Close project details" onClick={() => setSelectedProject(null)}>×</button>
            {selectedProject.images?.length ? (
              <div className="modal-hero">
                <img src={asset(selectedProject.images[0].src)} alt={selectedProject.images[0].alt} className="modal-hero-image" />
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
                  {selectedProject.caseStudy.prototypingNarrative.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {selectedProject.images?.length ? (
                  <div className="project-image-gallery">
                    {selectedProject.images.map((image) => (
                      <figure key={image.src} className="project-image-card">
                        <img src={asset(image.src)} alt={image.alt} loading="lazy" onError={(ev) => { ev.currentTarget.parentElement.style.display = 'none'; }} />
                        <figcaption>{image.alt}</figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}
                <h3>3) Mechanism Flow &amp; Demo</h3>
                <ul className="case-study-list">
                  {selectedProject.caseStudy.mechanismFlow.map((step) => <li key={step}>{step}</li>)}
                </ul>
                <p>{selectedProject.caseStudy.demoExplanation}</p>
                <h3>4) Skills</h3>
                <ul className="case-study-list">
                  {selectedProject.caseStudy.skills.map((skill) => (
                    <li key={skill.name}><strong>{skill.name}:</strong> {skill.detail}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="modal-links">
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {selectedProject.demoVideo && (
                <a href={selectedProject.demoVideo} target="_blank" rel="noreferrer">Demo Video</a>
              )}
              {selectedProject.links?.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" aria-label="Close skill details" onClick={() => setSelectedSkill(null)}>×</button>
            <h2>{selectedSkill.name}</h2>
            <p className="modal-intro">{selectedSkill.blurb}</p>
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
                    <a key={item.href} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {resumeOpen && (
        <div className="modal-overlay resume-modal" onClick={() => setResumeOpen(false)}>
          <div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <span>Kadhir_Ponnambalam_Resume.pdf</span>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href={asset('/imageAssets/KadhirPonnambalamRESUME.pdf')} download className="resume-download">Download ↗</a>
                <button type="button" className="modal-close" aria-label="Close resume" onClick={() => setResumeOpen(false)}>×</button>
              </div>
            </div>
            <iframe src={asset('/imageAssets/KadhirPonnambalamRESUME.pdf')} title="Kadhir Ponnambalam Resume" />
          </div>
        </div>
      )}
    </>
  );
}

