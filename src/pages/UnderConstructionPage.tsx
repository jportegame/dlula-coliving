import underConstructionImage from '../assets/under-construction.png'

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-6">
      <img
        src={underConstructionImage}
        alt="Under Construction"
        className="max-w-xl w-full mb-8"
      />
    </div>
  )
}

export default UnderConstructionPage
