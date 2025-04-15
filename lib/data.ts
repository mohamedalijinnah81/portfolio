import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import liveChatImg from "@/public/livechat.png";
import lumelImg from "@/public/lumel.png";
import ihdImg from "@/public/ihd.png";
import gimzoGalaxyImg from "@/public/gimzogalaxy.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer Intern",
    location: "Sahibganj, Jharkhand",
    description:
      "During my final year, I worked on internships in parallel with my studies.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "iOS Developer Trainee",
    location: "Tirunelveli, Tamil Nadu",
    description:
      "I worked as an iOS Mobile App Developer Trainee at Zoho for 2 months, where I contributed to real-world projects and gained hands-on experience with Swift, UIKit, and Xcode.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: ".NET Full Stack Developer",
    location: "Tirunelveli, Tamil Nadu",
    description:
      "I worked as a .NET Full Stack Developer, where I gained solid knowledge and hands-on experience in C#, .NET, ASP.NET, AngularJS, and Microsoft SQL Server. I contributed to the development of enterprise-level ERP, CRM, Accounting, Finance, and Inventory applications.",
    icon: React.createElement(IoCodeSlash),
    date: "2024",
  },
  {
    title: "Software Developer",
    location: "Chennai, Tamil Nadu",
    description:
      "I'm currently working as a Full Stack Developer using modern technologies like React, Next.js, Strapi, REST APIs, MySQL, and Node.js. I also contribute to projects built with C#, .NET, and ASP.NET. ",
    icon: React.createElement(IoCodeSlash),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "IHD",
    description:
      "An enterprise ERP application built for IHD (a subsidiary of Hyundai). Implemented inventory and finance modules, and managed stock calculations.",
    tags: ["C#", ".NET", "MVC", "ASP.NET", "AngularJS", "Web API", "Microsoft SQL Server"],
    imageUrl: ihdImg,
  },
  {
    title: "Lumel",
    description:
      "A semi-static website designed to handle content dynamically via Strapi. Developed reusable components and integrated APIs for dynamic data rendering.",
    tags: ["React", "Next.js", "TypeScript", "Strapi", "Node.js", "Tailwind"],
    imageUrl: lumelImg,
  },
  {
    title: "LiveChat",
    description:
      "A real-time chat application built with modern technologies. Implemented one-to-one and group chat features.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux"],
    imageUrl: liveChatImg,
  },
  {
    title: "GimzoGalaxy",
    description:
      "An e-commerce web app for purchasing electronic gadgets and appliances. Utilized a real-time Amazon scraper API to fetch products, categories, and details.",
    tags: ["React", "Node.js", "REST API", "Tailwind"],
    imageUrl: gimzoGalaxyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "REST API",
  "Strapi",
  "Node.js",
  "C#",
  ".NET",
  "ASP.NET",
  "MVC",
  "AngularJS",
  "Web API",
  "Bootstrap",
  "Microsoft SQL Server",
  "AJAX",
  // "Subversion",
  "Git",
  "Tailwind",
  "Postman API",
  "MongoDB",
  "MySQL",
  "Microsoft Azure",
  // "jQuery",
  "PHP",
  "WordPress",
  "Python",
] as const;
