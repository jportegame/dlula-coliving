interface SmallBannerProps {
  image: string;
  title: string;
  subtitle: string;
}

const SmallBanner = ({ image, title, subtitle }: SmallBannerProps) => {
  return (
    <div
      className="relative w-full h-72 md:h-80 bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="font-primary text-5xl md:text-6xl font-bold mt-8 mb-4 drop-shadow-md">{title}</h1>
        <p className="font-secondary text-lg md:text-xl drop-shadow-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default SmallBanner;
