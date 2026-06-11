import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Biliarto Sastro Cemerson",
  author: "Biliarto Sastro Cemerson",
  description:
    "Statistics graduate with a strong analytical foundation and hands-on experience in the end-to-end data science lifecycle.",
  lang: "en",
  siteLogo: "/profile.jfif",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/billycemerson" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/billycemerson/" },
    { text: "Instagram", href: "https://www.instagram.com/billycmrsn/" },
  ],
  socialImage: "/profile.jfif",
  canonicalURL: "https://biliartocemerson.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Biliarto Sastro Cemerson",
    specialty: "Junior Data Engineer",
    summary:
      "Building production-ready data pipelines and infrastructure, with a background in data science and analytics.",
    email: "biliatocemerson@gmail.com",
    cvLink: "/CV-Biliarto Sastro Cemerson-DE.pdf",
  },
  experience: [
    {
      company: "Simplifa.AI",
      position: "Data Annotator & AI Reviewer",
      startDate: "Aug 2025",
      endDate: "Present",
      summary: [
        "Validated and standardized 1,000+ financial transaction records across 20+ formats, ensuring high data accuracy, integrity, and consistency for downstream business analytics.",
        "Conducted data drift monitoring and strict quality audits for 5,000+ financial data points, establishing annotation standards to mitigate risks and maintain full data compliance.",
        "Analyzed complex operational data to build tracking systems and interactive dashboards, mapping individual performance metrics and reducing processing error rates through data-driven feedback.",
        "Partnered with machine learning and cross-functional engineering teams to refine data management processes, optimizing systemic workflows for high-precision financial classification.",
      ],
    },
    {
      company: "Rumah Sakit Pratama Kota Yogyakarta",
      position: "Data Analyst Intern",
      startDate: "Jul 2023",
      endDate: "Aug 2023",
      summary: [
        "Analyzed 500+ patient records to identify key health patterns and risk factors.",
        "Performed exploratory data analysis (EDA) and statistical modeling to support clinical decision-making.",
      ],
    },
  ],
  projects: [
    // Data Science
    {
      name: "Academy Crypto Stance API",
      summary:
        "Build an API from a fine-tuned BERT model to classify public opinions on the Academy Crypto (AC) case into three categories: Support, Against, and Neutral.",
      category: "Data Science",
      linkPreview: "https://huggingface.co/spaces/BillyCemerson/ac-stance-api",
      linkSource: "https://github.com/billycemerson/ac-case-stance-analysis",
      image: "/academy-crypto.jpg",
    },
    {
      name: "Bitcoin Price Forecasting using Hybrid Deep Learning",
      summary:
        "Apply Rolling Window Cross-Validation approach in two different BTC market scenarios (Bear and Bull) with Optuna.",
      category: "Data Science",
      linkPreview:
        "https://huggingface.co/spaces/BillyCemerson/bitcoin-forecasting",
      linkSource: "https://github.com/billycemerson/btc-forecasting",
      image: "/bitcoin-chart.webp",
    },
    {
      name: "Social Network Analysis of the 2024 Presidential Campaign",
      summary:
        "Implemented Graph Neural Networks and the Louvain Algorithm to identify community clusters in complex social networks during the 2024 Indonesian Presidential Election.",
      category: "Data Science",
      linkPreview: "/",
      linkSource: "https://github.com/billycemerson/BDC-2024",
      image: "/sna-bdc.png",
    },
    // Data Analysis
    {
      name: "Performance and Error Tracking Dashboard",
      summary:
        "Developed an interactive data monitoring system focused on validating financial data review accuracy.",
      category: "Data Analysis",
      linkPreview: "https://datastudio.google.com/reporting/763fda24-f192-49b5-b519-b70a37dd18db",
      linkSource: "",
      image: "/need-review.png",
    },
    {
      name: "Indonesia GPR Index Dashboard",
      summary:
        "Created a Looker Studio dashboard visualizing the daily Geopolitical Risk Index for Indonesia, integrating data from multiple news sources and providing insights into political risk trends.",
      category: "Data Analysis",
      linkPreview: "https://datastudio.google.com/reporting/5fe226a0-a15e-4bb9-8d34-b552fbfdf413",
      linkSource: "",
      image: "/indo-gpr.png",
    },
    {
      name: "BMKG Earthquake Monitoring Dashboard",
      summary:
        "Built a Looker Studio monitoring dashboard covering seismic magnitude, depth distribution, geospatial mapping, and data quality metrics.",
      category: "Data Analysis",
      linkPreview: "https://datastudio.google.com/reporting/d5eaed75-f56b-4dff-ad43-30fb352b42e9",
      linkSource: "",
      image: "/bmkg-monitor.png",
    },
    // Data Engineering
    {
      name: "Indonesia GPR Index Pipeline",
      summary:
        "Automated daily pipeline scraping political news from Antara, Kompas, Tempo, and Tribunnews to calculate a Geopolitical Risk Index, with results exported to Google Sheets and visualized in Looker Studio.",
      category: "Data Engineering",
      linkPreview: "",
      linkSource: "https://github.com/billycemerson/indo-gpr-index",
      image: "/indo-gpr-index.png",
    },
    {
      name: "BMKG Earthquake Monitoring Pipeline",
      summary:
        "End-to-end data pipeline ingesting 100+ seismic events from BMKG, enriched with province-level geocoding, magnitude/depth categorization, and data quality flags — feeding a live Looker Studio dashboard.",
      category: "Data Engineering",
      linkPreview: "/",
      linkSource: "https://github.com/billycemerson/earthquake-monitoring",
      image: "/bmkg-earthquake.png",
    },
  ],
  skills: [
    {
      category: "Technical Skills",
      skills: [
        { name: "Pipeline Orchestration", logo: "" },
        { name: "Data Ingestion & Scraping", logo: "" },
        { name: "Schema Design & Staging", logo: "" },
        { name: "Workflow Automation (GitHub Actions)", logo: "" },
        { name: "Data Quality & Validation", logo: "" },
        { name: "ETL / ELT", logo: "" },
        { name: "Predictive Modeling", logo: "" },
        { name: "Natural Language Processing (NLP)", logo: "" },
        { name: "Deep Learning", logo: "" },
        { name: "Feature Engineering", logo: "" },
        { name: "Model Evaluation & Validation", logo: "" },
        { name: "Statistical Analysis", logo: "" },
        { name: "Exploratory Data Analysis (EDA)", logo: "" },
        { name: "Data Wrangling & Preprocessing", logo: "" },
        { name: "Data Visualization", logo: "" },
        { name: "Dashboard Design", logo: "" },
        { name: "Report & Insight Communication", logo: "" },
      ],
    },
    {
      category: "DE Tools",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
        { name: "DuckDB", logo: "https://thesvg.org/icons/duckdb/default.svg" },
        { name: "Prefect", logo: "https://thesvg.org/icons/prefect/default.svg" },
        { name: "Apache Airflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg" },
      ],
    },
    {
      category: "DS Tools",
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
        { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
        { name: "Google Colab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" },
      ],
    },
    {
      category: "DA Tools",
      skills: [
        { name: "Looker Studio", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Looker.svg" },
        { name: "Python (Pandas/Matplotlib)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Matabase", logo: "https://thesvg.org/icons/metabase/default.svg" },
        { name: "Google Sheets", logo: "https://thesvg.org/icons/google-sheets-2026/default.svg" },
      ],
    },
  ],
  about: {
    description: `
      Hi, I'm Biliarto Sastro Cemerson — a Junior Data Engineer with a Statistics background and hands-on experience across the full data stack. I build automated pipelines, design staging schemas, and deliver data that's clean, reliable, and ready for analysis.
      Currently developing production-grade pipelines including a daily news scraper for Indonesia's Geopolitical Risk Index and a BMKG seismic event monitoring system, both deployed with GitHub Actions and visualized in Looker Studio.
      I bring a data science foundation — predictive modeling, NLP, and deep learning — that helps me understand what downstream consumers actually need from the data I build.
    `,
  },
};

// #5755ff