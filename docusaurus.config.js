// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LangSync Docs",
  tagline:
    "Documentation for LangSync - an AI command line tool for localizing your software on the fly.",
  favicon: "img/favicon.ico",

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
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "LangSync",
        logo: {
          alt: "LangSync Logo",
          src: "img/logo.png",
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
                label: "Frequency Asked Questions",
                to: "/faq",
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
                label: "Email",
                href: "mailto://TODO",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Bug Report",
                to: "/bug_report",
              },
              {
                label: "Privacy Policy",
                to: "//TODO",
              },
              {
                label: "Terms of Service",
                to: "//TODO",
              },
              {
                label: "About",
                to: "//TODO",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LangSync`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        supportedLanguages: ["powershell", "bash"],
      },
    }),
};

module.exports = config;
