'use client';

import { ARTICLE_META } from '@/data/disneyArticle';

export default function SocialShare() {
  const shareUrl =
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.href)
      : encodeURIComponent('https://looka.com/blog/disney-logo/');
  const shareTitle = encodeURIComponent(ARTICLE_META.title);

  return (
    <aside className="blog-single__social">
      <div className="social--fixed plugin__social">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button share-button--facebook"
          title="Share on Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path
              fillRule="evenodd"
              d="M18 0A18 18 0 0 0 0 18a18 18 0 0 0 18 18 18 18 0 0 0 18-18A18 18 0 0 0 18 0zm1.781 11h1.969v2.25h-1.195c-.446 0-.733.07-.862.21-.129.142-.193.376-.193.704V15.5h2.25l-.281 2.25H19.5v6.75h-2.918v-6.75H15V15.5h1.582v-1.512c0-.984.246-1.728.738-2.232.493-.504 1.313-.756 2.461-.756z"
            />
          </svg>
        </a>{' '}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('On the Looka blog: ')}${shareTitle}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button share-button--twitter"
          title="Share on Twitter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path
              fillRule="evenodd"
              d="M18 0A18 18 0 0 0 0 18a18 18 0 0 0 18 18 18 18 0 0 0 18-18A18 18 0 0 0 18 0zm3.219 12c.854 0 1.583.323 2.187.969.625-.104 1.271-.354 1.938-.75-.209.729-.656 1.291-1.344 1.687a5.161 5.161 0 0 0 1.75-.469A5.904 5.904 0 0 1 24.25 15v.375c0 2.188-.786 4.172-2.36 5.953C20.319 23.11 18.23 24 15.626 24A8.348 8.348 0 0 1 11 22.625c.333.042.573.063.719.063 1.396 0 2.646-.438 3.75-1.313a3.042 3.042 0 0 1-1.75-.61 2.863 2.863 0 0 1-1.063-1.484c.25.042.438.063.563.063.208 0 .479-.042.812-.125a3.055 3.055 0 0 1-1.734-1.047 2.88 2.88 0 0 1-.703-1.922v-.031c.458.25.916.375 1.375.375-.896-.584-1.344-1.427-1.344-2.532 0-.52.135-1.02.406-1.5 1.604 1.98 3.677 3.032 6.219 3.157-.042-.146-.063-.375-.063-.688 0-.854.292-1.573.875-2.156.584-.583 1.303-.875 2.157-.875z"
            />
          </svg>
        </a>{' '}
        <a
          href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button share-button--pinterest"
          title="Share on Pinterest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path
              fillRule="evenodd"
              d="M18 0A18 18 0 0 0 0 18a18 18 0 0 0 18 18 18 18 0 0 0 18-18A18 18 0 0 0 18 0zm.072 11c2.804 0 5.356 1.93 5.356 4.885 0 2.777-1.42 5.855-4.58 5.855-.75 0-1.697-.374-2.063-1.07-.678 2.687-.625 3.089-2.125 5.142l-.125.045-.08-.09c-.053-.562-.133-1.115-.133-1.677 0-1.822.84-4.457 1.25-6.225-.223-.455-.287-1.008-.287-1.508 0-.901.625-2.044 1.643-2.044.75 0 1.152.571 1.152 1.277 0 1.16-.785 2.25-.785 3.375 0 .768.634 1.303 1.375 1.303 2.053 0 2.687-2.965 2.687-4.545 0-2.116-1.5-3.268-3.527-3.268-2.357 0-4.178 1.697-4.178 4.09 0 1.152.705 1.74.705 2.017 0 .233-.17 1.053-.464 1.053-.045 0-.108-.016-.153-.025-1.277-.384-1.74-2.09-1.74-3.26 0-3.295 3.019-5.33 6.072-5.33z"
            />
          </svg>
        </a>{' '}
        <a
          href={`mailto:?subject=${shareTitle}&body=${encodeURIComponent('On the looka.com blog: ')}${shareUrl}`}
          className="share-button share-button--email"
          title="Share by Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <path
              fillRule="evenodd"
              d="M18 0A18 18 0 0 0 0 18a18 18 0 0 0 18 18 18 18 0 0 0 18-18A18 18 0 0 0 18 0zm-5.875 12h11.766c.312 0 .578.11.797.328.218.219.328.484.328.797v9.781c0 .313-.11.578-.328.797a1.085 1.085 0 0 1-.797.328H12.125c-.313 0-.578-.11-.797-.328a1.085 1.085 0 0 1-.328-.797v-9.781c0-.313.11-.578.328-.797.219-.219.484-.328.797-.328zm1.203 1.125l4.281 3.531.032.016a.506.506 0 0 0 .39.172h.016a.555.555 0 0 0 .406-.172l.016-.031.031-.016 4.188-3.5h-9.36zm-1.203.453v9.328h11.766v-9.328l-4.657 3.89a1.59 1.59 0 0 1-1.187.5c-.469 0-.865-.16-1.188-.484l-4.734-3.906z"
            />
          </svg>
        </a>
      </div>
    </aside>
  );
}
