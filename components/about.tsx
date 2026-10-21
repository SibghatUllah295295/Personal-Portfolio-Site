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
        I'm a{" "}
        <span className="font-medium">multidisciplinary digital professional</span>{" "}
        currently pursuing a BS in Information Technology at Ghazi University,
        Dera Ghazi Khan. My expertise spans{" "}
        <span className="font-medium">
          web development, e-commerce operations, video editing, medical
          billing, and startup development
        </span>
        . I've worked as a Senior Web Developer at the Punjab Information
        Technology Board (PITB) and supported clients across{" "}
        <span className="font-medium">
          Amazon, eBay, Walmart, Daraz, and Shopify
        </span>
        , bringing five years of overall digital experience to every project.{" "}
        <span className="italic">My favorite part of what I do</span> is
        problem-solving across technical and business domains — I{" "}
        <span className="underline">love</span> the feeling of turning a complex
        requirement into a working solution. My core stack is{" "}
        <span className="font-medium">HTML, CSS, JavaScript, React, and Python</span>
        , alongside video editing tools including{" "}
        <span className="font-medium">
          Adobe Premiere Pro, Adobe After Effects, CapCut, and Filmora
        </span>
        .
      </p>

      <p>
        Beyond client work, I'm an{" "}
        <span className="font-medium">entrepreneur at heart</span> — I founded{" "}
        <span className="font-medium">BYB (Book Your Barber)</span>, a digital
        startup connecting customers with barber services, and previously
        co-founded Marvi Clothing. I'm currently creating content for YouTube
        and continuing my freelance projects.{" "}
        <span className="italic">When I'm not working</span>, I enjoy{" "}
        <span className="font-medium">learning new things</span> and exploring
        how technology and business intersect. I'm open to freelance
        collaborations, digital projects, and startup opportunities.
      </p>
    </motion.section>
  );
}