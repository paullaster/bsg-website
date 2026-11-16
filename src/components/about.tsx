'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, Landmark, Smartphone, Wallet } from 'lucide-react';

const chain = [
  {
    icon: <Smartphone size={22} strokeWidth={1.5} />,
    step: 'Money comes in',
    title: 'Payment integrations',
    text: 'Every sale collected, through M-Pesa and other providers.',
  },
  {
    icon: <Wallet size={22} strokeWidth={1.5} />,
    step: 'Money is held',
    title: 'Wallet services',
    text: 'Balances people can hold, move and spend with confidence.',
  },
  {
    icon: <Landmark size={22} strokeWidth={1.5} />,
    step: 'Money is recorded',
    title: 'A full ledger',
    text: 'Every shilling accounted for, so the books agree.',
  },
];

const standards = ['Secure.', 'Reliable.', 'Made to serve its users.'];

type Project = { org: string; system: string; text: string; logo?: string };

const projects: Project[] = [
  {
    org: 'Engineers Board of Kenya',
    logo: '/logos/ebk.svg',
    system: 'Membership portal',
    text: 'Membership for the regulator of Kenya’s engineers.',
  },
  {
    org: 'Institution of Engineers of Kenya',
    logo: '/logos/iek.svg',
    system: 'Events and CPD portal',
    text: 'Event bookings and professional development for the engineers’ professional body.',
  },
  {
    org: 'National Research Fund',
    logo: '/logos/nrf.svg',
    system: 'Grant management portal',
    text: 'Grant calls, applications and reviewers for a national research fund.',
  },
  {
    org: 'Médecins Sans Frontières',
    logo: '/logos/msf.svg',
    system: 'Staff portal',
    text: 'The internal portal an organisation’s staff work in every day.',
  },
];

function FounderGlance() {
  return (
    <div className="abt-glance abt-reveal">
      <div className="abt-glance-bg" aria-hidden="true" />
      <div className="abt-founder">
        <div className="abt-monogram">
          <div className="abt-monogram-img">
            <Image
              src="/images/paullaster-okoth.avif"
              alt="Paullaster Okoth, founder and lead engineer at Brainspore"
              width={640}
              height={640}
              unoptimized
            />
          </div>
        </div>
        <div>
          <span className="abt-role">Founder and lead engineer</span>
          <strong>Paullaster Okoth</strong>
          <small>8 years building production software</small>
        </div>
      </div>

      <div className="abt-trust">
        <span className="abt-glance-label">Delivered by Paullaster for</span>
        <ul className="abt-logos">
          {projects.map((item) => (
            <li className="abt-logo" key={item.org} title={`${item.org}: ${item.system}`}>
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={`${item.org} logo`}
                  width={240}
                  height={96}
                  loading="eager"
                  unoptimized
                />
              ) : (
                <span>{item.org}</span>
              )}
              <span className="sr-only">
                {item.org}: {item.system}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="abt-glance-note">Places where records, money and access have to be right.</p>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.classList.add('abt-ready');
    const items = root.querySelectorAll('.abt-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="abt" ref={ref}>
      <div className="abt-wash" aria-hidden="true" />
      <div className="wrap">
        <div className="abt-top abt-reveal">
          <span className="section-kicker">About Brainspore</span>
          <h2 className="abt-headline display">
            <span className="abt-line">
              <span>We build software</span>
            </span>
            <span className="abt-line">
              <span>
                that earns <em>its keep.</em>
              </span>
            </span>
          </h2>
          <p className="abt-sub">
            Earning its keep is a payment that arrives, a balance that stays where it belongs, a
            record that never needs defending. Every solution we make is held to that standard, and
            QSell is built on it.
          </p>
        </div>

        <div className="abt-panel abt-reveal" style={{ '--d': '120ms' } as CSSProperties}>
          <div className="abt-panel-bg" aria-hidden="true" />
          <div className="abt-panel-head">
            <span>One payment, followed end to end</span>
            <a href="#qsell">
              See QSell <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="abt-chain">
            {chain.map((node, i) => (
              <div className="abt-chain-item" key={node.title}>
                <article className="abt-node">
                  <div className="abt-node-icon">{node.icon}</div>
                  <span className="abt-node-step">
                    {String(i + 1).padStart(2, '0')} · {node.step}
                  </span>
                  <h3>{node.title}</h3>
                  <p>{node.text}</p>
                </article>
                {i < chain.length - 1 && (
                  <span className="abt-flow" aria-hidden="true">
                    <i />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <FounderGlance />

        <ul className="abt-standards">
          {standards.map((item, i) => (
            <li
              key={item}
              className="abt-reveal"
              style={{ '--d': `${i * 110}ms` } as CSSProperties}
            >
              <span className="abt-check">
                <Check size={14} strokeWidth={2.4} />
              </span>
              <b>{item}</b>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
