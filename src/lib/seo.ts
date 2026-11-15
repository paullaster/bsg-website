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

export const TITLE = 'Brainspore Group (BSG) | Software & IT Solutions, ERP & Fintech in Kenya';
export const DESCRIPTION =
  'Brainspore Group LLC (BSG) is a Nairobi software and IT solutions company. Custom ERP, automations, Microsoft Dynamics 365 Business Central, and payment and fintech integrations for Kenya and East Africa. Maker of QSell. Founded by Paullaster Okoth.';

export const SERVICES = [
  'Custom ERP solutions',
  'Automations',
  'Microsoft Dynamics 365 Business Central',
  'Payment and fintech solutions and integrations',
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
  'custom ERP solutions Kenya',
  'ERP software company Kenya',
  'business automation Kenya',
  'Microsoft Dynamics 365 Business Central Kenya',
  'payment integration Kenya',
  'fintech solutions Kenya',
  'M-Pesa integration',
  'QSell',
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
      'Brainspore Group LLC (BSG) is a software and IT solutions company in Nairobi, Kenya. It builds custom ERP solutions, automations, Microsoft Dynamics 365 Business Central solutions, and payment and fintech solutions and integrations for businesses in Kenya and East Africa. It also makes QSell business management software.',
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
      'ERP systems',
      'Business process automation',
      'Microsoft Dynamics 365 Business Central',
      'Payment systems and fintech',
      'M-Pesa integration',
    ],
    makesOffer: SERVICES.map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, provider: { '@id': id('organization') } },
    })),
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
    description:
      'Founder of Brainspore Group LLC and a software engineer with 8 years of experience. Delivered the Engineers Board of Kenya membership portal, the Institution of Engineers of Kenya events and CPD portal, the National Research Fund grant management portal and the MSF staff portal.',
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
    name: TITLE,
    description: DESCRIPTION,
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
      'QSell is business management software built by Brainspore Group LLC. It runs sales, stock, finance, delivery and people in one system, and gives each business its own online storefront for customers.',
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
