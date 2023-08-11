// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
   title: 'Chaca Docs',
   tagline: 'Dinosaurs are cool',
   favicon: 'img/favicon.ico',

   url: 'https://chaca-doc.vercel.app/',
   // Set the /<baseUrl>/ pathname under which your site is served
   // For GitHub pages deployment, it is often '/<projectName>/'
   baseUrl: '/',

   organizationName: 'Chaca',
   projectName: 'Chaca',

   onBrokenLinks: 'throw',
   onBrokenMarkdownLinks: 'warn',

   i18n: {
      defaultLocale: 'en',
      locales: ['en'],
   },

   presets: [
      [
         'classic',
         /** @type {import('@docusaurus/preset-classic').Options} */
         ({
            docs: {
               sidebarPath: require.resolve('./sidebars.js'),
               // Please change this to your repo.
               // Remove this to remove the "edit this page" links.
               editUrl:
                  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            },
            theme: {
               customCss: require.resolve('./src/css/custom.css'),
            },
         }),
      ],
   ],

   themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
         // Replace with your project's social card
         image: 'img/docusaurus-social-card.jpg',
         navbar: {
            title: 'Chaca Docs',
            logo: {
               alt: 'Chaca Docs',
               src: 'img/logo.png',
               style: { marginRight: '8px' },
            },
            items: [
               {
                  to: '/docs/introduction/getting-started',
                  sidebarId: 'docsSidebar',
                  position: 'left',
                  label: 'Documentation',
               },
               {
                  position: 'right',
                  type: 'html',
                  value: `<a href="https://github.com/Chacaponquin/chaca"><button class='navbar_button'><p>Github</p></button></a>`,
               },
            ],
         },
         footer: {
            style: 'dark',
            links: [
               {
                  title: 'Docs',
                  items: [
                     {
                        label: 'Documentation',
                        to: '/docs/introduction/getting-started',
                     },
                  ],
               },
               {
                  title: 'Community',
                  items: [
                     {
                        label: 'Discord',
                        href: 'https://discordapp.com/invite/docusaurus',
                     },
                     {
                        label: 'Twitter',
                        href: 'https://twitter.com/chaca_ts',
                     },
                  ],
               },
               {
                  title: 'More',
                  items: [
                     {
                        label: 'GitHub',
                        href: 'https://github.com/Chacaponquin/chaca',
                     },
                  ],
               },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
         },
         prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['java'],
         },
      }),
}

module.exports = config
