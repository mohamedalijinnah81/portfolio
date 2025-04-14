"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a Bachelor’s graduate in{" "}
        <span className="font-medium">Computer Science</span>, and currently pursuing my{" "}
        <span className="font-medium">Master’s in Computer Applications</span>
        <span className="italic"></span> through correspondence while working full-time in the tech industry. My passion for programming comes from a deep interest in building real-world solutions and the satisfaction of solving complex challenges.
      </p>

      <p className="mb-3">
        <span className="italic"></span>I’ve worked across both modern and enterprise technology stacks, gaining experience with{" "}
        <span className="font-medium">React, Next.js, TypeScript, Strapi, Node.js, MySQL, and REST APIs, as well as C#, .NET, ASP.NET, AngularJS, Web API, and Microsoft SQL Server</span> This blend of experience allows me to confidently develop full-stack applications—whether it’s creating seamless user experiences on the frontend or building scalable backend architectures.{" "}
      </p>
    </motion.section>
  );
}
