import Link from 'next/link';
import { CategorySection } from '@/data/blogHome';

interface CategoryPostGridProps {
  section: CategorySection;
  actionLabel?: string;
  actionHref?: string;
}

export default function CategoryPostGrid({
  section,
  actionLabel = 'View all',
  actionHref,
}: CategoryPostGridProps) {
  return (
    <aside className="category-related">
      <div className="category-related__title-container">
        <h2 className="category-related__title"> {section.title} </h2>
        <Link
          className="category-related__link"
          href={actionHref || section.viewAllHref}
        >
          {actionLabel}
        </Link>
      </div>
      <div className="category-related__posts">
        {section.posts.map((post) => (
          <article key={`${section.slug}-${post.slug}`} className="tile ">
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
            <div className="tile__content">
              <Link className="meta meta--category" href={post.categoryHref}>
                {post.category}
              </Link>
              <Link href={post.href}>
                <h3 className="tile__title">{post.title}</h3>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
