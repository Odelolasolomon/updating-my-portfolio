export type ExperienceRole = {
  period: string;
  title: string;
  organization: string;
  location?: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  highlights: string[];
  emphasis: "leadership" | "systems" | "research" | "mlops";
};

export const experience: ExperienceRole[] = [
  {
    period: "Mar 2026 - Present",
    title: "Senior Data Scientist / AI Engineer",
    organization: "GoPaddi",
    location: "Lagos, Nigeria",
    summary:
      "Leading production AI agent architecture across travel-product workflows, model governance, reusable AI endpoints, and auth-aware tool execution.",
    bullets: [
      "Architected and led the build of GoPaddi's Unified AI Agent, establishing intent routing, tool execution, permissions, approvals, audit logging, and model governance across 8+ product verticals.",
      "Shipped 6+ production AI solutions spanning supplier chat, Deal Card AI, Scout, Ally, and model management, extending AI coverage across support, CRM, finance, and recruitment.",
      "Delivered the model management system for the Unified Agent and strengthened reliability with validation, auth-aware routing, and prompt-injection protections."
    ],
    technologies: ["AI Agents", "LLMs", "Model Governance", "Tool Registries", "API Integration", "Prompt Security"],
    highlights: ["8+ product verticals", "6+ production AI solutions", "35% fewer production incidents"],
    emphasis: "leadership"
  },
  {
    period: "Feb 2025 - Mar 2026",
    title: "AI & Automation Engineer / Innovation Team Lead",
    organization: "Lighthill Investment Limited",
    summary:
      "Led investment-operations automation and built multi-agent intelligence workflows for real-time financial analysis and decision support.",
    bullets: [
      "Led the Innovation Team, designing and deploying AI-powered automation systems that replaced repetitive manual workflows and improved access to real-time financial information.",
      "Engineered real-time financial data pipelines and monitoring systems for stock-exchange prices, market movement tracking, and changing market-data processing.",
      "Built a multi-agent investment intelligence system for stocks, Bitcoin, cryptocurrency, and other financial assets, orchestrating agents for retrieval, analysis, forecasting, and synthesis."
    ],
    technologies: ["AI Automation", "Financial Data Pipelines", "Multi-Agent Systems", "Forecasting", "Monitoring", "Python"],
    highlights: ["Innovation Team Lead", "Real-time market data", "Multi-agent investment workflows"],
    emphasis: "systems"
  },
  {
    period: "Oct 2024 - Feb 2026",
    title: "AI/ML Engineer",
    organization: "Health Strategy and Delivery Foundation",
    summary:
      "Built healthcare LLMs, multimodal agents, and retrieval systems for clinical triage, reports, travel-health guidance, and healthcare worker support.",
    bullets: [
      "Designed and fine-tuned domain-specific LLMs for healthcare triage, achieving 90%+ triage accuracy and later adapting them into travel-health advisory agents.",
      "Built multimodal AI agents that processed structured medical data and unstructured patient notes into personalized reports.",
      "Deployed RAG-based Q&A systems to support healthcare workers with contextual information retrieval and domain-specific response generation."
    ],
    technologies: ["Healthcare LLMs", "RAG", "Multimodal AI", "Fine-tuning", "Clinical Triage", "NLP"],
    highlights: ["90%+ triage accuracy", "25% increase in customer retention", "Healthcare worker Q&A systems"],
    emphasis: "research"
  },
  {
    period: "Feb 2023 - Sep 2024",
    title: "Machine Learning Engineer",
    organization: "Skyway Aviation Handling Company",
    summary:
      "Developed recommendation systems and production ML infrastructure for travel-personalization workflows, deployment speed, and inference performance.",
    bullets: [
      "Built transformer-based recommendation engines with collaborative filtering for personalized travel suggestions.",
      "Containerized ML pipelines using Docker and Kubernetes and built model-serving infrastructure for lower-latency inference.",
      "Automated MLOps workflows to reduce time-to-production and improve the reliability of deployed machine learning services."
    ],
    technologies: ["Transformers", "Recommendation Systems", "Collaborative Filtering", "Docker", "Kubernetes", "MLOps"],
    highlights: ["18% higher user retention", "40% lower inference latency", "30% faster time-to-production"],
    emphasis: "mlops"
  },
  {
    period: "Mar 2021 - Jan 2023",
    title: "AI/ML Engineer",
    organization: "TIPTHORP",
    summary:
      "Applied LLMs, multimodal generation, chatbots, and RAG-based recommendation agents to large-scale travel content and support experiences.",
    bullets: [
      "Fine-tuned LLMs for multimodal travel content generation across 12 content types.",
      "Built LLM-powered chatbots and RAG-based recommendation agents serving high-volume user support and discovery workflows.",
      "Improved user engagement and query resolution through domain-specific generation, retrieval, and response orchestration."
    ],
    technologies: ["LLM Fine-tuning", "RAG", "Chatbots", "Recommendation Agents", "Multimodal Content", "NLP"],
    highlights: ["12 content types", "15% engagement lift", "1,000,000+ users supported"],
    emphasis: "systems"
  }
] as const;

export const researchMilestones = [
  {
    title: "Structure-Aware Denoising for Pediatric Chest X-Rays",
    context: "MICCAI 2025, Best Poster Award",
    detail:
      "Co-developed a dual-decoder denoising framework that raised pneumonia classification accuracy from 88.8% to 92.5%."
  },
  {
    title: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography",
    context: "ICPR 2026",
    detail:
      "Co-developed a vessel-aware self-supervised autoencoder for improving vessel segmentation in limited-label OCT angiography settings."
  }
] as const;
