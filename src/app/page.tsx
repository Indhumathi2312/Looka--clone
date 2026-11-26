import type { Metadata } from 'next';
import { Suspense } from 'react';
import BodyClass from '@/components/BodyClass';
import BlogHomeClient from '@/components/BlogHomeClient';
import { BLOG_HOME_METADATA } from '@/data/blogHome';

export const metadata: Metadata = {
  title: BLOG_HOME_METADATA.title,
  description: BLOG_HOME_METADATA.description,
  alternates: {
    canonical: BLOG_HOME_METADATA.canonical,
  },
  openGraph: {
    locale: 'en_US',
    type: 'article',
    title: BLOG_HOME_METADATA.title,
    description: BLOG_HOME_METADATA.ogDescription,
    url: BLOG_HOME_METADATA.canonical,
    siteName: 'Looka',
    images: [
      {
        url: BLOG_HOME_METADATA.ogImage,
        width: 3202,
        height: 3202,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    description: BLOG_HOME_METADATA.ogDescription,
    site: '@lookadesign',
  },
};

export default function BlogHomePage() {
  return (
    <>
      <BodyClass className="blog post-how-much-does-a-logo-cost" />
      <Suspense fallback={null}>
        <BlogHomeClient />
      </Suspense>
    </>
  );
}
