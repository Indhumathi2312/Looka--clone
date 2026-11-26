'use client';

import { useEffect, useState, FormEvent } from 'react';
import { EXIT_NEWSLETTER_CTA, SOCIAL_PROVIDERS } from '@/data/site';

type ActiveModal =
  | null
  | 'loginModal'
  | 'signupModal'
  | 'passwordResetModal'
  | 'setNewPasswordModal'
  | 'exitNewsletterModal';

interface ModalsProps {
  showExitNewsletter?: boolean;
}

export default function Modals({ showExitNewsletter = false }: ModalsProps) {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [exitEmail, setExitEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  useEffect(() => {
    if (!showExitNewsletter) return;
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitModalSeen')) {
        sessionStorage.setItem('exitModalSeen', '1');
        setActiveModal('exitNewsletterModal');
      }
    };
    const timer = window.setTimeout(() => {
      document.addEventListener('mouseout', handleMouseOut);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [showExitNewsletter]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = (id: ActiveModal) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal((prev) => (prev === id ? null : id));
  };

  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal(null);
  };

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!exitEmail.trim()) return;
    setSubscribeMessage('Thank you for subscribing to our newsletter.');
    setExitEmail('');
  };

  return (
    <>
      <div
        className={`modal modal--login${activeModal === 'loginModal' ? ' modal--active' : ''}`}
        id="loginModal"
        role="dialog"
        aria-labelledby="loginModalTrigger"
      >
        <div
          className="modal__overlay"
          data-plugin="MODAL_TRIGGER"
          onClick={closeModal}
        />
        <div className="modal__inner">
          <div className="modal__header">
            <button
              type="button"
              className="modal__close"
              data-plugin="MODAL_TRIGGER"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>
            <h4 className="modal__title"> Welcome back! </h4>
          </div>
          <form
            name="login"
            className="modal-form modal__body"
            data-plugin="login"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="modal-form__social">
              {SOCIAL_PROVIDERS.map((p) => (
                <div
                  key={p.provider}
                  data-provider={p.provider}
                  className={p.className}
                >
                  <img alt={p.alt} src={p.src} />
                </div>
              ))}
            </div>
            <div className="modal-form__or"> or </div>
            <label htmlFor="login-email" className="screen-reader-text">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="login-email"
              placeholder="Email"
            />
            <label htmlFor="login-password" className="screen-reader-text">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="Password"
            />
            <p className="alert alert-danger hidden" />
            <button type="submit" className="modal-form__submit">
              {' '}
              Sign In{' '}
            </button>
            <div className="modal-form__footer">
              <a
                href="#passwordResetModal"
                data-plugin="MODAL_TRIGGER"
                onClick={openModal('passwordResetModal')}
              >
                {' '}
                Forgot password?{' '}
              </a>
            </div>
          </form>
          <div className="modal__outside">
            {' '}
            Don&apos;t have an account yet?{' '}
            <a
              href="#signupModal"
              data-plugin="MODAL_TRIGGER"
              onClick={openModal('signupModal')}
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <div
        className={`modal modal--signup${activeModal === 'signupModal' ? ' modal--active' : ''}`}
        id="signupModal"
        role="dialog"
        aria-labelledby="loginModalTrigger"
      >
        <div
          className="modal__overlay"
          data-plugin="MODAL_TRIGGER"
          onClick={closeModal}
        />
        <div className="modal__inner">
          <div className="modal__header">
            <button
              type="button"
              className="modal__close"
              data-plugin="MODAL_TRIGGER"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>
            <h3 className="modal__title"> Create an Account </h3>
            <p className="modal__copy">
              {' '}
              Browse just-for-you logo designs and save the ones you love!{' '}
            </p>
          </div>
          <form
            className="modal-form modal__body"
            name="signup"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="modal-form__social">
              {SOCIAL_PROVIDERS.map((p) => (
                <div
                  key={p.provider}
                  data-provider={p.provider}
                  className={p.className}
                >
                  <img alt={p.alt} src={p.src} />
                </div>
              ))}
            </div>
            <div className="modal-form__or"> or </div>
            <label htmlFor="register-full-name" className="screen-reader-text">
              Full Name
            </label>
            <input
              type="text"
              name="fname"
              id="register-full-name"
              placeholder="Full name"
            />
            <label htmlFor="register-email" className="screen-reader-text">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="register-email"
              placeholder="Email"
            />
            <label htmlFor="register-password" className="screen-reader-text">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
            />
            <div className="subscribe-blog">
              <input
                type="checkbox"
                name="newsletter"
                id="register-newsletter"
              />
              <label htmlFor="register-newsletter">
                Subscribe to the Looka blog
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="10px"
                viewBox="0 0 13 10"
                version="1.1"
                className="checkmark"
              >
                <title>checkmark</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="ic_checkmark"
                    transform="translate(1.000000, 1.000000)"
                    stroke="#5340ff"
                    strokeWidth="2"
                  >
                    <polyline id="Stroke-1" points="0 3.5 3.66834785 7 11 0" />
                  </g>
                </g>
              </svg>
              <input type="hidden" name="htmlemail" value="1" />
              <input type="hidden" name="attribute1" value="looka-signup" />
              <input type="hidden" name="list[7]" value="signup" />
              <input type="hidden" name="listname[7]" value="Blog Subscribers" />
            </div>
            <div>
              <p className="alert alert-danger hidden" />
              <button type="submit" className="modal-form__submit">
                {' '}
                Sign Up{' '}
              </button>
            </div>
            <div className="modal-form__footer">
              {' '}
              By signing up, you agree to our{' '}
              <a href="/terms/" target="_blank">
                terms of service
              </a>
            </div>
          </form>
          <div className="modal__outside">
            {' '}
            Already have an account?{' '}
            <a
              href="#loginModal"
              data-plugin="MODAL_TRIGGER"
              onClick={openModal('loginModal')}
            >
              {' '}
              Sign in.{' '}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`modal modal--password${activeModal === 'passwordResetModal' ? ' modal--active' : ''}`}
        id="passwordResetModal"
        role="dialog"
      >
        <div
          className="modal__overlay"
          data-plugin="MODAL_TRIGGER"
          onClick={closeModal}
        />
        <div className="modal__inner">
          <div className="modal__header">
            <button
              type="button"
              className="modal__close"
              data-plugin="MODAL_TRIGGER"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>
            <h3 className="modal__title"> Send reset email </h3>
            <p className="modal__copy">
              {' '}
              Enter your account email below to receive reset instructions{' '}
            </p>
          </div>
          <form
            className="modal-form modal__body"
            name="passwordReset"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="reset-email" className="screen-reader-text">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="reset-email"
            />
            <div>
              <p className="alert alert-danger hidden" />
              <button type="submit" className="modal-form__submit">
                {' '}
                Send{' '}
              </button>
            </div>
          </form>
          <div className="modal__outside">
            {' '}
            Want to try again?{' '}
            <a
              href="#loginModal"
              data-plugin="MODAL_TRIGGER"
              onClick={openModal('loginModal')}
            >
              Sign in
            </a>
          </div>
        </div>
      </div>

      <div
        className={`modal modal--newpassword${activeModal === 'setNewPasswordModal' ? ' modal--active' : ''}`}
        id="setNewPasswordModal"
        role="dialog"
      >
        <div className="modal__overlay" onClick={closeModal} />
        <div className="modal__inner">
          <div className="modal__header">
            <button
              type="button"
              className="modal__close"
              data-plugin="MODAL_TRIGGER"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>
            <h3 className="modal__title"> Set a new password </h3>
            <p className="modal__copy">
              {' '}
              Enter a new password below to access your account{' '}
            </p>
          </div>
          <form
            className="modal-form modal__body"
            id="passwordretype-form"
            name="setNewPassword"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <input type="hidden" name="activation_token" />
              <label htmlFor="reset-password" className="screen-reader-text">
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="reset-password"
                placeholder="New Password"
              />
            </div>
            <div>
              <p className="alert alert-danger hidden" />
              <button type="submit" className="modal-form__submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>

      {showExitNewsletter && (
        <div
          className={`modal modal--exitnewsletter${activeModal === 'exitNewsletterModal' ? ' modal--active' : ''}`}
          id="exitNewsletterModal"
          role="dialog"
        >
          <div className="modal__overlay" onClick={closeModal} />
          <div className="modal__inner">
            <div className="cta cta--two-col cta--newsletter cta--exitnewsletter">
              <button
                type="button"
                className="modal__close"
                data-plugin="MODAL_TRIGGER"
                aria-label="Close"
                onClick={closeModal}
              >
                ×
              </button>
              <div className="cta__container">
                <div className="cta__copy--container">
                  <h2 className="cta__headline">
                    {' '}
                    {EXIT_NEWSLETTER_CTA.headline}{' '}
                  </h2>
                  <p className="cta__copy"> {EXIT_NEWSLETTER_CTA.copy} </p>
                  <form
                    className="cta__form subscribe-blog-cta"
                    onSubmit={handleNewsletterSubmit}
                  >
                    <label
                      className="screen-reader-text"
                      htmlFor="exit-subscribe_6b04b6d3eea491.73600495"
                    >
                      {' '}
                      Enter your email to subscribe to Looka&apos;s blog{' '}
                    </label>
                    <input
                      className="cta__input"
                      type="email"
                      id="exit-subscribe_6b04b6d3eea491.73600495"
                      name="email"
                      value={exitEmail}
                      onChange={(e) => setExitEmail(e.target.value)}
                      placeholder={EXIT_NEWSLETTER_CTA.placeholder}
                      required
                    />
                    <input type="hidden" name="htmlemail" value="1" />
                    <input
                      type="hidden"
                      name="attribute1"
                      value="subscriptioncta_exit"
                    />
                    <input type="hidden" name="list[7]" value="signup" />
                    <input
                      type="hidden"
                      name="listname[7]"
                      value="Blog Subscribers"
                    />
                    <button
                      className="cta__button cta__button--primary"
                      type="submit"
                    >
                      {' '}
                      {EXIT_NEWSLETTER_CTA.buttonLabel}{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height="16px"
                        width="16px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="m14 5 7 7m0 0-7 7m7-7H3"
                        />
                      </svg>{' '}
                    </button>
                    <p className="cta__subscribe--message" id="subscribe-message">
                      {subscribeMessage}
                    </p>
                  </form>
                </div>
                <div className="cta__image--container">
                  <img
                    className="cta__image"
                    src={EXIT_NEWSLETTER_CTA.imageSrc}
                    alt={EXIT_NEWSLETTER_CTA.imageAlt}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
