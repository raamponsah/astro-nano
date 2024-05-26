import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Raphael Amponsah",
  EMAIL: "raphaelkofiamponsah@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to the portfolio and blog of Raphael Amponsah, an experienced IT professional and educator.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about, including AI, software engineering, and IT infrastructure.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Explore my professional journey, including roles in academia and industry.",
};
export const RESEARCH: Metadata = {
  TITLE: "Research",
  DESCRIPTION: "Explore research I have worked on in, Data Science and AI, including roles in academia and industry.",
};
export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A showcase of my projects, complete with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter",
    HREF: "https://twitter.com/vypecode",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/raamponsah"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/raphaelamponsah",
  }
];
