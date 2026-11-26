import { BLOG_HERO } from '@/data/blogHome';

export default function BlogHeader() {
  return (
    <header className="header header--home">
      <div className="header__inner">
        <h1 className="header__title"> {BLOG_HERO.title} </h1>
        <p className="blog-header__subtitle"> {BLOG_HERO.subtitle} </p>
      </div>
    </header>
  );
}
