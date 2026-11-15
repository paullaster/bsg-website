import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };

export function renderOgImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: '#5f1116',
        color: '#eff0ee',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 9,
            background: '#d79533',
          }}
        />
        <div style={{ fontSize: 30, letterSpacing: 2, color: '#fad39d' }}>
          SOFTWARE &amp; IT SOLUTIONS · NAIROBI, KENYA
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02 }}>Brainspore Group LLC</div>
        <div style={{ fontSize: 40, color: 'rgba(239,240,238,0.82)', lineHeight: 1.3 }}>
          Software for businesses in Kenya and East Africa. Maker of QSell, business management
          software.
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28 }}>
        <div style={{ color: '#d79533' }}>BSG LLC · Founded by Paullaster Okoth</div>
        <div style={{ color: '#fad39d' }}>brainsporellc.com</div>
      </div>
    </div>,
    { ...OG_SIZE },
  );
}
