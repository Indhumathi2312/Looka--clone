'use client';

export default function ScrollToTop() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className="scroll-to-top"
      id="scrollToTop"
      aria-label="Scroll to top"
      onClick={handleScrollTop}
    >
      <span className="scroll-to-top__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="11"
          fill="none"
          viewBox="0 0 10 11"
        >
          <path
            stroke="#5340FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1.25 5.25 5 1.5l3.75 3.75m-7.5 4.5L5 6l3.75 3.75"
          />
        </svg>
      </span>
      <span className="scroll-to-top__text">Back to top</span>
    </button>
  );
}
