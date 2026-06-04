import SmallBanner from "../components/banners/SmallBanner";
import { siteConfig } from "../config/siteConfig";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import AnimatedElement from "../components/common/AnimatedElement";

const ContactUsPage = () => {
  const { whatsapp, email, social, additionalInfo } = siteConfig.contact;
  const pageTexts = siteConfig.pages.contactUsPage;

  return (
    <main className="bg-background text-text-primary">
      {/* Banner */}
      <SmallBanner
        image="/contact-us/banner.jpg"
        title={pageTexts.banner.title}
        subtitle={pageTexts.banner.subtitle}
      />

      {/* Contact Section */}
      <section className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 px-6 py-20 md:grid-cols-2">
        {/* Contact Information */}
        <AnimatedElement animation="slide-up">
          <div className="h-full rounded-sm border border-border bg-surface p-10 transition duration-500 hover:shadow-lg">
            <span className="mb-5 block font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              {pageTexts.contactSection.eyebrow}
            </span>

            <h2 className="mb-10 font-primary text-4xl font-normal uppercase tracking-[0.08em]">
              {pageTexts.contactSection.title}
            </h2>

            <div className="space-y-5">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 border border-border bg-background p-5 transition duration-300 hover:border-primary"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-border bg-surface text-primary transition group-hover:bg-primary group-hover:text-white">
                  <FaWhatsapp className="text-2xl" />
                </div>

                <div>
                  <p className="font-secondary text-[11px] uppercase tracking-[0.25em] text-text-secondary">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-primary text-xl">
                    {siteConfig.contact.whatsapplabel}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-5 border border-border bg-background p-5 transition duration-300 hover:border-primary"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-border bg-surface text-primary transition group-hover:bg-primary group-hover:text-white">
                  <FaEnvelope className="text-2xl" />
                </div>

                <div>
                  <p className="font-secondary text-[11px] uppercase tracking-[0.25em] text-text-secondary">
                    Email
                  </p>

                  <p className="mt-1 font-primary text-xl break-all">
                    {email}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </AnimatedElement>

        {/* Social Media */}
        <AnimatedElement animation="slide-up" delay={100}>
          <div className="h-full rounded-sm border border-border bg-surface p-10 transition duration-500 hover:shadow-lg">
            <span className="mb-5 block font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              {pageTexts.socialSection.eyebrow}
            </span>

            <h2 className="mb-10 font-primary text-4xl font-normal uppercase tracking-[0.08em]">
              {pageTexts.socialSection.title}
            </h2>

            <div className="space-y-5">
              {social.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border border-border bg-background p-5 transition duration-300 hover:border-primary"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-border bg-surface text-primary transition group-hover:bg-primary group-hover:text-white">
                    {socialLink.icon === "facebook" && (
                      <FaFacebookF className="text-2xl" />
                    )}

                    {socialLink.icon === "instagram" && (
                      <FaInstagram className="text-2xl" />
                    )}
                  </div>

                  <div>
                    <p className="font-secondary text-[11px] uppercase tracking-[0.25em] text-text-secondary">
                      {pageTexts.socialSection.followLabel}
                    </p>

                    <p className="mt-1 font-primary text-xl capitalize">
                      {socialLink.icon}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </section>

      {/* Additional Info */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Text */}
          <AnimatedElement animation="slide-up">
            <div>
              <span className="mb-5 block font-secondary text-xs uppercase tracking-[0.35em] text-primary">
                {pageTexts.additionalSection.eyebrow}
              </span>

              <h2 className="font-primary text-4xl font-normal uppercase tracking-[0.08em] sm:text-5xl">
                {additionalInfo.title}
              </h2>

              <p className="mt-8 max-w-xl font-primary text-xl leading-9 text-text-secondary">
                {additionalInfo.description}
              </p>
            </div>
          </AnimatedElement>

          {/* Image */}
          <AnimatedElement animation="slide-up" delay={120}>
            <div className="rounded-sm border border-border bg-background p-3 shadow-lg">
              <img
                src={additionalInfo.image}
                alt="Why choose D’Lula"
                className="max-h-[480px] w-full object-cover"
              />
            </div>
          </AnimatedElement>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;