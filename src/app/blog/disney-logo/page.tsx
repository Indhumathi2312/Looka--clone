import type { Metadata } from 'next';
import BodyClass from '@/components/BodyClass';
import Navbar from '@/components/Navbar';
import Modals from '@/components/Modals';
import ReadingProgress from '@/components/ReadingProgress';
import ArticleHeader from '@/components/ArticleHeader';
import ArticleContent from '@/components/ArticleContent';
import RecommendedArticles from '@/components/RecommendedArticles';
import BottomCta from '@/components/BottomCta';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import { SITE_METADATA } from '@/data/site';

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  alternates: {
    canonical: SITE_METADATA.canonical,
  },
  openGraph: {
    locale: 'en_US',
    type: 'article',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.canonical,
    siteName: 'Looka',
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1024,
        height: 595,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lookadesign',
    site: '@lookadesign',
  },
};

export default function DisneyLogoPage() {
  return (
    <>
      <BodyClass className="post-template-default single single-post postid-33416 single-format-standard post-disney-logo" />
      <Navbar activeSection="logo-design" />
      <Modals showExitNewsletter={true} />
      <ReadingProgress />
      <article className="blog-single">
        <ArticleHeader />
        <ArticleContent />
      </article>
      <RecommendedArticles />
      <BottomCta />
      <ScrollToTop />
      <Footer activePage="article" />
    </>
  );
}
