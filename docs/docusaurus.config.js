const repo = 'https://github.com/dylmye/mui-google-places-autocomplete';

module.exports = {
  title: 'MUI Google Places Autocomplete',
  tagline: 'React component for Google Places Autocomplete, using MUI',
  url: 'https://dylmye.me/',
  baseUrl: '/mui-google-places-autocomplete/',
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'dylmye', // Usually your GitHub org/user name.
  projectName: 'mui-google-places-autocomplete', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'MUI Google Places Autocomplete',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: repo,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `
        Copyright © ${new Date().getFullYear()} MUI Google Places Autocomplete, Dylan Myers. Based on work by <a href="https://github.com/Tintef">Tintef</a>.
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dylmye/mui-google-places-autocomplete/edit/master/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
