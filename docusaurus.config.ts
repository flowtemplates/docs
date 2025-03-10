import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Flow Templates",
  tagline: "Modern tool for component code generation",
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
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Flow Templates",
      logo: {
        alt: "Flow Templates",
        src: "brand/logo_white.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "right",
          label: "Documentation",
        },
        {
          href: "https://github.com/flowtemplates/docs",
          label: "GitHub",
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
