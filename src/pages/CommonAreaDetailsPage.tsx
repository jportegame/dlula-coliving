import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { siteConfig } from "../config/siteConfig";
import ParallaxBanner from "../components/banners/ParallaxBanner";
import PhotoMosaic from "../components/mosaic/PhotoMosaic";
import AnimatedElement from "../components/common/AnimatedElement";

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

const CommonAreaDetailsPage = () => {
  const { slug } = useParams();
  const [area, setArea] = useState<CommonArea | null>(null);

  useEffect(() => {
    const foundArea = siteConfig.commonAreasGrid.areas.find(
      (item) => item.slug === slug
    );

    setArea(foundArea || null);
  }, [slug]);

  if (!area) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
        <div>
          <h1 className="font-primary text-5xl text-text-primary">
            Area not found
          </h1>

          <p className="mt-4 font-secondary text-sm uppercase tracking-[0.25em] text-text-secondary">
            Please return to common areas
          </p>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-background text-text-primary">
      <ParallaxBanner
        title={area.title}
        subtitle={area.shortDescription}
        image={area.coverImage}
      />

      <section className="relative overflow-hidden bg-surface px-6 py-20 text-center">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
          <AnimatedElement animation="slide-up">
            <span className="mb-6 block font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              D’Lula Common Areas
            </span>

            <h1 className="font-primary text-4xl font-normal uppercase tracking-[0.08em] sm:text-5xl">
              {area.title}
            </h1>

            <p className="mx-auto mt-8 max-w-4xl font-primary text-xl leading-9 text-text-secondary">
              {area.description}
            </p>
          </AnimatedElement>
        </div>
      </section>

      <section className="bg-background px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedElement animation="slide-up">
            <div className="mb-10 text-center">
              <span className="font-secondary text-xs uppercase tracking-[0.35em] text-primary">
                Gallery
              </span>

              <h2 className="mt-4 font-primary text-4xl font-normal text-text-primary">
                Explore the space
              </h2>
            </div>
          </AnimatedElement>

          <PhotoMosaic
            images={area.images}
            layout={"columns"}
            columns={2}
            spacing={6}
            padding={0}
          />
        </div>
      </section>
    </main>
  );
};

export default CommonAreaDetailsPage;