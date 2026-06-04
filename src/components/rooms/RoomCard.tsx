// src/components/RoomCard.tsx
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

import "./roomCard.css";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="w-full flex flex-col col-span-1 max-w-md mx-auto rounded-lg shadow-md bg-secondary">
      {/* Carousel */}
      <div>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          navigation={!isMobile}
          className="custom-swiper-white"
          loop={true}
        >
          {room.images.map((image, index) => (
            <SwiperSlide className="cursor-pointer" key={index} onClick={() => setIndex(index)}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Info */}
      <div className="relative grow">
        <img
          src="/our-rooms/layered-waves.svg"
          alt="waves"
          className="waves opacity-85"
        />

        <img
          src="/our-rooms/layered-waves-solid.svg"
          alt="waves"
          className="waves"
        />

        <div className="px-6 h-full">
          <div className="text-white grow">
            <h2 className="text-4xl text-center font-semibold">{room.title}</h2>
            <p className="text-sm text-center mt-2 mb-8">
              {room.shortDescription}
            </p>

            {/* Features */}
            <ul className="text-sm px-2">
              {room.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  {feature.icon && <span className="text-white">{feature.icon}</span>} {/* Usa el icono y aplica text-white */}
                  <span className="font-medium">{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <p className="mt-4 text-md font-semibold text-primary">
          {room.priceDescription}
        </p>
        {/* View Room Button */}
        <a
          href={`/rooms/${room.slug}`}
          className="flex items-center justify-center bg-primary text-white py-2 rounded-lg mt-2 hover:bg-opacity-80 transition"
        >
          <FaArrowRight className="mr-2" />
          View Room
        </a>
      </div>
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        index={index}
        slides={room.images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default RoomCard;
