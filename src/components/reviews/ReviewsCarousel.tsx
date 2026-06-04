import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
import ReviewCardLuxury from "./ReviewCardLuxury";

interface Review {
  name: string;
  initial: string;
  date: string;
  text: string;
  stars?: number;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

const ReviewsCarousel = ({ reviews }: ReviewsCarouselProps) => {
  return (
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5}
        autoplay={{ delay: 5000 }}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-4 h-full">
              <ReviewCardLuxury {...review} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default ReviewsCarousel;
