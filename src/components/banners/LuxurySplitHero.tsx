import { Link } from "react-router-dom";
import AnimatedElement from "../common/AnimatedElement";

type LuxurySplitHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
  imageAlt: string;

  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };

  reverse?: boolean;
  showArrows?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  animated?: boolean;
};

const LuxurySplitHero = ({
  eyebrow,
  title,
  description,
  ctaLabel = "Discover More",
  ctaHref = "#",
  image,
  imageAlt,
  reverse = false,
  showArrows = true,
  onPrev,
  onNext,
  animated = false,
}: LuxurySplitHeroProps) => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
      aria-label={title}
    >
      <div
        className={`grid min-h-screen grid-cols-1 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Content */}
        <div className="relative z-20 flex items-center bg-black px-8 pt-8 pb-0 md:pb-8 md:pt-24 sm:px-12 lg:px-24">
          <div className="max-w-xl">
            {eyebrow && (
              animated ? (
                <AnimatedElement animation="slide-up" delay={100}>
                  <span className="mb-8 block font-secondary text-xs uppercase tracking-[0.45em] text-white/70">
                    {eyebrow}
                  </span>
                </AnimatedElement>
              ) : (
                <span className="mb-8 block font-secondary text-xs uppercase tracking-[0.45em] text-white/70">
                  {eyebrow}
                </span>
              )
            )}

            {animated ? (
              <AnimatedElement animation="slide-up" delay={100}>
                <h1 className="font-primary text-3xl font-normal uppercase leading-tight  sm:text-4xl md:tracking-[0.22em] md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              </AnimatedElement>
            ) : (
              <h1 className="font-primary text-3xl font-normal uppercase leading-tight sm:text-4xl md:tracking-[0.22em] md:text-5xl lg:text-6xl">
                {title}
              </h1>
            )}

            {description && (
              animated ? (
                <AnimatedElement animation="slide-up" delay={100}>
                  <p className="mt-8 max-w-lg font-primary text-lg leading-8 text-white/80 sm:text-xl">
                    {description}
                  </p>
                </AnimatedElement>
              ) : (
                <p className="mt-8 max-w-lg font-primary text-lg leading-8 text-white/80 sm:text-xl">
                  {description}
                </p>
              )
            )}

            {ctaLabel && (
              animated ? (
                <AnimatedElement animation="slide-up" delay={100}>
                  <Link
                    to={ctaHref}
                    className="group mt-10 inline-flex flex-col font-secondary text-xs font-semibold uppercase tracking-[0.4em]"
                    aria-label={ctaLabel}
                  >
                    <span className="mb-3 h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
                    <span>{ctaLabel}</span>
                    <span className="mt-3 h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
                  </Link>
                </AnimatedElement>
              ) : (
                <Link
                  to={ctaHref}
                  className="group mt-10 inline-flex flex-col font-secondary text-xs font-semibold uppercase tracking-[0.4em]"
                  aria-label={ctaLabel}
                >
                  <span className="mb-3 h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
                  <span>{ctaLabel}</span>
                  <span className="mt-3 h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
                </Link>
              )
            )}

            {showArrows && (
              animated ? (
                <AnimatedElement animation="slide-up" delay={100}>
                  <div className="mt-20 flex items-center gap-10 text-4xl text-white/70">
                    <button
                      type="button"
                      onClick={onPrev}
                      className="transition hover:text-primary"
                      aria-label="Previous slide"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={onNext}
                      className="transition hover:text-primary"
                      aria-label="Next slide"
                    >
                      ›
                    </button>
                  </div>
                </AnimatedElement>
              ) : (
                <div className="mt-20 flex items-center gap-10 text-4xl text-white/70">
                  <button
                    type="button"
                    onClick={onPrev}
                    className="transition hover:text-primary"
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={onNext}
                    className="transition hover:text-primary"
                    aria-label="Next slide"
                  >
                    ›
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Luxury gradient */}
          <div
            className={`
              absolute inset-0
              ${
                reverse
                  ? `
                    bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.82)_20%,rgba(0,0,0,0.35)_38%,rgba(0,0,0,0)_50%)]
                    lg:bg-[linear-gradient(to_left,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.82)_20%,rgba(0,0,0,0.35)_38%,rgba(0,0,0,0)_50%)]
                  `
                  : `
                    bg-[linear-gradient(to_bottom,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.82)_20%,rgba(0,0,0,0.35)_38%,rgba(0,0,0,0)_50%)]
                    lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.82)_20%,rgba(0,0,0,0.35)_38%,rgba(0,0,0,0)_50%)]
                  `
              }
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default LuxurySplitHero;
