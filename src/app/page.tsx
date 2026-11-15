import Home from '@/components/home';
import { faq } from '@/data/faq';
import { buildJsonLd } from '@/lib/seo';

export default function Page() {
  const jsonLd = JSON.stringify(buildJsonLd(faq)).replace(/</g, '\\u003c');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Home />
    </>
  );
}
