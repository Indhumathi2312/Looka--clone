import type { Metadata } from 'next';
import BodyClass from '@/components/BodyClass';
import Navbar from '@/components/Navbar';
import Modals from '@/components/Modals';
import BlogHeader from '@/components/BlogHeader';
import FeaturedArticleTile from '@/components/FeaturedArticleTile';
import CategoryPostGrid from '@/components/CategoryPostGrid';
import SubscribeCta from '@/components/SubscribeCta';
import Footer from '@/components/Footer';
import { BLOG_HOME_METADATA, CATEGORY_SECTIONS } from '@/data/blogHome';

export const metadata: Metadata = {
  title: BLOG_HOME_METADATA.title,
  description: BLOG_HOME_METADATA.description,
  alternates: {
    canonical: BLOG_HOME_METADATA.canonical,
  },
  openGraph: {
    locale: 'en_US',
    type: 'article',
    title: BLOG_HOME_METADATA.title,
    description: BLOG_HOME_METADATA.ogDescription,
    url: BLOG_HOME_METADATA.canonical,
    siteName: 'Looka',
    images: [
      {
        url: BLOG_HOME_METADATA.ogImage,
        width: 3202,
        height: 3202,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    description: BLOG_HOME_METADATA.ogDescription,
    site: '@lookadesign',
  },
};

export default function BlogHomePage() {
  return (
    <>
      <BodyClass className="blog post-how-much-does-a-logo-cost" />
      <Navbar activeSection="all" />
      <Modals showExitNewsletter={false} />
      <BlogHeader />
      <div className="blog-container">
        <div className="blog-index">
          <FeaturedArticleTile />
          {CATEGORY_SECTIONS.map((section) => (
            <CategoryPostGrid key={section.title} section={section} />
          ))}
        </div>
      </div>
      <SubscribeCta />
      <Footer activePage="home" />
    </>
  );
}
