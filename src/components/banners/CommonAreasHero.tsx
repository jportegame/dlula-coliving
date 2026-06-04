import type { ReactNode } from "react";

interface CommonAreasHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: {
    icon: ReactNode;
    title: string;
  }[];
  reverse?: boolean;
}

const CommonAreasHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  highlights,
  reverse = false,
}: CommonAreasHeroProps) => {
  return (
    <section className="overflow-hidden bg-black text-white">
      <div
        className={`grid grid-cols-1 lg:min-h-[520px] lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Content */}
        <div className="relative flex items-center mt-20 px-8 py-16 sm:px-12 lg:px-20 lg:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,118,121,0.12),transparent_40%)]" />

          <div className="relative z-10 max-w-2xl">
            <span className="font-secondary text-[10px] uppercase tracking-[0.35em] text-primary sm:text-xs">
              {eyebrow}
            </span>

            <h1 className="mt-5 font-primary text-4xl font-normal uppercase leading-tight tracking-[0.06em] sm:text-5xl lg:text-5xl xl:text-6xl">
              {title}
            </h1>

            <div className="mt-5 h-px w-20 bg-primary" />

            <p className="mt-6 max-w-xl font-primary text-lg leading-8 text-white/75 lg:text-xl">
              {description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 lg:grid-cols-4">
              {highlights.map((item, index) => (
                <div key={index} className="border-white/10 sm:border-r last:border-r-0">
                  <div className="mb-3 text-2xl text-primary lg:text-3xl">
                    {item.icon}
                  </div>

                  <p className="max-w-28 font-primary text-base leading-6 text-white/85 lg:text-lg">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[45vh] min-h-[360px] lg:h-full lg:min-h-0">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />

          <div
            className={`absolute inset-0 ${
              reverse
                ? "bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0)_75%)] lg:bg-[linear-gradient(to_left,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_22%,rgba(0,0,0,0.25)_42%,rgba(0,0,0,0)_58%)]"
                : "bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0)_75%)] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_22%,rgba(0,0,0,0.25)_42%,rgba(0,0,0,0)_58%)]"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default CommonAreasHero;