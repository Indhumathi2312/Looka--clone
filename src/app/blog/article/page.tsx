'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import BodyClass from '@/components/BodyClass';
import Navbar from '@/components/Navbar';
import Modals from '@/components/Modals';
import SocialShare from '@/components/SocialShare';
import BottomCta from '@/components/BottomCta';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import {
  ALL_LOCAL_POSTS,
  findLocalPostBySlug,
} from '@/data/blogHome';

function LocalArticleReader() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const post = findLocalPostBySlug(slug);

  const related = ALL_LOCAL_POSTS.filter(
    (item) => item.slug !== post.slug && item.categorySlug === post.categorySlug
  ).slice(0, 3);

  const fallbackRelated =
    related.length > 0
      ? related
      : ALL_LOCAL_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <BodyClass className="post-template-default single single-post single-format-standard" />
      <Navbar activeSection={post.categorySlug} />
      <Modals showExitNewsletter={false} />
      <article className="blog-single">
        <header className="blog-single__header">
          <div className="blog-single__category">
            <Link href={post.categoryHref}>{post.category}</Link>
          </div>
          <h1 className="blog-single__title">{post.title}</h1>
          <div className="meta meta--flat">
            <div className="meta__info blog-single__author-byline">
              <img
                alt=""
                src="/images/Janet-headshot.jpg"
                srcSet="/images/Janet-headshot.jpg 2x"
                className="avatar avatar-40 photo"
                height={40}
                width={40}
                decoding="async"
              />
              <p>
                In <Link href={post.categoryHref}>{post.category}</Link> ·{' '}
                <Link href="/">Looka Blog</Link>
              </p>
            </div>
          </div>
          <SocialShare />
        </header>

        <main className="blog-single__main">
          <figure className="blog-single__featured_image">
            <img
              src={post.backgroundImage}
              alt={post.title}
              className="attachment-large size-large wp-post-image"
              decoding="async"
            />
          </figure>

          <div className="blog-single__inner">
            <p>
              <span style={{ fontWeight: 400 }}>
                {post.caption ||
                  `${post.title} — featured under ${post.category} on the Looka Blog.`}
              </span>
            </p>
            <div className="altpull">
              <Link href="/blog/disney-logo/">
                Read the full featured article: Disney Logo Evolution
              </Link>{' '}
              or <Link href="/">browse all articles on the Looka Blog</Link>.
            </div>
          </div>
        </main>
      </article>

      <aside className="blog-related">
        <h2 className="blog-related__subtitle">More in {post.category}</h2>
        <div className="blog-related__posts">
          {fallbackRelated.map((item) => (
            <article key={item.slug} className="tile ">
              <Link
                className="tile__image lozad"
                aria-label="Read the article"
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                href={item.href}
              />
              <div className="tile__content">
                <Link className="meta meta--category" href={item.categoryHref}>
                  {item.category}
                </Link>
                <Link href={item.href}>
                  <h3 className="tile__title">{item.title}</h3>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </aside>

      <BottomCta />
      <ScrollToTop />
      <Footer activePage="article" />
    </>
  );
}

export default function LocalArticlePage() {
  return (
    <Suspense fallback={null}>
      <LocalArticleReader />
    </Suspense>
  );
}
