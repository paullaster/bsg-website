'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties, MouseEvent, ReactNode } from 'react';

type Service = {
  index: string;
  tag: string;
  title: string;
  text: string;
  span: 'span-7' | 'span-5';
  visual: ReactNode;
};

const erpNodes = [
  { x: 62, y: 40, label: 'Sales' },
  { x: 62, y: 146, label: 'Stock' },
  { x: 338, y: 40, label: 'Purchasing' },
  { x: 338, y: 146, label: 'Finance' },
  { x: 200, y: 168, label: 'People' },
];

function ErpVisual() {
  return (
    <svg viewBox="0 0 400 190" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="svcErpCore" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#fff3d9" />
          <stop offset="0.55" stopColor="#fad39d" />
          <stop offset="1" stopColor="#d79533" />
        </radialGradient>
      </defs>
      {erpNodes.map((node, i) => (
        <g key={node.label}>
          <path className="v-line" d={`M200,84 L${node.x},${node.y}`} />
          <circle className="v-pulse" r="3">
            <animateMotion
              dur={`${2.6 + i * 0.45}s`}
              begin={`${i * 0.35}s`}
              repeatCount="indefinite"
              path={`M200,84 L${node.x},${node.y}`}
            />
          </circle>
          <rect className="v-node" x={node.x - 44} y={node.y - 13} width="88" height="26" rx="13" />
          <text className="v-label" x={node.x} y={node.y + 3.5}>
            {node.label}
          </text>
        </g>
      ))}
      <circle className="v-ring" cx="200" cy="84" r="30" />
      <circle className="v-ring v-ring-2" cx="200" cy="84" r="30" />
      <circle cx="200" cy="84" r="30" fill="url(#svcErpCore)" />
      <text className="v-core-text" x="200" y="89" textAnchor="middle">
        ERP
      </text>
    </svg>
  );
}

const stations = [
  { x: 56, label: 'Order in' },
  { x: 152, label: 'Approved' },
  { x: 248, label: 'Invoiced' },
  { x: 344, label: 'Posted' },
];

function AutomationVisual() {
  return (
    <svg viewBox="0 0 400 190" aria-hidden="true" focusable="false">
      <path className="v-line" d="M56,82 L344,82" />
      <path className="v-line v-line-soft" d="M56,82 C120,150 280,150 344,82" />
      {stations.map((station, i) => (
        <g key={station.label}>
          <circle
            className="v-station"
            cx={station.x}
            cy="82"
            r="15"
            style={{ animationDelay: `${i}s` }}
          />
          <circle className="v-station-core" cx={station.x} cy="82" r="5" />
          <text className="v-label" x={station.x} y="120">
            {station.label}
          </text>
        </g>
      ))}
      <circle className="v-packet" r="5.5">
        <animateMotion dur="4s" repeatCount="indefinite" path="M56,82 L344,82" />
      </circle>
      <text className="v-note" x="200" y="172">
        runs on its own
      </text>
    </svg>
  );
}

const bcChips = [
  { y: 22, label: 'Finance' },
  { y: 76, label: 'Inventory' },
  { y: 130, label: 'Operations' },
];

function BusinessCentralVisual() {
  return (
    <svg viewBox="0 0 400 190" aria-hidden="true" focusable="false">
      <path className="v-line" d="M118,95 L150,95" />
      <circle className="v-pulse" r="3">
        <animateMotion dur="1.8s" repeatCount="indefinite" path="M118,95 L150,95" />
      </circle>
      <circle className="v-pulse" r="3">
        <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path="M150,95 L118,95" />
      </circle>
      <rect className="v-node" x="18" y="80" width="100" height="30" rx="15" />
      <text className="v-label" x="68" y="99">
        Your systems
      </text>
      {bcChips.map((chip, i) => (
        <g key={chip.label}>
          <path className="v-line" d={`M250,95 C270,95 270,${chip.y + 13} 292,${chip.y + 13}`} />
          <circle className="v-pulse" r="3">
            <animateMotion
              dur={`${2.2 + i * 0.4}s`}
              begin={`${i * 0.5}s`}
              repeatCount="indefinite"
              path={`M250,95 C270,95 270,${chip.y + 13} 292,${chip.y + 13}`}
            />
          </circle>
          <rect className="v-node" x="292" y={chip.y} width="92" height="26" rx="13" />
          <text className="v-label" x="338" y={chip.y + 16.5}>
            {chip.label}
          </text>
        </g>
      ))}
      <rect className="v-ring" x="150" y="52" width="100" height="86" rx="10" />
      <rect className="v-core-box" x="150" y="52" width="100" height="86" rx="10" />
      <text className="v-core-text" x="200" y="91" textAnchor="middle">
        Business
      </text>
      <text className="v-core-text" x="200" y="108" textAnchor="middle">
        Central
      </text>
    </svg>
  );
}

const payRows = [
  { y: 30, label: 'M-Pesa' },
  { y: 82, label: 'Card' },
  { y: 134, label: 'Bank' },
];

function PaymentsVisual() {
  return (
    <svg viewBox="0 0 400 190" aria-hidden="true" focusable="false">
      {payRows.map((row, i) => {
        const d = `M112,${row.y + 13} C190,${row.y + 13} 200,${row.y + 13} 262,${74 + i * 22}`;
        return (
          <g key={row.label}>
            <path className="v-line" d={d} />
            <circle className="v-pulse" r="3">
              <animateMotion dur="2.8s" begin={`${i * 0.7}s`} repeatCount="indefinite" path={d} />
            </circle>
            <rect className="v-node" x="20" y={row.y} width="92" height="26" rx="13" />
            <text className="v-label" x="66" y={row.y + 16.5}>
              {row.label}
            </text>
          </g>
        );
      })}
      <rect className="v-node v-ledger" x="262" y="26" width="118" height="138" rx="10" />
      <text className="v-label v-label-left" x="276" y="48">
        LEDGER
      </text>
      {payRows.map((row, i) => (
        <g key={`tick-${row.label}`}>
          <line className="v-row" x1="276" y1={74 + i * 22} x2="332" y2={74 + i * 22} />
          <circle
            className="v-tick"
            cx="360"
            cy={74 + i * 22}
            r="7"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
          <path
            className="v-tick-mark"
            d={`M356.5,${74 + i * 22} l2.6,2.8 l5,-5.6`}
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        </g>
      ))}
      <text className="v-note v-note-right" x="321" y="150">
        records match
      </text>
    </svg>
  );
}

const services: Service[] = [
  {
    index: '01',
    tag: 'ERP',
    title: 'Custom ERP solutions',
    text: 'One system for sales, stock, purchasing, finance and people, built around how your business actually runs instead of forcing you into someone else’s process.',
    span: 'span-7',
    visual: <ErpVisual />,
  },
  {
    index: '02',
    tag: 'Automation',
    title: 'Automations',
    text: 'We replace repeated manual work, such as re-keying orders, chasing approvals and reconciling spreadsheets, with workflows that run on their own.',
    span: 'span-5',
    visual: <AutomationVisual />,
  },
  {
    index: '03',
    tag: 'Microsoft',
    title: 'Microsoft Dynamics 365 Business Central',
    text: 'Setup, customisation and integration of Business Central, so it fits your finance, inventory and operations and connects to the other systems you use.',
    span: 'span-5',
    visual: <BusinessCentralVisual />,
  },
  {
    index: '04',
    tag: 'Fintech',
    title: 'Payment and fintech solutions',
    text: 'Payment collection, wallets and integrations with M-Pesa and other payment providers, built so that money and records always agree.',
    span: 'span-7',
    visual: <PaymentsVisual />,
  },
];

function onMove(event: MouseEvent<HTMLElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  card.style.setProperty('--my', `${event.clientY - rect.top}px`);
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.classList.add('svc-ready');
    const items = root.querySelectorAll('.reveal');
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

  return (
    <section id="what-we-do" className="svc" ref={ref}>
      <div className="svc-bg" aria-hidden="true">
        <span className="svc-orb svc-orb-a" />
        <span className="svc-orb svc-orb-b" />
      </div>
      <div className="wrap">
        <header className="svc-head reveal">
          <div>
            <span className="svc-kicker">What Brainspore does</span>
            <h2 className="display">Four things we build, and build well.</h2>
          </div>
          <p>
            A business runs on four things: one system for its records, work that moves without
            being chased, finance and operations on a platform it can trust, and money that lands
            where it should. We build all four and make them work together.
          </p>
        </header>
        <div className="svc-grid">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`svc-card ${service.span} reveal`}
              style={{ '--d': `${i * 110}ms` } as CSSProperties}
              onMouseMove={onMove}
            >
              <div className="svc-top">
                <span className="svc-index">{service.index}</span>
                <span className="svc-tag">{service.tag}</span>
              </div>
              <div className="svc-visual">{service.visual}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
