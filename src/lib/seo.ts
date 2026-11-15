/**
 * Single source of truth for everything search engines and social platforms read.
 * Change facts here, not in individual files.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brainsporellc.com').replace(
  /\/$/,
  '',
);

export const ORG = {
  name: 'Brainspore Group LLC',
  alternateNames: ['Brainspore', 'Brainspore Group', 'BSG', 'BSG LLC', 'Brainspore LLC'],
  email: 'hello@brainsporellc.com',
  city: 'Nairobi',
  country: 'KE',
  logo: `${SITE_URL}/images/mark.png`,
  socials: [
    'https://www.linkedin.com/company/101033521',
    'https://www.instagram.com/brainsporegroup/',
    'https://www.facebook.com/brainsporegroup',
  ],
};

export const FOUNDER = {
  name: 'Paullaster Okoth',
  alternateNames: ['Paullaster Amolo Okoth', 'Paullaster'],
  jobTitle: 'Founder and Software Engineer',
  profiles: ['https://www.linkedin.com/in/paullaster'],
  knowsAbout: [
    'Software engineering',
    'Node.js',
    'React',
    'MongoDB',
    'Python',
    'Machine learning',
    'Payment integrations',
    'Business management software',
  ],
};

export const SCREENSHOT = {
  src: '/qsell/qsell-dashboard-overview.avif',
  width: 618,
  height: 372,
  alt: 'QSell business management software by Brainspore Group LLC: a dashboard summary of sales, orders, payment collections, items needing attention and sales per day',
};

export const QSELL_FEATURES = [
  'Sales and online storefront',
  'Customer management',
  'Inventory management',
  'Project management',
  'Vendor and supplier management',
  'Finance and invoicing',
  'Reports and business intelligence',
  'Delivery and logistics',
  'User and employee management',
];

export const KEYWORDS = [
  'Brainspore',
  'Brainspore Group',
  'Brainspore Group LLC',
  'BSG LLC',
  'BSG',
  'Paullaster Okoth',
  'Paullaster Amolo Okoth',
  'software companies in Kenya',
  'software company Nairobi',
  'IT solutions company Kenya',
  'IT solutions East Africa',
  'software companies in Africa',
  'IT solutions Africa',
  'business management software Kenya',
  'QSell',
  'inventory management software Kenya',
  'online shop software Kenya',
];

const id = (fragment: string) => `${SITE_URL}/#${fragment}`;

export function buildJsonLd(faq: { question: string; answer: string }[]) {
  const organization = {
    '@type': 'Organization',
    '@id': id('organization'),
    name: ORG.name,
    legalName: ORG.name,
    alternateName: ORG.alternateNames,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: ORG.logo, width: 256, height: 256 },
    image: `${SITE_URL}/opengraph-image`,
    description:
      'Brainspore Group LLC (BSG) is a software and IT solutions company in Nairobi, Kenya. It builds business systems for companies in Kenya, East Africa and Africa, and is the maker of QSell business management software.',
    email: ORG.email,
    address: { '@type': 'PostalAddress', addressLocality: ORG.city, addressCountry: ORG.country },
    areaServed: [
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'Place', name: 'East Africa' },
      { '@type': 'Place', name: 'Africa' },
    ],
    knowsAbout: [
      'Software development',
      'IT solutions',
      'Business management software',
      'E-commerce',
      'Inventory management',
      'Point of sale and sales management',
    ],
    founder: { '@id': id('founder') },
    brand: { '@type': 'Brand', name: 'QSell' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: ORG.email,
      areaServed: ['KE', 'UG', 'TZ', 'RW'],
      availableLanguage: ['en'],
    },
    sameAs: ORG.socials,
  };

  const founder = {
    '@type': 'Person',
    '@id': id('founder'),
    name: FOUNDER.name,
    alternateName: FOUNDER.alternateNames,
    jobTitle: FOUNDER.jobTitle,
    url: `${SITE_URL}/#about`,
    worksFor: { '@id': id('organization') },
    knowsAbout: FOUNDER.knowsAbout,
    address: { '@type': 'PostalAddress', addressLocality: ORG.city, addressCountry: ORG.country },
    sameAs: FOUNDER.profiles,
  };

  const website = {
    '@type': 'WebSite',
    '@id': id('website'),
    url: SITE_URL,
    name: ORG.name,
    alternateName: ORG.alternateNames,
    inLanguage: 'en-KE',
    publisher: { '@id': id('organization') },
  };

  const webpage = {
    '@type': 'WebPage',
    '@id': id('webpage'),
    url: SITE_URL,
    name: 'Brainspore Group (BSG) | Software & IT Solutions, Kenya & East Africa',
    isPartOf: { '@id': id('website') },
    about: { '@id': id('organization') },
    inLanguage: 'en-KE',
    primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${SCREENSHOT.src}` },
  };

  const qsell = {
    '@type': 'SoftwareApplication',
    '@id': id('qsell'),
    name: 'QSell',
    alternateName: 'QSell Business Management Software',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Business management, e-commerce, inventory and accounting software',
    operatingSystem: 'Web',
    description:
      'QSell is business management software by Brainspore Group LLC. It runs sales, customers, inventory, projects, vendors, finance, reports and BI, delivery and logistics, and users and employees in one system, with an online storefront for each business.',
    featureList: QSELL_FEATURES,
    screenshot: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${SCREENSHOT.src}`,
      width: SCREENSHOT.width,
      height: SCREENSHOT.height,
      caption: SCREENSHOT.alt,
    },
    url: `${SITE_URL}/#solutions`,
    author: { '@id': id('founder') },
    publisher: { '@id': id('organization') },
    areaServed: { '@type': 'Country', name: 'Kenya' },
    inLanguage: 'en',
  };

  const faqPage = {
    '@type': 'FAQPage',
    '@id': id('faq'),
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, founder, website, webpage, qsell, faqPage],
  };
}
