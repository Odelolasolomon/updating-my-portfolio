export type AchievementCategory = "research" | "academic" | "fellowship" | "certification" | "challenge";
export type AchievementTone = "blue" | "orange" | "charcoal";

export type AchievementLink = {
  label: string;
  href: string;
};

export type AchievementRecord = {
  id: string;
  title: string;
  organization: string;
  category: AchievementCategory;
  year?: string;
  status: string;
  summary: string;
  evidence: string;
  tone: AchievementTone;
  featured?: boolean;
  links?: AchievementLink[];
};

export const achievementRecords: AchievementRecord[] = [
  {
    id: "miccai-best-poster",
    title: "Best Poster Award",
    organization: "MICCAI",
    category: "research",
    year: "2025",
    status: "Major research recognition",
    summary:
      "Recognition connected to the structure-aware pediatric chest X-ray denoising work listed in the supplied research materials and existing portfolio pages.",
    evidence: "Supplied resume, approved research/project pages and verified SharpXR poster evidence.",
    tone: "blue",
    featured: true,
    links: [
      { label: "Research Profile", href: "/research" },
      { label: "Case Study", href: "/projects/pediatric-xray-denoising" }
    ]
  },
  {
    id: "top-five-statistics",
    title: "Top 5 in the Department of Statistics",
    organization: "University of Nigeria, Nsukka",
    category: "academic",
    year: "2024",
    status: "Academic distinction",
    summary:
      "B.Sc. Statistics, University of Nigeria, Nsukka. Final CGPA: 4.71/5.00; Top 5 in the Department of Statistics.",
    evidence: "User-confirmed final academic wording from Milestone 17B.",
    tone: "blue"
  },
  {
    id: "kaggle-bipoc-program",
    title: "KaggleX BIPOC Mentorship Program",
    organization: "KaggleX",
    category: "fellowship",
    status: "Programme recognition",
    summary:
      "Recorded using the exact supported programme wording. It is not described as an award unless separate evidence later supports that wording.",
    evidence: "Verified asset record: KaggleX BIPOC Mentorship Program.",
    tone: "orange"
  },
  {
    id: "hamoye-fellowship",
    title: "Hamoye Data Science Fellowship Recognition",
    organization: "Hamoye",
    category: "fellowship",
    status: "Fellowship recognition",
    summary:
      "Data science fellowship recognition retained from the approved portfolio foundation and verified asset/logo set.",
    evidence: "Approved portfolio content and verified Hamoye logo asset.",
    tone: "charcoal"
  },
  {
    id: "alx-data-science",
    title: "ALX Data Science",
    organization: "ALX",
    category: "certification",
    status: "Professional credential",
    summary:
      "Completion evidence for the 13-month ALX Data Science program with Professional Development Skills for the Digital Age.",
    evidence: "Verified public-candidate ALX credential asset.",
    tone: "blue"
  },
  {
    id: "educative-machine-learning-engineer",
    title: "Become a Machine Learning Engineer",
    organization: "Educative",
    category: "certification",
    year: "2024",
    status: "Professional credential",
    summary:
      "Certificate of Skill Path Completion: Become a Machine Learning Engineer, 6 modules / 299 lessons, issued 2024-09-04.",
    evidence: "Verified public-candidate Educative credential asset.",
    tone: "orange"
  },
  {
    id: "side-hustle-data-analytics",
    title: "Data Analytics Certificate of Completion",
    organization: "Side Hustle Internship",
    category: "certification",
    year: "2022",
    status: "Professional credential",
    summary:
      "Certificate of Completion - Data Analytics, Cohort 5 of the Side Hustle Internship, issued May 30 2022.",
    evidence: "Verified public-candidate Side Hustle credential asset.",
    tone: "charcoal"
  },
  {
    id: "utiva-data-analytics",
    title: "Data Analytics Program: Incubator",
    organization: "Utiva",
    category: "certification",
    year: "2021",
    status: "Professional credential",
    summary:
      "Verified Utiva Data Analytics Program: Incubator credential dated February 18 2021.",
    evidence: "Verified public-candidate Utiva credential PDF.",
    tone: "blue"
  },
  {
    id: "zindi-participation",
    title: "Zindi Data Science Challenges",
    organization: "Zindi",
    category: "challenge",
    status: "Participant",
    summary:
      "Participation in data-science challenges focused on applying machine learning and analytics to practical problems, including African-context problem solving.",
    evidence: "Verified public-candidate Zindi participation asset.",
    tone: "orange"
  }
];

export const achievements = achievementRecords.map((achievement) => `${achievement.title}, ${achievement.organization}`);

export const featuredAchievements = achievementRecords.filter((achievement) => achievement.featured);
export const researchAchievements = achievementRecords.filter((achievement) => achievement.category === "research");
export const academicAchievements = achievementRecords.filter((achievement) => achievement.category === "academic");
export const fellowshipAchievements = achievementRecords.filter((achievement) => achievement.category === "fellowship");
export const certificationAchievements = achievementRecords.filter((achievement) => achievement.category === "certification");
export const challengeAchievements = achievementRecords.filter((achievement) => achievement.category === "challenge");
