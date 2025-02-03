// data.js
export const workExperiences = [
    {
      id: 1,
      company: "TCS",
      role: "Machine Learning Engineer",
      location: "Hyderabad, India",
      period: "Jun 2022 – Aug 2023",
      description: [
        "Deployed predictive models on Azure, boosting efficiency by 20% and reducing response time by 30%.",
        "Developed ML-powered applications using Python and Flask, achieving a 25% improvement in deployment efficiency.",
        "Optimized ML pipelines to reduce model training time by 40%."
      ],
      logo: "/images/work/TCSLogo.png"
    },
    {
      id: 2,
      company: "EduSkills Foundation",
      role: "AI-ML Engineer Intern",
      location: "Hyderabad, India",
      period: "Jan 2022 – May 2022",
      description: [
        "Enhanced model accuracy by 30% using Amazon SageMaker.",
        "Deployed scalable AI solutions on AWS, increasing operational efficiency by 25%."
      ],
      logo: "/images/work/EduSkillsLogo.png"
    },
    {
      id: 3,
      company: "Xane.ai",
      role: "Artificial Intelligence Intern",
      location: "Hyderabad, India",
      period: "Jun 2020 – Sep 2020",
      description: [
        "Developed TensorFlow models for mask detection achieving 95% accuracy.",
        "Improved performance by 20% through advanced image processing techniques."
      ],
      logo: "/images/work/XaneaiLogo.avif"
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Travel Agent Chatbot",
      techStack: "Fast API, LangChain, Transformers, GPT, MySQL, PyTorch, NLP-SQL",
      description: "Developed a chatbot to handle real-time inquiries, increasing booking conversions by 25% and integrating MLOps principles.",
      image: "/images/travel-chatbot.png",
      github: "https://github.com/yourusername/travel-agent-chatbot"
    },
    {
      id: 2,
      title: "Text-to-Video Generation Pipeline",
      techStack: "Fast API, LangChain, Transformers, RAG, OpenAI API, TensorFlow, PyTorch, Runway AI",
      description: "Built an innovative pipeline to convert textual descriptions into dynamic video content, improving accuracy by 30% and reducing generation time by 25%.",
      image: "/images/text-to-video.png",
      github: "https://github.com/yourusername/text-to-video"
    },
    {
      id: 3,
      title: "Script2Skin: Generating Medical Images",
      techStack: "Stable Diffusion, Hugging Face, CLIP, GCP, Transformers, U-Net, PyTorch",
      description: "Developed an AI model to generate high-quality dermatological images from textual inputs, thereby improving diagnostic dataset quality.",
      image: "/images/script2skin.png"
    },
    {
      id: 4,
      title: "Cloud-Native Application",
      techStack: "JavaScript, GCP, Terraform, Packer, MySQL",
      description: "Created a cloud-native application with automated VM deployments, achieving a 50% reduction in deployment times and maintaining 99.9% uptime.",
      image: "/images/cloud-native.png",
      github: "https://github.com/yourusername/cloud-native-app"
    }
  ];
  
  export const studies = [
    {
      id: 1,
      institution: "Northeastern University, Boston, MA",
      degree: "Master of Science in Software Engineering Systems",
      period: "Sept 2023 – May 2025",
      details: "Courses: Advanced Techniques with LLMs, Generative AI, NLP, Cloud Computing, Responsible AI, Algorithms. TA for Generative AI & NLP.",
      logo: "/images/studies/NortheasternUniversityLogo.png" // Replace with your university logo when available
    },
    {
      id: 2,
      institution: "Goka Raju Ranga Raju Institute of Engineering and Technology, Hyderabad, India",
      degree: "Bachelor of Technology in Mechanical Engineering",
      period: "July 2018 – June 2022",
      details: "Focused on mechanical engineering principles with strong analytical and problem-solving skills.",
      logo: "/images/studies/GrietLogo.jpeg" // Replace with your college logo when available
    }
  ];
  
 // data.js

// data.js
// data.js

// data.js

export const skills = {
    programming: [
      { name: "Python", icon: "/images/icons/python.png" },
      { name: "MySQL", icon: "/images/icons/mysql.png" },
      { name: "Fast API" },    // No image provided; fallback used
      { name: "Django" },      // No image provided; fallback used
      { name: "C++" },         // No image provided; fallback used
      { name: "Java" }         // No image provided; fallback used
    ],
    ai: [
      { name: "PyTorch", icon: "/images/icons/pytorch.png" },
      { name: "TensorFlow", icon: "/images/icons/tensorflow.png" },
      { name: "Scikit-learn", icon: "/images/icons/scikitlearn.png" },
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
      "OpenCV",
      { name: "Flask", icon: "/images/icons/flask.png" }
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
      "Microsoft Azure Fundamentals",
      "Microsoft Azure Developer",
      { name: "EDX CS50", icon: "/images/icons/cs50.png" }
    ]
  };
  
  // (Other arrays for workExperiences, projects, studies, and contactData can be defined here as needed.)
  
  
  export const contactData = [
    {
      label: "Email",
      value: "udaygattu9949@gmail.com",
      link: "mailto:udaygattu9949@gmail.com"
    },
    {
      label: "Phone",
      value: "(617) 971-7892",
      link: ""
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
      value: "scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID",
      link: "https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
    }
  ];
  