import { RECOMMENDED_ARTICLES } from '@/data/disneyArticle';

export default function RecommendedArticles() {
  return (
    <aside className="blog-related">
      <h2 className="blog-related__subtitle">Recommended Articles</h2>
      <div className="blog-related__posts">
        {RECOMMENDED_ARTICLES.map((post) => (
          <article key={post.href} className="tile ">
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
            <div className="tile__content">
              <a className="meta meta--category" href={post.categoryHref}>
                {post.category}
              </a>
              <a href={post.href}>
                <h3 className="tile__title">{post.title}</h3>
              </a>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
