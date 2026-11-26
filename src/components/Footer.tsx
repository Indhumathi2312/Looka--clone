import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
} from '@/data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="footer__column">
            <p className="footer__title">{col.title}</p>
            <div className={col.containerClass}>
              <ul id={col.menuId} className="menu">
                {col.links.map((link) => (
                  <li key={link.id} id={link.id} className={link.className}>
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.rel}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
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
                  rel="noopener noreferrer"
                  target="_blank"
                  className={item.className}
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
          <span key={legal.href}>
            {idx > 0 ? ' / ' : ''}
            <a href={legal.href}>{legal.label}</a>
          </span>
        ))}
      </p>
    </footer>
  );
}
