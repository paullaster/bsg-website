'use client';

import { useState } from 'react';
import Image from 'next/image';

import { faq } from '@/data/faq';
import About from '@/components/about';
import Services from '@/components/services';
import { SCREENSHOT } from '@/lib/seo';
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  ChevronUp,
  Mail,
  Menu,
  Wallet,
  Workflow,
  X,
} from 'lucide-react';

const EMAIL = 'hello@brainsporellc.com';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/101033521' },
  { label: 'Instagram', href: 'https://www.instagram.com/brainsporegroup/' },
  { label: 'Facebook', href: 'https://www.facebook.com/brainsporegroup' },
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

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Brainspore builds ERP, automation and payment solutions">
      <div className="orbit" aria-hidden="true" />
      <div className="orbital-line" aria-hidden="true" />
      <span className="orbit-tick tick-a" aria-hidden="true" />
      <span className="orbit-tick tick-b" aria-hidden="true" />
      <div className="center-mark">
        <Image src="/brainspore-logo.jpg" alt="Brainspore symbol" width={106} height={106} />
      </div>
      <div className="orbit-node node-top">
        <Blocks size={14} /> ERP
      </div>
      <div className="orbit-node node-left">
        <Workflow size={14} /> Automation
      </div>
      <div className="orbit-node node-bottom">
        <Wallet size={14} /> Payments
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
              Brainspore Group LLC (BSG) builds custom ERP systems, automations, Microsoft Dynamics
              365 Business Central solutions, and payment and fintech integrations for businesses in
              Kenya and East Africa. We also make our own product, QSell.
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
            <span className="proof-label">based in Kenya, serving East Africa</span>
          </div>
          <div className="proof-item">
            <span className="proof-value">QSell</span>
            <span className="proof-label">our own product, built in-house</span>
          </div>
        </div>
      </div>
    </>
  );
}

function QSell() {
  return (
    <section id="qsell" className="section platform-section">
      <div className="wrap">
        <div className="platform-feature">
          <div className="platform-statement">
            <div>
              <div className="platform-label">Our own solution</div>
              <h3>QSell business management software.</h3>
              <p>
                Built by Brainspore. It runs sales, stock, finance, delivery and people in one
                system, and gives each business its own online storefront for customers.
              </p>
            </div>
            <a className="text-link" href="#contact">
              Ask us about QSell <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="platform-map">
            <div className="map-lines" aria-hidden="true" />
            <div className="map-ring" aria-hidden="true" />
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
            Brainspore and who is behind it.
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
          <h2 className="display">Tell us what you need built.</h2>
          <p>
            An ERP, an automation, a Business Central setup or a payment integration: tell us what
            your business needs and we will come back to you.
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
          Kenya. Microsoft and Dynamics 365 are trademarks of the Microsoft group of companies.
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
        <Services />
        <QSell />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
