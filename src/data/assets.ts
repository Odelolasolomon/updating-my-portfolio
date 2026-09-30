export type AssetCategory = "profile" | "research" | "leadership" | "achievement";
export type EvidenceType = "Portrait" | "Journey photo" | "Poster" | "Certificate" | "Conference photo" | "Speaking evidence" | "Credential" | "Challenge participation";

export type PortfolioAsset = {
  id: string;
  src?: string;
  width?: number;
  height?: number;
  title: string;
  category: AssetCategory;
  type: EvidenceType;
  alt: string;
  caption: string;
  status: string;
  caveat?: string;
  evidenceHref?: string;
};

export const profileAssets = {
  portrait: {
    id: "solomon-portrait",
    src: "/assets/images/profile/solomon-portrait.jpg",
    width: 720,
    height: 900,
    title: "Odelola Solomon portrait",
    category: "profile",
    type: "Portrait",
    alt: "Portrait of Odelola Solomon.",
    caption: "Approved portrait candidate for the About page.",
    status: "Approved public derivative"
  },
  journey: {
    id: "solomon-about-journey",
    src: "/assets/images/profile/solomon-about-journey.jpg",
    width: 900,
    height: 675,
    title: "About journey photograph",
    category: "profile",
    type: "Journey photo",
    alt: "Odelola Solomon in a professional journey photograph.",
    caption: "Approved secondary About page visual.",
    status: "Approved public derivative"
  }
} satisfies Record<string, PortfolioAsset>;

export const researchEvidence = [
  {
    id: "sharpxr-pediatric-xray-poster",
    src: "/assets/images/research/sharpxr-pediatric-xray-poster.jpg",
    width: 900,
    height: 1376,
    title: "Structure-Aware Denoising for Pediatric Chest X-Rays",
    category: "research",
    type: "Poster",
    alt: "Research poster for structure-aware denoising for pediatric chest X-rays.",
    caption: "Poster evidence for the SharpXR pediatric chest X-ray denoising work.",
    status: "Verified research evidence",
    evidenceHref: "/assets/images/research/sharpxr-pediatric-xray-poster.jpg"
  },
  {
    id: "vamae-icpr-poster-certificate",
    title: "VAMAE OCT Angiography Poster Presentation",
    category: "research",
    type: "Certificate",
    alt: "Certificate evidence for the VAMAE OCT angiography poster presentation.",
    caption: "ICPR 2026 poster-presentation evidence for VAMAE.",
    status: "Poster presentation evidence, not an award",
    caveat: "Publication links, DOI and source code remain omitted until separately supplied.",
    evidenceHref: "/assets/images/research/vamae-poster-certificate.pdf"
  },
  {
    id: "alzheimers-poster",
    src: "/assets/images/research/alzheimers-poster-01.jpg",
    width: 900,
    height: 1200,
    title: "Comparative Analysis of Tabular and Image Data for Alzheimer's Disease Prediction Using Machine Learning",
    category: "research",
    type: "Poster",
    alt: "Poster for Alzheimer's disease prediction research by Odelola Solomon O. and Chisom Chibuike R.",
    caption: "Research/project/poster work by Odelola Solomon O. and Chisom Chibuike R.",
    status: "Research/project/poster work",
    caveat: "No conference, publication venue, acceptance status, event date or award is claimed from this asset.",
    evidenceHref: "/assets/images/research/alzheimers-poster-01.jpg"
  },
  {
    id: "conference-04-research-participation",
    src: "/assets/images/research/conference-04.jpg",
    width: 900,
    height: 675,
    title: "Research participation visual",
    category: "research",
    type: "Conference photo",
    alt: "Odelola Solomon at a research or conference setting.",
    caption: "Selected research/conference participation photograph.",
    status: "Context-limited visual evidence",
    caveat: "No event name, date, institution or identity of other visible people is inferred from the photograph."
  }
] satisfies PortfolioAsset[];

export const leadershipEvidence = [
  {
    id: "fundamentals-of-sql-teaching",
    src: "/assets/images/leadership/fundamentals-of-sql-teaching.jpg",
    width: 960,
    height: 600,
    title: "Fundamentals of SQL Teaching",
    category: "leadership",
    type: "Speaking evidence",
    alt: "Flyer preview for a Fundamentals of SQL teaching event delivered by Odelola Solomon.",
    caption: "Confirmed teaching event delivered by Odelola Solomon in September 2022.",
    status: "Teaching and mentorship evidence",
    caveat: "Public preview is cropped for privacy; original evidence is preserved separately."
  },
  {
    id: "bit-panel-march-2024",
    src: "/assets/images/leadership/bit-panel-march-2024.jpg",
    width: 960,
    height: 600,
    title: "BIT 1.0 - Breaking Into Tech Panel",
    category: "leadership",
    type: "Speaking evidence",
    alt: "Flyer preview for the Breaking Into Tech panel with Odelola Solomon listed as a panelist.",
    caption: "Panel engagement on advancing your career and scaling expertise, March 1 2024.",
    status: "Speaking and community evidence",
    caveat: "Public preview is cropped for privacy; original evidence is preserved separately."
  },
  {
    id: "dsn-unn-data-ai-summit",
    src: "/assets/images/leadership/dsn-data-ai-summit.jpg",
    width: 960,
    height: 600,
    title: "DSN UNN Data & AI Summit",
    category: "leadership",
    type: "Speaking evidence",
    alt: "Flyer preview for the Data Scientists Network UNN Data and AI Summit.",
    caption: "Selected Data Scientists Network UNN event evidence from March 2024.",
    status: "Speaking and community evidence",
    caveat: "Public preview is cropped for privacy; original evidence is preserved separately."
  }
] satisfies PortfolioAsset[];

export const achievementEvidence = [
  {
    id: "alx-data-science",
    src: "/assets/images/achievements/alx-data-science.jpg",
    width: 480,
    height: 270,
    title: "ALX Data Science",
    category: "achievement",
    type: "Credential",
    alt: "ALX Data Science credential evidence.",
    caption: "Completion evidence for the 13-month ALX Data Science program with Professional Development Skills for the Digital Age.",
    status: "Professional credential",
    caveat: "No issue date is shown because it was not confidently supported."
  },
  {
    id: "educative-ml-engineer",
    src: "/assets/images/achievements/educative-ml-engineer.jpg",
    width: 480,
    height: 320,
    title: "Educative - Become a Machine Learning Engineer",
    category: "achievement",
    type: "Credential",
    alt: "Educative certificate for Become a Machine Learning Engineer.",
    caption: "Certificate of Skill Path Completion: Become a Machine Learning Engineer, issued 2024-09-04.",
    status: "Professional credential"
  },
  {
    id: "side-hustle-data-analytics",
    src: "/assets/images/achievements/side-hustle-data-analytics.jpg",
    width: 800,
    height: 564,
    title: "Side Hustle Data Analytics",
    category: "achievement",
    type: "Credential",
    alt: "Side Hustle Data Analytics certificate of completion.",
    caption: "Certificate of Completion - Data Analytics, Cohort 5 of the Side Hustle Internship, issued May 30 2022.",
    status: "Professional credential"
  },
  {
    id: "utiva-data-analytics",
    title: "Utiva Data Analytics Program",
    category: "achievement",
    type: "Credential",
    alt: "Utiva Data Analytics Program credential evidence.",
    caption: "Data Analytics Program: Incubator, February 18 2021.",
    status: "Professional credential",
    evidenceHref: "/assets/images/achievements/utiva-data-analytics.pdf"
  },
  {
    id: "zindi-challenges",
    src: "/assets/images/achievements/zindi-participant.jpg",
    width: 900,
    height: 300,
    title: "Zindi Data Science Challenges",
    category: "achievement",
    type: "Challenge participation",
    alt: "Zindi Data Science Challenges participation evidence.",
    caption: "Participation in data-science challenges focused on practical machine learning and analytics problems.",
    status: "Participant",
    caveat: "No award, win, ranking, leaderboard position or specific challenge placement is claimed."
  }
] satisfies PortfolioAsset[];

