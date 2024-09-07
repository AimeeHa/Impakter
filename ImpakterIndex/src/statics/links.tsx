const navLinks = [
  {
    title: 'Top Sustainable Companies',
    link: '/top-companies',
  },
  {
    title: 'ESG Software',
    link: '/esg-software',
  },
  {
    title: 'Resources',
    link: '/resources',
  },
  {
    title: 'About Us',
    link: '/about',
  },
];

export default navLinks;

// TODO: when there is database, query data instead of hardcoding. Use companyID as param for url.
const footerLinks = [
  {
    title: 'Top Sustainable Companies',
    items: [
      {
        link: '/top-companies/1',
        title: 'Hypo Vorarlberg Bank AG',
      },
      {
        link: '/top-companies/2',
        title: 'Hypo Tirol Bank AG',
      },
      {
        link: '/top-companies/3',
        title: 'Volksbank Wien AG',
      },
      {
        link: '/top-companies/4',
        title: 'BAWAG P.S.K.',
      },
      {
        link: '/top-companies/5',
        title: 'Schoellerbank AG',
      },
      {
        link: '/top-companies/6',
        title: 'Raiffeisenlandesbank Oberösterreich',
      },
      {
        link: '/top-companies/7',
        title: 'Wiener Privatbank SE',
      },
      {
        link: '/top-companies/8',
        title: 'EVN AG',
      },
      {
        link: '/top-companies/9',
        title: 'Energie Steiermark AG',
      },
      {
        link: '/top-companies/10',
        title: 'Energie AG Oberösterreich',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Learn ESG',
        link: '/resources/learn-esg',
      },
      {
        title: 'Blogs',
        link: '/resources/blogs',
      },
      {
        title: 'E-books',
        link: '/resources/e-books',
      },
      {
        title: 'Webinars',
        link: '/resources/webinars',
      },
      {
        title: 'Templates',
        link: '/resources/templates',
      },
      {
        title: 'Glossary',
        link: '/resources/glossary',
      },
    ],
  },
  {
    title: 'Regulations',
    items: [
      {
        title: 'CSRD',
        link: '/regulations/csrd',
      },
      {
        title: 'SFDR',
        link: '/regulations/sfdr',
      },
      {
        title: 'CSDDD',
        link: '/regulations/csddd',
      },
      {
        title: 'EU Taxonomy Reporting',
        link: '/regulations/eutr',
      },
      {
        title: 'Double Materiality Assessment',
        link: '/regulations/dma',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        title: 'About Us',
        link: '/about',
      },
      {
        title: 'Team',
        link: '/team',
      },
      {
        title: 'Partners',
        link: '/partners',
      },
      {
        title: 'Media Kit',
        link: '/media-kit',
      },
      {
        title: 'Contact Us',
        link: '/contact-us',
      },
    ],
  },
  {
    title: 'Important Links',
    items: [
      {
        title: 'IMPAKTER PRO',
        link: 'https://pro.impakter.com',
      },
      {
        title: 'IMPAKTER MEDIA',
        link: 'https://www.impakter.com',
      },
      {
        title: 'ESG for Businesses',
        link: '/esg-for-businesses',
      },
      {
        title: 'CSRD for Business',
        link: '/csrd-for-business',
      },
      {
        title: 'Supply Chain Sustainability',
        link: '/supply-chain-sustainability',
      },
    ],
  },
];

export { footerLinks };
