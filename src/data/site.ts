export interface NavItem {
  id: string;
  label: string;
  href: string;
  className: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
  className: string;
  target?: string;
  rel?: string;
}

export interface FooterColumn {
  title: string;
  containerClass: string;
  menuId: string;
  links: FooterLink[];
}

export interface SocialLinkItem {
  name: string;
  href: string;
  className: string;
  fill: string;
  titleId: string;
  titleText: string;
  viewBox: string;
  path: string;
}

export const SITE_METADATA = {
  title: 'Disney Logo Evolution: From 1923 to Today’s Iconic Castle | Looka',
  description:
    "The Disney logo represents a legacy of storytelling. See the evolution of the Disney logo and how it's changed over time.",
  canonical: 'https://looka.com/blog/disney-logo/',
  ogImage: '/images/07-28-25_Disney-Logo-Evolution_CULTURAL-1-1024x595.jpg',
  themeColor: '#5340ff',
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'menu-item-1968',
    label: 'All',
    href: 'https://looka.com/blog/',
    className:
      'menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-1968',
  },
  {
    id: 'menu-item-1682',
    label: 'Logo Design',
    href: 'https://looka.com/blog/category/logo-design/',
    className:
      'menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor current-menu-parent current-post-parent menu-item-1682',
  },
  {
    id: 'menu-item-2296',
    label: 'Starting a Business',
    href: 'https://looka.com/blog/category/starting-a-business/',
    className:
      'menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2296',
  },
  {
    id: 'menu-item-23353',
    label: 'Marketing',
    href: 'https://looka.com/blog/category/marketing/',
    className:
      'menu-item menu-item-type-taxonomy menu-item-object-category menu-item-23353',
  },
  {
    id: 'menu-item-11140',
    label: 'Branding',
    href: 'https://looka.com/blog/category/branding/',
    className:
      'menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11140',
  },
  {
    id: 'menu-item-27477',
    label: 'Graphic Design',
    href: 'https://looka.com/blog/category/graphic-design/',
    className:
      'menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27477',
  },
];

export const NAV_CTA = {
  label: 'Make a logo',
  href: '/logo-maker/',
  logoSrc: '/images/looka_logo_black.svg',
  searchIconSrc: '/images/ic_search.svg',
};

export const SEARCH_CONFIG = {
  heading: 'Search the Blog',
  action: 'https://looka.com/blog/search',
  placeholder: "Type something you're looking for",
  buttonLabel: 'Search',
};

export const SOCIAL_PROVIDERS = [
  {
    provider: 'twitter',
    className: 'modal-form__socialbutton modal-form__socialbutton--twitter',
    alt: 'Login with X',
    src: '/images/x-white.png',
  },
  {
    provider: 'facebook',
    className: 'modal-form__socialbutton modal-form__socialbutton--facebook',
    alt: 'Login with Facebook',
    src: '/images/facebook@2x.png',
  },
  {
    provider: 'google',
    className: 'modal-form__socialbutton modal-form__socialbutton--google',
    alt: 'Login with Google',
    src: '/images/google.png',
  },
];

export const EXIT_NEWSLETTER_CTA = {
  headline: 'Tips, tricks & latest design trends',
  copy: 'Make your business stand out with the latest tips, tricks, and design trends sent straight to your inbox.',
  placeholder: 'Enter your email',
  buttonLabel: 'Subscribe',
  imageSrc: '/images/cta-newsletter.jpg',
  imageAlt: 'Tips, tricks, and latest design trends',
};

export const BOTTOM_CTA = {
  headline: 'Get started today!',
  copy: "Use Looka's AI-powered platform to create a logo, design a website, and build a brand you love.",
  action: '/logo-maker/app',
  placeholder: 'Enter your company name',
  buttonLabel: 'Get started',
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Products',
    containerClass: 'menu-footer-products-container',
    menuId: 'menu-footer-products',
    links: [
      {
        id: 'menu-item-14762',
        label: 'Logo Maker',
        href: 'https://looka.com/logo-maker/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-14762',
      },
      {
        id: 'menu-item-30522',
        label: 'AI Logo Generator',
        href: 'https://looka.com/ai-logo-generator/',
        className: 'menu-item menu-item-type-custom menu-item-object-custom menu-item-30522',
      },
      {
        id: 'menu-item-19260',
        label: 'Brand Kit',
        href: 'https://looka.com/brand-kit/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-19260',
      },
      {
        id: 'menu-item-10574',
        label: 'Social Media Kit',
        href: 'https://looka.com/logo-maker/social-media-kit/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-10574',
      },
      {
        id: 'menu-item-10577',
        label: 'Business Cards',
        href: 'https://looka.com/logo-maker/business-card-designs/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-10577',
      },
      {
        id: 'menu-item-19709',
        label: 'How it works',
        href: 'https://looka.com/logo-maker/how-it-works/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-19709',
      },
      {
        id: 'menu-item-19710',
        label: 'Reviews',
        href: 'https://looka.com/logo-maker/reviews/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-19710',
      },
      {
        id: 'menu-item-21059',
        label: 'Business Name Generator',
        href: 'https://looka.com/business-name-generator/',
        className: 'menu-item menu-item-type-custom menu-item-object-custom menu-item-21059',
        target: '_blank',
        rel: 'noopener',
      },
    ],
  },
  {
    title: 'Inspiration',
    containerClass: 'menu-footer-inspiration-container',
    menuId: 'menu-footer-inspiration',
    links: [
      {
        id: 'menu-item-2080',
        label: 'Blog',
        href: 'https://looka.com/blog/',
        className:
          'menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-2080',
      },
      {
        id: 'menu-item-8207',
        label: 'Logo Ideas',
        href: 'https://looka.com/logo-ideas/',
        className: 'menu-item menu-item-type-custom menu-item-object-custom menu-item-8207',
      },
      {
        id: 'menu-item-9592',
        label: 'Logo Colors',
        href: 'https://looka.com/logo-colors/',
        className: 'menu-item menu-item-type-custom menu-item-object-custom menu-item-9592',
      },
      {
        id: 'menu-item-10589',
        label: 'Logo Styles',
        href: 'https://looka.com/logo-styles/',
        className: 'menu-item menu-item-type-custom menu-item-object-custom menu-item-10589',
      },
      {
        id: 'menu-item-23098',
        label: 'Logo Wiki',
        href: 'https://looka.com/logo-wiki/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-23098',
      },
      {
        id: 'menu-item-30465',
        label: 'Business Name Ideas',
        href: 'https://looka.com/business-name-ideas/',
        className: 'menu-item menu-item-type-custom menu-item-object-custom menu-item-30465',
      },
    ],
  },
  {
    title: 'Company',
    containerClass: 'menu-footer-company-container',
    menuId: 'menu-footer-company',
    links: [
      {
        id: 'menu-item-2085',
        label: 'About',
        href: 'https://looka.com/about/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-2085',
      },
      {
        id: 'menu-item-10587',
        label: 'Press',
        href: 'https://looka.com/press/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-10587',
      },
      {
        id: 'menu-item-2503',
        label: 'Careers',
        href: 'https://looka.com/careers/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-2503',
      },
      {
        id: 'menu-item-13172',
        label: 'Affiliates',
        href: 'https://looka.com/affiliate-program/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-13172',
      },
      {
        id: 'menu-item-25760',
        label: 'Vulnerability Disclosure Program',
        href: 'https://looka.com/vulnerability-disclosure-program/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-25760',
      },
    ],
  },
  {
    title: 'Support',
    containerClass: 'menu-footer-support-container',
    menuId: 'menu-footer-support',
    links: [
      {
        id: 'menu-item-2087',
        label: 'Help Center',
        href: 'https://help.looka.com/en/',
        className: 'menu-item menu-item-type-custom menu-item-object-custom menu-item-2087',
      },
      {
        id: 'menu-item-10590',
        label: 'Contact',
        href: 'https://looka.com/contact/',
        className: 'menu-item menu-item-type-post_type menu-item-object-page menu-item-10590',
      },
      {
        id: 'menu-item-2088',
        label: 'support@looka.com',
        href: 'mailto:support@looka.com',
        className: 'menu-item menu-item-type-custom menu-item-object-custom menu-item-2088',
      },
    ],
  },
];

export const FOOTER_SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: 'facebook',
    href: 'https://www.facebook.com/lookadesign/',
    className: ' footer__social-list-item facebook',
    fill: '#3C5A99',
    titleId: 'simpleicons-facebook-icon',
    titleText: 'Facebook icon',
    viewBox: '0 0 24 24',
    path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/lookadesign/',
    className: 'footer__social-list-item instagram',
    fill: '#676e8b',
    titleId: 'simpleicons-instagram-icon',
    titleText: 'Instagram icon',
    viewBox: '0 0 24 24',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'linkedin',
    href: 'https://ca.linkedin.com/company/looka/',
    className: 'footer__social-list-item linkedin',
    fill: '#0274B3',
    titleId: 'simpleicons-linkedin-icon',
    titleText: 'Linkedin icon',
    viewBox: '0 0 24 24',
    path: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
  },
  {
    name: 'twitter',
    href: 'https://x.com/lookadesign/',
    className: 'footer__social-list-item twitter',
    fill: 'none',
    titleId: 'simpleicons-x-icon',
    titleText: 'X icon',
    viewBox: '0 0 1200 1227',
    path: 'M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z',
  },
  {
    name: 'dribbble',
    href: 'https://dribbble.com/looka-design/',
    className: 'footer__social-list-item dribbble',
    fill: '#EA4C89',
    titleId: 'simpleicons-dribbble-icon',
    titleText: 'Dribbble icon',
    viewBox: '0 0 24 24',
    path: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z',
  },
  {
    name: 'pinterest',
    href: 'https://www.pinterest.ca/lookadesign/',
    className: 'footer__social-list-item pinterest',
    fill: '#d7143a',
    titleId: 'simpleicons-pinterest-icon',
    titleText: 'Pinterest icon',
    viewBox: '0 0 511.998 511.998',
    path: 'M405.017 52.467C369.774 18.634 321.001 0 267.684 0 186.24 0 136.148 33.385 108.468 61.39c-34.114 34.513-53.675 80.34-53.675 125.732 0 56.993 23.839 100.737 63.76 117.011 2.68 1.098 5.377 1.651 8.021 1.651 8.422 0 15.095-5.511 17.407-14.35 1.348-5.071 4.47-17.582 5.828-23.013 2.906-10.725.558-15.884-5.78-23.353-11.546-13.662-16.923-29.817-16.923-50.842 0-62.451 46.502-128.823 132.689-128.823 68.386 0 110.866 38.868 110.866 101.434 0 39.482-8.504 76.046-23.951 102.961-10.734 18.702-29.609 40.995-58.585 40.995-12.53 0-23.786-5.147-30.888-14.121-6.709-8.483-8.921-19.441-6.222-30.862 3.048-12.904 7.205-26.364 11.228-39.376 7.337-23.766 14.273-46.213 14.273-64.122 0-30.632-18.832-51.215-46.857-51.215-35.616 0-63.519 36.174-63.519 82.354 0 22.648 6.019 39.588 8.744 46.092-4.487 19.01-31.153 132.03-36.211 153.342-2.925 12.441-20.543 110.705 8.618 118.54 32.764 8.803 62.051-86.899 65.032-97.713 2.416-8.795 10.869-42.052 16.049-62.495 15.817 15.235 41.284 25.535 66.064 25.535 46.715 0 88.727-21.022 118.298-59.189 28.679-37.02 44.474-88.618 44.474-145.282-.002-44.298-19.026-87.97-52.191-119.814z',
  },
];

export const FOOTER_LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Cookie Policy', href: '/cookie-policy/' },
  { label: 'Site Map', href: '/sitemap/' },
];
