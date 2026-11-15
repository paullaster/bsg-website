import { renderOgImage } from '@/lib/og';

export const alt =
  'Brainspore Group LLC (BSG) — Kenya-based software and IT solutions company for Africa, maker of QSell';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return renderOgImage();
}
