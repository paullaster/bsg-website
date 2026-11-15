import { renderOgImage } from '@/lib/og';

export const alt =
  'Brainspore Group LLC (BSG) — software and IT solutions company in Nairobi, Kenya, maker of QSell';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return renderOgImage();
}
