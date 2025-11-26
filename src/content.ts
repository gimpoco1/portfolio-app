export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Project = {
  title: string;
  image: string;
  github?: string;
  demo?: string;
};

export type EducationEntry = {
  title: string;
  issuer: string;
  year: string;
  summary?: string;
  link?: string;
};

export type GradientPreset = {
  name: string;
  colors: string[];
  rotation?: number;
  speed?: number;
  warpStrength?: number;
  frequency?: number;
};

export const navLinks: NavLink[] = [
  { label: "Download CV", href: "/assets/GiacomoImpocoCV2025.pdf" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/giacomoimpoco/" },
  { label: "GitHub", href: "https://github.com/gimpoco1" },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=impoco126@gmail.com",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/giacomoimpoco/",
    icon: "/assets/linkedin.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/gimpoco1",
    icon: "/assets/github.png",
  },
];

export const techStack = [
  "HTML",
  "CSS",
  "React",
  "JavaScript",
  "TypeScript",
  "Next JS",
  "Chakra UI",
  "TailwindCSS",
  "Node JS",
  "NestJS",
  "PostgreSQL",
  "Express/KOA",
  "Git CD/CI",
  "MongoDB",
  "Redux",
  "Storybook",
  "Python",
  "Django",
  "Docker",
  "Vite",
  "Figma"
];

export const projects: Project[] = [
  {
    title: "Building Construction Company",
    image: "/assets/mpkbuildings.png",
    github: "https://github.com/gimpoco1/mpk-buildings",
    demo: "https://mpkbuildings.com/",
  },
  {
    title: "E-commerce Marketplace",
    image: "/assets/marketplace.png",
    github: "https://github.com/gimpoco1/market-place",
    demo: "https://treasure-ireland.vercel.app/",
  },
  {
    title: "Level Up Game",
    image: "/assets/levelup.png",
    github: "https://github.com/gimpoco1/Level-Up",
  },
];

export const experienceStartYear = 2022;

export const education: EducationEntry[] = [
  {
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Codeworks",
    year: "2024",
    summary:
      "Completed an intensive full-stack web development bootcamp focusing on modern web technologies and best practices.",
  },
  {
    title: "Databases for Back-End Development",
    issuer: "Coursera",
    year: "2023",
    summary:
      "Learned about database design, SQL, and back-end data management.",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Coursera",
    year: "2023",
    summary:
      "Gained foundational knowledge of AWS cloud concepts, services, and best practices.",
  },
  {
    title: "Google IT Support Specialization",
    issuer: "Coursera",
    year: "2022",
    summary:
      "Gained foundational IT support skills including troubleshooting, system administration, and security.",
  },
];
