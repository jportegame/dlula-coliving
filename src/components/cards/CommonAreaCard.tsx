import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface CommonAreaCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  photosCount?: number;
}

const CommonAreaCard = ({
  slug,
  title,
  description,
  image,
  imageAlt,
  photosCount,
}: CommonAreaCardProps) => {
  return (
    <Link
      to={`/common-areas/${slug}`}
      className="group relative block min-h-[420px] overflow-hidden border border-white/10 bg-black text-white"
      aria-label={`View ${title}`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.65)_42%,rgba(0,0,0,0.12)_100%)]" />

      <div className="absolute inset-x-0 top-0 z-10 flex justify-between p-6">
        <span className="font-secondary text-[10px] uppercase tracking-[0.28em] text-white/70">
          D’Lula
        </span>

        {photosCount && (
          <span className="font-secondary text-[10px] uppercase tracking-[0.2em] text-primary">
            {photosCount} Photos
          </span>
        )}
      </div>

      <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-8">
        <h3 className="font-primary text-3xl font-normal uppercase tracking-[0.08em] sm:text-4xl">
          {title}
        </h3>

        <div className="mt-4 h-px w-16 bg-primary transition-all duration-300 group-hover:w-28" />

        <p className="mt-5 max-w-sm font-primary text-lg leading-7 text-white/75">
          {description}
        </p>

        <div className="mt-8 inline-flex items-center gap-3 font-secondary text-xs uppercase tracking-[0.25em] text-white">
          View Gallery
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
};

export default CommonAreaCard;