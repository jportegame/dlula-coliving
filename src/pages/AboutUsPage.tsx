import { useRef, useState } from "react";
import SmallBanner from "../components/banners/SmallBanner";
import ImageCard from "../components/cards/ImageCard";
import Modal from "../components/common/Modal";
import { siteConfig } from "../config/siteConfig";
import InfoCard from "../components/cards/InfoCard";
import AnimatedElement from "../components/common/AnimatedElement";

const AboutUsPage = () => {
  const modalRef = useRef<any>(null);
  const [selectedTopic, setSelectedTopic] = useState<number>(-1);

  const aboutUs = siteConfig.aboutUs;
  const info = aboutUs.info;
  const pageTexts = siteConfig.pages.aboutUsPage;

  const openModal = () => {
    modalRef.current?.openModal();
  };

  const getModalData =
    selectedTopic !== -1
      ? info[selectedTopic].content.map((item: any, index) => (
          <InfoCard
            key={index}
            title={item.title}
            image={item.image}
            description1={item.description1}
            description2={item.description2}
            imagePosition={index % 2 === 0 ? "left" : "right"}
            callToAction={item.callToAction}
          />
        ))
      : null;

  return (
    <main className="bg-background text-text-primary">
      {/* Banner */}
      <SmallBanner
        image="/about-us/banner.webp"
        title={pageTexts.banner.title}
        subtitle={pageTexts.banner.subtitle}
      />

      {/* Intro */}
      <section className="relative overflow-hidden bg-surface px-6 py-20 text-center">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <AnimatedElement animation="slide-up">
          <div className="relative mx-auto max-w-5xl">
            <span className="mb-6 block font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              {pageTexts.intro.eyebrow}
            </span>

            <h1 className="font-primary text-4xl font-normal uppercase tracking-[0.08em] sm:text-5xl">
              {pageTexts.intro.title}
            </h1>

            <p className="mx-auto mt-8 max-w-4xl font-primary text-xl leading-9 text-text-secondary">
              {pageTexts.intro.description}
            </p>
          </div>
        </AnimatedElement>
      </section>

      {/* Values / Topics */}
      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <AnimatedElement animation="slide-up">
            <div className="mb-14 text-center">
              <span className="font-secondary text-xs uppercase tracking-[0.35em] text-primary">
                {pageTexts.section.eyebrow}
              </span>

              <h2 className="mt-4 font-primary text-4xl font-normal text-text-primary sm:text-5xl">
                {pageTexts.section.title}
              </h2>
            </div>
          </AnimatedElement>

          <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
            {info.map((item, index) => (
              <AnimatedElement
                key={index}
                animation="slide-up"
                delay={index * 100}
              >
                <div
                  onClick={() => {
                    setSelectedTopic(index);
                    setTimeout(openModal, 100);
                  }}
                  className="cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1  hover:shadow-2xl"
                >
                  <ImageCard data={item} />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-black px-6 py-20 text-center text-white">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />

        <AnimatedElement animation="slide-up">
          <div className="relative mx-auto max-w-4xl">
            <span className="mb-6 block font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              {pageTexts.finalCta.eyebrow}
            </span>

            <h2 className="font-primary text-4xl font-normal uppercase tracking-[0.08em] sm:text-5xl">
              {pageTexts.finalCta.title}
            </h2>

            <p className="mx-auto mt-8 font-primary text-xl leading-9 text-white/70">
              {pageTexts.finalCta.description}
            </p>
          </div>
        </AnimatedElement>
      </section>

      {selectedTopic !== -1 && (
        <Modal ref={modalRef} title={info[selectedTopic].title}>
          <div>{getModalData}</div>
        </Modal>
      )}
    </main>
  );
};

export default AboutUsPage;