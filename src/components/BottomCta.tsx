import { BOTTOM_CTA } from '@/data/site';

export default function BottomCta() {
  return (
    <section className="cta cta--blue cta--two-col ">
      <div className="cta__container">
        <div className="cta__copy--container">
          <h2 className="cta__headline cta__headline--reverse">
            {BOTTOM_CTA.headline}
          </h2>
          <p className="cta__copy cta__copy--reverse">{BOTTOM_CTA.copy}</p>
        </div>
        <form className="cta__form" action={BOTTOM_CTA.action} method="GET">
          <label className="screen-reader-text" htmlFor="company_name">
            Start creating a logo by entering your company&apos;s name
          </label>
          <input
            className="cta__input"
            type="text"
            id="company_name"
            name="company_name"
            defaultValue=""
            placeholder={BOTTOM_CTA.placeholder}
          />
          <button type="submit" className="cta__button">
            {BOTTOM_CTA.buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
