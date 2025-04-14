import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
