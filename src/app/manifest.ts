import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Brainspore Group LLC',
    short_name: 'Brainspore',
    description: 'Software and IT solutions company in Nairobi, Kenya. Maker of QSell.',
    start_url: '/',
    display: 'standalone',
    background_color: '#eff0ee',
    theme_color: '#5f1116',
    icons: [{ src: '/images/mark.png', sizes: '256x256', type: 'image/png' }],
  };
}
