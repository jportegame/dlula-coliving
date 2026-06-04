import { FaWhatsapp } from "react-icons/fa";

interface InfoCardProps {
  image: string;
  title: string;
  description1: React.ReactNode;
  description2: React.ReactNode;
  imagePosition?: "left" | "right";
  callToAction?: {
    text: string;
    link: string;
  };
}

const InfoCard = ({
  image,
  title,
  description1,
  description2,
  imagePosition = "left",
  callToAction,
}: InfoCardProps) => {
  const imageComponent = (
    <div className="w-full md:w-1/2">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] md:h-[400px] object-cover rounded shadow"
      />
    </div>
  );

  const textComponent = (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-2">{description1}</p>
      <p className="text-gray-600 mb-6">{description2}</p>
      {callToAction && (
        <a
          href={callToAction.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={callToAction.text}
          className={`inline-flex items-center gap-2 rounded-2xl bg-green-500 px-4 py-2
                  text-white font-medium shadow-md transition
                  hover:bg-green-600 active:bg-green-700
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50
                  w-full justify-center`}
        >
          <FaWhatsapp aria-hidden="true" className="text-xl" />
          <span>{callToAction.text}</span>
        </a>
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6 pt-4 pb-10">
      {imagePosition === "left" ? (
        <>
          {imageComponent}
          {textComponent}
        </>
      ) : (
        <>
          {textComponent}
          {imageComponent}
        </>
      )}
    </div>
  );
};

export default InfoCard;
