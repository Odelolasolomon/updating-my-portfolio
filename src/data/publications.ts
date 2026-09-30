export type PublicationLink = {
  label: string;
  href: string;
};

export type Publication = {
  slug: string;
  title: string;
  venue: string;
  year: string;
  status: string;
  note: string;
  summary: string;
  contribution: string;
  methods: string[];
  outcomes: string[];
  source: string;
  projectSlug?: string;
  links?: PublicationLink[];
};

export const publications: Publication[] = [
  {
    slug: "structure-aware-pediatric-xray-denoising",
    title: "Structure-Aware Denoising for Pediatric Chest X-Rays",
    venue: "MICCAI",
    year: "2025",
    status: "Conference research contribution",
    note: "Best Poster Award",
    summary:
      "Co-developed a dual-decoder denoising framework for pediatric chest X-rays, improving pneumonia classification accuracy from 88.8% to 92.5%.",
    contribution:
      "The work connects image restoration with downstream clinical classification, focusing on denoising methods that preserve diagnostically relevant structure in pediatric chest X-ray imagery.",
    methods: ["Computer Vision", "Medical Imaging", "Denoising", "Dual Decoder", "Deep Learning", "Classification"],
    outcomes: ["MICCAI 2025", "Best Poster Award", "88.8% to 92.5% accuracy"],
    source: "Supplied resume: Research Experience section",
    projectSlug: "pediatric-xray-denoising"
  },
  {
    slug: "vamae-oct-angiography",
    title: "VAMAE: Vessel-Aware Masked Autoencoders for OCT Angiography",
    venue: "ICPR",
    year: "2026",
    status: "Conference research contribution listed in resume",
    note: "Vessel-Aware Representation Learning",
    summary:
      "Co-developed a vessel-aware self-supervised autoencoder to improve vessel segmentation in limited-label OCT angiography settings.",
    contribution:
      "The work applies vessel-aware masked autoencoding to OCT angiography, emphasizing self-supervised representation learning for segmentation when dense labels are constrained.",
    methods: ["Masked Autoencoders", "OCT Angiography", "Self-Supervised Learning", "Segmentation", "Computer Vision", "Medical Imaging"],
    outcomes: ["ICPR 2026", "Limited-label segmentation", "Vessel-aware representation learning"],
    source: "Supplied resume: Research Experience section",
    projectSlug: "vamae-oct-angiography"
  }
] as const;

