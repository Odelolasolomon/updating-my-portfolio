export type Testimonial = {
  id: string;
  name: string;
  description: string;
  sourceLabel: string;
  sourceHref: string;
  excerpt: string;
  fullText: string;
};

export const linkedinRecommendationsHref = "https://www.linkedin.com/in/odelolasolomon/details/recommendations/";

export const testimonials: Testimonial[] = [
  {
    id: "kenechukwu-agbo",
    name: "Kenechukwu Agbo",
    description: "Senior Software Engineer | Distributed Systems & Machine Learning | Ex-eBay",
    sourceLabel: "LinkedIn recommendation",
    sourceHref: linkedinRecommendationsHref,
    excerpt: "Odelola Solomon is an exceptional data scientist and machine learning engineer.",
    fullText:
      "Odelola Solomon is an exceptional data scientist and machine learning engineer. He has a deep understanding of advanced algorithms, data analysis, and predictive modeling, and his expertise in Python, R, SQL, and AWS sets him apart. What truly stands out is his ability to turn complex data into storytelling and informing insights, making him a valuable asset for any team. Solomon's collaborative spirit and problem-solving skills make him highly effective in delivering results. I highly recommend him for any data-driven role."
  },
  {
    id: "chidubem-anyali",
    name: "Chidubem Anyali",
    description: "Data Analyst | Social Media Manager",
    sourceLabel: "LinkedIn recommendation",
    sourceHref: linkedinRecommendationsHref,
    excerpt: "Solomon is great with data analytics tools - Excel, Power BI, SQL, and Python.",
    fullText:
      "Solomon is great with data analytics tools - Excel, Power BI, SQL, and Python. He is a good problem solver and also has a good knowledge of communicating insights."
  },
  {
    id: "oluwafunto-salvador",
    name: "Oluwafunto Salvador",
    description: "Customer Experience | Strategic Communications | Customer Engagement | Process Optimisation",
    sourceLabel: "LinkedIn recommendation",
    sourceHref: linkedinRecommendationsHref,
    excerpt: "He is quite efficient and focused and great at managing people.",
    fullText:
      "Odelola Solomon can easily gather data, find gaps in that data, and then effectively analyze the issues at play that are affecting our business as a group. He is quite efficient and focused and great at managing people."
  }
];
