'use client';

import { useEffect, useState } from 'react';
import { NAV_CTA, NAV_ITEMS, SEARCH_CONFIG } from '@/data/site';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('navbar--open');
    } else {
      document.body.classList.remove('navbar--open');
    }
    return () => {
      document.body.classList.remove('navbar--open');
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  return (
    <nav className={`navbar plugin__navbar navbar--sticky${menuOpen ? ' navbar--open' : ''}`}>
      <a href="/" className="navbar__logo">
        <img src={NAV_CTA.logoSrc} alt="Logo" />
      </a>

      <div className="navbar__main">
        <ul id="menu-blog-menu" className="navbar__nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} id={item.id} className={item.className}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li id="blog-menu-search" className="menu-item menu-item--search">
            <button
              type="button"
              className="js-searchbar-toggle searchbar__toggle"
              aria-label="Search blog"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <img src={NAV_CTA.searchIconSrc} alt="Search Icon" />
            </button>
          </li>
        </ul>

        <ul className="navbar__account">
          <li>
            <a href={NAV_CTA.href} className="get-started" rel="modal">
              {NAV_CTA.label}
            </a>
          </li>
        </ul>
      </div>

      <button
        type="button"
        className="js-searchbar-toggle searchbar__toggle searchbar__toggle--mobile"
        aria-label="Search blog"
        onClick={() => setSearchOpen((prev) => !prev)}
      >
        <img src={NAV_CTA.searchIconSrc} alt="Search Icon" />
      </button>

      <button
        type="button"
        className="navbar__toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="screen-reader-text">Toggle menu</span>
      </button>

      <div
        id="blog-searchbar"
        className={`searchbar${searchOpen ? ' is-visible' : ''}`}
      >
        <h2 className="searchbar__heading">{SEARCH_CONFIG.heading}</h2>
        <form
          action={SEARCH_CONFIG.action}
          method="get"
          className="searchbar__form"
          id="search-form"
        >
          <label className="screen-reader-text" htmlFor="blog-menu-search-input">
            Search for:
          </label>
          <input
            type="text"
            name="s"
            id="blog-menu-search-input"
            className="searchbar__input"
            placeholder={SEARCH_CONFIG.placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="searchbar__button">
            {SEARCH_CONFIG.buttonLabel}
          </button>
        </form>
        <button
          type="button"
          id="blog-searchbar-toggle"
          className="searchbar__close"
          aria-label="Close search"
          onClick={() => setSearchOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              fill="none"
              stroke="#8b92a7"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M.35.35l19 19M19.35.35l-19 19"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
