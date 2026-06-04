import { siteConfig } from "../config/siteConfig";
import { type LayoutType } from "react-photo-album";
import ParallaxBanner from "../components/banners/ParallaxBanner";
import PhotoMosaic from "../components/mosaic/PhotoMosaic";
import ReviewsCarousel from "../components/reviews/ReviewsCarousel";
import AnimatedElement from "../components/common/AnimatedElement";
import LuxurySplitHero from "../components/banners/LuxurySplitHero";

const MainPage = () => {
  const banner = siteConfig.banner;
  const mosaic = siteConfig.mosaicSection;
  const roomShowcase = siteConfig.roomShowcase;

  return (
    <div>
      {/* Banner */}
      <ParallaxBanner
        title={banner.title}
        subtitle={banner.description}
        image={banner.image}
      />

      {/* Collage */}
      <section className="px-0 pt-10 bg-accent text-center">
        <AnimatedElement animation="slide-up" delay={100}>
          <h2 className="font-primary text-4xl font-bold mb-4">
            {mosaic.title}
          </h2>
        </AnimatedElement>
        <AnimatedElement animation="slide-up" delay={100}>
          <p className="max-w-4xl font-primary text-lg leading-8 text-gray-600 sm:text-xl mx-auto mb-10">
            {mosaic.description}
          </p>
        </AnimatedElement>
        <PhotoMosaic
          images={mosaic.images}
          layout={mosaic.layout as LayoutType}
          columns={mosaic.columns}
          spacing={mosaic.spacing}
          padding={mosaic.padding}
        />
      </section>

      {/* Carousel */}
      <section className="bg-white">
        <LuxurySplitHero
          animated
          eyebrow={roomShowcase.eyebrow}
          title={roomShowcase.title}
          description={roomShowcase.description}
          ctaLabel={roomShowcase.ctaLabel}
          ctaHref={roomShowcase.ctaHref}
          image={roomShowcase.image}
          showArrows={roomShowcase.showArrows}
          imageAlt={roomShowcase.imageAlt}
          seo={roomShowcase.seo}
        />
      </section>

      {/* Reviews */}
      <section className="w-full mx-auto px-6 py-16">
        <AnimatedElement animation="slide-up">
          <h2 className="font-primary text-3xl font-bold text-center mb-6">
            {siteConfig.pages.mainPage.reviewsTitle}
          </h2>
        </AnimatedElement>
        <div className="w-full">
          <ReviewsCarousel reviews={siteConfig.reviews} />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
