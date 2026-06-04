import { siteConfig } from "../../../config/siteConfig";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "/dlula-logo.png";

const FooterLuxury = () => {
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
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Luxury background glow */}
      <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* About */}
          <div>
            <img
              src={Logo}
              alt="D'Lula Logo"
              className="mb-8 h-16 object-contain"
            />

            <h4 className="mb-5 font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              About D’Lula
            </h4>

            <p className="max-w-md font-primary text-lg leading-8 text-white/70">
              {footer.about.description}
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              {footer.about.social.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.icon}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-primary/40 hover:bg-primary hover:text-white"
                >
                  {getSocialIcon(s.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-8 font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              Contact
            </h4>

            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-white/70 transition hover:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <FaWhatsapp className="text-primary" />
                </div>

                <span className="font-primary text-lg">
                  {footer.contact.whatsapp}
                </span>
              </li>

              <li className="flex items-center gap-4 text-white/70 transition hover:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <FaEnvelope className="text-primary" />
                </div>

                <span className="font-primary text-lg break-all">
                  {footer.contact.email}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-8 font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              {common.footer.quickLinksTitle}
            </h4>

            <ul className="space-y-4">
              {footer.quickMenu.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.path}
                    className="group inline-flex items-center gap-3 font-primary text-lg text-white/70 transition hover:text-white"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-6" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="font-secondary text-xs uppercase tracking-[0.18em] text-white/40">
            {footer.legal.text}
          </p>

          <p className="mt-3 font-secondary text-xs tracking-[0.15em] text-white/30">
            © {footer.legal.year} {common.footer.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLuxury;