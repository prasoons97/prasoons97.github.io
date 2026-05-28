import {SiJavascript, SiReact, SiNodedotjs, SiExpress, SiHtml5, SiTailwindcss, SiFirebase, SiVite,} from "react-icons/si";
import { FaMobile, FaCss3Alt } from "react-icons/fa";


export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = {
  frontend: [
    { name: "HTML5 & CSS3", level: "Confident", color: "#e34c26" },
    { name: "JavaScript (ES6+)", level: "Confident", color: "#f7df1e" },
    { name: "React.js", level: "Confident", color: "#61dafb" },
    { name: "Tailwind CSS", level: "Familiar", color: "#38bdf8" },
    { name: "Responsive Design", level: "Confident", color: "#fb923c" },
    { name: "Mobile-First CSS", level: "Confident", color: "#f472b6" },
    { name: "TypeScript", level: "Learning", color: "#3178c6" },
    { name: "Testing / TDD", level: "Learning", color: "#22c55e" },
  ],
  backend: [
    { name: "Node.js", level: "Confident", color: "#8cc84b" },
    { name: "Express.js", level: "Confident", color: "#68d391" },
    { name: "Firebase / Firestore", level: "Confident", color: "#ffca28" },
    { name: "REST APIs", level: "Confident", color: "#4ade80" },
    { name: "SQL", level: "Familiar", color: "#336791" },
    { name: "GraphQL", level: "Learning", color: "#e10098" },
  ],
  tools: [
    { name: "Git & GitHub", level: "Confident", color: "#f05032" },
    { name: "Figma / Wireframing", level: "Confident", color: "#f24e1e" },
    { name: "UI/UX Design", level: "Confident", color: "#a78bfa" },
    { name: "Accessibility (a11y)", level: "Confident", color: "#34d399" },
    { name: "SEO Basics", level: "Familiar", color: "#f59e0b" },
    { name: "Agile / Scrum", level: "Confident", color: "#7c6fff" },
    { name: "Web Security", level: "Learning", color: "#ef4444" },
    { name: "Debugging", level: "Confident", color: "#94a3b8" },
    { name: "Vite", level: "Confident", color: "#646cff" },
    { name: "Claude CLI", level: "Familiar", color: "#d97706" },
    { name: "OpenAI Codex", level: "Familiar", color: "#10b981" },
    { name: "Agentic Coding", level: "Familiar", color: "#6e40c9" },
  ],
};

export const TECH_ICONS = [
  { name: "JavaScript",        icon: <SiJavascript  size={20} color="#F7DF1E" /> },
  { name: "React",             icon: <SiReact       size={20} color="#61DAFB" /> },
  { name: "Node.js",           icon: <SiNodedotjs   size={20} color="#339933" /> },
  { name: "Express.js",        icon: <SiExpress     size={20} color="#ffffff" /> },
  { name: "HTML5",             icon: <SiHtml5       size={20} color="#E34F26" /> },
  { name: "CSS3",              icon: <FaCss3Alt     size={20} color="#1572B6" /> },
  { name: "Tailwind CSS",      icon: <SiTailwindcss size={20} color="#38BDF8" /> },
  { name: "Firebase",          icon: <SiFirebase    size={20} color="#FFCA28" /> },
  { name: "Vite",              icon: <SiVite        size={20} color="#646CFF" /> },
  { name: "Responsive Design", icon: <FaMobile      size={20} color="#A78BFA" /> },
];

export const PROJECTS = [
  {
    id: 1,
    title: "WORN",
    desc: "Fashion e-commerce store with category filters, cart via localStorage, optimistic checkout updates, and real-time Firestore order tracking. Built with React Query for all server state.",
    tags: ["React", "Node.js", "Firebase", "React Query", "Express.js"],
    type: "Full Stack",
    color: "#7c6fff",
    links: {
      live: "#",
      github: "https://github.com/prasoons97/worn-ecommerce",
    },
    featured: true,
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 2,
    title: "Stitch",
    desc: "Client-side PDF merger — drag, reorder, and merge PDFs entirely in the browser. No server, no uploads, zero tracking. Built with pdf-lib and the native HTML5 DnD API.",
    tags: ["React", "TypeScript", "Tailwind CSS", "pdf-lib"],
    type: "Frontend",
    color: "#22d3ee",
    links: {
      live: "#", // replace with your live demo URL from the README
      github: "https://github.com/prasoons97/stitch",
    },
    featured: true,
    stats: { stars: 0, forks: 0 },
  },
  {
    id: 3,
    title: "iTask",
    desc: "Full-stack todo app with real-time Firestore sync. Create, update, and delete tasks with a clean React frontend and an Express.js REST backend.",
    tags: ["React", "Express.js", "Firebase", "Firestore"],
    type: "Full Stack",
    color: "#f472b6",
    links: {
      live: "#",
      github: "https://github.com/prasoons97/itask",
    },
    featured: true,
    stats: { stars: 0, forks: 0 },
  },
];

export const EXPERIENCE = [
  {
    role: "Frontend Developer Intern",
    company: "TechStart Labs",
    period: "Jun 2024 – Present",
    desc: "Built mobile-first responsive dashboards in React with Tailwind CSS. Applied optimistic UI patterns so users see instant feedback on every action. Worked spec-driven — API contracts agreed before any frontend code was written.",
    tags: ["React", "Tailwind CSS", "Optimistic UI", "Spec Driven Dev"],
    current: true,
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jan 2023 – May 2024",
    desc: "Delivered 12+ client sites: landing pages, React SPAs and full-stack apps with Express.js + Firebase backends. Every project shipped mobile-first with a fully responsive layout.",
    tags: ["React", "Node.js", "Express.js", "Firebase", "Responsive Design"],
    current: false,
  },
  {
    role: "Frontend Learner & Builder",
    company: "Self-Study Projects",
    period: "Aug 2022 – Dec 2022",
    desc: "Deep-dived into advanced CSS, JavaScript and React fundamentals. Built practice projects covering responsive design, spec-driven REST APIs and Firebase real-time data.",
    tags: ["HTML5", "Advanced CSS", "JavaScript", "Firebase"],
    current: false,
  },
];

export const STATS = [
  { label: "Projects Completed", value: "20+" },
  { label: "GitHub Stars", value: "500+" },
  { label: "Cups of Coffee", value: "∞" },
  { label: "Years Learning", value: "3+" },
];
