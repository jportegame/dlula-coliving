import { FaGoogle, FaStar } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

interface ReviewCardLuxuryProps {
  name: string;
  initial: string;
  date: string;
  text: string;
  stars?: number;
}

const ReviewCardLuxury = ({
  name,
  initial,
  date,
  text,
  stars = 5,
}: ReviewCardLuxuryProps) => {
  return (
    <article className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-1">
      {/* Soft gradient decoration */}
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

      <div className="relative flex h-full flex-col justify-between">
        {/* Header */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-secondary text-lg font-medium text-primary">
                {initial}
              </div>

              <div>
                <h4 className="font-secondary text-base font-medium text-text-primary">
                  {name}
                </h4>

                <p className="font-secondary text-sm text-text-secondary">
                  {date}
                </p>
              </div>
            </div>

            {/* Quote icon */}
            <HiOutlineChatBubbleLeftRight
              className="text-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/40"
              size={38}
            />
          </div>

          {/* Stars */}
          <div className="mb-6 flex items-center gap-1 text-primary">
            {[...Array(stars)].map((_, i) => (
              <FaStar key={i} className="text-sm" />
            ))}
          </div>

          {/* Review text */}
          <p className="font-primary text-lg leading-8 text-text-secondary line-clamp-6">
            “{text}”
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
          <span className="font-secondary text-xs uppercase tracking-[0.25em] text-text-secondary">
            Verified Stay
          </span>

          <FaGoogle
            className="text-text-secondary/60 transition duration-300 group-hover:text-primary"
            size={18}
          />
        </div>
      </div>
    </article>
  );
};

export default ReviewCardLuxury;
