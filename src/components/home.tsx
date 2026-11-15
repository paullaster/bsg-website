'use client';

import { useState } from 'react';
import Image from 'next/image';

import { faq } from '@/data/faq';
import { QSELL_FEATURES, SCREENSHOT } from '@/lib/seo';
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  ChevronUp,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  ShieldCheck,
  Wallet,
  X,
} from 'lucide-react';

const EMAIL = 'hello@brainsporellc.com';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/101033521' },
  { label: 'Instagram', href: 'https://www.instagram.com/brainsporegroup/' },
  { label: 'Facebook', href: 'https://www.facebook.com/brainsporegroup' },
];

const capabilities = [
  {
    icon: <Blocks size={20} strokeWidth={1.6} />,
    title: 'Custom software',
    text: 'Web applications and internal systems designed around how your business already works, not the other way round.',
  },
  {
    icon: <Globe size={20} strokeWidth={1.6} />,
    title: 'Online shops and platforms',
    text: 'Storefronts that take orders, show real stock and prices, and let customers follow their delivery.',
  },
  {
    icon: <Wallet size={20} strokeWidth={1.6} />,
    title: 'Payments and integrations',
    text: 'Connecting your software to M-Pesa and the other systems a business depends on, so money and records agree.',
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.6} />,
    title: 'IT solutions and support',
    text: 'Setup, deployment and ongoing support, so what we build keeps running after launch day.',
  },
];

const clients = [
  {
    city: 'Kisumu, Kenya',
    name: 'SM Engineering Limited',
    industry: 'Solar, electrical and engineering supplies',
    preview: '/clients/sm-engineering-store.png',
    previewAlt:
      'The SM Engineering online shop, showing solar product categories and prices in KES',
    url: 'https://shop.smsolar.co.ke/',
  },
  {
    city: 'Nairobi, Kenya',
    name: 'Noels Fish Deliveries',
    industry: 'Fresh fish, farm and speciality foods',
    preview: '/clients/noels-fish-store.png',
    previewAlt: 'The Noels Fish Deliveries online shop, showing fresh fish and food categories',
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
          <a href="#what-we-do">What we do</a>
          <a href="#qsell">QSell</a>
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
          <a href="#what-we-do" onClick={close}>
            What we do
          </a>
          <a href="#qsell" onClick={close}>
            QSell
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

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Software &amp; IT company · Nairobi, Kenya</span>
          <h1 className="display">
            Software and IT solutions for businesses in <em>Kenya and East Africa.</em>
          </h1>
          <p className="hero-lede">
            Brainspore Group LLC (BSG) is a software company in Nairobi with 8 years of experience
            building production software. We design, build and run software for businesses across
            Kenya, East Africa and Africa. Our core solution is QSell, business management software
            we built ourselves.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#what-we-do">
              What we do <ArrowRight size={15} />
            </a>
            <a className="text-link" href="#contact">
              Talk to us <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section id="what-we-do" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-kicker">What Brainspore does</span>
            <h2 className="section-title display">Software that businesses can depend on.</h2>
          </div>
          <p className="section-intro">
            We build and look after the software behind how a business sells, stocks, pays and
            delivers. We like plain answers, working systems and clients who can call us after
            launch.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability" key={item.title}>
              <div className="capability-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QSell() {
  return (
    <section id="qsell" className="section platform-section">
      <div className="wrap qsell-feature">
        <div className="qsell-copy">
          <span className="section-kicker">Our core solution</span>
          <h2 className="display">QSell business management software.</h2>
          <p>
            QSell is the system we built to run a trading business in one place: sales, stock,
            suppliers, money, delivery and people, with an online shop for customers. Brainspore
            builds it, sets it up and supports it.
          </p>
          <ul className="chips" aria-label="What QSell covers">
            {QSELL_FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <figure className="console">
          <div className="console-bar" aria-hidden="true">
            <b>QSell admin console</b>
          </div>
          <Image
            className="console-shot"
            src={SCREENSHOT.src}
            alt={SCREENSHOT.alt}
            width={SCREENSHOT.width}
            height={SCREENSHOT.height}
            unoptimized
          />
        </figure>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clients" className="deployments">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="section-kicker">In use today</span>
            <h2 className="section-title display">Businesses running on QSell.</h2>
          </div>
          <p className="section-intro">
            Two very different businesses, one solar and electrical supplier and one fresh fish
            delivery, run their online shops on QSell.
          </p>
        </div>
        <div className="deployment-grid">
          {clients.map((store) => (
            <article className="deployment-card" key={store.name}>
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
        <WhatWeDo />
        <QSell />
        <Clients />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
