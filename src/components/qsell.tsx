'use client';

import { useRef } from 'react';
import type { CSSProperties, MouseEvent } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { SCREENSHOT } from '@/lib/seo';

function QMark() {
  return (
    <svg viewBox="0 0 300 300" aria-hidden="true" focusable="false" className="qs-mark">
      <defs>
        <linearGradient id="qsRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8a2026" />
          <stop offset="0.5" stopColor="#5f1116" />
          <stop offset="1" stopColor="#2e0508" />
        </linearGradient>
        <linearGradient id="qsTail" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7a1b20" />
          <stop offset="1" stopColor="#2e0508" />
        </linearGradient>
        <linearGradient id="qsSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g className="qs-orbit qs-orbit-a">
        <circle cx="150" cy="150" r="126" className="qs-dash" />
        <circle cx="150" cy="24" r="4" className="qs-node" />
      </g>
      <g className="qs-orbit qs-orbit-b">
        <circle cx="150" cy="150" r="144" className="qs-dash qs-dash-fine" />
        <circle cx="294" cy="150" r="3" className="qs-node" />
      </g>

      <circle cx="150" cy="150" r="82" pathLength="1" className="qs-ring" stroke="url(#qsRing)" />
      <circle cx="150" cy="150" r="82" className="qs-ring-sheen" stroke="url(#qsSheen)" />
      <g className="qs-tail">
        <line x1="184" y1="184" x2="246" y2="246" className="qs-tail-body" stroke="url(#qsTail)" />
        <line x1="184" y1="184" x2="246" y2="246" className="qs-tail-glint" />
      </g>

      <circle cx="150" cy="150" r="16" className="qs-core-halo" />
      <circle cx="150" cy="150" r="7" className="qs-core" />

      <circle r="6" className="qs-spark">
        <animateMotion dur="7s" repeatCount="indefinite" path="M150,68 A82,82 0 1 1 149.9,68" />
      </circle>
    </svg>
  );
}

export default function QSell() {
  const stage = useRef<HTMLDivElement>(null);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const el = stage.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--px', String(((event.clientX - rect.left) / rect.width - 0.5) * 2));
    el.style.setProperty('--py', String(((event.clientY - rect.top) / rect.height - 0.5) * 2));
  }

  function onLeave() {
    const el = stage.current;
    if (!el) return;
    el.style.setProperty('--px', '0');
    el.style.setProperty('--py', '0');
  }

  return (
    <section id="qsell" className="section platform-section qs">
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

          <div
            className="platform-map qs-stage"
            ref={stage}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ '--px': 0, '--py': 0 } as CSSProperties}
          >
            <div className="map-lines" aria-hidden="true" />
            <div className="map-ring" aria-hidden="true" />
            <div className="qs-halo" aria-hidden="true" />
            <div className="map-tag one">
              <span>Built for</span>
              <b>Distribution &amp; wholesale</b>
            </div>
            <div className="map-tag two">
              <span>Built for</span>
              <b>Retail businesses</b>
            </div>
            <div className="qs-q">
              <QMark />
            </div>
          </div>
        </div>

        <figure className="console qs-console">
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
