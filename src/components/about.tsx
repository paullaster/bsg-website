'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';

const stack = ['Node.js', 'React', 'MongoDB', 'Python', 'Machine learning'];

const principles = [
  {
    index: '01',
    title: 'Every step is on the record.',
    text: 'Orders move through timestamped stages, so you can always see who did what, and when.',
  },
  {
    index: '02',
    title: 'People see only what their job needs.',
    text: 'Access is checked on the server for every action, not just hidden in the screen.',
  },
  {
    index: '03',
    title: 'Tested before it ships.',
    text: 'Every feature is released with automated tests, so a change tomorrow does not break today.',
  },
];

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
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="abt" ref={ref}>
      <div className="abt-wash" aria-hidden="true" />
      <div className="wrap">
        <div className="abt-grid">
          <div className="abt-lead abt-reveal">
            <span className="section-kicker">About Brainspore</span>
            <h2 className="display">Built to run in production, not just to demo.</h2>
            <p>
              Brainspore Group LLC is a software and IT solutions company in Nairobi. We build ERP
              systems, automations and payment solutions for businesses in Kenya and East Africa,
              and we build our own product, QSell, to prove the approach.
            </p>
            <a className="text-link" href="#qsell">
              See what we built <ArrowUpRight size={14} />
            </a>
          </div>

          <article className="abt-card abt-reveal" style={{ '--d': '120ms' } as CSSProperties}>
            <div className="abt-card-top">
              <div className="abt-monogram" aria-hidden="true">
                <span>PO</span>
              </div>
              <div>
                <span className="abt-role">Founder and lead engineer</span>
                <strong>Paullaster Okoth</strong>
              </div>
            </div>
            <p className="abt-bio">
              Paullaster founded Brainspore and leads its engineering. Eight years of full-stack
              work has gone into payment integrations, wallet services and business platforms for
              businesses in Kenya.
            </p>
            <dl className="abt-facts">
              <div>
                <dt>Experience</dt>
                <dd>8 years, full-stack</dd>
              </div>
              <div>
                <dt>Built</dt>
                <dd>M-Pesa payment integrations, wallet services, business platforms</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>
                  <ul className="abt-chips">
                    {stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd className="abt-based">
                  <MapPin size={13} /> Nairobi, Kenya
                </dd>
              </div>
            </dl>
          </article>
        </div>

        <div className="abt-principles">
          <div className="abt-principles-head abt-reveal">
            <span className="section-kicker">How we build</span>
            <p>The standards we hold ourselves to, proven in QSell.</p>
          </div>
          <div className="abt-principles-grid">
            {principles.map((item, i) => (
              <article
                key={item.index}
                className="abt-principle abt-reveal"
                style={{ '--d': `${i * 110}ms` } as CSSProperties}
              >
                <span className="abt-num">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
