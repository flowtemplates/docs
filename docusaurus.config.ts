import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Templates Flow",
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
          sidebarPath: "./sidebars/docs-sidebars.ts",
          editUrl: "https://github.com/flowtemplates/docs/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cli",
        path: "cli",
        routeBasePath: "cli",
        sidebarPath: "./sidebars/cli-sidebars.ts",
        editUrl: "https://github.com/flowtemplates/docs/edit/main/",
        versions: {
          current: {
            label: "1.0.0 (beta)",
          },
          "1.0.0": {
            label: "1.0.0",
          },
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "lang",
        path: "lang",
        routeBasePath: "lang",
        sidebarPath: "./sidebars/lang-sidebars.ts",
        editUrl: "https://github.com/flowtemplates/docs/edit/main/",
        versions: {
          current: {
            label: "1.0 (beta)",
          },
          "1.0": {
            label: "1.0",
          },
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Templates Flow",
      logo: {
        alt: "Templates FLow",
        src: "brand/logo_white.png",
      },
      items: [
        {
          to: "/cli/intro",
          label: "Flow CLI",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          docsPluginId: "cli",
        },
        {
          to: "/lang/intro",
          label: "Templates Language",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          docsPluginId: "lang",
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
