export const DATA = {
  name: "Dinkar Thakur",
  title: "Data Scientist & AI Engineer",
  email: "dinkarthakur120@gmail.com",
  phone: "+91 7766961686",
  location: "Yello Living, Extension Road, Pattandur Agrahara, Bengluru, 560066",
  social: {
    github: "https://github.com/infy-dinkar",
    linkedin: "https://www.linkedin.com/in/dinkarthakur5197",
    twitter: "", // Not provided
    youtube: "https://www.youtube.com/@NeuralMinds3",
  },
  youtubeChannel: {
    name: "NeuralMinds",
    url: "https://www.youtube.com/@NeuralMinds3",
    description: "Trained learners in Data Science, AI/ML and Mathematics using practical, hands-on methods as initial co-founder and mentor.",
    subscribers: "200+",
    videos: "50+",
  },
  about: "Data Science and Artificial Intelligence undergraduate at IIT Guwahati'27.AI Engineer focus on creating scalable,impactful products using GenAI,Deep Learning and ML",
  education: [
    {
      institution: "IIT GUWAHATI",
      degree: "B.Sc in Data Science and Artificial Intelligence",
      year: "2023-2027",
      score: "",
    },
    {
      institution: "SRI CHAITANYA TECHNO SCHOOL",
      degree: "Intermediate",
      year: "",
      score: "94.2%",
    },
    {
      institution: "GYAN NIKETAN VVC",
      degree: "High School",
      year: "",
      score: "93.2%",
    },
  ],
  experience: [
    {
      company: "Freelance",
      role: "AI & ML Engineer",
      period: "Nov 2024 - Present",
      description: "Working on various AI/ML projects involving model training, evaluation, and deployment.",
    },
  ],
  skills: [
    {
      id: "01",
      title: "Generative AI & LLMs",
      items: [
        "LangChain",
        "Ollama",
        "HuggingFace",
        "Groq",
        "RAG",
      ],
      description:
        "Experienced in chatbot development, RAG workflows, AI agents, prompt engineering, and fine-tuning LLMs for domain-specific applications.",
    },
    {
      id: "02",
      title: "AI-ML",
      items: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Neural Networks",
        "CNNs",
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
      ],
      description:
        "Strong understanding of machine learning algorithms, deep learning architectures, and model evaluation techniques.",
    },
    {
      id: "03",
      title: "Visualization & BI Tools",
      items: ["Power BI", "Excel", "Matplotlib", "Seaborn"],
      description:
        "Proficient in creating interactive dashboards and visualizing complex datasets to drive business insights.",
    },
    {
      id: "04",
      title: "Deployment",
      items: [
        "AWS",
        "Microsoft Azure",
      ],
      description:
        "Intermediate in deploying AI/ML applications and cloud services using AWS and Microsoft Azure platforms.",
    },
    {
      id: "05",
      title: "Development, Web & Version Control",
      items: [
        "Python",
        "Java",
        "SQL",
        "MySQL",
        "VS Code",
        "Jupyter Notebook",
        "Google Colab",
        "Git",
        "GitHub",
      ],
      description:
        "Intermediate in software development, database management and experienced in git and using modern tools",
    },
    {
      id: "06",
      title: "n8n Automation",
      items: [
        "n8n",
      ],
      description:
        "Intermediate in automation",
    },
  ],
  projects: [
    {
      title: "AstroBot",
      tagline: "AI Chatbot for Space & Weather Data",
      description: "Built a domain-specific chatbot for ISRO's MOSDAC data with natural-language querying for satellites, missions, and weather. Integrated 1000+ documents into an Llama-3.1 RAG pipeline. Added speech-to-text, conversational memory, and PDF export.",
      tech: ["LangChain", "RAG", "LLaMA-3.1", "FAISS", "Flask", "Web Crawling"],
      link: "#",
      github: "https://github.com/infy-dinkar/AstroBot",
      image: "/astro-bot-new.png"
    },
    {
      title: "Face-Recognition",
      tagline: "Multi-Video Tracking System",
      description: "This project is designed for detecting and tracking a specific person across multiple videos. It extracts the number of times they appear and calculates the total duration of their presence in each video.",
      tech: ["Python", "Opencv", "deepface", "torch", "ultralytics", "YOLOv8"],
      link: "#",
      github: "https://github.com/infy-dinkar/Face-Recognition",
      image: "/face-tracking-new.png"
    },
    {
      title: "Momenta Audio Deepfake Detection",
      tagline: "Voice Authenticity Analysis",
      description: "Audio deepfakes pose a growing threat to digital trust, with AI-generated voices being used for misinformation, fraud, and other malicious activities.",
      tech: ["Deep Learning", "Audio Processing", "Flask"],
      link: "#",
      github: "https://github.com/infy-dinkar/Momenta-Audio-Deepfake-Detection",
      image: "/audio-deepfake-new.png"
    }
  ],
};
