import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../../config/siteConfig'

const FloatingWhatsappButton = () => {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 -right-2 z-50 bg-primary text-white px-6 py-3 rounded-bl-full rounded-tl-full shadow-lg transition-transform duration-300 ease-in-out hover:-translate-x-2"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}

export default FloatingWhatsappButton
