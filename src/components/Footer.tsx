import Link from 'next/link';
import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
} from '@/data/site';

interface FooterProps {
  activePage?: 'home' | 'article';
}

export default function Footer({ activePage = 'home' }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__container">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="footer__column">
            <p className="footer__title">{col.title}</p>
            <div className={col.containerClass}>
              <ul id={col.menuId} className="menu">
                {col.links.map((link) => {
                  const isBlogLink = link.id === 'menu-item-2080';
                  const className =
                    isBlogLink && activePage === 'home'
                      ? 'menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1564 current_page_item current_page_parent menu-item-2080'
                      : link.className;
                  return (
                    <li key={link.id} id={link.id} className={className}>
                      {link.href.startsWith('mailto:') ? (
                        <a href={link.href}>{link.label}</a>
                      ) : (
                        <Link
                          href={link.href}
                          aria-current={
                            isBlogLink && activePage === 'home'
                              ? 'page'
                              : undefined
                          }
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}

        <div className="footer__column">
          <ul
            className="footer__social-list"
            itemScope
            itemType="http://schema.org/Organization"
          >
            {FOOTER_SOCIAL_LINKS.map((item) => (
              <li key={item.name}>
                <a
                  itemProp="sameAs"
                  href={item.href}
                  className={item.className}
                  aria-label={item.titleText}
                >
                  <svg
                    aria-labelledby={item.titleId}
                    role={
                      item.name === 'twitter' ||
                      item.name === 'dribbble' ||
                      item.name === 'pinterest'
                        ? 'img'
                        : undefined
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox={item.viewBox}
                    fill={item.fill}
                  >
                    <title id={item.titleId}>{item.titleText}</title>
                    <path
                      fill={item.name === 'twitter' ? '#000' : undefined}
                      d={item.path}
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer__copyright">
        © 2026 Looka Inc.{' '}
        {FOOTER_LEGAL_LINKS.map((legal, idx) => (
          <span key={`${legal.label}-${idx}`}>
            {idx > 0 ? ' / ' : ''}
            <Link href={legal.href}>{legal.label}</Link>
          </span>
        ))}
      </p>
    </footer>
  );
}
