import { Fragment } from 'react';
import {
  ARTICLE_BLOCKS,
  ARTICLE_META,
  InlinePart,
} from '@/data/disneyArticle';
import SocialShare from './SocialShare';

function renderInlineParts(parts: InlinePart[]) {
  return parts.map((part, idx) => {
    switch (part.type) {
      case 'text':
        return part.weight === 400 ? (
          <span key={idx} style={{ fontWeight: 400 }}>
            {part.text}
          </span>
        ) : (
          <Fragment key={idx}>{part.text}</Fragment>
        );
      case 'strong':
        return <strong key={idx}>{part.text}</strong>;
      case 'italic':
        return (
          <i key={idx}>
            <span style={{ fontWeight: 400 }}>{part.text}</span>
          </i>
        );
      case 'link':
        return (
          <a key={idx} href={part.href}>
            {part.text}
          </a>
        );
    }
  });
}

export default function ArticleContent() {
  const { featuredImage, author } = ARTICLE_META;

  return (
    <main className="blog-single__main">
      <figure className="blog-single__featured_image">
        <img
          width={featuredImage.width}
          height={featuredImage.height}
          src={featuredImage.src}
          className={featuredImage.className}
          alt={featuredImage.alt}
          decoding="async"
          fetchPriority="high"
          srcSet={featuredImage.srcSet}
          sizes={featuredImage.sizes}
        />
      </figure>

      <div className="blog-single__inner">
        {ARTICLE_BLOCKS.map((block, index) => {
          switch (block.type) {
            case 'paragraph':
              return <p key={index}>{renderInlineParts(block.parts)}</p>;

            case 'heading':
              return block.level === 2 ? (
                <h2 key={index}>{block.text}</h2>
              ) : (
                <h3 key={index}>{block.text}</h3>
              );

            case 'image-paragraph':
              return (
                <p key={index}>
                  <img
                    loading={block.image.loading}
                    decoding="async"
                    className={block.image.className}
                    src={block.image.src}
                    alt={block.image.alt}
                    width={block.image.width}
                    height={block.image.height}
                    srcSet={block.image.srcSet}
                    sizes={block.image.sizes}
                  />
                </p>
              );

            case 'list':
              return (
                <ul key={index}>
                  {block.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      style={
                        item.fontWeight400 ? { fontWeight: 400 } : undefined
                      }
                      aria-level={item.ariaLevel}
                    >
                      {item.leadBold && <strong>{item.leadBold}</strong>}
                      {renderInlineParts(item.parts)}
                      {item.subItems && (
                        <ul>
                          {item.subItems.map((subParts, subIdx) => (
                            <li
                              key={subIdx}
                              style={{ fontWeight: 400 }}
                              aria-level={2}
                            >
                              {renderInlineParts(subParts)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              );

            case 'pullquote':
              return (
                <div key={index} className="altpull">
                  {' '}
                  <a href={block.linkHref}>{block.linkText}</a>
                  {block.afterText}
                </div>
              );

            case 'gallery':
              return (
                <div key={index} id={block.id} className={block.className}>
                  {block.items.map((item, itemIdx) => (
                    <dl key={itemIdx} className="gallery-item">
                      <dt className="gallery-icon landscape">
                        <a href={item.href}>
                          <img
                            loading={item.image.loading}
                            decoding="async"
                            width={item.image.width}
                            height={item.image.height}
                            src={item.image.src}
                            className={item.image.className}
                            alt={item.image.alt}
                            srcSet={item.image.srcSet}
                            sizes={item.image.sizes}
                          />
                        </a>
                      </dt>
                    </dl>
                  ))}
                  <br style={{ clear: 'both' }} />
                </div>
              );

            case 'hr':
              return <hr key={index} />;

            case 'faq':
              return (
                <Fragment key={index}>
                  <h2>{block.heading}</h2>
                  {block.items.map((faq, faqIdx) => (
                    <Fragment key={faqIdx}>
                      <p>
                        <strong>{faq.question}</strong>
                      </p>
                      <p>{renderInlineParts(faq.parts)}</p>
                    </Fragment>
                  ))}
                </Fragment>
              );
          }
        })}
      </div>

      <SocialShare />

      <aside className="blog-single__author">
        <div className="blog-single__author-container">
          <div className="blog-single__author-byline">
            <img
              alt=""
              src={author.avatarSrc}
              srcSet={`${author.avatarSrc} 2x`}
              className="avatar avatar-40 photo"
              height={40}
              width={40}
              loading="lazy"
              decoding="async"
            />
            <p>
              By{' '}
              <a href={author.href} title={author.titleAttr} rel="author">
                {author.name}
              </a>
            </p>
          </div>
          <p className="blog-single__author-bio">{author.bio}</p>
        </div>
      </aside>
    </main>
  );
}
