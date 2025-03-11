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
        blog: {
          showReadingTime: true,
          routeBasePath: "changelog",
        },
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
          href: "https://github.com/flowtemplates/docs",
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["ft"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
