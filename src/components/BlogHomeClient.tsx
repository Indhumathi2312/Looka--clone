'use client';

import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Modals from '@/components/Modals';
import BlogHeader from '@/components/BlogHeader';
import FeaturedArticleTile from '@/components/FeaturedArticleTile';
import CategoryPostGrid from '@/components/CategoryPostGrid';
import SubscribeCta from '@/components/SubscribeCta';
import Footer from '@/components/Footer';
import {
  ALL_LOCAL_POSTS,
  CATEGORY_SECTIONS,
  CategorySection,
} from '@/data/blogHome';

export default function BlogHomeClient() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category')?.trim() || '';
  const query = searchParams.get('q')?.trim() || '';

  const activeCategorySection = categorySlug
    ? CATEGORY_SECTIONS.find((sec) => sec.slug === categorySlug)
    : undefined;

  let searchSection: CategorySection | null = null;
  if (query) {
    const qLower = query.toLowerCase();
    const matched = ALL_LOCAL_POSTS.filter(
      (post) =>
        post.title.toLowerCase().includes(qLower) ||
        post.category.toLowerCase().includes(qLower) ||
        (post.caption && post.caption.toLowerCase().includes(qLower))
    );
    searchSection = {
      slug: 'search',
      title: `Search results for "${query}" (${matched.length})`,
      viewAllHref: '/',
      posts: matched,
    };
  }

  return (
    <>
      <Navbar activeSection={activeCategorySection ? activeCategorySection.slug : 'all'} />
      <Modals showExitNewsletter={false} />
      <BlogHeader />
      <div className="blog-container">
        <div className="blog-index">
          {searchSection ? (
            <>
              <CategoryPostGrid
                section={searchSection}
                actionLabel="Back to all articles"
                actionHref="/"
              />
              {searchSection.posts.length === 0 && (
                <p style={{ marginTop: 24 }}>
                  No local articles matched &ldquo;{query}&rdquo;.
                </p>
              )}
            </>
          ) : activeCategorySection ? (
            <CategoryPostGrid
              section={activeCategorySection}
              actionLabel="Back to all articles"
              actionHref="/"
            />
          ) : (
            <>
              <FeaturedArticleTile />
              {CATEGORY_SECTIONS.map((section) => (
                <CategoryPostGrid key={section.slug} section={section} />
              ))}
            </>
          )}
        </div>
      </div>
      <SubscribeCta />
      <Footer activePage="home" />
    </>
  );
}
