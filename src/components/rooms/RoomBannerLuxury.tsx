import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import type { Room } from "../../interfaces/Room";

import "yet-another-react-lightbox/styles.css";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import "./roomCard.css";

interface RoomBannerLuxuryProps {
  room: Room;
  reverse?: boolean;
}

const RoomBannerLuxury = ({ room, reverse = false }: RoomBannerLuxuryProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <article className="w-full overflow-hidden bg-black text-white">
      <div
        className={`grid h-auto grid-cols-1 lg:h-screen lg:max-h-screen lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Info */}
        <div className="relative flex items-center bg-[#151515] px-8 py-16 sm:px-12 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,118,121,0.12),transparent_35%)]" />

          <div className="relative z-10 max-w-2xl">
            <span className="mb-6 block font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              D’Lula Rooms
            </span>

            <h2 className="font-primary text-4xl font-normal uppercase leading-tight tracking-[0.08em] sm:text-5xl">
              {room.title}
            </h2>

            <p className="mt-8 max-w-xl font-primary text-lg leading-8 text-white/75 sm:text-xl">
              {room.shortDescription}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              {room.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  {feature.icon && (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary">
                      {feature.icon}
                    </span>
                  )}

                  <span className="font-primary text-lg text-white/85">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {room.priceDescription && (
              <p className="mt-10 font-secondary text-xs uppercase tracking-[0.25em] text-primary">
                {room.priceDescription}
              </p>
            )}

            <NavLink
              to={`/rooms/${room.slug}`}
              rel="noopener noreferrer"
              className="mt-8 group inline-flex flex-col font-secondary text-xs font-semibold uppercase tracking-[0.4em]"
            >
              <span className="h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
              <span className="flex w-full items-center justify-start gap-3 rounded px-6 py-3 text-white">
                <span className="font-secondary text-sm">I Wanna Explore</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>

              <span className="h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
            </NavLink>
            <p className="mt-4 max-w-xl font-secondary text-xs text-white/60">
              All rooms are priced between $600 - $800 usd (based on a 30 day
              stay) - Please send us a WhatsApp for accurate pricing &
              availability.
            </p>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative h-auto min-h-[45vh] lg:h-screen">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={!isMobile}
            pagination={isMobile ? { clickable: true } : false}
            loop
            className="custom-swiper-white h-full w-full room-banner-luxury-swiper"
          >
            {room.images.map((image, imageIndex) => (
              <SwiperSlide
                key={imageIndex}
                className="cursor-pointer"
                onClick={() => setIndex(imageIndex)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Image overlay */}
          <div className={`pointer-events-none absolute inset-0 z-10`} />
        </div>
      </div>

      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        index={index}
        slides={room.images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </article>
  );
};

export default RoomBannerLuxury;
