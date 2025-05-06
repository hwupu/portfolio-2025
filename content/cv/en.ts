import type { Experience, Education } from "@/types/cv";

export const experiences: Experience[] = [
  {
    title: "Senior Front-end Engineer",
    company: "Lexionlu Design Firm",
    url: "http://www.lexionlu.com",
    location: "Taipei, Taiwan",
    startDate: "08/2021",
    endDate: "04/2025",
    description: [
      "Developed WCAG-compliant web-app for a major airline, and successfully served over 6+ million users by implementing ARIA attributes, semantic HTML, keyboard navigation, and conducting automated and manual accessibility testing.",
      "Engineered a modern UI component library for a major bank's web-view mobile app, streamlining development and improving maintainability by leveraging a headless library and Storybook in collaboration with design and native teams.",
      "Established an efficient DevOps process for website development, achieving a 90% reduction in deployment time by automating the deployment to Ubuntu with Docker and GitHub Actions, and utilizing Traefik as a reverse proxy for optimized traffic management.",
      "Addressed vulnerability concerns for Wagtail CMS by implementing nonce-based CSP configurations and establishing secure coding practices across all projects.",
    ],
  },
  {
    title: "Deputy General Manager",
    company: "Siam P&W Technic",
    url: "https://siampw.com",
    location: "Samutprakan, Thailand",
    startDate: "03/2017",
    endDate: "05/2021",
    description: [
      "Reduced 60% of IT operational cost by insourcing projects and by introducing best practices to cloud solutions, such as AWS, Azure AD, Exchange Online, or Cloudflare proxy, etc.",
      "Expanded market and increased revenue by 30%, by establishing a team for digital UV printing process.",
      "Gained 10% more profit by implementing ISO 9001 and 5S quality control systems to standardize pricing models and to reduce quality loss.",
    ],
  },
  {
    title: "Intership",
    company: "Tagtoo Co., Ltd.",
    url: "https://tagtoo.com",
    location: "Taipei, Taiwan",
    startDate: "06/2016",
    endDate: "01/2017",
    description: ["(internal system)"],
    hide: true,
  },
  {
    title: "Internship",
    company: "IT Service Center, NCTU",
    url: "https://it.nycu.edu.tw",
    location: "Hsinchu, Taiwan",
    startDate: "02/2013",
    endDate: "12/2013",
    description: ["(internal system)"],
    hide: true,
  },
];

export const education: Education[] = [
  {
    institution: "National Chiao Tung University",
    degree: "Master of Industrial Design",
    url: "https://www.nycu.edu.tw",
    startDate: "09/2016",
    endDate: "01/2017",
    status: "Not graduated",
    hide: true,
  },
  {
    institution: "National Chiao Tung University",
    degree: "Bachelor of Computer Science",
    url: "https://www.nycu.edu.tw",
    startDate: "09/2012",
    endDate: "06/2016",
    gpa: "3.51",
  },
  {
    institution: "Thai-Chinese International School",
    description: "Accredited by WASC (AP Curriculum)",
    url: "https://www.tcis.ac.th",
    startDate: "08/2008",
    endDate: "05/2012",
    gpa: "3.56",
  },
];
