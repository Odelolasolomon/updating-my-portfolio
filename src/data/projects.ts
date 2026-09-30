import { routes } from "@/lib/routes";

export type ProjectCategory = "AI Agents" | "Financial AI" | "Healthcare AI" | "MLOps" | "Research" | "Generative AI";
export type ProjectVisual = "agent" | "finance" | "health" | "mlops" | "travel" | "vision" | "oct";

export type CaseStudySection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  source: string;
  excerpt: string;
  overview: string;
  role: string;
  period: string;
  organization: string;
  status: "Published" | "Professional work" | "Research implementation";
  confidentiality: string;
  technologies: string[];
  outcomes: string[];
  responsibilities: string[];
  architecture: string[];
  implementation: string[];
  evaluation: string[];
  sections: CaseStudySection[];
  related: string[];
  visual: ProjectVisual;
  links?: ProjectLink[];
};

export const projectCategories = ["All", "AI Agents", "Financial AI", "Healthcare AI", "MLOps", "Research", "Generative AI"] as const;

export const projects: Project[] = [
  {
    slug: "unified-ai-agent",
    title: "Unified AI Agent Platform",
    shortTitle: "Unified AI Agent",
    category: "AI Agents",
    source: "Resume: GoPaddi, Senior Data Scientist/AI Engineer",
    excerpt:
      "Governed agentic platform for intent routing, tool execution, permissions, approvals, audit logging and model governance across product workflows.",
    overview:
      "A production AI agent foundation built for GoPaddi to coordinate model behavior, business tools, approvals, auditability and reusable AI endpoints across multiple product verticals.",
    role: "Senior Data Scientist / AI Engineer",
    period: "Mar 2026 - Present",
    organization: "GoPaddi",
    status: "Professional work",
    confidentiality: "Conceptual architecture only. Internal implementation details, private repositories, endpoints and credentials are intentionally omitted.",
    technologies: ["AI Agents", "LLMs", "Tool Registry", "Permissions", "Approvals", "Audit Logging", "Model Governance", "APIs"],
    outcomes: ["8+ product verticals", "6+ production AI solutions", "35% fewer production incidents"],
    responsibilities: [
      "Architected intent routing, tool execution and governed tool registry patterns for the Unified AI Agent.",
      "Defined permission-aware and approval-aware execution flows with audit logging for operational traceability.",
      "Delivered model management capabilities and reusable documented AI endpoints across support, CRM, finance and recruitment workflows."
    ],
    architecture: [
      "Intent classification layer routes user goals into approved domain workflows.",
      "Governed tool registry exposes only authorized actions and data access patterns.",
      "Validation, prompt-injection protections and model management controls support safer production operation."
    ],
    implementation: [
      "Designed auth-aware routing and approval boundaries for tool execution.",
      "Standardized reusable AI endpoints so multiple product teams could integrate agent capabilities without duplicating model logic.",
      "Strengthened reliability through validation, model governance and incident-reduction controls."
    ],
    evaluation: [
      "Resume verifies coverage across 8+ product verticals, 6+ production AI solutions and a 35% reduction in production incidents.",
      "No private operational dashboards, source repositories or internal architecture diagrams are exposed."
    ],
    sections: [
      {
        title: "Problem Statement",
        body: [
          "GoPaddi needed AI capabilities that could serve multiple product workflows without becoming a loose collection of isolated prompts, undocumented endpoints or unsafe tool access paths."
        ],
        bullets: [
          "Centralize model and agent behavior while preserving product-specific workflows.",
          "Govern tool execution with permissions, approvals and audit logging.",
          "Reduce reliability risk from prompt injection, invalid routing and unmanaged model changes."
        ]
      },
      {
        title: "My Contributions",
        body: [
          "I led the architecture of the Unified AI Agent and helped turn it into a production platform spanning supplier chat, Deal Card AI, Scout, Ally and model management capabilities."
        ],
        bullets: [
          "Defined the intent-routing and tool-execution architecture.",
          "Built model-management and governance patterns for operational AI delivery.",
          "Aligned reusable AI endpoints with support, CRM, finance and recruitment use cases."
        ]
      }
    ],
    related: ["investment-intelligence-agents", "healthcare-triage-rag-agents", "travel-content-rag-agents"],
    visual: "agent"
  },
  {
    slug: "investment-intelligence-agents",
    title: "Multi-Agent Investment Intelligence System",
    shortTitle: "Investment Intelligence Agents",
    category: "Financial AI",
    source: "Resume: Lighthill Investment Limited, AI & Automation Engineer / Innovation Team Lead",
    excerpt:
      "Multi-agent workflows for market-data retrieval, technical and economic analysis, forecasting and synthesis of investment insights.",
    overview:
      "An AI automation initiative for investment operations, combining real-time market data pipelines with specialized agents for analysis, forecasting and insight synthesis.",
    role: "AI & Automation Engineer / Innovation Team Lead",
    period: "Feb 2025 - Mar 2026",
    organization: "Lighthill Investment Limited",
    status: "Professional work",
    confidentiality: "Financial-data sources, private operational workflows and proprietary decision logic are not disclosed.",
    technologies: ["Multi-Agent Systems", "Financial Data Pipelines", "Forecasting", "Monitoring", "Automation", "Python"],
    outcomes: ["Innovation Team Lead", "Real-time market data", "Investment insight synthesis"],
    responsibilities: [
      "Led AI-powered automation replacing repetitive manual investment-operation workflows.",
      "Engineered real-time financial data pipelines and market monitoring systems.",
      "Orchestrated specialized agents for market retrieval, technical analysis, economic analysis, forecasting and synthesis."
    ],
    architecture: [
      "Market-data ingestion captures stock-exchange prices and changing market signals.",
      "Specialized agents evaluate technical, economic and asset-specific contexts.",
      "Synthesis layer turns agent outputs into actionable investment intelligence for faster analysis."
    ],
    implementation: [
      "Built monitoring workflows for stock-exchange prices and market movements.",
      "Connected retrieval, analysis and forecasting components into a multi-agent operating pattern.",
      "Focused the system on decision support rather than replacing human investment judgment."
    ],
    evaluation: [
      "Resume verifies real-time financial data pipelines, monitoring systems and a multi-agent investment intelligence system.",
      "No private financial models, client data, credentials or proprietary strategy rules are included."
    ],
    sections: [
      {
        title: "Problem Statement",
        body: [
          "Investment analysis workflows depended on repeated manual checks across changing market data, slowing access to current financial information and delaying synthesis."
        ],
        bullets: [
          "Automate routine data capture and monitoring.",
          "Coordinate specialist agents across market retrieval, analysis and forecasting.",
          "Present consolidated insights while preserving human review."
        ]
      },
      {
        title: "My Contributions",
        body: [
          "As Innovation Team Lead, I designed and deployed the AI automation patterns and coordinated the multi-agent investment intelligence workflow."
        ],
        bullets: [
          "Led the innovation delivery motion for automation use cases.",
          "Built data pipelines for changing market conditions.",
          "Designed agent orchestration for stocks, Bitcoin, cryptocurrency and other financial assets."
        ]
      }
    ],
    related: ["unified-ai-agent", "aviation-recommendation-mlops", "travel-content-rag-agents"],
    visual: "finance"
  },
  {
    slug: "healthcare-triage-rag-agents",
    title: "Healthcare Triage and RAG Agents",
    shortTitle: "Healthcare Triage Agents",
    category: "Healthcare AI",
    source: "Resume: Health Strategy and Delivery Foundation, AI/ML Engineer",
    excerpt:
      "Domain-specific healthcare LLMs, multimodal reporting agents and RAG-based Q&A systems for triage and healthcare worker support.",
    overview:
      "A healthcare AI system family spanning domain-specific LLM fine-tuning, personalized report generation and retrieval-augmented Q&A for healthcare worker support.",
    role: "AI/ML Engineer",
    period: "Oct 2024 - Feb 2026",
    organization: "Health Strategy and Delivery Foundation",
    status: "Professional work",
    confidentiality: "Clinical data, patient information, internal deployments and private model artifacts are omitted.",
    technologies: ["Healthcare LLMs", "RAG", "Multimodal AI", "Fine-tuning", "NLP", "Clinical Triage"],
    outcomes: ["90%+ triage accuracy", "25% increase in customer retention", "Healthcare worker Q&A systems"],
    responsibilities: [
      "Designed and fine-tuned domain-specific LLMs for healthcare triage.",
      "Built multimodal agents processing structured medical data and unstructured notes into personalized reports.",
      "Deployed RAG-based Q&A systems for contextual healthcare worker support."
    ],
    architecture: [
      "Domain-tuned LLM handles triage-oriented language understanding.",
      "Multimodal processing layer combines structured medical inputs and unstructured patient notes.",
      "Retrieval layer grounds healthcare worker Q&A in relevant support information."
    ],
    implementation: [
      "Fine-tuned healthcare-specific language models for triage scenarios.",
      "Adapted healthcare triage work into travel-health advisory agents with real-time safety recommendations.",
      "Built report-generation flows from combined structured and unstructured inputs."
    ],
    evaluation: [
      "Resume verifies 90%+ triage accuracy and a 25% increase in customer retention.",
      "No patient data, internal prompts, private documents or clinical source systems are exposed."
    ],
    sections: [
      {
        title: "Problem Statement",
        body: [
          "Healthcare support workflows required domain-aware triage, contextual Q&A and personalized reporting without relying on generic model behavior alone."
        ],
        bullets: [
          "Improve triage accuracy with domain-specific fine-tuning.",
          "Support healthcare workers with retrieval-grounded responses.",
          "Generate useful reports from mixed structured and unstructured medical inputs."
        ]
      },
      {
        title: "My Contributions",
        body: [
          "I designed the LLM, multimodal agent and RAG components behind the healthcare AI workflows described in the resume."
        ],
        bullets: [
          "Fine-tuned healthcare triage models.",
          "Built multimodal report agents.",
          "Deployed RAG systems for healthcare worker support."
        ]
      }
    ],
    related: ["pediatric-xray-denoising", "vamae-oct-angiography", "travel-content-rag-agents"],
    visual: "health"
  },
  {
    slug: "aviation-recommendation-mlops",
    title: "Aviation Recommendation and MLOps Platform",
    shortTitle: "Aviation Recommendation MLOps",
    category: "MLOps",
    source: "Resume: Skyway Aviation Handling Company, Machine Learning Engineer",
    excerpt:
      "Transformer-based recommendation engines, containerized ML pipelines and model-serving infrastructure for personalized travel suggestions.",
    overview:
      "A production ML initiative combining recommendation modeling with Docker/Kubernetes deployment, lower-latency model serving and automated MLOps workflows.",
    role: "Machine Learning Engineer",
    period: "Feb 2023 - Sep 2024",
    organization: "Skyway Aviation Handling Company",
    status: "Professional work",
    confidentiality: "Operational data, user data, internal infrastructure and source repositories are omitted.",
    technologies: ["Transformers", "Recommendation Systems", "Collaborative Filtering", "Docker", "Kubernetes", "MLOps"],
    outcomes: ["18% higher user retention", "40% lower inference latency", "30% faster time-to-production"],
    responsibilities: [
      "Built transformer-based recommendation engines with collaborative filtering for travel suggestions.",
      "Containerized ML pipelines using Docker and Kubernetes.",
      "Built model-serving infrastructure and automated MLOps workflows for faster production delivery."
    ],
    architecture: [
      "Recommendation layer combines transformer modeling and collaborative filtering.",
      "Containerized pipeline supports repeatable model packaging and deployment.",
      "Serving layer focuses on reduced inference latency and production reliability."
    ],
    implementation: [
      "Developed personalized travel recommendation workflows.",
      "Packaged ML workloads with Docker and Kubernetes deployment patterns.",
      "Automated production workflows to reduce deployment friction."
    ],
    evaluation: [
      "Resume verifies 18% user-retention improvement, 40% inference-latency reduction and 30% faster time-to-production.",
      "No private data or internal infrastructure diagrams are published."
    ],
    sections: [
      {
        title: "Problem Statement",
        body: [
          "Travel recommendation workflows needed stronger personalization while production ML delivery needed lower latency and faster release cycles."
        ],
        bullets: [
          "Increase retention through better personalized suggestions.",
          "Reduce serving latency for deployed ML models.",
          "Automate MLOps workflows for faster production handoff."
        ]
      },
      {
        title: "My Contributions",
        body: [
          "I worked across modeling, serving and deployment automation to connect recommendation quality with production performance."
        ],
        bullets: [
          "Built transformer and collaborative-filtering recommendation engines.",
          "Containerized model pipelines.",
          "Improved inference and production-delivery performance."
        ]
      }
    ],
    related: ["travel-content-rag-agents", "investment-intelligence-agents", "unified-ai-agent"],
    visual: "mlops"
  },
  {
    slug: "travel-content-rag-agents",
    title: "Travel Content Generation and RAG Agents",
    shortTitle: "Travel RAG Agents",
    category: "Generative AI",
    source: "Resume: TIPTHORP, AI/ML Engineer",
    excerpt:
      "LLM fine-tuning, multimodal travel content generation, chatbots and RAG-based recommendation agents for high-volume user workflows.",
    overview:
      "A generative AI and retrieval system for travel content, support automation and recommendation workflows across multiple content types and large user volume.",
    role: "AI/ML Engineer",
    period: "Mar 2021 - Jan 2023",
    organization: "TIPTHORP",
    status: "Professional work",
    confidentiality: "Private repositories, prompts, customer data and deployment internals are omitted.",
    technologies: ["LLM Fine-tuning", "RAG", "Chatbots", "Recommendation Agents", "Multimodal Content", "NLP"],
    outcomes: ["12 content types", "15% engagement lift", "1,000,000+ users supported"],
    responsibilities: [
      "Fine-tuned LLMs for multimodal travel content generation across 12 content types.",
      "Built LLM-powered chatbots and RAG-based recommendation agents.",
      "Improved engagement and query resolution through domain-specific generation and retrieval orchestration."
    ],
    architecture: [
      "Fine-tuned generation layer creates travel content across multiple formats.",
      "RAG layer supports retrieval-grounded recommendations and chatbot responses.",
      "Conversation layer resolves support and discovery queries without defaulting to human escalation."
    ],
    implementation: [
      "Adapted LLMs to travel-domain content needs.",
      "Built chatbot and recommendation-agent workflows.",
      "Combined retrieval and generation to support high-volume user interactions."
    ],
    evaluation: [
      "Resume verifies a 15% engagement lift over 6 months, 1,000,000+ users served and 82% query resolution without human escalation.",
      "No internal prompts, logs, customer records or private code are exposed."
    ],
    sections: [
      {
        title: "Problem Statement",
        body: [
          "Travel-content and support workflows needed scalable generation, retrieval and recommendation capabilities that could handle high-volume user interaction."
        ],
        bullets: [
          "Generate multimodal travel content across defined content types.",
          "Resolve common user queries through LLM-powered support flows.",
          "Ground recommendations using retrieval rather than generic generation alone."
        ]
      },
      {
        title: "My Contributions",
        body: [
          "I built LLM, chatbot and RAG recommendation capabilities that connected travel-domain generation with user support and discovery workflows."
        ],
        bullets: [
          "Fine-tuned LLMs for 12 content types.",
          "Built chatbot and recommendation agents.",
          "Supported query-resolution and engagement improvements."
        ]
      }
    ],
    related: ["unified-ai-agent", "healthcare-triage-rag-agents", "aviation-recommendation-mlops"],
    visual: "travel"
  },
  {
    slug: "pediatric-xray-denoising",
    title: "Structure-Aware Denoising for Pediatric Chest X-Rays",
    shortTitle: "Pediatric X-Ray Denoising",
    category: "Research",
    source: "Resume: Research Experience, MICCAI 2025",
    excerpt:
      "Dual-decoder denoising framework for pediatric chest X-rays that improved pneumonia classification accuracy in verified research work.",
    overview:
      "A medical-imaging research implementation focused on structure-aware denoising for pediatric chest X-rays and downstream pneumonia classification performance.",
    role: "Research Contributor",
    period: "MICCAI 2025",
    organization: "Research Experience",
    status: "Research implementation",
    confidentiality: "Publication links, code links and full paper assets are not available in the supplied materials yet.",
    technologies: ["Computer Vision", "Medical Imaging", "Denoising", "Dual Decoder", "Deep Learning", "Classification"],
    outcomes: ["MICCAI 2025", "Best Poster Award", "88.8% to 92.5% accuracy"],
    responsibilities: [
      "Co-developed a dual-decoder denoising framework for pediatric chest X-rays.",
      "Focused on structure-aware denoising and downstream pneumonia classification quality.",
      "Contributed to research recognized with a MICCAI 2025 Best Poster Award."
    ],
    architecture: [
      "Input chest X-ray passes through denoising components designed to preserve clinically relevant structure.",
      "Dual-decoder architecture separates restoration goals from downstream classification utility.",
      "Evaluation connects image restoration quality to pneumonia classification accuracy."
    ],
    implementation: [
      "Implemented and evaluated denoising methods for pediatric chest X-ray imagery.",
      "Measured downstream classification movement from baseline to improved model performance.",
      "Kept clinical imagery and dataset details out of the public portfolio until explicit assets are supplied."
    ],
    evaluation: [
      "Resume verifies accuracy improvement from 88.8% to 92.5% and MICCAI 2025 Best Poster Award.",
      "No paper URL, GitHub URL, dataset samples or medical images were supplied for publication on this page."
    ],
    sections: [
      {
        title: "Research Objective",
        body: [
          "The project explored whether structure-aware denoising could improve the quality of pediatric chest X-ray representations for pneumonia classification."
        ],
        bullets: [
          "Reduce image noise while preserving diagnostically relevant structures.",
          "Evaluate the effect of denoising on downstream classification accuracy.",
          "Avoid displaying sensitive medical imagery without explicit approved assets."
        ]
      }
    ],
    related: ["vamae-oct-angiography", "healthcare-triage-rag-agents", "aviation-recommendation-mlops"],
    visual: "vision"
  },
  {
    slug: "vamae-oct-angiography",
    title: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography",
    shortTitle: "VAMAE OCT Angiography",
    category: "Research",
    source: "Resume: Research Experience, ICPR 2026",
    excerpt:
      "Vessel-aware self-supervised autoencoder for improving vessel segmentation in limited-label OCT angiography settings.",
    overview:
      "A research implementation applying vessel-aware masked autoencoding to OCT angiography, focused on improving segmentation where labeled data is limited.",
    role: "Research Contributor",
    period: "ICPR 2026",
    organization: "Research Experience",
    status: "Research implementation",
    confidentiality: "Publication links, code links and supplementary material have not yet been supplied.",
    technologies: ["Masked Autoencoders", "OCT Angiography", "Self-Supervised Learning", "Segmentation", "Computer Vision", "Medical Imaging"],
    outcomes: ["ICPR 2026", "Limited-label segmentation", "Vessel-aware representation learning"],
    responsibilities: [
      "Co-developed a vessel-aware self-supervised autoencoder for OCT angiography.",
      "Focused on representation learning for vessel segmentation with limited labels.",
      "Contributed to research connecting medical imaging constraints with modern self-supervised learning."
    ],
    architecture: [
      "Masked autoencoding setup learns representations from OCT angiography structure.",
      "Vessel-aware objectives bias the model toward vascular patterns relevant for segmentation.",
      "Segmentation evaluation targets limited-label settings where annotation is constrained."
    ],
    implementation: [
      "Applied self-supervised learning to OCT angiography inputs.",
      "Designed vessel-aware learning signals for segmentation quality.",
      "Kept paper/code links out until supplied and verified."
    ],
    evaluation: [
      "Resume verifies the ICPR 2026 VAMAE project and its vessel-aware limited-label segmentation focus.",
      "No private datasets, medical images, unpublished figures or source repositories are exposed."
    ],
    sections: [
      {
        title: "Research Objective",
        body: [
          "The project examined how vessel-aware masked autoencoding can improve segmentation performance in OCT angiography when labeled examples are limited."
        ],
        bullets: [
          "Use self-supervised learning to reduce dependence on dense labels.",
          "Encode vessel-specific structure in learned representations.",
          "Support downstream segmentation in medical imaging workflows."
        ]
      }
    ],
    related: ["pediatric-xray-denoising", "healthcare-triage-rag-agents", "aviation-recommendation-mlops"],
    visual: "oct"
  }
] as const;

export type ProjectSummary = Project;

export const projectHref = (slug: string) => routes.projectDetail(slug);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project) {
  return project.related.map((slug) => getProject(slug)).filter((item): item is Project => Boolean(item));
}
