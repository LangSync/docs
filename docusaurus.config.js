// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LangSync Docs",
  tagline:
    "Documentation for LangSync - an AI command line tool for localizing your software on the fly.",
  favicon: "img/brand/favicon.ico",

  // Set the production url of your site here
  url: "https://langsync.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Serve the docs at the site's root
        },
        pages: {
          path: "src/pages",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/brand/colotrd_bg.png",
      navbar: {
        title: "LangSync",
        logo: {
          alt: "LangSync Logo",
          src: "img/brand/colored_no_bg.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://langsync.app",
            label: "Website",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Documentation",
                to: "/",
              },
              {
                label: "Website",
                to: "https://langsync.app",
              },
              {
                label: "Pricing",
                to: "https://langsync.app/#pricing",
              },
              {
                label: "Privacy & Policy",
                to: "https://langsync.app/privacy",
              },
              {
                label: "Terms & Conditions",
                to: "https://langsync.app/terms",
              },
            ],
          },
          {
            title: "Contact US",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/LangSync/",
              },
              {
                label: "Form",
                href: "https://langsync.app/#contact",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Installation",
                to: "/installation",
              },
              {
                label: "Usage",
                to: "/cli-usage/configure",
              },
              {
                label: "Bug Report",
                to: "/bug_report",
              },
              {
                label: "Frequency Asked Questions",
                to: "/faq",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LangSync`,
      },
      scripts: [
        {
          src: "./src/pages/tally.js",
          async: false,
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        supportedLanguages: ["powershell", "bash"],
      },
    }),
};

module.exports = config;
