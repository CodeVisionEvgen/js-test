import { GithubIcon, LinkedInIcon, UserShieldIcon } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JavaScript Test",
  description: "Express test for knowledge of javascript",
  contacts: [
    {
      link: "https://portfolio-codevisionevgen.vercel.app",
      icon: UserShieldIcon,
    },
    {
      link: "https://github.com/CodeVisionEvgen",
      icon: GithubIcon,
    },
    {
      link: "https://www.linkedin.com/in/evheniy-homenyuk-611b552b8/",
      icon: LinkedInIcon,
    },
  ],
};
