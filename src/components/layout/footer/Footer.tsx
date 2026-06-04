import { siteConfig } from "../../../config/siteConfig";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Logo from '../../assets/logo.png'

const Footer = () => {
  const { footer, common } = siteConfig;

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "facebook":
        return <FaFacebookF />;
      case "instagram":
        return <FaInstagram />;
      case "youtube":
        return <FaYoutube />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-secondary text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1: Logo y Acerca de */}
        <div>
          <img src={Logo} alt="Logo" className="h-12 mb-4" />
          <h4 className="text-lg font-semibold mb-2">{common.footer.aboutTitle}</h4>
          <p className="text-sm text-gray-300 mb-4">
            {footer.about.description}
          </p>
          <div className="flex gap-4 text-xl text-white">
            {footer.about.social.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                {getSocialIcon(s.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex flex-row justify-between md:justify-end gap-10 md:gap-40">
          {/* Col 2: Contacto */}
          <div className="md:text-right w-1/2 md:w-auto">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex md:justify-end items-center gap-2">
                <FaWhatsapp /> {footer.contact.whatsapp}
              </li>
              <li className="flex md:justify-end items-center gap-2">
                <FaEnvelope /> {footer.contact.email}
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="md:text-right w-1/2 md:w-auto">
            <h4 className="text-lg font-semibold mb-4">{common.footer.quickLinksTitle}</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              {footer.quickMenu.map((item, i) => (
                <li key={i}>
                  <a href={item.path} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Aviso legal */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-6">
        <p>{footer.legal.text}</p>
        <p className="mt-2">© {footer.legal.year} {common.footer.allRightsReserved}.</p>
      </div>
    </footer>
  );
};

export default Footer;
