import Navbar from '@/components/Navbar';
import Modals from '@/components/Modals';
import ReadingProgress from '@/components/ReadingProgress';
import ArticleHeader from '@/components/ArticleHeader';
import ArticleContent from '@/components/ArticleContent';
import RecommendedArticles from '@/components/RecommendedArticles';
import BottomCta from '@/components/BottomCta';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Modals />
      <ReadingProgress />
      <article className="blog-single">
        <ArticleHeader />
        <ArticleContent />
      </article>
      <RecommendedArticles />
      <BottomCta />
      <ScrollToTop />
      <Footer />
    </>
  );
}
