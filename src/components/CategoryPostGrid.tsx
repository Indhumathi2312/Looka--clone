import Link from 'next/link';
import { CategorySection } from '@/data/blogHome';

interface CategoryPostGridProps {
  section: CategorySection;
}

export default function CategoryPostGrid({ section }: CategoryPostGridProps) {
  return (
    <aside className="category-related">
      <div className="category-related__title-container">
        <h2 className="category-related__title"> {section.title} </h2>
        <a className="category-related__link" href={section.viewAllHref}>
          View all
        </a>
      </div>
      <div className="category-related__posts">
        {section.posts.map((post) => {
          const isInternal = post.href.startsWith('/');
          return (
            <article key={post.href} className="tile ">
              {isInternal ? (
                <Link
                  className="tile__image lozad"
                  aria-label="Read the article"
                  style={{
                    backgroundImage: `url(${post.backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                  href={post.href}
                />
              ) : (
                <a
                  className="tile__image lozad"
                  aria-label="Read the article"
                  style={{
                    backgroundImage: `url(${post.backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                  href={post.href}
                />
              )}
              <div className="tile__content">
                <a className="meta meta--category" href={post.categoryHref}>
                  {post.category}
                </a>
                {isInternal ? (
                  <Link href={post.href}>
                    <h3 className="tile__title">{post.title}</h3>
                  </Link>
                ) : (
                  <a href={post.href}>
                    <h3 className="tile__title">{post.title}</h3>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
