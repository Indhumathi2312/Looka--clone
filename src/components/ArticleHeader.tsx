import Link from 'next/link';
import { ARTICLE_META } from '@/data/disneyArticle';
import SocialShare from './SocialShare';

export default function ArticleHeader() {
  return (
    <header className="blog-single__header">
      <div className="blog-single__category">
        <Link href={ARTICLE_META.category.href}>{ARTICLE_META.category.label}</Link>
      </div>
      <h1 className="blog-single__title">{ARTICLE_META.title}</h1>
      <div className="meta meta--flat">
        <div className="meta__info blog-single__author-byline">
          <img
            alt=""
            src={ARTICLE_META.author.avatarSrc}
            srcSet={`${ARTICLE_META.author.avatarSrc} 2x`}
            className="avatar avatar-40 photo"
            height={40}
            width={40}
            decoding="async"
          />
          <p>
            By{' '}
            <a
              href={ARTICLE_META.author.href}
              title={ARTICLE_META.author.titleAttr}
              rel="author"
            >
              {ARTICLE_META.author.name}
            </a>{' '}
            {ARTICLE_META.publishedDate}
          </p>
        </div>
      </div>
      <SocialShare />
    </header>
  );
}
