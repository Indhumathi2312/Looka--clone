'use client';

import { FormEvent, useState } from 'react';
import { BLOG_SUBSCRIBE_CTA } from '@/data/blogHome';

export default function SubscribeCta() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setMessage('Thank you for subscribing to our newsletter.');
    setEmail('');
  };

  return (
    <section id="subscribe-cta" className="cta cta--blue cta--two-col ">
      <div className="cta__container">
        <div>
          <h2 className="cta__headline cta__headline--reverse">
            {BLOG_SUBSCRIBE_CTA.headline}
          </h2>
          <p className="cta__copy cta__copy--reverse">
            {' '}
            {BLOG_SUBSCRIBE_CTA.copy}{' '}
          </p>
        </div>
        <form
          className="cta__form subscribe-blog-cta"
          onSubmit={handleSubmit}
        >
          <label className="screen-reader-text" htmlFor="blog-subscribe">
            Enter your email to subscribe to Looka&apos;s blog
          </label>
          <input
            className="cta__input"
            type="text"
            id="blog-subscribe"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={BLOG_SUBSCRIBE_CTA.placeholder}
          />
          <input type="hidden" name="htmlemail" value="1" />
          <input type="hidden" name="attribute1" value="blogcta" />
          <input type="hidden" name="list[7]" value="signup" />
          <input type="hidden" name="listname[7]" value="Blog Subscribers" />
          <button type="submit" className="cta__button">
            {BLOG_SUBSCRIBE_CTA.buttonLabel}
          </button>
          <p className="cta__subscribe--message" id="subscribe-message">
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
