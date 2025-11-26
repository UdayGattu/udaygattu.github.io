export const projects = [
    {
    title: 'BrandAI – AI-Powered Advertisement Critique Engine',
    description: [
      `Built a comprehensive ad-generation engine orchestrating Gemini Vision and CLIP to autonomously critique and generate brand-
aligned marketing assets, reducing the manual review cycle for creative teams by 50% while ensuring strict brand compliance`,
      `Implemented a fault-tolerant agent workflow using LangGraph with parallel execution and retry logic, backed by Redis for state
persistence, which streamlined the generation of multi-modal ad variations and cut end-to-end processing latency by 40%`,
      
    ],
    stack: ['FastAPI', 'LangGraph', 'Vertex AI (Imagen 2, Veo 3.1)', 'Gemini Vision', 'CLIP', 'OpenCV', 'Docker', 'Redis'],
    github: 'https://github.com/BrandTrustAI/BrandAI.git',
    demo: '',
    image: 'images/projects/var_1.png',
  },
  {
    title: 'Image Alchemist: AI-Driven eCommerce Image Enhancement',
    description: [
      'Enhanced product visuals using OpenCV and Stable Diffusion, ensuring eCommerce compliance and increasing image quality.',
      'Automated multi-style background generation and built a real-time image editing system, reducing manual editing time by 40%.',
      'Enabled seamless user-driven enhancements for catalog images.'
    ],
    stack: ['FastAPI', 'Streamlit', 'YOLOv8', 'OpenCV', 'Stable Diffusion', 'GANs', 'Pillow', 'NumPy'],
    github: 'https://github.com/udaygattu/image-alchemist',
    demo: '',
    image: 'images/projects/ImageAlchemist.jpg',
  },
  {
    title: 'Innovative Text-to-Video System for Multi-Modal Content Creation',
    description: [
      'Built an end-to-end text-to-video generation pipeline using RAG and fine-tuned transformers, improving generation accuracy by 30%.',
      'Integrated DALL·E and ModelScope with SaaS-ready REST APIs, reducing video delivery latency by 20%.',
      'Enabled scalable, real-time multimodal content generation.'
    ],
    stack: ['FastAPI', 'LangChain', 'Transformers', 'RAG', 'OpenAI API', 'ModelScope', 'TensorFlow', 'PyTorch', 'Runway AI'],
    github: 'https://github.com/udaygattu/text-to-video-rag',
    demo: '',
    image: 'images/projects/TextToVideo.webp',
  },
  {
    title: 'Cloud-Native Application (Cloud Computing Google Cloud Platform)',
    description: [
      'Automated GCP infrastructure with Terraform and Packer, cutting VM provisioning time by 50%.',
      'Secured cloud environments using VPC peering and encryption keys.',
      'Integrated CI/CD pipelines to reduce deployment errors by 40% and boost operational efficiency by 25%.'
    ],
    stack: ['JavaScript', 'GCP', 'Postman', 'GitHub', 'Terraform', 'Packer', 'MySQL'],
    github: 'https://github.com/udaygattu/cloud-gcp-app',
    demo: '',
    image: 'images/projects/cloud.webp',
  },
  {
    title: 'Interactive AI-based Tutor for Physics Education',
    description: [
      'Developed an AI-driven Physics Tutor Bot, improving student engagement by 40%.',
      'Implemented real-world application modules, increasing comprehension rates by 35%.',
      'Designed dynamic Q&A and adaptive hints, reducing query resolution time by 30%.'
    ],
    stack: ['FastAPI', 'LangChain', 'Transformers', 'RAG', 'OpenAI API', 'PyTorch', 'MySQL'],
    github: 'https://github.com/udaygattu/ai-physics-tutor',
    demo: '',
    image: 'images/projects/Physics.webp',
  },
  {
    title: 'AutoMate: AI-Powered Car Assistant',
    description: [
      'Built an AI-driven virtual assistant for car companies, automating scheduling and reducing manual booking efforts by 60%.',
      'Integrated error-handling and adaptive fallback workflows, decreasing user drop-off rates by 35%.',
      'Optimized dialogue workflows, cutting response time by 40% and boosting customer satisfaction by 30%.'
    ],
    stack: ['Voiceflow', 'AI Chatbot', 'NLP', 'FastAPI', 'JSON', 'Dialog Management'],
    github: 'https://github.com/udaygattu/automate-car-assistant',
    demo: '',
    image: 'images/projects/AutoMate.webp',
  },
  {
    title: 'Travel Agent Chatbot',
    description: [
      'Designed an AI-powered travel chatbot, automating real-time inquiries and increasing user engagement by 30%.',
      'Developed a custom NLP Query-SQL engine, improving response accuracy.',
      'Implemented AI-driven travel recommendations, boosting booking conversions by 25%.'
    ],
    stack: ['Python', 'LangChain', 'FastAPI', 'MySQL', 'Transformers', 'NLP SQL', 'PyTorch'],
    github: 'https://github.com/udaygattu/travel-agent-chatbot',
    demo: '',
    image: 'images/projects/TravelAgent.png',
  },
  {
    title: 'Dermatological Image Generation Using Latent Diffusion Models',
    description: [
      'Developed text-to-image models using CLIP and Stable Diffusion, enhancing healthcare datasets by 20%.',
      'Built scalable pipelines on GCP, transforming text inputs into photorealistic images for diagnostic use.',
      'Added predictive titling for streamlined diagnostics, improving accuracy in AI-generated medical reports.'
    ],
    stack: ['Stable Diffusion', 'Hugging Face', 'CLIP', 'GCP', 'Transformers', 'UNet', 'PyTorch'],
    github: '',
    demo: '',
    image: 'images/projects/SkinScript.webp',
  },
];

export const currentProjects = [
  {
    title: 'Red Teaming LLM Agent',
    description: [
      'Currently architecting a cutting-edge Red Teaming LLM Agent from the ground up, focused on advanced adversarial testing and robust AI safety. This project explores the boundaries of large language model security, with a strong emphasis on real-world resilience and ethical AI deployment.'
    ],
    stack: ['LLM', 'AI Safety', 'Red Teaming'],
    github: '',
    demo: '',
    paragraph: true
  },
  {
    title: 'MentorMind: LLM-Powered Consulting & Mentoring Agent Pipeline',
    description: [
      'Designing and engineering a robust, end-to-end agent pipeline that leverages large language models to deliver personalized consulting and mentoring at scale. This system orchestrates dynamic knowledge retrieval, adaptive dialogue, and actionable insights—empowering organizations and individuals to unlock new levels of growth and innovation.'
    ],
    stack: ['LLM', 'Consulting', 'Mentoring', 'AI Strategy', 'Agent Pipeline'],
    github: '',
    demo: '',
    paragraph: true
  },
]; 
