import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Biliarto Sastro Cemerson — Data Enthusiast",
  author: "Biliarto Sastro Cemerson",
  description:
    "Statistics graduate with a strong analytical foundation and hands-on experience in the end-to-end data science lifecycle.",
  lang: "en",
  siteLogo: "/profile.jfif",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/billycemerson" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/billycemerson/" },
    { text: "Instagram", href: "https://www.instagram.com/billycmrsn/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Biliarto Sastro Cemerson",
    specialty: "Data Scientist",
    summary:
      "Statistics graduate with a strong analytical foundation and hands-on experience in the end-to-end data science lifecycle.",
    email: "biliatocemerson@gmail.com",
  },
  experience: [
    {
      company: "Simplifa.AI",
      position: "Data Annotator & AI Reviewer",
      startDate: "Aug 2025",
      endDate: "Present",
      summary: [
        "Validate 1.000+ pages bank mutation data extraction from 20+ different bank formats with 99% accuracy.",
        "Labeling 5.000+ financial data using Argila and Huggingface for AI model training optimization.",
      ],
    },
    {
      company: "Rumah Sakit Pratama Kota Yogyakarta",
      position: "Data Analyst Intern",
      startDate: "Jul 2023",
      endDate: "Aug 2023",
      summary: [
        "Analyzed medical records of 500+ COVID-19 patients, uncovering symptom patterns and risk factors.",
        "Built classification models (Binary Logistic Regression) to predict COVID-19 severity, improving understanding of clinical risk (F1-Score up to 60%).",
      ],
    },
  ],
  projects: [
    {
      name: "Bitcoin Price Forecasting using Hybrid Deep Learning",
      summary: "Apply Rolling Window Cross-Validation approach in two different BTC market scenarios (Bear and Bull) with Optuna.",
      linkPreview: "/",
      linkSource: "https://github.com/billycemerson/btc-forecasting",
      image: "/bitcoin-chart.webp",
    },
    {
      name: "PTM-Pre",
      summary: "A Streamlit-based web application for predicting multiple non-communicable diseases and providing recommendations using Retrieval-Augmented Generation (RAG).",
      linkPreview: "/",
      linkSource: "https://github.com/billycemerson/TSDN-2024",
      image: "/tsdn-2024.png",
    },
    {
      name: "Social Network Analysis of the 2024 Presidential Campaign",
      summary: "Implemented Graph Neural Networks and the Louvain Algorithm to identify community clusters in complex social networks.",
      linkPreview: "/",
      linkSource: "https://github.com/billycemerson/BDC-2024",
      image: "/sna-bdc.png",
    },
    {
      name: "Personal Data Detection using Convolutional Neural Network",
      summary: "Developed a Convolutional Neural Network (CNN) model for detecting personal data in images.",
      linkPreview: "/",
      linkSource: "https://github.com/billycemerson/TSDN-2023",
      image: "/tsdn-2023.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Biliarto Sastro Cemerson, a Statistics graduate with a strong analytical foundation and hands-on experience in the end-to-end data science lifecycle. 
      Proven expertise in predictive modeling, NLP, and deep learning, backed by success in national-level data science competitions and data analytics. 
      Skilled in transforming complex datasets into actionable insights using Python, R, and SQL to drive data-driven decision-making. 
    `,
    image: "/profile.jfif",
  },
};

// #5755ff
