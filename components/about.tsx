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
        {/* <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>

      <p className="mb-3">
        <span className="italic"></span>I’ve worked across both modern and enterprise technology stacks, gaining experience with{" "}
        <span className="font-medium">React, Next.js, TypeScript, Strapi, Node.js, MySQL, and REST APIs, as well as C#, .NET, ASP.NET, AngularJS, Web API, and Microsoft SQL Server</span> This blend of experience allows me to confidently develop full-stack applications—whether it’s creating seamless user experiences on the frontend or building scalable backend architectures.{" "}
        {/* <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar. */}
      </p>

      {/* <p className="mb-3">
        I’m currently looking for a full-time role where I can contribute meaningfully, collaborate with a great team, and continue growing as a software developer.
      </p>

      <p>
        Outside of coding, I enjoy collecting old and rare currencies, diving into tech history, and constantly exploring new skills and hobbies.
      </p> */}
    </motion.section>
  );
}
