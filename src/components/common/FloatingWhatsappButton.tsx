import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../../config/siteConfig'

const FloatingWhatsappButton = () => {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-200"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}

export default FloatingWhatsappButton
