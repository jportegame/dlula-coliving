import SmallBanner from "../components/banners/SmallBanner";
import type { Room } from "../interfaces/Room";

import { siteConfig } from "../config/siteConfig";
import PhotoMosaic from "../components/mosaic/PhotoMosaic";
import type { LayoutType } from "react-photo-album";
import RoomBannerLuxury from "../components/rooms/RoomBannerLuxury";
import AnimatedElement from "../components/common/AnimatedElement";

const OurRoomsPage = () => {
  const rooms: Room[] = siteConfig.rooms;
  const commonAreas = siteConfig.commonAreas;
  const pageTexts = siteConfig.pages.ourRoomsPage;

  return (
    <div>
      {/* Banner principal */}
      <SmallBanner
        image="/our-rooms/banner.jpg"
        title={pageTexts.banner.title}
        subtitle={pageTexts.banner.subtitle}
      />
      <div className="px-6 max-w-5xl mx-auto text-center my-12">
        <p className="font-secondary text-gray-700 text-lg leading-8">
          {pageTexts.intro.description}
        </p>
      </div>
      <div className="mb-12">
        {rooms.map((room, index) => (
          <RoomBannerLuxury
            key={room.slug}
            room={room}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      {/* Common Areas */}
      <section className="bg-background px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <AnimatedElement animation="slide-up">
            <span className="font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              Shared Spaces
            </span>

            <h2 className="mt-4 font-primary text-4xl font-normal text-text-primary sm:text-5xl">
              {commonAreas.title}
            </h2>

            <p className="mx-auto mb-12 mt-6 max-w-4xl font-primary text-xl leading-9 text-text-secondary">
              {commonAreas.description}
            </p>
          </AnimatedElement>

          <PhotoMosaic
            images={commonAreas.images}
            layout={commonAreas.layout as LayoutType}
            columns={commonAreas.columns}
            spacing={commonAreas.spacing}
            padding={commonAreas.padding}
          />
        </div>
      </section>
    </div>
  );
};

export default OurRoomsPage;
