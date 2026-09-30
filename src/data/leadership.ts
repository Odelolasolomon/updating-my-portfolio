export type LeadershipEvidence = {
  label: string;
  href: string;
};

export type LeadershipCard = {
  title: string;
  context: string;
  summary: string;
  bullets: string[];
  evidence: LeadershipEvidence[];
  tone: "blue" | "orange" | "charcoal";
};

export const leadershipHighlights: LeadershipCard[] = [
  {
    title: "Unified AI Agent Architecture Leadership",
    context: "GoPaddi | Senior Data Scientist / AI Engineer",
    summary:
      "Led architecture for a governed production AI agent spanning intent routing, tool execution, permissions, approvals, audit logging and model governance.",
    bullets: [
      "Established a reusable agent foundation across support, CRM, finance and recruitment workflows.",
      "Aligned model management, validation and auth-aware routing with production reliability requirements.",
      "Connected technical architecture to shipped AI solutions including supplier chat, Deal Card AI, Scout and Ally."
    ],
    evidence: [
      { label: "Unified AI Agent Case Study", href: "/projects/unified-ai-agent" },
      { label: "Experience", href: "/experience" }
    ],
    tone: "blue"
  },
  {
    title: "Innovation Team Leadership",
    context: "Lighthill Investment Limited | AI & Automation Engineer / Innovation Team Lead",
    summary:
      "Led AI-powered automation for investment operations and coordinated multi-agent intelligence workflows for real-time financial analysis.",
    bullets: [
      "Directed automation work replacing repetitive manual investment-operation workflows.",
      "Coordinated real-time financial data pipelines, monitoring systems and market-data processing.",
      "Orchestrated specialized agents for retrieval, technical and economic analysis, forecasting and insight synthesis."
    ],
    evidence: [
      { label: "Investment Agents Case Study", href: "/projects/investment-intelligence-agents" },
      { label: "Experience", href: "/experience" }
    ],
    tone: "orange"
  },
  {
    title: "Research Collaboration",
    context: "Medical imaging research | MICCAI 2025 and ICPR 2026",
    summary:
      "Contributed to applied computer vision research around pediatric chest X-ray denoising and OCT angiography representation learning.",
    bullets: [
      "Co-developed structure-aware denoising work recognized with a MICCAI 2025 Best Poster Award.",
      "Co-developed VAMAE, a vessel-aware masked autoencoder for limited-label OCT angiography segmentation.",
      "Connected research interests to practical evaluation, trustworthy model behavior and clinical-imaging constraints."
    ],
    evidence: [
      { label: "Research Page", href: "/research" },
      { label: "Pediatric X-Ray Case Study", href: "/projects/pediatric-xray-denoising" }
    ],
    tone: "charcoal"
  }
];

export const leadershipPrinciples = [
  {
    title: "Governed delivery over isolated demos",
    text: "Leadership means turning model capability into permission-aware, observable and maintainable systems that product teams can actually use."
  },
  {
    title: "Documentation as technical leverage",
    text: "Reusable AI endpoints, documented workflows and clear integration patterns reduce duplicated effort and help teams ship reliably."
  },
  {
    title: "Research quality with production discipline",
    text: "Strong AI leadership connects experimental rigor with validation, deployment boundaries and operational accountability."
  }
] as const;

export const knowledgeSharing = [
  {
    title: "Reusable AI Endpoints",
    text: "Built and documented reusable AI endpoints so product workflows could adopt agent capabilities across support, CRM, finance and recruitment."
  },
  {
    title: "Healthcare Worker Support",
    text: "Deployed retrieval-augmented Q&A systems designed to support healthcare workers with contextual information retrieval."
  },
  {
    title: "Cross-Functional AI Delivery",
    text: "Worked across AI, product, operations and domain workflows where technical clarity and maintainable integration patterns matter."
  }
] as const;
