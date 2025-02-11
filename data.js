// data.js

// STUDIES / EDUCATION
export const studies = [
  {
    id: 1,
    institution: "Northeastern University, Boston, MA",
    degree: "Master of Science in Software Engineering Systems",
    period: "Sept 2023 – April 2025",
    details:
      "GPA: 3.6. Courses: Advanced Techniques with LLMs, Generative AI, NLP, Cloud Computing, Responsible AI, Algorithms. Graduate Teaching Assistant for Prompt Engineering (Spring 2025) & Generative AI/NLP (Fall 2024).",
    logo: "/images/studies/NortheasternUniversityLogo.png"
  },
  {
    id: 2,
    institution: "Harvard University, Boston, MA",
    degree: "CS50 Introduction to Computer Science",
    period: "October 2022",
    details: "",
    logo: "/images/studies/Harvard.webp" // Update with your Harvard logo or remove this field if unavailable.
  },
  {
    id: 3,
    institution: "Goka Raju Ranga Raju Institute of Engineering and Technology, Hyderabad, India",
    degree: "Bachelor of Technology in Mechanical Engineering",
    period: "July 2018 – June 2022",
    details: "",
    logo: "/images/studies/GrietLogo.jpeg"
  }
];

// SKILLS
export const skills = {
  programming: [
    { name: "Python", icon: "/images/icons/python.png" },
    { name: "MySQL", icon: "/images/icons/mysql.png" },
    { name: "C++" },
    { name: "Java" },
    { name: "C#" }
  ],
  ai: [
    "LLMs",
    "Fine-tuning",
    "Transformers",
    "BERT",
    "GPT",
    "GANs",
    "Reinforcement Learning",
    "Encodings",
    "RAG",
    "LLM Agents",
    "Prompt Engineering",
    "LangChain"
  ],
  mlFrameworks: [
    "CNN",
    "LSTM",
    { name: "Hugging Face", icon: "/images/icons/huggingface.png" },
    "Stable Diffusion",
    "Deep Learning",
    "Data Science",
    "OpenCV"
  ],
  web: [
    "JavaScript",
    { name: "Flask", icon: "/images/icons/flask.png" },
    "Fast API",
    "Django",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "React JS"
  ],
  cloud: [
    { name: "AWS", icon: "/images/icons/aws.png" },
    { name: "GCP", icon: "/images/icons/gcp.png" },
    "Vertex AI",
    "Azure",
    "Amazon Sage Maker",
    "Git",
    "Azure DevOps"
  ],
  certifications: [
    { name: "AWS Academy Cloud Practitioner", icon: "/images/icons/aws.png" },
    "Microsoft Azure Fundamentals & Developer",
    { name: "EDX CS50", icon: "/images/icons/cs50.png" }
  ]
};

// WORK EXPERIENCE
export const workExperiences = [
  {
    id: 1,
    company: "Northeastern University",
    role: "Graduate Teaching Assistant – Prompt Engineering for Generative AI",
    location: "Boston, MA",
    period: "January 2025 – Present",
    description: [
      "Guiding 40+ students in prompt engineering and generative AI through office hours and coursework support, improving completion rates by 25%.",
      "Developing hands-on assignments, real-world case studies, and instructional videos, increasing engagement and practical accuracy by 30%.",
      "Streamlining attendance and troubleshooting processes, reducing coursework-related queries by 35%."
    ],
    logo: "/images/work/Neu.png"
  },
  {
    id: 2,
    company: "Northeastern University",
    role: "Graduate Teaching Assistant – Generative AI & Natural Language Processing",
    location: "Boston, MA",
    period: "September 2024 – December 2024",
    description: [
      "Mentored 60+ students in applied AI and NLP, providing structured guidance on diffusion models, transformers, RAG, and fine-tuning techniques.",
      "Designed and refined course materials to ensure clarity and industry alignment.",
      "Delivered detailed feedback on assignments and projects, bridging theoretical knowledge with real-world applications."
    ],
    logo: "/images/work/Neu.png"
  },
  {
    id: 3,
    company: "Tata Consultancy Services",
    role: "Machine Learning Engineer - Cloud Exponence Microsoft Azure",
    location: "India",
    period: "June 2022 – August 2023",
    description: [
      "Deployed predictive models on Azure Cloud Exponence using Python, automating cloud governance workflows and reducing operational costs by 15% while maintaining 99% uptime.",
      "Developed scalable ML pipelines and interactive dashboards using Flask and JavaScript, reducing manual monitoring efforts by 30%.",
      "Implemented distributed storage and query systems with Azure Data Lake, SQL, and NoSQL databases, cutting query latency by 30%.",
      "Automated MLOps deployment workflows with Docker, Kubernetes, and CI/CD pipelines, accelerating model release cycles by 30%."
    ],
    logo: "/images/work/TCSLogo.png"
  },
  {
    id: 4,
    company: "Tata Consultancy Services",
    role: "Python Developer Intern - Cloud Exponence Microsoft Azure",
    location: "India",
    period: "June 2021 – June 2022",
    description: [
      "Designed and developed backend RESTful APIs for cloud automation using Python and Flask, boosting data retrieval efficiency by 25%.",
      "Optimized SQL/NoSQL database performance, reducing query execution time by 30%.",
      "Built automation scripts using Azure Functions, Terraform, and Bash, cutting cloud provisioning time by 40%."
    ],
    logo: "/images/work/TCSLogo.png"
  },
  {
    id: 5,
    company: "Edu Skills",
    role: "AI-ML Engineer Intern",
    location: "India",
    period: "January 2022 – May 2022",
    description: [
      "Developed and optimized ML models using Amazon SageMaker, improving accuracy and performance by 30%.",
      "Deployed AI solutions on AWS using EC2, S3, and Lambda, increasing operational efficiency by 25%.",
      "Implemented deep learning deployments that enhanced project scalability by 20% and reduced system downtime by 15%."
    ],
    logo: "/images/work/EduSkillsLogo.png"
  },
  {
    id: 6,
    company: "The Sparks Foundation",
    role: "Data Science and Business Analytics Intern",
    location: "India",
    period: "October 2020 – November 2020",
    description: [
      "Developed predictive models using supervised learning to improve forecasting accuracy.",
      "Applied unsupervised learning techniques such as clustering and decision trees to enhance data-driven decision making.",
      "Built a stock market analysis pipeline integrating numerical and textual data, boosting trend forecasting efficiency."
    ],
    logo: "/images/work/SparkFoundation.png" // Ensure you have this logo or adjust the path.
  },
  {
    id: 7,
    company: "Xane.ai",
    role: "Artificial Intelligence Engineer",
    location: "India",
    period: "June 2020 – September 2020",
    description: [
      "Developed deep learning models for face mask detection using TensorFlow and computer vision, achieving 95% accuracy.",
      "Optimized data collection and preprocessing, increasing detection speed by 20%.",
      "Deployed real-time AI models that maintained 90% efficiency in varied lighting and crowd conditions."
    ],
    logo: "/images/work/XaneaiLogo.avif"
  }
];

// PROJECTS / APPLIED PROJECTS
export const projects = [
  {
    id: 1,
    title: "Image Alchemist: AI-Driven eCommerce Image Enhancement",
    description: [
      "Enhanced product images by improving clarity, shadows, and positioning.",
      "Automated background generation with multiple styles reduced manual editing time by 40%.",
      "An interactive system enabled real-time enhancements."
    ],
    techStack: [
      "Fast API", 
      "Streamlit", 
      "YOLOv8", 
      "OpenCV", 
      "Stable Diffusion", 
      "GANs", 
      "Pillow", 
      "NumPy"
    ],
    image: "/images/projects/ImageAlchemist.jpg",
    link: "https://github.com/UdayGattu/ImageAlchemist-fork.git"
  },
  {
    id: 2,
    title: "Innovative Text-to-Video System for Multi-Modal Content Creation",
    description: [
      "Built a text-to-video system using RAG and fine-tuned models that increased video generation accuracy by 30%.",
      "Evaluated multi-modal tools and developed APIs for seamless SaaS integration.",
      "Reduced content delivery time by 20%."
    ],
    techStack: [
      "Fast API", 
      "Lang Chain", 
      "Transformers", 
      "RAG", 
      "OpenAI API", 
      "Model Scope", 
      "TensorFlow", 
      "PyTorch", 
      "Runway AI"
    ],
    image: "/images/projects/TextToVideo.webp",
    link: "https://github.com/GenAIByUdayGattu/TextToVideo.git"
  },
  {
    id: 3,
    title: "Interactive AI-based Tutor for Physics Education",
    description: [
      "Developed an AI-driven Physics Tutor Bot that boosted student engagement by 40%.",
      "Integrated real-world application modules and dynamic Q&A with adaptive hints.",
      "Improved comprehension and reduced query resolution time by 30%."
    ],
    techStack: [
      "Fast API", 
      "Lang Chain", 
      "Transformers", 
      "RAG", 
      "OpenAI API", 
      "PyTorch", 
      "MySQL"
    ],
    image: "/images/projects/Physics.webp",
    link: "https://github.com/UdayGattu/TutorGPT.git"
  },
  {
    id: 4,
    title: "AutoMate: AI-Powered Car Assistant",
    description: [
      "Created a virtual assistant for car companies that automated scheduling, reducing manual booking efforts by 60%.",
      "Integrated error-handling workflows to decrease user drop-off rates by 35%.",
      "Improved conversation success by 50%."
    ],
    techStack: [
      "Voiceflow", 
      "AI Chatbot", 
      "NLP", 
      "Fast API", 
      "JSON", 
      "Dialog Management"
    ],
    image: "/images/projects/AutoMate.webp",
    link: "https://creator.voiceflow.com/prototype/670284f0258e07e042be4152"
  },
  {
    id: 5,
    title: "Cloud-Native Application (GCP)",
    description: [
      "Automated GCP infrastructure using Terraform, reducing VM setup times by 50%.",
      "Secured resources via VPC peering and encryption, cutting deployment errors by 40%.",
      "Integrated CI/CD pipelines for seamless updates."
    ],
    techStack: [
      "JavaScript", 
      "GCP", 
      "Postman", 
      "GitHub", 
      "Terraform", 
      "Packer", 
      "MySQL"
    ],
    image: "/images/projects/cloud.webp",
    link: "https://github.com/orgs/CloudUday/repositories"
  },
  {
    id: 6,
    title: "Dermatological Image Generation Using Latent Diffusion Models",
    description: [
      "Developed text-to-image models using CLIP and Stable Diffusion to enhance healthcare datasets by 20%.",
      "Built scalable pipelines on GCP for photorealistic diagnostic images.",
      "Added predictive titling for streamlined reports."
    ],
    techStack: [
      "Stable Diffusion", 
      "Hugging Face", 
      "Clip", 
      "GCP", 
      "Transformers", 
      "Unet", 
      "PyTorch"
    ],
    image: "/images/projects/SkinScript.webp"
  },
  {
    id: 7,
    title: "Travel Agent Chatbot",
    description: [
      "Designed an AI-powered travel chatbot that automated real-time inquiries, boosting user engagement by 30%.",
      "Developed a custom NLP Query-SQL engine for dynamic database interactions.",
      "Increased booking conversions by 25%."
    ],
    techStack: [
      "Python", 
      "LangChain", 
      "Fast API", 
      "MySQL", 
      "Transformers", 
      "NLP SQL", 
      "PyTorch"
    ],
    image: "/images/projects/TravelAgent.png",
    link: "https://github.com/UdayGattu/travel-bot-fork.git"
  }
];


// CONTACT INFORMATION
export const contactData = [
  {
    label: "Email",
    value: "udaygattu9949@gmail.com",
    link: "mailto:udaygattu9949@gmail.com"
  },
  {
    label: "Phone",
    value: "(617) 971-7892",
    link: "tel:6179717892"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/udayshankargattu/",
    link: "https://www.linkedin.com/in/udayshankargattu/"
  },
  {
    label: "GitHub",
    value: "github.com/UdayGattu",
    link: "https://github.com/UdayGattu"
  },
  {
    label: "Google Scholar",
    value: "Google Scholar",
    link: "https://scholar.google.com/citations?user=rPCfZOgAAAAJ&hl=en&oi=ao"
  },

];

// RESEARCH EXPERIENCE
export const research = [
  {
    id: 1,
    title: "Johnson Cook Material Model",
    publication: "Materials Today: Proceedings",
    year: "2022",
    citations: 118,
    link: "https://yourlink.com/johnson-cook-material-model" // Update with the actual publication link
  }
];
