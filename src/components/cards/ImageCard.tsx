interface ImageCardProps {
  data: {
    title: string;
    image: string;
  };
  onClick?: () => any;
}

const ImageCard = ({ data, onClick }: ImageCardProps) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black/50 rounded-lg z-10">
        <h3 className="text-white text-xl font-bold bg-black/50 rounded-2xl py-1 px-8">{data.title}</h3>
      </div>
    </div>
  );
};

export default ImageCard;
