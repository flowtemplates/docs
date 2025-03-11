import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Flow",
  tagline: "Modern toolchain for component code generation",
  favicon: "brand/logo_icon.svg",

  url: "https://flowtemplates.github.io",
  baseUrl: "docs/",

  organizationName: "flowtemplates",
  projectName: "docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/flowtemplates/docs/edit/main/",
        },
        /* Add custom css */
        theme: {
          customCss: "./src/styles/index.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Flow",
      logo: {
        alt: "Flow",
        src: "brand/logo_white.svg",
      },
      items: [
        /* Documents */
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          label: "Documentation",
          position: "left",
        },
        /* Social links */
        {
          href: "https://github.com/flowtemplates",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.gg/QZJB5tyxtc",
          label: "Discord",
          position: "right",
        },
      ],
    },
    /* Adding FT language fot code blocks */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["ft"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
