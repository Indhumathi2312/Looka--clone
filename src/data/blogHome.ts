export interface BlogPostCard {
  title: string;
  href: string;
  category: string;
  categoryHref: string;
  backgroundImage: string;
}

export interface FeaturedBlogPost extends BlogPostCard {
  caption: string;
  ctaLabel: string;
}

export interface CategorySection {
  title: string;
  viewAllHref: string;
  posts: BlogPostCard[];
}

export const BLOG_HOME_METADATA = {
  title: 'Looka Blog: Learn About Design, Branding & Entrepreneurship',
  description:
    'Whether you have a new business idea or need design tips, the Looka blog is filled with helpful articles and stories to help you build a business you love.',
  canonical: 'https://looka.com/blog/',
  nextUrl: 'https://looka.com/blog/page/2/',
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
  title: 'How Much Does Logo Design Cost in 2025?',
  caption:
    "If you're thinking about taking your side hustle to the next level this year, getting... ",
  ctaLabel: 'Read More',
  href: 'https://looka.com/blog/how-much-does-a-logo-cost/',
  category: 'Logo Design',
  categoryHref: 'https://looka.com/blog/category/logo-design/',
  backgroundImage:
    'https://cdn.logojoy.com/wp-content/uploads/20250610141748/06-09-25_How-Much-Does-A-Logo-Cost_Header_HEADER.jpg',
};

export const CATEGORY_SECTIONS: CategorySection[] = [
  {
    title: 'Logo Design',
    viewAllHref: 'https://looka.com/blog/category/logo-design/',
    posts: [
      {
        title: 'Logo Shapes: What They Mean and Why They’re Important',
        href: 'https://looka.com/blog/logo-shapes-meanings/',
        category: 'Logo Design',
        categoryHref: 'https://looka.com/blog/category/logo-design/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250826155139/Logo-shapes-and-their-meaning-768x446.jpg',
      },
      {
        title: 'Disney Logo Evolution: From 1923 to Today’s Iconic Castle',
        href: '/blog/disney-logo/',
        category: 'Logo Design',
        categoryHref: 'https://looka.com/blog/category/logo-design/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250828152339/07-28-25_Disney-Logo-Evolution_CULTURAL-1-768x446.jpg',
      },
      {
        title:
          'The Worst Logos Ever Made: 25 Examples of Seriously Bad Logo Designs',
        href: 'https://looka.com/blog/bad-logos/',
        category: 'Logo Design',
        categoryHref: 'https://looka.com/blog/category/logo-design/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250801135111/07-30-25_Bad-Logos-Header-Image_HEADER-1-768x446.jpg',
      },
    ],
  },
  {
    title: 'Starting a Business',
    viewAllHref: 'https://looka.com/blog/category/starting-a-business/',
    posts: [
      {
        title: 'How much does a website cost in 2025?',
        href: 'https://looka.com/blog/how-much-does-a-website-cost/',
        category: 'Starting a Business',
        categoryHref: 'https://looka.com/blog/category/starting-a-business/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250715174331/how-much-does-a-website-cost-header-768x446.jpg',
      },
      {
        title: 'The Best AI Website Builders of 2025 (Our Honest Take…)',
        href: 'https://looka.com/blog/best-ai-website-builder/',
        category: 'Starting a Business',
        categoryHref: 'https://looka.com/blog/category/starting-a-business/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250619124545/AI-website-builder-768x446.jpg',
      },
      {
        title: 'Guide to Business Card Paper: Weights, Finishes, & More',
        href: 'https://looka.com/blog/business-card-paper/',
        category: 'Starting a Business',
        categoryHref: 'https://looka.com/blog/category/starting-a-business/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250528153900/05-19-25_Business-Card-Paper-Guide_HEADER-768x446.jpg',
      },
    ],
  },
  {
    title: 'Branding',
    viewAllHref: 'https://looka.com/blog/category/branding/',
    posts: [
      {
        title:
          'How to Design Your Etsy Cover Photo and Launch Your Online Shop',
        href: 'https://looka.com/blog/etsy-cover-photo/',
        category: 'Branding',
        categoryHref: 'https://looka.com/blog/category/branding/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250814111649/Etsy-cover-photo-and-etsy-banner-ideas-768x446.jpg',
      },
      {
        title:
          'Personal Branding 101: How to Craft a Personal Brand (+ Branding Examples!)',
        href: 'https://looka.com/blog/personal-branding/',
        category: 'Branding',
        categoryHref: 'https://looka.com/blog/category/branding/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250709110404/personal-branding-101-for-entrepreneurs-768x446.jpg',
      },
      {
        title: '10 Major Branding Mistakes (and How to Fix Them)',
        href: 'https://looka.com/blog/branding-mistakes/',
        category: 'Branding',
        categoryHref: 'https://looka.com/blog/category/branding/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250619175410/06-10-25_Branding-Mistakes_HEADER-768x446.jpg',
      },
    ],
  },
  {
    title: 'Graphic Design',
    viewAllHref: 'https://looka.com/blog/category/graphic-design/',
    posts: [
      {
        title: 'How to Hire a Graphic Designer in 2025',
        href: 'https://looka.com/blog/hire-a-graphic-designer/',
        category: 'Graphic Design',
        categoryHref: 'https://looka.com/blog/category/graphic-design/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250718141418/07-16-25_How-to-Hire-A-Graphic-Designer_HEADER-768x446.jpg',
      },
      {
        title: 'Graphic Design Terms Made Simple for Non Designers',
        href: 'https://looka.com/blog/graphic-design-terms/',
        category: 'Graphic Design',
        categoryHref: 'https://looka.com/blog/category/graphic-design/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250422101903/04-01-25_Graphic-Design-Terms_HEADER-768x446.jpg',
      },
      {
        title: 'What is Visual Hierarchy — and Why is it Important?\u00a0',
        href: 'https://looka.com/blog/what-is-visual-hierarchy/',
        category: 'Graphic Design',
        categoryHref: 'https://looka.com/blog/category/graphic-design/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250328164438/03-19-25_Blog-Infographics-Visual-Hierarchy_HEADER-768x446.jpg',
      },
    ],
  },
  {
    title: 'Using Looka',
    viewAllHref: 'https://looka.com/blog/category/using-looka/',
    posts: [
      {
        title:
          'Thinking About Looka Alternatives? Here’s the Honest Breakdown',
        href: 'https://looka.com/blog/looka-alternatives/',
        category: 'Using Looka',
        categoryHref: 'https://looka.com/blog/category/using-looka/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250805155642/Looka-alternatives-header-image-768x446.jpg',
      },
      {
        title: 'What is Looka and How Does it Work?',
        href: 'https://looka.com/blog/what-is-looka-and-how-does-it-work/',
        category: 'Using Looka',
        categoryHref: 'https://looka.com/blog/category/using-looka/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/2019/01/27170559/what-is-looka-featured-image-768x398.png',
      },
      {
        title: 'Unique Ways to Use Looka’s Logo Maker',
        href: 'https://looka.com/blog/10-unique-ways-to-use-looka-logo-maker/',
        category: 'Using Looka',
        categoryHref: 'https://looka.com/blog/category/using-looka/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20200228154908/Screen-Shot-2020-02-28-at-3.48.03-PM-768x364.png',
      },
    ],
  },
  {
    title: 'Marketing',
    viewAllHref: 'https://looka.com/blog/category/marketing/',
    posts: [
      {
        title: 'How To Use Your Logo on Social Media: A Step-by-Step Guide',
        href: 'https://looka.com/blog/a-step-by-step-guide-to-using-your-logo-on-social-media/',
        category: 'Marketing',
        categoryHref: 'https://looka.com/blog/category/marketing/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250819101208/how-to-use-your-logo-on-social-media-banner-768x446.jpg',
      },
      {
        title: 'The Easy Guide to Social Media Branding Like a Pro',
        href: 'https://looka.com/blog/social-media-branding-tips/',
        category: 'Marketing',
        categoryHref: 'https://looka.com/blog/category/marketing/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250717140349/social-media-branding-header-image-768x446.jpg',
      },
      {
        title: 'The Ultimate Guide to Using Social Media for Business',
        href: 'https://looka.com/blog/social-media-for-business/',
        category: 'Marketing',
        categoryHref: 'https://looka.com/blog/category/marketing/',
        backgroundImage:
          'https://cdn.logojoy.com/wp-content/uploads/20250611170014/Social-media-for-small-business-768x446.jpg',
      },
    ],
  },
];

export const BLOG_SUBSCRIBE_CTA = {
  headline: 'Subscribe to the blog',
  copy: 'Make your business stand out with the latest tips, tricks, and design trends sent straight to your inbox.',
  placeholder: 'Enter your email',
  buttonLabel: 'Subscribe',
};
