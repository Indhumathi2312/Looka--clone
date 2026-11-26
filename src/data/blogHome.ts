export interface BlogPostCard {
  slug: string;
  title: string;
  href: string;
  category: string;
  categorySlug: string;
  categoryHref: string;
  backgroundImage: string;
  caption?: string;
}

export interface FeaturedBlogPost extends BlogPostCard {
  caption: string;
  ctaLabel: string;
}

export interface CategorySection {
  slug: string;
  title: string;
  viewAllHref: string;
  posts: BlogPostCard[];
}

export const BLOG_HOME_METADATA = {
  title: 'Looka Blog: Learn About Design, Branding & Entrepreneurship',
  description:
    'Whether you have a new business idea or need design tips, the Looka blog is filled with helpful articles and stories to help you build a business you love.',
  canonical: '/',
  ogDescription:
    'Updated twice a week with topics that include building a startup, branding, design, and the popular Expert Round-Up.',
  ogImage:
    'https://cdn.logojoy.com/wp-content/uploads/20190402110136/looka_blue.png',
};

export const BLOG_HERO = {
  title: 'Looka Blog',
  subtitle:
    'Whether you have a new business idea or need design tips, the Looka blog is filled with helpful articles and stories to help you build a business you love.',
};

export const FEATURED_POST: FeaturedBlogPost = {
  slug: 'how-much-does-a-logo-cost',
  title: 'How Much Does Logo Design Cost in 2025?',
  caption:
    "If you're thinking about taking your side hustle to the next level this year, getting... ",
  ctaLabel: 'Read More',
  href: '/blog/article/?slug=how-much-does-a-logo-cost',
  category: 'Logo Design',
  categorySlug: 'logo-design',
  categoryHref: '/?category=logo-design',
  backgroundImage:
    'https://cdn.logojoy.com/wp-content/uploads/20250610141748/06-09-25_How-Much-Does-A-Logo-Cost_Header_HEADER.jpg',
};

export const CATEGORY_SECTIONS: CategorySection[] = [
  {
    slug: 'logo-design',
    title: 'Logo Design',
    viewAllHref: '/?category=logo-design',
    posts: [
      {
        slug: 'logo-shapes-meanings',
        title: 'Logo Shapes: What They Mean and Why They’re Important',
        href: '/blog/article/?slug=logo-shapes-meanings',
        category: 'Logo Design',
        categorySlug: 'logo-design',
        categoryHref: '/?category=logo-design',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250826155139/Logo-shapes-and-their-meaning-768x446.jpg',
      },
      {
        slug: 'disney-logo',
        title: 'Disney Logo Evolution: From 1923 to Today’s Iconic Castle',
        href: '/blog/disney-logo/',
        category: 'Logo Design',
        categorySlug: 'logo-design',
        categoryHref: '/?category=logo-design',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250828152339/07-28-25_Disney-Logo-Evolution_CULTURAL-1-768x446.jpg',
      },
      {
        slug: 'bad-logos',
        title:
          'The Worst Logos Ever Made: 25 Examples of Seriously Bad Logo Designs',
        href: '/blog/article/?slug=bad-logos',
        category: 'Logo Design',
        categorySlug: 'logo-design',
        categoryHref: '/?category=logo-design',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250801135111/07-30-25_Bad-Logos-Header-Image_HEADER-1-768x446.jpg',
      },
    ],
  },
  {
    slug: 'starting-a-business',
    title: 'Starting a Business',
    viewAllHref: '/?category=starting-a-business',
    posts: [
      {
        slug: 'how-much-does-a-website-cost',
        title: 'How much does a website cost in 2025?',
        href: '/blog/article/?slug=how-much-does-a-website-cost',
        category: 'Starting a Business',
        categorySlug: 'starting-a-business',
        categoryHref: '/?category=starting-a-business',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250715174331/how-much-does-a-website-cost-header-768x446.jpg',
      },
      {
        slug: 'best-ai-website-builder',
        title: 'The Best AI Website Builders of 2025 (Our Honest Take…)',
        href: '/blog/article/?slug=best-ai-website-builder',
        category: 'Starting a Business',
        categorySlug: 'starting-a-business',
        categoryHref: '/?category=starting-a-business',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250619124545/AI-website-builder-768x446.jpg',
      },
      {
        slug: 'business-card-paper',
        title: 'Guide to Business Card Paper: Weights, Finishes, & More',
        href: '/blog/article/?slug=business-card-paper',
        category: 'Starting a Business',
        categorySlug: 'starting-a-business',
        categoryHref: '/?category=starting-a-business',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250528153900/05-19-25_Business-Card-Paper-Guide_HEADER-768x446.jpg',
      },
    ],
  },
  {
    slug: 'branding',
    title: 'Branding',
    viewAllHref: '/?category=branding',
    posts: [
      {
        slug: 'etsy-cover-photo',
        title:
          'How to Design Your Etsy Cover Photo and Launch Your Online Shop',
        href: '/blog/article/?slug=etsy-cover-photo',
        category: 'Branding',
        categorySlug: 'branding',
        categoryHref: '/?category=branding',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250814111649/Etsy-cover-photo-and-etsy-banner-ideas-768x446.jpg',
      },
      {
        slug: 'personal-branding',
        title:
          'Personal Branding 101: How to Craft a Personal Brand (+ Branding Examples!)',
        href: '/blog/article/?slug=personal-branding',
        category: 'Branding',
        categorySlug: 'branding',
        categoryHref: '/?category=branding',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250709110404/personal-branding-101-for-entrepreneurs-768x446.jpg',
      },
      {
        slug: 'branding-mistakes',
        title: '10 Major Branding Mistakes (and How to Fix Them)',
        href: '/blog/article/?slug=branding-mistakes',
        category: 'Branding',
        categorySlug: 'branding',
        categoryHref: '/?category=branding',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250619175410/06-10-25_Branding-Mistakes_HEADER-768x446.jpg',
      },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    viewAllHref: '/?category=graphic-design',
    posts: [
      {
        slug: 'hire-a-graphic-designer',
        title: 'How to Hire a Graphic Designer in 2025',
        href: '/blog/article/?slug=hire-a-graphic-designer',
        category: 'Graphic Design',
        categorySlug: 'graphic-design',
        categoryHref: '/?category=graphic-design',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250718141418/07-16-25_How-to-Hire-A-Graphic-Designer_HEADER-768x446.jpg',
      },
      {
        slug: 'graphic-design-terms',
        title: 'Graphic Design Terms Made Simple for Non Designers',
        href: '/blog/article/?slug=graphic-design-terms',
        category: 'Graphic Design',
        categorySlug: 'graphic-design',
        categoryHref: '/?category=graphic-design',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250422101903/04-01-25_Graphic-Design-Terms_HEADER-768x446.jpg',
      },
      {
        slug: 'what-is-visual-hierarchy',
        title: 'What is Visual Hierarchy — and Why is it Important?\u00a0',
        href: '/blog/article/?slug=what-is-visual-hierarchy',
        category: 'Graphic Design',
        categorySlug: 'graphic-design',
        categoryHref: '/?category=graphic-design',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250328164438/03-19-25_Blog-Infographics-Visual-Hierarchy_HEADER-768x446.jpg',
      },
    ],
  },
  {
    slug: 'using-looka',
    title: 'Using Looka',
    viewAllHref: '/?category=using-looka',
    posts: [
      {
        slug: 'looka-alternatives',
        title:
          'Thinking About Looka Alternatives? Here’s the Honest Breakdown',
        href: '/blog/article/?slug=looka-alternatives',
        category: 'Using Looka',
        categorySlug: 'using-looka',
        categoryHref: '/?category=using-looka',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250805155642/Looka-alternatives-header-image-768x446.jpg',
      },
      {
        slug: 'what-is-looka-and-how-does-it-work',
        title: 'What is Looka and How Does it Work?',
        href: '/blog/article/?slug=what-is-looka-and-how-does-it-work',
        category: 'Using Looka',
        categorySlug: 'using-looka',
        categoryHref: '/?category=using-looka',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/2019/01/27170559/what-is-looka-featured-image-768x398.png',
      },
      {
        slug: '10-unique-ways-to-use-looka-logo-maker',
        title: 'Unique Ways to Use Looka’s Logo Maker',
        href: '/blog/article/?slug=10-unique-ways-to-use-looka-logo-maker',
        category: 'Using Looka',
        categorySlug: 'using-looka',
        categoryHref: '/?category=using-looka',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20200228154908/Screen-Shot-2020-02-28-at-3.48.03-PM-768x364.png',
      },
    ],
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    viewAllHref: '/?category=marketing',
    posts: [
      {
        slug: 'a-step-by-step-guide-to-using-your-logo-on-social-media',
        title: 'How To Use Your Logo on Social Media: A Step-by-Step Guide',
        href: '/blog/article/?slug=a-step-by-step-guide-to-using-your-logo-on-social-media',
        category: 'Marketing',
        categorySlug: 'marketing',
        categoryHref: '/?category=marketing',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250819101208/how-to-use-your-logo-on-social-media-banner-768x446.jpg',
      },
      {
        slug: 'social-media-branding-tips',
        title: 'The Easy Guide to Social Media Branding Like a Pro',
        href: '/blog/article/?slug=social-media-branding-tips',
        category: 'Marketing',
        categorySlug: 'marketing',
        categoryHref: '/?category=marketing',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250717140349/social-media-branding-header-image-768x446.jpg',
      },
      {
        slug: 'social-media-for-business',
        title: 'The Ultimate Guide to Using Social Media for Business',
        href: '/blog/article/?slug=social-media-for-business',
        category: 'Marketing',
        categorySlug: 'marketing',
        categoryHref: '/?category=marketing',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250611170014/Social-media-for-small-business-768x446.jpg',
      },
    ],
  },
];

export const EXTRA_LOCAL_POSTS: BlogPostCard[] = [
  {
    slug: 'wordmark-logo-design',
    title: 'Wordmark Logo Design: A Beginner’s Guide',
    href: '/blog/article/?slug=wordmark-logo-design',
    category: 'Logo Design',
    categorySlug: 'logo-design',
    categoryHref: '/?category=logo-design',
    backgroundImage:
      'https://cdn.logojoy.com/wp-content/uploads/20220721143132/wordmark-logo-blog-header-768x432.jpg',
  },
  {
    slug: 'how-to-design-a-logo',
    title: 'How to Design a Logo: A Step-by-Step Guide',
    href: '/blog/article/?slug=how-to-design-a-logo',
    category: 'Logo Design',
    categorySlug: 'logo-design',
    categoryHref: '/?category=logo-design',
    backgroundImage:
      'https://cdn.logojoy.com/wp-content/uploads/20240819130730/08-13-24_How-to-Design-a-Logo_HEADER-768x446.jpg',
  },
  {
    slug: 'aesthetic-logo',
    title: '46 Stunning Aesthetic Logos and How to Design Your Own',
    href: '/blog/article/?slug=aesthetic-logo',
    category: 'Logo Design',
    categorySlug: 'logo-design',
    categoryHref: '/?category=logo-design',
    backgroundImage:
      'https://cdn.logojoy.com/wp-content/uploads/20230427153745/aesthetic-logos-header-image-768x576.png',
  },
];

export const ALL_LOCAL_POSTS: BlogPostCard[] = [
  FEATURED_POST,
  ...CATEGORY_SECTIONS.flatMap((section) => section.posts),
  ...EXTRA_LOCAL_POSTS,
];

export function findLocalPostBySlug(slug: string | null): BlogPostCard {
  if (slug) {
    const match = ALL_LOCAL_POSTS.find((post) => post.slug === slug);
    if (match) return match;
  }
  return FEATURED_POST;
}

export const BLOG_SUBSCRIBE_CTA = {
  headline: 'Subscribe to the blog',
  copy: 'Make your business stand out with the latest tips, tricks, and design trends sent straight to your inbox.',
  placeholder: 'Enter your email',
  buttonLabel: 'Subscribe',
};
