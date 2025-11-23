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
];

export const projects: Project[] = [
  {
    title: "Building Construction Website",
    image: "/assets/mpkbuildings.png",
    github: "https://github.com/gimpoco1/mpk-buildings",
    demo: "https://mpkbuildings.com/",
  },
  {
    title: "Market Place",
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

export const gradientPresets: GradientPreset[] = [
  {
    name: "Aurora",
    colors: ["#ffb600", "#715cff", "#0ebeff", "#ff4e92"],
    rotation: 25,
    speed: 0.25,
    warpStrength: 4.2,
    frequency: 0.2,
  },
  {
    name: "Neon Sands",
    colors: ["#ff6347", "#ffc857", "#57ebff", "#785cff"],
    rotation: 60,
    speed: 0.13,
    warpStrength: 1.1,
    frequency: 1.2,
  },
  {
    name: "Laser Bloom",
    colors: ["#ff005c", "#fff45e", "#00b2ff", "#6b00ff"],
    rotation: 60,
    speed: 0.28,
    warpStrength: 1.3,
    frequency: 1.1,
  },
  {
    name: "Prism",
    colors: ["#ffa900", "#ffffff", "#00e0ff", "#965cff"],
    rotation: 25,
    speed: 0.2,
    warpStrength: 1.0,
    frequency: 0.9,
  },
];
