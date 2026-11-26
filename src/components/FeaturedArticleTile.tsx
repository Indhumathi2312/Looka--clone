import Link from 'next/link';
import { FEATURED_POST } from '@/data/blogHome';

export default function FeaturedArticleTile() {
  return (
    <article className="tile tile--full">
      <Link
        className="tile__image lozad"
        aria-label="Read the article"
        style={{
          backgroundImage: `url(${FEATURED_POST.backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        href={FEATURED_POST.href}
      />
      <div className="tile__content">
        <Link className="meta meta--category" href={FEATURED_POST.categoryHref}>
          {FEATURED_POST.category}
        </Link>
        <Link href={FEATURED_POST.href}>
          <h3 className="tile__title">{FEATURED_POST.title}</h3>
          <p className="tile__caption">{FEATURED_POST.caption}</p>
          <p className="tile__cta">{FEATURED_POST.ctaLabel}</p>
        </Link>
      </div>
    </article>
  );
}
