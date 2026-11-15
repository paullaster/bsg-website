import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Brainspore Group LLC',
    short_name: 'Brainspore',
    description: 'Kenya-based software and IT solutions company for Africa. Maker of QSell.',
    start_url: '/',
    display: 'standalone',
    background_color: '#eff0ee',
    theme_color: '#5f1116',
    icons: [{ src: '/images/mark.png', sizes: '256x256', type: 'image/png' }],
  };
}
