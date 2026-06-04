import CommonAreaCard from "./CommonAreaCard";

interface CommonAreaImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface CommonArea {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  imageAlt: string;
  images: CommonAreaImage[];
}

interface CommonAreasGridProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  areas: CommonArea[];
}

const CommonAreasGrid = ({
  eyebrow = "Explore The House",
  title = "Designed for daily living",
  description,
  areas,
}: CommonAreasGridProps) => {
  return (
    <section className="bg-black px-0 py-0 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {areas.map((area) => (
          <CommonAreaCard
            key={area.slug}
            slug={area.slug}
            title={area.title}
            description={area.shortDescription}
            image={area.coverImage}
            imageAlt={area.imageAlt}
            photosCount={area.images.length}
          />
        ))}
      </div>
      {(title || eyebrow || description) && (
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          {eyebrow && (
            <span className="font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              {eyebrow}
            </span>
          )}

          {title && (
            <h2 className="mt-5 font-primary text-4xl font-normal uppercase tracking-[0.08em] sm:text-5xl">
              {title}
            </h2>
          )}

          {description && (
            <p className="mx-auto mt-6 max-w-3xl font-primary text-xl leading-9 text-white/65">
              {description}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default CommonAreasGrid;
