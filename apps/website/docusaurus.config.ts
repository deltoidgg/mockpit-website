import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "MockPit",
  tagline: "Runtime provenance devtools for prototype-driven development.",
  favicon: "img/favicon.svg",

  url: "https://mockpit.dev",
  baseUrl: "/",

  organizationName: "deltoidgg",
  projectName: "mockpit",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  future: {
    v4: true,
    faster: true,
  },

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
          routeBasePath: "docs",
          editUrl: "https://github.com/deltoidgg/mockpit/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/mockpit-devtools-card.png",
    navbar: {
      title: "MockPit",
      logo: {
        alt: "MockPit logo",
        src: "img/favicon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/deltoidgg/mockpit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Start",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Quick Start",
              to: "/docs/quick-start",
            },
            {
              label: "Examples",
              to: "/docs/examples",
            },
          ],
        },
        {
          title: "Integrations",
          items: [
            {
              label: "React",
              to: "/docs/react",
            },
            {
              label: "MSW",
              to: "/docs/msw",
            },
            {
              label: "CLI",
              to: "/docs/cli",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/deltoidgg/mockpit",
            },
            {
              label: "Issues",
              href: "https://github.com/deltoidgg/mockpit/issues",
            },
          ],
        },
      ],
      copyright: `Copyright (c) ${new Date().getFullYear()} MockPit contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
