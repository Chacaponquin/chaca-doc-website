const lightCodeTheme = require('prism-react-renderer/themes/nightOwl')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
   customFields: {
      API_URL: 'https://chaca-api.onrender.com',
   },
   title: 'Chaca Docs',
   tagline: 'Create and export mock data with your rules',
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
               editUrl:
                  'https://github.com/Chacaponquin/chaca-doc-website/tree/dev',
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
                  to: '/docs/guide/getting-started',
                  sidebarId: 'docsSidebar',
                  position: 'left',
                  label: 'Documentation',
               },
               {
                  position: 'right',
                  type: 'html',
                  value: `<a class='navbar_button' href="https://github.com/Chacaponquin/chaca"><button><p>Github</p></button></a>`,
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
                        to: '/docs/guide/getting-started',
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
            additionalLanguages: ['java', 'csv'],
         },
      }),
}

module.exports = config
