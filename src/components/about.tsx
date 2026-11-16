'use client';

import { useEffect, useRef, useState } from 'react';
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

const standards = [
  {
    title: 'Nothing unaccounted for.',
    text: 'Every order stage is timestamped with who acted, and when.',
  },
  {
    title: 'Only the right hands.',
    text: 'Access is checked on the server for every action.',
  },
  {
    title: 'Built to last.',
    text: 'Every feature ships with automated tests, so value survives change.',
  },
];

const projects = [
  {
    org: 'Engineers Board of Kenya',
    system: 'Membership portal',
    text: 'Membership for the regulator of Kenya’s engineers.',
  },
  {
    org: 'Institution of Engineers of Kenya',
    system: 'Events and CPD portal',
    text: 'Event bookings and professional development for the engineers’ professional body.',
  },
  {
    org: 'National Research Fund',
    system: 'Grant management portal',
    text: 'Grant calls, applications and reviewers for a national research fund.',
  },
  {
    org: 'Médecins Sans Frontières',
    system: 'Staff portal',
    text: 'The internal portal an organisation’s staff work in every day.',
  },
];

function FounderGlance() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setTimeout(() => setIndex((value) => (value + 1) % projects.length), 3800);
    return () => window.clearTimeout(id);
  }, [paused, index]);

  return (
    <div
      className="abt-glance abt-reveal"
      data-paused={paused}
      style={{ '--i': index } as CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
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

      <div className="abt-glance-reel">
        <span className="abt-glance-label">Delivered by Paullaster for</span>
        <div className="abt-window" aria-hidden="true">
          <div className="abt-track">
            {projects.map((item) => (
              <div className="abt-slide" key={item.org}>
                <strong>{item.org}</strong>
                <span>{item.system}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="abt-steps" role="group" aria-label="Systems Paullaster delivered">
          {projects.map((item, i) => (
            <button
              key={item.org}
              type="button"
              className={`abt-step${i === index ? ' on' : ''}`}
              aria-label={`${item.org}: ${item.system}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              <i />
            </button>
          ))}
        </div>
        <ul className="sr-only">
          {projects.map((item) => (
            <li key={item.org}>
              {item.org}: {item.system}
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
                that creates <em>real value.</em>
              </span>
            </span>
          </h2>
          <p className="abt-sub">
            Value is not a feature list. It is a payment collected, a balance protected, a record
            that holds up. That is how we measure every system we build.
          </p>
        </div>

        <div className="abt-panel abt-reveal" style={{ '--d': '120ms' } as CSSProperties}>
          <div className="abt-panel-bg" aria-hidden="true" />
          <div className="abt-panel-head">
            <span>Value, from payment to record</span>
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
              key={item.title}
              className="abt-reveal"
              style={{ '--d': `${i * 110}ms` } as CSSProperties}
            >
              <span className="abt-check">
                <Check size={14} strokeWidth={2.4} />
              </span>
              <div>
                <b>{item.title}</b>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
