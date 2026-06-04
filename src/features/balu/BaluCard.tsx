interface BaluCardProps {
  image: string
  title: string
  description1: string
  description2: string
  ctaLabel: string
  imagePosition?: 'left' | 'right'
  whatsapp: string
}

const BaluCard = ({
  image,
  title,
  description1,
  description2,
  ctaLabel,
  imagePosition = 'left',
  whatsapp,
}: BaluCardProps) => {
  const imageComponent = (
    <div className="w-full md:w-1/2">
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] md:h-[400px] object-cover rounded shadow"
      />
    </div>
  )

  const textComponent = (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-2">{description1}</p>
      <p className="text-gray-600 mb-6">{description2}</p>
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-gray-800 transition"
      >
        {ctaLabel}
      </a>
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6 pt-4 pb-10">
      {imagePosition === 'left' ? (
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
  )
}

export default BaluCard
