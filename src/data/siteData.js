const CONFIG = {

  name: "NJI Halle",
  initials: "NHCN",
  tagline: "Full-Stack Developer",
  subTagline: "Building for Africa",
  location: "Yaoundé, Cameroon 🇨🇲",
  availableForWork: true,
  bio: [
    "I'm a software engineering student in Yaoundé. I started writing code in Level 1 with HTML, CSS, and JavaScript — now I build full-stack applications with React, Node.js, and Python.",
    "My mission: build technology that solves real African problems. The continent has 1.4 billion people, rising smartphone adoption, and a massive gap between available technology and what people actually need especially in fintech, logistics, and AI tools for small businesses.",
    "I am building startups at the revenue stage, arriving at the world stage not as a student, but as a founder.",
  ],
  stats: [
    { num: "3+", label: "Years coding" },
    { num: "5+", label: "Projects shipped" },
    { num: "2x", label: "Startups building" },
    { num: "1M", label: "Goal in 5 years" },
  ],
  skills: [
    {
      icon: "⬡",
      title: "Frontend",
      tags: [
        { label: "React", color: "accent" },
        { label: "JavaScript", color: "accent" },
        { label: "HTML & CSS", color: "default" },
        { label: "Responsive Design", color: "default" },
      ],
    },
    {
      icon: "◈",
      title: "Backend",
      tags: [
        { label: "Node.js", color: "orange" },
        { label: "Python", color: "orange" },
        { label: "REST APIs", color: "default" },
        { label: "PostgreSQL", color: "default" },
        { label: "Express", color: "default" },
      ],
    },
    {
      icon: "✦",
      title: "AI & Integrations",
      tags: [
        { label: "Claude API", color: "blue" },
        { label: "OpenAI", color: "blue" },
        { label: "Prompt Engineering", color: "default" },
        { label: "Automation", color: "default" },
      ],
    },
    {
      icon: "⊕",
      title: "Payments & Infra",
      tags: [
        { label: "Flutterwave", color: "default" },
        { label: "Mobile Money", color: "default" },
        { label: "Orange Money", color: "default" },
        { label: "Git / GitHub", color: "orange" },
        { label: "Vercel", color: "default" },
        { label: "AWS (learning)", color: "default" },
      ],
    },
  ],
  projects: [
    {
      num: "01",
      status: "Building",
      statusColor: "accent",
      title: "LodgeMe",
      desc: "LodgeMe is a modern, high-end rental marketplace designed specifically for the Cameroonian market. It addresses key challenges like 'fake agent' scams and manual bookkeeping, providing a transparent and efficient platform for both landlords and tenants.",
      stack: [
        { label: "React", color: "accent" },
        { label: "Node.js", color: "orange" },
        { label: "AI", color: "blue" },
      ],
      repo: "https://github.com/nHallecn/LodgeMe-1.0",
      live: "https://lodgeme-wine.vercel.app/",
    },
    {
      num: "02",
      status: "Completed",
      statusColor: "accent",
      title: "Informal Business Credit & Record App",
      desc: "Smart Informal Business Credit & Record App is a mobile-first financial record and credit scoring solution designed for informal traders and small business owners across African markets.",
      stack: [
        { label: "React", color: "accent" },
        { label: "Node.js", color: "orange" },
        { label: "AI", color: "blue" },
      ],
      repo: "https://github.com/nHallecn/Smart-Informal-Business-Credit-Record-App",
      live: "#",
    }
  ],
  timeline: [
    { year: "2022", title: "Started coding", desc: "Acquired the gce o level qualification." },
    { year: "2024", title: "Acquired A-Level Qualification", desc: "Completed my A-Level studies." },
    { year: "2025", title: "University student", desc: "Enrolled in a Bachelor's program in Software Engineering. Started learning full-stack development and acquired a responsive design and javascript certification." },
    {
      year: "2026 →", title:'Building projects and getting skilled', desc: "Building projects to solve real African problems. Gaining experience and skills in full-stack development, AI tools, and fintech integrations."
    },
    {
      year:" ", title: "Acquire a Higher national diploma in software engineering", desc: "Complete my HND in Software Engineering and gain practical experience through internships or freelance projects."
    },
    { year: "2027", title: "Acquire a Bachelor's degree in Software Engineering", desc: "Complete my Bachelor's degree in Software Engineering.", dim: true },
  ],
  contact: [
    { icon: "✉", label: "Email", handle: "njihalle10@email.com", href: "mailto:njihalle10@email.com" },
    { icon: "⌥", label: "GitHub", handle: "github.com/nhallecn", href: "https://github.com/nhallecn" },
    { icon: "in", label: "LinkedIn", handle: "linkedin.com/in/nji-halle-cho-nkwenti", href: "https://linkedin.com/in/nji-halle-cho-nkwenti" },
    { icon: "𝕏", label: "Twitter / X", handle: "@halle", href: "https://twitter.com/chohalle" },
  ],
};
export default CONFIG;
