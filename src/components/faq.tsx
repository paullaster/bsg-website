'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

import { faq } from '@/data/faq';

const EMAIL = 'hello@brainsporellc.com';

const actions: Record<number, { label: string; href: string; mail?: boolean }> = {
  1: { label: 'About the founder', href: '#about' },
  2: { label: 'See what we build', href: '#what-we-do' },
  3: { label: 'Meet QSell', href: '#qsell' },
  4: { label: 'Tell us about your business', href: `mailto:${EMAIL}`, mail: true },
  5: { label: EMAIL, href: `mailto:${EMAIL}`, mail: true },
};

export default function Faq() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.classList.add('fq-ready');
    const items = root.querySelectorAll('.fq-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  function select(next: number) {
    setActive(next);
    tabs.current[next]?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const last = faq.length - 1;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      select(active === last ? 0 : active + 1);
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      select(active === 0 ? last : active - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      select(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      select(last);
    }
  }

  return (
    <section id="faq" className="fq" ref={ref} aria-labelledby="fq-heading">
      <div className="fq-bg" aria-hidden="true">
        <span className="fq-glow fq-glow-a" />
        <span className="fq-glow fq-glow-b" />
      </div>
      <div className="wrap">
        <header className="fq-head fq-reveal">
          <span className="fq-kicker">FAQs</span>
          <h2 id="fq-heading" className="display">
            Answered before you ask.
          </h2>
        </header>

        <div className="fq-shell fq-reveal" style={{ '--d': '140ms' } as CSSProperties}>
          <div className="fq-panel" style={{ '--i': active } as CSSProperties}>
            <div
              className="fq-list"
              role="tablist"
              aria-orientation="vertical"
              aria-label="Questions about Brainspore"
              onKeyDown={onKeyDown}
            >
              <span className="fq-lens" aria-hidden="true" />
              {faq.map((item, i) => (
                <button
                  key={item.question}
                  ref={(node) => {
                    tabs.current[i] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`fq-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls={`fq-panel-${i}`}
                  tabIndex={active === i ? 0 : -1}
                  className={`fq-tab${active === i ? ' on' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="fq-tab-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="fq-tab-q">{item.question}</span>
                </button>
              ))}
            </div>

            <div className="fq-stage">
              <span className="fq-ring fq-ring-a" aria-hidden="true" />
              <span className="fq-ring fq-ring-b" aria-hidden="true" />
              <span className="fq-orb" aria-hidden="true" />
              {faq.map((item, i) => {
                const action = actions[i];
                return (
                  <div
                    key={item.question}
                    role="tabpanel"
                    id={`fq-panel-${i}`}
                    aria-labelledby={`fq-tab-${i}`}
                    hidden={active !== i}
                    className="fq-answer"
                  >
                    <span className="fq-big" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3>{item.question}</h3>
                    <p>
                      {item.answer.split(' ').map((word, w) => (
                        <Fragment key={`${i}-${w}`}>
                          <span className="fq-word" style={{ '--w': w } as CSSProperties}>
                            {word}
                          </span>{' '}
                        </Fragment>
                      ))}
                    </p>
                    {action && (
                      <a className="fq-cta" href={action.href}>
                        {action.mail && <Mail size={15} />}
                        {action.label} <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="fq-hint" aria-hidden="true">
          Select a question, or use the arrow keys
        </p>
      </div>
    </section>
  );
}
