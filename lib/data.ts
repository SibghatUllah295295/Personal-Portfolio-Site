import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Founder — BYB (Book Your Barber)",
    location: "Current Venture · In Development",
    description:
      "Founded a digital startup focused on connecting customers with barber services. Currently working toward the launch of a dedicated digital application and a convenient service-booking experience.",
    icon: CgWorkAlt,
    date: "Present",
  },
  {
    title: "Freelance Web Developer",
    location: "Freelance Platforms & Local Clients · Ongoing",
    description:
      "Develop websites and web-based solutions for freelance and local clients. Work from client requirements and project objectives, applying relevant web development skills.",
    icon: FaReact,
    date: "Ongoing",
  },
  {
    title: "Video Editor & Content Creator",
    location: "Freelance Clients & YouTube · Ongoing",
    description:
      "Edited video content for clients, including ongoing professional relationships. Used Adobe Premiere Pro, Adobe After Effects, CapCut, and Filmora for video editing and content production. Currently creating content for YouTube.",
    icon: CgWorkAlt,
    date: "Ongoing",
  },
  {
    title: "Co-Founder — Marvi Clothing",
    location: "Clothing Startup",
    description:
      "Co-founded a clothing startup and gained practical exposure to entrepreneurship and business development.",
    icon: CgWorkAlt,
    date: "Jan 2024 – Jun 2024",
  },
  {
    title: "Senior Web Developer",
    location: "Punjab Information Technology Board (PITB)",
    description:
      "Worked in a senior web development role and contributed to web development and technology-related project activities.",
    icon: FaReact,
    date: "1.5 years",
  },
  {
    title: "Medical Billing & RCM Specialist",
    location: "Appex Revenue Solutions",
    description:
      "Gained professional experience in medical billing and healthcare revenue operations, including full-cycle Revenue Cycle Management (RCM) processes.",
    icon: CgWorkAlt,
    date: "1.5 years",
  },
  {
    title: "Medical Billing & RCM",
    location: "Mediknock",
    description:
      "Worked in a medical billing environment and developed practical knowledge of the full RCM cycle.",
    icon: CgWorkAlt,
    date: "8 months",
  },
  {
    title: "E-commerce Specialist & Virtual Assistant",
    location: "Freelance / Client-Based Projects",
    description:
      "Supported clients with marketplace operations across Amazon, eBay, and Walmart. Worked with local and regional e-commerce operations through Daraz and Shopify. Assisted with marketplace workflows and day-to-day online business operations.",
    icon: CgWorkAlt,
    date: "Part of 5+ years digital experience",
  },
] as const;

export const projectsData = [
  {
    title: "Full Stack Ecommerce Grocery Store",
    description:
      "A Full Stack Grocery Store project is a comprehensive web application designed to simulate an online e-commerce supermarket experience. It bridges the gap between end-user convenience and robust backend administration, providing a seamless platform for customers to browse, purchase, and manage groceries digitally.",
    tags: ["React", "Next.js", "Startup", "Grocery Store"],
    imageUrl: "/grocery-store.jpeg",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "Next.js",
  "Amazon",
  "eBay",
  "Walmart",
  "Daraz",
  "Shopify",
  "Virtual Assistance",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "CapCut",
  "Filmora",
  "YouTube Content Creation",
  "Medical Billing",
  "Revenue Cycle Management (RCM)",
  "Startup Development",
  "Entrepreneurship",
  "Client Collaboration",
] as const;