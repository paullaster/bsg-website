'use client';

import { useState } from 'react';
import Image from 'next/image';

import About from '@/components/about';
import Faq from '@/components/faq';
import QSell from '@/components/qsell';
import Services from '@/components/services';
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
          <a href="#what-we-do">Solutions</a>
          <a href="#qsell">QSell</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Contact us <ArrowUpRight size={15} />
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
            Solutions
          </a>
          <a href="#qsell" onClick={close}>
            QSell
          </a>
          <a href="#about" onClick={close}>
            About
          </a>
          <a className="mobile-cta" href="#contact" onClick={close}>
            Contact us
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
              Software and IT solutions for <em>Africa, built in Kenya.</em>
            </h1>
            <p className="hero-lede">
              Brainspore Group LLC (BSG) is a Kenya-based company providing software and IT
              solutions for Africa, built to be solid, secure and reliable.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#qsell">
                Explore QSell <ArrowRight size={15} />
              </a>
              <a className="text-link" href="#contact">
                Contact us <ArrowUpRight size={14} />
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
            <span className="proof-label">based in Kenya, serving Africa</span>
          </div>
          <div className="proof-item">
            <span className="proof-value">QSell</span>
            <span className="proof-label">our flagship solution</span>
          </div>
        </div>
      </div>
    </>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-panel">
        <div>
          <span className="section-kicker">Get started</span>
          <h2 className="display">Put QSell to work in your business.</h2>
          <p>Tell us about your business and we will come back to you.</p>
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
