const profile = {
  name: "Hoda Ebrahimi",
  role: "Ph.D. Student in Computing Science",
  about:
    "PhD student in Computing Science at the University of Alberta (4.0 GPA), working on applied machine learning for healthcare. Day-to-day work involves Python, PyTorch, training and evaluating deep learning models on large real-world datasets, building data preprocessing pipelines, and collaborating with clinical stakeholders. Funded by the NSERC From Data To Decision (FD2D) scholarship.",
  skillCategories: [
    {
      name: "Programming",
      items: ["Python (primary)", "MATLAB", "C", "VHDL", "Assembly", "Java*", "some Bash"],
    },
    {
      name: "ML & Data",
      items: [
        "PyTorch",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "SciPy",
        "OpenCV",
        "Matplotlib",
        "Jupyter",
      ],
    },
    {
      name: "Methods",
      items: [
        "Deep learning (CNNs, Transformers, U-Net variants)",
        "Ensemble methods",
        "Transfer learning",
        "Uncertainty quantification",
        "Evaluation metric design",
        "Semi-supervised learning",
        "Knowledge distillation",
        "GANs",
      ],
    },
    {
      name: "Medical Imaging",
      items: [
        "3D Slicer",
        "ITK-SNAP",
        "SimpleITK",
        "nnUNet",
        "TotalSegmentator",
        "Vista3D",
        "MedSAM",
      ],
    },
    {
      name: "Infrastructure",
      items: [
        "AWS (AppStream, S3)",
        "Docker",
        "Git/GitHub",
        "SLURM on HPC clusters",
        "Distributed training (DDP)",
      ],
    },
    {
      name: "Hardware/EDA",
      items: [
        "Altium Designer",
        "OrCAD PSpice",
        "Proteus Design Suite",
        "Code Vision",
        "Xilinx ISE/Vivado",
        "ADS",
      ],
    },
    {
      name: "IDEs & Tools",
      items: ["PyCharm", "Jupyter", "VS Code", "Google Colab"],
    },
    {
      name: "Typesetting",
      items: ["LaTeX", "Microsoft Office"],
    },
    {
      name: "OS",
      items: ["Windows", "Linux"],
    },
  ],
  education: [
    {
      title: "University of Alberta - Edmonton, Alberta",
      subtitle: "Ph.D. in Computing Science, GPA: 4.0/4.0",
      date: "Sep. 2023 – Present",
      bullets: [
        "Supervisors: Dr. J. Ross Mitchell and Dr. Randy Goebel",
        "NSERC From Data To Decision (FD2D) Scholarship – CAD $30,000/year (2025–2027)",
      ],
    },
    {
      title: "Iran University of Science and Technology - Tehran, Iran",
      subtitle:
        "M.Sc. in Electrical Engineering - Digital Electronic Systems, GPA: 18.31/20.0 (3.77/4.0)",
      date: "Sep. 2019 – May 2022",
      bullets: [
        "Thesis: Action Recognition in Still Images using Attention Mechanism",
        "Supervisor: Dr. Sh. B. Shokouhi",
      ],
    },
    {
      title: "K. N. Toosi University of Technology - Tehran, Iran",
      subtitle: "B.Sc. in Electrical Engineering – Electronics, GPA: 18.50/20.0 (3.80/4.0)",
      date: "Sep. 2015 – Sep. 2019",
      bullets: [
        "Thesis: Design and Construction of Fuel Injection and Ignition System for Single Cylinder Internal Combustion Engine",
        "Supervisor: Dr. Amir Mousavi Nia",
        "Award: Distinguished student commendation letter from the president of KNTU",
      ],
    },
  ],
  research: [
    {
      title: "Semi-Supervised Segmentation of Intestinal Tract on CT",
      subtitle: "PhD Research",
      date: "Sep. 2024 – Present",
      bullets: [
        "Designed a label-efficiency study on RAOS CT (176 train / 44 val / 67 held-out test) comparing a hard-GT nnU-Net baseline against a custom dual-loss trainer that adds MACCHIatO soft pseudo-labels, evaluating Dice on a single intestinal-tract class formed by merging colon, small bowel, and duodenum at 10/50/100% labeled data.",
        "Diagnosed a ~1.0 Dice-pt regression in the custom training pipeline using controlled λ=0 ablations, decomposing it into two near-equal causes (per-sample vs. batch Dice; custom vs. stock spatial augmentation) and closing the gap to within noise of the stock baseline, thereby isolating the soft-label contribution from pipeline artifacts.",
        "Implemented PCGrad gradient surgery to resolve the hard/soft objective conflict and instrumented per-update gradient-conflict measurement (rising 59%→86% as labeled data shrank); through controlled ablation, traced a rigorous negative result to systematic under-confidence in the pseudo-labels rather than to gradient conflict, redirecting the research toward source-reliability weighting.",
        "Built a custom nnU-Net v2 preprocessing pipeline for overlapping multi-class soft labels with Blosc2 storage and a semi-supervised loader guaranteeing labeled/unlabeled batch composition.",
        "Skills: PyTorch, nnU-Net v2, semi-supervised learning, multi-task gradient methods, ablation design, SLURM/HPC.",
      ],
    },
    {
      title: "Cloud-Based Medical Image Annotation Platform",
      subtitle: "PhD Research",
      date: "Jan. 2024 – Nov. 2025",
      bullets: [
        "Built and deployed a 3D Slicer-based annotation platform on AWS AppStream with S3-backed storage, user-assignment scripts, and synchronized local–cloud data flow; architected for multi-reviewer physician annotation and validated end-to-end on AppStream.",
        "Built a web interface that drove 3D Slicer's Python API to run Segment Editor operations — morphological expand/shrink, thresholding, and related edits — so reviewers could apply them in-browser instead of through the manual desktop tool.",
        "Built a metadata-curation pipeline (NIfTI headers and study-level JSON) to organize a CT enterography archive of 1,000+ studies, replacing a manual curation step.",
        "Skills: AWS (AppStream, S3), 3D Slicer, Python API, NIfTI/DICOM, Python, cross-functional collaboration.",
      ],
    },
    {
      title: "Foundation-Model Ensemble for Medical Image Pseudo-Labels",
      subtitle: "PhD Research",
      date: "2024 – Present",
      bullets: [
        "Ran inference with five pretrained foundation models (TotalSegmentator, Vista3D, SuPreM nnU-Net, SuPreM Swin-UNETR, SegVol) on 2,000 CT enterography scans and fused outputs via MACCHIatO soft-label consensus.",
        "Found that the resulting soft pseudo-labels were neutral-to-harmful across all label fractions, evidence that consensus fusion does not overcome intrinsic label-quality limits; implemented a Bernoulli-variance uncertainty score to rank cases by difficulty for prioritized clinician review.",
        "Skills: Foundation models, ensemble methods, uncertainty quantification, PyTorch, medical imaging.",
      ],
    },
    {
      title: "Medical Image Comparison Tool",
      subtitle: "PhD Research",
      date: "Winter 2026",
      bullets: [
        "Developed a cloud-based synchronized dual ITK-SNAP window system for blinded physician evaluation of human vs. AI segmentations across 4 brain lesion types.",
        "Implemented an automated case loading and configuration pipeline, eliminating manual setup and enabling physicians to evaluate segmentation quality without technical overhead.",
        "Skills: ITK-SNAP, Python, cloud deployment, evaluation study design.",
      ],
    },
    {
      title: "Computer Vision Lab, IUST",
      subtitle: "Research Assistant",
      date: "Sep. 2019 – May 2022",
      bullets: [
        "Deep learning for computer vision — image classification (Transformers, CNNs), object detection, segmentation, pose estimation, action and gait recognition, knowledge distillation, ensemble and self-supervised learning; medical image processing (breast-tumor classification in MRI).",
      ],
    },
    {
      title: "ICD Lab, KNTU",
      subtitle: "Research Assistant",
      date: "Jun. – Sep. 2019",
      bullets: [
        "Implemented an ECU simulator for fuel injection and ignition using AVR microcontrollers, and designed the accompanying circuit in Altium Designer to interface with a motor simulator.",
      ],
    },
  ],
  personalProjects: [
    {
      title: "Semantic Image Search Engine",
      subtitle: "Personal Project",
      date: "2025",
      github: "https://github.com/hodaebrahimi/clip-image-search",
      bullets: [
        "Built a semantic image retrieval system using OpenAI's CLIP to support both text-to-image and image-to-image search, leveraging CLIP's joint vision–language embedding space.",
        "Implemented a FAISS IndexFlatIP vector index over L2-normalized embeddings for efficient cosine-similarity search across the indexed image set.",
        "Wrapped the end-to-end pipeline (dataset download → batch embedding generation → index building → query) in a Gradio web UI with separate text and image query tabs.",
      ],
    },
    {
      title: "Real-Time Object Detection & Tracking Pipeline",
      subtitle: "Personal Project",
      date: "2025",
      github: "https://github.com/hodaebrahimi/realtime-detection-tracker",
      bullets: [
        "Built a video analytics pipeline combining YOLOv8 detection with ByteTrack multi-object tracking (via the Supervision library), producing annotated frames with bounding boxes, track IDs, and an on-frame FPS overlay.",
        "Implemented CLI entry points for video-file processing and live webcam capture, plus a Gradio web UI for video upload with configurable model size (nano/small/medium) and detection confidence threshold.",
        "Organized the codebase into separable modules (detector, tracker, annotator, pipeline, runner) with unit tests covering each stage; supports the COCO-80 class set.",
      ],
    },
  ],
  academicProjects: [
    {
      title: "Action Recognition in Still Images using Attention Mechanism",
      subtitle: "M.Sc. Thesis | Skills: PyTorch, OpenCV, NumPy",
      date: "Sep. 2021 – May 2022",
      bullets: [
        "Trained Vision Transformer (ViT) and ResNeXt50 models on the Stanford40 dataset, a benchmark dataset for action recognition tasks.",
        "Employed ensemble learning to combine ViT and ResNeXt50, leveraging global relations captured by multi-head attention in ViT and local features learned by CNNs in ResNeXt50.",
        "Incorporated attention mechanisms to enhance the models' capability to focus on relevant regions of the input images, improving action recognition accuracy.",
        "Conducted comprehensive analysis and evaluation, achieving 94.98% mAP (~1 point above the CNN-only baseline).",
      ],
    },
    {
      title: "Breast Tumor Classification on Duke Dataset Using Ensemble Learning",
      subtitle: "Skills: PyTorch, OpenCV, NumPy",
      date: "Mar. – May 2022",
      bullets: [
        "Trained CNNs with ImageNet pre-trained weights, enhanced models by adding CBAM modules to the last layer, and employed ensemble learning with four top models on the Duke breast cancer MRI dataset, achieving 92.43% accuracy.",
        "Used dataset annotations to locate tumor-containing slices, reducing MRI dimensionality from 4D to 2D RGB images to leverage pretrained models and fit GPU memory constraints (Google Colab Tesla P100, 16GB).",
      ],
    },
    {
      title:
        "End-to-End 3D Human Pose Estimation in Still Images using a 2D-to-3D Lifting Model",
      subtitle: "Skills: PyTorch",
      date: "Fall 2023",
      bullets: [
        "Implemented a Transformer-based 2D pose estimator (TransPose) combined with a 2D-to-3D lifting MLP on the 3D Poses in the Wild dataset, identifying limitations of frozen backbone architecture for this challenging dataset.",
      ],
    },
    {
      title:
        "Applying End-to-End Edge-Enhancement GAN and Object Detector on Bosch Small Traffic Lights",
      subtitle: "Skills: PyTorch",
      date: "Fall 2020",
      bullets: [
        "Applied an object detection network combined with a super-resolution GAN for edge enhancement on the Bosch Small Traffic Lights dataset, aimed at improving accuracy and robustness of small traffic light detection.",
      ],
    },
    {
      title: "Face Generation using GAN on CelebFaces Dataset",
      subtitle: "Skills: PyTorch, OpenCV, NumPy",
      date: "Fall 2020",
      bullets: [],
    },
    {
      title:
        "Forecasting Geomagnetic Activity Indices (Kp, AE, Dst) using MLP and RBF Networks",
      subtitle: "Skills: PyTorch, NumPy, Pandas",
      date: "Fall 2020",
      bullets: [],
    },
    {
      title: "Design and Construction of Fuel Injection and Ignition System",
      subtitle: "B.Sc. Thesis | Skills: C, Code Vision, Altium Designer",
      date: "Mar. – Sep. 2019",
      bullets: [
        "Developed a control system using AVR microcontroller technology to regulate fuel injection and ignition timing in a single-cylinder internal combustion engine.",
        "Engineered signal processing algorithms to adjust air–fuel mixture for optimal engine performance and efficiency.",
        "Implemented precise timing mechanisms to deliver ignition sparks at optimal intervals, ensuring smooth engine operation.",
      ],
    },
    {
      title: "Traffic Light Control System with AVR Micro-Controller",
      subtitle: "Skills: C, Code Vision",
      date: "Fall 2017",
      bullets: [
        "Developed a traffic light control system using an AVR micro-controller programmed in C within Code Vision. Implemented program logic to simulate traffic light operation at an intersection, including red/yellow/green signal phases and pedestrian crossing requests.",
      ],
    },
    {
      title: "Implementation and Testing of AES Cipher Encryption Using FPGA",
      subtitle: "Skills: VHDL, Xilinx Vivado",
      date: "Winter 2018",
      bullets: [
        "Designed, implemented, and tested a hardware-accelerated AES cipher encryption algorithm using FPGA technology, leveraging dedicated hardware for cryptographic computations to enhance encryption performance and security.",
      ],
    },
    {
      title: "FPGA-based Keyboard Input and Graphical LCD Display System",
      subtitle: "Skills: VHDL, Xilinx Vivado, Graphical LCD",
      date: "Winter 2018",
      bullets: [
        "Developed a custom input and display system using an FPGA board, facilitating keyboard input and real-time display on a graphical LCD; demonstrated proficiency in FPGA programming, digital design, and hardware interfacing for embedded systems.",
      ],
    },
  ],
  teaching: [
    {
      title: "Introduction to Foundations of Computation I – CMPUT 174",
      subtitle: "Teaching Assistant",
      date: "Sep. – Dec. 2023, 2024",
      detail: "Conducted lab instruction, supported student inquiries, and graded assignments",
      contact: { name: "Sadaf Ahmed", href: "https://apps.ualberta.ca/directory/person/sadaf" },
    },
    {
      title: "Introduction to Computing – CMPUT 101",
      subtitle: "Teaching Assistant",
      date: "Jan. – Apr. 2024, 2025",
      detail:
        "Conducted lab instruction, supported student inquiries, graded assignments, and supervised exams",
      contact: { name: "Mark Polak", href: "https://ca.linkedin.com/in/mark-polak-phd" },
    },
  ],
  industry: [
    {
      title: "Alberta Machine Intelligence Institute (Amii)",
      subtitle: "Work-Integrated Learning, Level Up Program",
      date: "May – Jun. 2026",
      bullets: [
        "Supported an Amii scientist across Level Up startup coaching engagements: researched AI/ML approaches to each company's problem, contributed ideas during sessions, and co-produced the written recommendation reports delivered to the startups.",
      ],
    },
    {
      title: "Electronic Research & Production Co. TAKTA",
      subtitle: "R&D Intern",
      date: "Jun. – Aug. 2018",
      bullets: [
        "FPGA programming for receiver controllers and surface-mount device (SMD) soldering; hands-on hardware development and assembly.",
      ],
    },
  ],
  publications: [
    'H. Ebrahimi, et al. "Topological Agreement as a Reliability Signal for Semi-Supervised Segmentation of Intestinal Tract." In preparation (target: MICCAI 2027).',
  ],
  awards: [
    "Awarded NSERC From Data To Decision (FD2D) Scholarship providing two years of full funding at CAD $30,000/year (Fall 2025 – Spring 2027).",
    "Ranked 4th among graduating Electrical Engineering-Electronics students and selected as an Exceptionally Talented Student in the undergraduate program (2018).",
    "Qualified for admission to the master's program in Digital Electronic Systems at IUST without participating in the Iranian Universities Entrance Exam, owing to high undergraduate GPA.",
    "Awarded national graduate and undergraduate full scholarships.",
  ],
  certificates: [
    "AVR Micro-Controller Programming — IEEE Student Branch, K. N. Toosi University of Technology (Feb. 2018).",
    "MATLAB — Tehran Institute of Technology (Aug. 2016).",
  ],
  courses: {
    graduate: [
      "Machine Learning: 19.0/20.0",
      "Machine Vision: 19.5/20.0",
      "Advanced Micro-Processor: 18.8/20.0",
      "Advanced Computer Architecture: 18.5/20.0",
      "Earth Observation (U of A): 4.0/4.0",
    ],
    undergraduate: [
      "Engineering Mathematics: 19.25/20.0",
      "Engineering Probability: 19.7/20.0",
      "Digital Systems Design: 19.5/20.0",
      "Digital Signal Processing: 17.3/20.0",
      "Signals and Systems: 19.5/20.0",
      "Digital Systems Lab I: 20.0/20.0",
      "Digital Systems II: 20.0/20.0",
    ],
  },
  languages: [
    {
      title: "English",
      subtitle: "Full professional proficiency",
      date: "Nov. 2022",
      detail: "TOEFL iBT: Total = 112, Reading = 29, Listening = 29, Speaking = 27, Writing = 27.",
    },
    {
      title: "German",
      subtitle: "Intermediate (B1)",
    },
  ],
  additional: [
    "Work Authorization: Eligible to work in Canada (full-time, no restrictions) until May 30, 2027.",
  ],
  researchInterests: [
    "Medical Image Analysis",
    "Deep Learning for Healthcare",
    "Uncertainty Quantification",
    "Computer Vision / Image Processing",
    "Human-in-the-Loop Systems",
    "Foundation Models",
    "Image Segmentation",
    "Generative Models",
  ],
  contactText:
    "Open to research collaborations, internships, and AI-for-healthcare opportunities.",
  contacts: [
    { label: "Email", href: "mailto:hodaebrahimi75@gmail.com" },
    { label: "Phone", href: "tel:+17807162521" },
    { label: "Lab Website", href: "https://sites.ualberta.ca/~jmitche2/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hoda-ebrahimi-88a49a239/",
    },
    { label: "GitHub", href: "https://github.com/hodaebrahimi" },
  ],
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node && typeof value === "string") node.textContent = value;
};

const createMeta = (subtitle, date) => {
  if (!subtitle && !date) return "";
  if (subtitle && date) return `${subtitle} | ${date}`;
  return subtitle || date;
};

const fillList = (id, items) => {
  const node = document.getElementById(id);
  if (!node) return;
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    node.appendChild(li);
  });
};

const renderBullets = (bullets) =>
  bullets && bullets.length
    ? `<ul class="card-bullets">${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`
    : "";

const renderWorkCards = (nodeId, items) => {
  const node = document.getElementById(nodeId);
  if (!node) return;
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "work-card";
    const meta = createMeta(item.subtitle, item.date);
    const githubLink = item.github
      ? `<a class="work-link" href="${item.github}" target="_blank" rel="noreferrer">GitHub →</a>`
      : "";
    card.innerHTML = `<h3>${item.title}</h3><p class="item-meta">${meta}</p>${renderBullets(item.bullets)}${githubLink}`;
    node.appendChild(card);
  });
};

setText("hero-role", profile.role);
setText("hero-name", profile.name);
setText("about-text", profile.about);
setText("contact-text", profile.contactText);

document.title = profile.name;
document.getElementById("year").textContent = new Date().getFullYear();

// Skills
const skillsNode = document.getElementById("skills-list");
profile.skillCategories.forEach(({ name, items }) => {
  const row = document.createElement("p");
  row.className = "skill-category";
  row.innerHTML = `<strong>${name}:</strong> ${items.join(", ")}`;
  skillsNode.appendChild(row);
});

const interestsNode = document.createElement("p");
interestsNode.className = "skill-category";
interestsNode.innerHTML = `<strong>Research Interests:</strong> ${profile.researchInterests.join(", ")}`;
skillsNode.appendChild(interestsNode);

// Education
const educationNode = document.getElementById("education-list");
profile.education.forEach((item) => {
  const block = document.createElement("article");
  block.className = "timeline-item";
  const meta = createMeta(item.subtitle, item.date);
  block.innerHTML = `<h3>${item.title}</h3><p>${meta}</p>${renderBullets(item.bullets)}`;
  educationNode.appendChild(block);
});

// Research
renderWorkCards("research-list", profile.research);

// Personal Projects
renderWorkCards("personal-projects-list", profile.personalProjects);

// Academic Projects
renderWorkCards("academic-projects-list", profile.academicProjects);

// Teaching
const teachingNode = document.getElementById("teaching-list");
profile.teaching.forEach((item) => {
  const block = document.createElement("article");
  block.className = "timeline-item";
  const meta = createMeta(item.subtitle, item.date);
  const contact = item.contact
    ? `<a class="work-link" href="${item.contact.href}" target="_blank" rel="noreferrer">${item.contact.name}</a>`
    : "";
  block.innerHTML = `<h3>${item.title}</h3><p>${meta}</p>${item.detail ? `<p>${item.detail}</p>` : ""}${contact}`;
  teachingNode.appendChild(block);
});

// Industrial Experience
renderWorkCards("industry-list", profile.industry);

// Awards section lists
fillList("awards-list", profile.awards);
fillList("publications-list", profile.publications);
fillList("certificates-list", profile.certificates);
fillList("additional-list", profile.additional);

// Languages
const languagesNode = document.getElementById("languages-list");
if (languagesNode) {
  profile.languages.forEach((item) => {
    const li = document.createElement("li");
    const meta = createMeta(item.subtitle, item.date);
    li.innerHTML = `<strong>${item.title}</strong>${meta ? ` — ${meta}` : ""}${item.detail ? `. ${item.detail}` : ""}`;
    languagesNode.appendChild(li);
  });
}

// Selected Courses (two-column)
const coursesContainer = document.getElementById("courses-container");
if (coursesContainer) {
  ["graduate", "undergraduate"].forEach((level) => {
    const col = document.createElement("div");
    col.className = "courses-column";
    const heading = document.createElement("h4");
    heading.textContent = level.charAt(0).toUpperCase() + level.slice(1);
    const list = document.createElement("ul");
    profile.courses[level].forEach((c) => {
      const li = document.createElement("li");
      li.textContent = c;
      list.appendChild(li);
    });
    col.appendChild(heading);
    col.appendChild(list);
    coursesContainer.appendChild(col);
  });
}

// Contacts
const contactsNode = document.getElementById("contact-links");
profile.contacts.forEach((item) => {
  const anchor = document.createElement("a");
  anchor.className = "side-link";
  anchor.href = item.href;
  anchor.textContent = item.label;
  if (item.href.startsWith("http")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  contactsNode.appendChild(anchor);
});
