import { FaStar } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  initial: string;
  date: string;
  text: string;
  stars?: number;
}

const ReviewCard = ({
  name,
  initial,
  date,
  text,
  stars = 5,
}: ReviewCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full h-full flex flex-col justify-between">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold">
          {initial}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-400">{date}</div>
        </div>
      </div>
      <p className="text-gray-700 mb-4 flex-1">{text}</p>
      <div className="flex items-center justify-between">
        <div className="flex text-yellow-500">
          {[...Array(stars)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <FaGoogle className="text-gray-400" size={20} />
      </div>
    </div>
  );
};

export default ReviewCard;
