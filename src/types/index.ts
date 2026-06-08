export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  skills?: SkillsCategoryProps[];
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  cvLink?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  category: "Data Analysis" | "Data Science" | "Data Engineering";
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
}

export interface SkillProps {
  name: string;
  logo: string;
  url?: string;
  category?: string;
}

export interface SkillsCategoryProps {
  category: string;
  skills: SkillProps[];
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
