'use client';

import { useState } from 'react';
import Image from 'next/image';

import { faq } from '@/data/faq';
import { SCREENSHOT } from '@/lib/seo';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  ChartNoAxesCombined,
  ChevronUp,
  CircleDollarSign,
  ExternalLink,
  FolderKanban,
  Mail,
  Menu,
  PackageCheck,
  ShieldCheck,
  Truck,
  UsersRound,
  Handshake,
  X,
} from 'lucide-react';

const EMAIL = 'hello@brainsporellc.com';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/101033521' },
  { label: 'Instagram', href: 'https://www.instagram.com/brainsporegroup/' },
  { label: 'Facebook', href: 'https://www.facebook.com/brainsporegroup' },
];

const qsellModules = [
  {
    id: 'sales',
    icon: <Boxes size={19} strokeWidth={1.6} />,
    title: 'Sales',
    text: 'Orders from your online shop land in one place, and every stage of an order is timestamped, so you always know where a sale stands and who moved it last.',
  },
  {
    id: 'customers',
    icon: <UsersRound size={19} strokeWidth={1.6} />,
    title: 'Customers',
    text: 'One record per customer: what they have bought, whether they have paid, and how to reach them. No more hunting through chats and notebooks.',
  },
  {
    id: 'inventory',
    icon: <PackageCheck size={19} strokeWidth={1.6} />,
    title: 'Inventory',
    text: 'Stock by location, bundles and hampers sold as one item, and clear in-stock and sold-out states that carry straight through to the shop.',
  },
  {
    id: 'projects',
    icon: <FolderKanban size={19} strokeWidth={1.6} />,
    title: 'Projects',
    text: 'Plan and follow jobs from start to finish, such as installations and field work, next to the orders and money they belong to.',
  },
  {
    id: 'vendors',
    icon: <Handshake size={19} strokeWidth={1.6} />,
    title: 'Vendors & suppliers',
    text: 'Supplier details, purchase orders and what you owe them, in one place. Suppliers can be invited to register instead of you typing them in.',
  },
  {
    id: 'finance',
    icon: <CircleDollarSign size={19} strokeWidth={1.6} />,
    title: 'Finance',
    text: 'Invoices, payments collected and the ledger behind them, so the sales figure and the money in your account tell the same story.',
  },
  {
    id: 'reports',
    icon: <ChartNoAxesCombined size={19} strokeWidth={1.6} />,
    title: 'Reports & BI',
    text: 'Sales, orders and collections by day, week or month, compared with the previous period, with the items needing attention put first.',
  },
  {
    id: 'delivery',
    icon: <Truck size={19} strokeWidth={1.6} />,
    title: 'Delivery & logistics',
    text: 'Delivery zones, riders and couriers, and customers who can track their own order instead of calling you to ask.',
  },
  {
    id: 'people',
    icon: <ShieldCheck size={19} strokeWidth={1.6} />,
    title: 'Users & employees',
    text: 'Staff accounts with roles, so each person sees and does only what their job needs, and approvals go to the right desk.',
  },
];

const clients = [
  {
    number: '01',
    city: 'Kisumu, Kenya',
    name: 'SM Engineering Limited',
    industry: 'Solar · Electrical · Engineering',
    catalog: '35',
    catalogLabel: 'products in 8 categories',
    preview: '/clients/sm-engineering-store.png',
    previewAlt:
      'The SM Engineering online shop, showing solar product categories and prices in KES',
    points: [
      'Solar packages sold as one item, some with free delivery and installation countrywide.',
      'Customers filter by price and by what is actually in stock.',
      'Prices in KES, with sold-out items marked clearly.',
    ],
    url: 'https://shop.smsolar.co.ke/',
  },
  {
    number: '02',
    city: 'Nairobi, Kenya',
    name: 'Noels Fish Deliveries',
    industry: 'Fresh fish · Farm · Speciality',
    catalog: '17',
    catalogLabel: 'products in 3 categories',
    preview: '/clients/noels-fish-store.png',
    previewAlt: 'The Noels Fish Deliveries online shop, showing fresh fish and food categories',
    points: [
      'Pack sizes and minimum order quantities for items sold by the piece.',
      'Fresh and ready-to-eat products in one shop.',
      'Customers track their order from the shop.',
    ],
    url: 'https://shop.noelsdeliveries.com/',
  },
];

function Brand() {
  return (
    <a className="brand-link" href="#top" aria-label="Brainspore Group LLC home">
      <Image src="/brainspore-logo.jpg" alt="" width={43} height={43} />
      <span>
        <span className="brand-name">Brainspore Group LLC</span>
        <span className="brand-caption">Software &amp; IT solutions</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header id="top" className="topbar">
      <div className="wrap nav-inner">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#production">In production</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Talk to us <ArrowUpRight size={15} />
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <a href="#solutions" onClick={close}>
            Solutions
          </a>
          <a href="#production" onClick={close}>
            In production
          </a>
          <a href="#about" onClick={close}>
            About
          </a>
          <a className="mobile-cta" href="#contact" onClick={close}>
            Talk to us
          </a>
        </nav>
      )}
    </header>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Brainspore: software, IT solutions and QSell">
      <div className="orbit" aria-hidden="true" />
      <div className="orbital-line" aria-hidden="true" />
      <span className="orbit-tick tick-a" aria-hidden="true" />
      <span className="orbit-tick tick-b" aria-hidden="true" />
      <div className="center-mark">
        <Image src="/brainspore-logo.jpg" alt="Brainspore symbol" width={106} height={106} />
      </div>
      <div className="orbit-node node-top">
        <Boxes size={14} /> Software
      </div>
      <div className="orbit-node node-left">
        <ShieldCheck size={14} /> IT solutions
      </div>
      <div className="orbit-node node-bottom">
        <ChartNoAxesCombined size={14} /> QSell
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Software &amp; IT company · Nairobi, Kenya</span>
            <h1 className="display">
              Software and IT solutions for businesses in <em>Kenya and East Africa.</em>
            </h1>
            <p className="hero-lede">
              Brainspore Group LLC (BSG) is a software company in Nairobi. We design, build and run
              business software for companies that buy, stock, sell and deliver across Kenya, East
              Africa and Africa. Our flagship solution, QSell, brings the whole operation into one
              system.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#solutions">
                See our solutions <ArrowRight size={15} />
              </a>
              <a className="text-link" href="#contact">
                Talk to us <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="hero-note">Brainspore Group LLC · Nairobi, Kenya</div>
          </div>
          <HeroArt />
        </div>
      </section>
      <div className="proof-strip">
        <div className="wrap proof-grid">
          <div className="proof-intro">Brainspore Group LLC</div>
          <div className="proof-item">
            <span className="proof-value">8 years</span>
            <span className="proof-label">building production software</span>
          </div>
          <div className="proof-item">
            <span className="proof-value">Nairobi</span>
            <span className="proof-label">where we are based and build</span>
          </div>
          <div className="proof-item">
            <span className="proof-value">QSell</span>
            <span className="proof-label">our flagship, live with clients</span>
          </div>
        </div>
      </div>
    </>
  );
}

function QSellModules() {
  const [selectedModule, setSelectedModule] = useState('sales');
  const activeIndex = Math.max(
    0,
    qsellModules.findIndex((item) => item.id === selectedModule),
  );
  const activeModule = qsellModules[activeIndex];

  return (
    <section className="module-explorer" aria-labelledby="module-heading">
      <div className="module-explorer-intro">
        <div>
          <span className="section-kicker">What is inside</span>
          <h3 id="module-heading">Nine modules that share one set of books.</h3>
        </div>
        <p>
          Because everything lives in one system, a sale updates stock, money and delivery without
          anyone retyping it. Pick a module to see what it does.
        </p>
      </div>
      <div className="module-explorer-content">
        <div className="module-selector" role="group" aria-label="QSell modules">
          {qsellModules.map((module, index) => (
            <button
              type="button"
              className="module-option"
              key={module.id}
              aria-pressed={selectedModule === module.id}
              onClick={() => setSelectedModule(module.id)}
            >
              <span className="module-option-icon">{module.icon}</span>
              <span className="module-option-name">{module.title}</span>
              <span className="module-option-index">0{index + 1}</span>
            </button>
          ))}
        </div>
        <div className="module-detail" aria-live="polite">
          <span className="module-detail-label">QSell module</span>
          <div className="module-detail-icon">{activeModule.icon}</div>
          <h4>{activeModule.title}</h4>
          <p>{activeModule.text}</p>
          <span className="module-detail-count">
            Module {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(qsellModules.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="section platform-section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-kicker">Our solution</span>
            <h2 className="section-title display">QSell. One system to run the business.</h2>
          </div>
          <p className="section-intro">
            We built QSell for businesses that sell, stock, buy and deliver. It replaces the
            spreadsheet, the notebook and the three separate apps with one system your whole team
            works in.
          </p>
        </div>

        <figure className="console">
          <div className="console-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <b>QSell admin console</b>
          </div>
          <Image
            className="console-shot"
            src={SCREENSHOT.src}
            alt={SCREENSHOT.alt}
            width={SCREENSHOT.width}
            height={SCREENSHOT.height}
            sizes="(max-width: 1180px) 100vw, 1180px"
            quality={90}
          />
          <figcaption className="console-caption">
            <span>
              <strong>It tells you the day in plain words.</strong> What you sold, what you
              collected, and what needs you, before you read a single chart.
            </span>
            <span className="console-tag">QSell admin console</span>
          </figcaption>
        </figure>

        <QSellModules />

        <div className="storefront">
          <div className="storefront-copy">
            <span className="section-kicker">The storefront</span>
            <h3>Your shop, under your name and your web address.</h3>
            <p>
              Every QSell business gets its own online shop. Customers browse categories, filter by
              price and by what is in stock, save products, check out, and track their order. What
              they buy goes straight into your stock, sales and delivery, with nothing to copy over
              by hand.
            </p>
          </div>
          <ul className="storefront-list">
            <li>
              <Check size={15} />
              <span>Branded to the business, on its own web address</span>
            </li>
            <li>
              <Check size={15} />
              <span>Price, stock and sort filters that customers actually use</span>
            </li>
            <li>
              <Check size={15} />
              <span>Customer accounts, saved products and order tracking</span>
            </li>
            <li>
              <Check size={15} />
              <span>Pack sizes and minimum order quantities where products need them</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Production() {
  return (
    <section id="production" className="deployments">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-kicker">In production</span>
            <h2 className="section-title display">Businesses running on QSell today.</h2>
          </div>
          <p className="section-intro">
            Two very different businesses, a solar and electrical supplier and a fresh fish
            delivery, running their shops on the same system.
          </p>
        </div>
        <div className="deployment-grid">
          {clients.map((store) => (
            <article className="deployment-card" key={store.number}>
              <div className="deployment-top">
                <span className="deployment-number">QSELL CLIENT / {store.number}</span>
                <ArrowUpRight size={17} color="var(--terracotta)" aria-hidden="true" />
              </div>
              <a
                className="deployment-preview"
                href={store.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit the ${store.name} online shop`}
              >
                <Image
                  src={store.preview}
                  alt={store.previewAlt}
                  fill
                  sizes="(max-width: 700px) 100vw, 560px"
                />
                <span>
                  Live shop <ExternalLink size={12} />
                </span>
              </a>
              <div className="deployment-city">{store.city}</div>
              <h3>{store.name}</h3>
              <p className="deployment-sub">{store.industry}</p>
              <div className="catalog-count">
                <strong>{store.catalog}</strong>
                <span>{store.catalogLabel}</span>
              </div>
              <ul className="deployment-features">
                {store.points.map((point) => (
                  <li key={point}>
                    <Check size={14} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="deployment-footer">
                <a className="text-link" href={store.url} target="_blank" rel="noreferrer">
                  Visit the shop <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="group-section">
      <div className="wrap group-layout">
        <div className="group-heading">
          <span className="section-kicker">About Brainspore</span>
          <h2 className="display">Built to be used on a busy Tuesday, not just demoed.</h2>
        </div>
        <div className="group-copy">
          <p>
            Brainspore Group LLC is a software and IT company in Nairobi. We build business systems
            for people who trade, stock and deliver, and we care about the unglamorous part: that
            your team can set it up, understand it, and still rely on it when the day gets busy.
          </p>
          <div className="founder">
            <span className="founder-label">Founder</span>
            <strong>Paullaster Okoth</strong>
            <p>
              Paullaster founded Brainspore and leads its engineering. With 8 years of full-stack
              experience in Node.js, React and MongoDB, plus Python and machine learning, Paullaster
              has built payment integrations, wallet services and business platforms for businesses
              in Kenya. QSell is the result of that work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="wrap faq-layout">
        <div>
          <span className="section-kicker">Questions</span>
          <h2 id="faq-heading" className="display">
            Brainspore, QSell and who is behind them.
          </h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-panel">
        <div>
          <span className="section-kicker">Talk to us</span>
          <h2 className="display">Tell us how your business runs today.</h2>
          <p>
            Where does it slow down? Where do things get written twice? Tell us, and we will tell
            you honestly whether software can help, and what it would take.
          </p>
        </div>
        <div className="contact-action">
          <a className="button-primary" href={`mailto:${EMAIL}`}>
            <Mail size={16} /> {EMAIL} <ArrowUpRight size={15} />
          </a>
          <ul className="social-links" aria-label="Brainspore on social media">
            {socials.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label} <ArrowUpRight size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <Brand />
        <div className="footer-note">
          © {new Date().getFullYear()} Brainspore Group LLC · Software &amp; IT solutions · Nairobi,
          Kenya
        </div>
        <a className="back-top" href="#top">
          Back to top <ChevronUp size={13} />
        </a>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Production />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
