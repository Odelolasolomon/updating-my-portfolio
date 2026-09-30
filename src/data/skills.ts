export type SkillEvidence = {
  label: string;
  href: string;
};

export type SkillCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: string[];
  evidence: SkillEvidence[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "agentic-systems",
    number: "01",
    title: "AI Agents and Agentic Systems",
    description: "Designing governed agent workflows with intent routing, tool execution, approvals, permissions and auditability.",
    skills: ["AI Agents", "Intent Routing", "Tool Registries", "Permissions", "Approvals", "Audit Logging", "Model Governance", "Prompt-Injection Protections"],
    evidence: [
      { label: "Unified AI Agent", href: "/projects/unified-ai-agent" },
      { label: "Investment Intelligence Agents", href: "/projects/investment-intelligence-agents" }
    ]
  },
  {
    id: "llms-rag",
    number: "02",
    title: "LLMs, Generative AI and RAG",
    description: "Fine-tuning domain-specific language models and building retrieval-augmented systems for healthcare, travel and support workflows.",
    skills: ["LLMs", "Generative AI", "RAG", "NLP", "Fine-tuning", "Chatbots", "Recommendation Agents", "Hugging Face", "Transformers"],
    evidence: [
      { label: "Healthcare Triage Agents", href: "/projects/healthcare-triage-rag-agents" },
      { label: "Travel RAG Agents", href: "/projects/travel-content-rag-agents" }
    ]
  },
  {
    id: "machine-learning",
    number: "03",
    title: "Machine Learning and Deep Learning",
    description: "Building model pipelines, recommendation engines, forecasting workflows and deep learning systems for production use cases.",
    skills: ["Machine Learning", "Deep Learning", "PyTorch", "TensorFlow", "Recommendation Systems", "Collaborative Filtering", "Forecasting", "Predictive Analytics"],
    evidence: [
      { label: "Aviation Recommendation MLOps", href: "/projects/aviation-recommendation-mlops" },
      { label: "Experience Timeline", href: "/experience" }
    ]
  },
  {
    id: "computer-vision-medical-ai",
    number: "04",
    title: "Computer Vision and Medical AI",
    description: "Applying computer vision, denoising, segmentation and self-supervised learning methods to medical imaging research and healthcare AI systems.",
    skills: ["Computer Vision", "Medical Imaging", "Denoising", "Segmentation", "Masked Autoencoders", "Self-Supervised Learning", "Clinical Triage", "Multimodal AI"],
    evidence: [
      { label: "Pediatric X-Ray Denoising", href: "/projects/pediatric-xray-denoising" },
      { label: "VAMAE OCT Angiography", href: "/projects/vamae-oct-angiography" }
    ]
  },
  {
    id: "python-data-science",
    number: "05",
    title: "Python, Data Science and Statistical Computing",
    description: "Combining statistical training, Python engineering and applied data science for modeling, analysis and intelligent-system delivery.",
    skills: ["Python", "Data Science", "Statistics", "SQL", "Market Data Pipelines", "Financial Analysis", "Model Evaluation", "Experimentation"],
    evidence: [
      { label: "Investment Intelligence Agents", href: "/projects/investment-intelligence-agents" },
      { label: "About Background", href: "/about" }
    ]
  },
  {
    id: "backend-api",
    number: "06",
    title: "Backend Engineering and API Development",
    description: "Creating reusable documented AI endpoints and backend integrations that connect models to real product workflows.",
    skills: ["FastAPI", "API Integration", "Reusable AI Endpoints", "Auth-Aware Routing", "Service Validation", "Model Management", "Structured Data Processing"],
    evidence: [
      { label: "Unified AI Agent", href: "/projects/unified-ai-agent" },
      { label: "Experience Timeline", href: "/experience" }
    ]
  },
  {
    id: "mlops-cloud-devops",
    number: "07",
    title: "MLOps, Cloud and DevOps",
    description: "Shipping intelligent systems through containerized pipelines, model serving, cloud platforms and automated production workflows.",
    skills: ["MLOps", "Docker", "Kubernetes", "MLflow", "Cloud Platforms", "AWS", "GCP", "Azure", "Model Serving", "Deployment Automation"],
    evidence: [
      { label: "Aviation Recommendation MLOps", href: "/projects/aviation-recommendation-mlops" },
      { label: "Projects Index", href: "/projects" }
    ]
  },
  {
    id: "reliability-governance",
    number: "08",
    title: "AI Reliability, Evaluation and Governance",
    description: "Improving deployed AI reliability through validation, governance, permissions, monitoring-oriented design and measured outcome tracking.",
    skills: ["Model Governance", "Validation", "Permissions", "Audit Logging", "Prompt Security", "Reliability Engineering", "Evaluation", "Responsible Deployment"],
    evidence: [
      { label: "Unified AI Agent", href: "/projects/unified-ai-agent" },
      { label: "Research", href: "/research" }
    ]
  },
  {
    id: "leadership-delivery",
    number: "09",
    title: "Engineering Leadership and Technical Delivery",
    description: "Leading AI automation, architecture and cross-functional delivery across support, CRM, finance, recruitment, healthcare and travel workflows.",
    skills: ["Technical Leadership", "Innovation Team Leadership", "AI Architecture", "Cross-Functional Delivery", "Mentoring", "Documentation", "Product Integration"],
    evidence: [
      { label: "Experience Timeline", href: "/experience" },
      { label: "Projects Index", href: "/projects" }
    ]
  }
];

export const skillGroups = [
  "LLMs & Generative AI",
  "AI Agents",
  "RAG",
  "NLP",
  "Computer Vision",
  "MLOps",
  "Python",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "Docker",
  "Kubernetes",
  "Hugging Face",
  "MLflow",
  "SQL"
] as const;
