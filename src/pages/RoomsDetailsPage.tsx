// src/pages/RoomDetailsPage.tsx

import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { LayoutType } from "react-photo-album";

import type { Room } from "../interfaces/Room";
import { siteConfig } from "../config/siteConfig";
import PhotoMosaic from "../components/mosaic/PhotoMosaic";
import ParallaxBanner from "../components/banners/ParallaxBanner";
import AnimatedElement from "../components/common/AnimatedElement";

const RoomDetailsPage = () => {
  const { slug } = useParams();
  const [room, setRoom] = useState<Room | null>(null);

  const rooms: Room[] = siteConfig.rooms;
  const commonAreas = siteConfig.commonAreas;
  const pageTexts = siteConfig.pages.roomDetailsPage;

  useEffect(() => {
    const foundRoom = rooms.find((r) => r.slug === slug);
    setRoom(foundRoom || null);
  }, [slug, rooms]);

  if (!room) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
        <div>
          <h1 className="font-primary text-5xl text-text-primary">
            {pageTexts.notFound.title}
          </h1>
          <p className="mt-4 font-secondary text-sm uppercase tracking-[0.25em] text-text-secondary">
            {pageTexts.notFound.subtitle}
          </p>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-background text-text-primary">
      {/* Banner */}
      <ParallaxBanner
        title={room.title}
        subtitle={pageTexts.bannerSubtitle}
        image={room.images[0].src}
      />

      {/* Intro */}
      <section className="relative overflow-hidden bg-surface px-6 py-20 text-center">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
          <AnimatedElement animation="slide-up">
            <span className="mb-6 block font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              {pageTexts.intro.eyebrow}
            </span>

            <h1 className="font-primary text-4xl font-normal uppercase tracking-[0.08em] sm:text-5xl">
              {room.title}
            </h1>

            <p className="mx-auto mt-8 max-w-4xl font-primary text-xl leading-9 text-text-secondary">
              {room.longDescription}
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <AnimatedElement animation="slide-up">
            <div className="mb-10 text-center">
              <span className="font-secondary text-xs uppercase tracking-[0.35em] text-primary">
                {pageTexts.gallery.eyebrow}
              </span>

              <h2 className="mt-4 font-primary text-4xl text-text-primary">
                {pageTexts.gallery.title}
              </h2>
            </div>
          </AnimatedElement>

          <PhotoMosaic
            images={room.images}
            layout="columns"
            columns={3}
            spacing={0}
            padding={0}
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <AnimatedElement animation="slide-up">
            <div className="mb-14 text-center">
              <span className="font-secondary text-xs uppercase tracking-[0.35em] text-primary">
                {pageTexts.features.eyebrow}
              </span>

              <h2 className="mt-4 font-primary text-4xl font-normal text-text-primary sm:text-5xl">
                {pageTexts.features.title}
              </h2>

              {room.priceDescription && (
                <p className="mx-auto mt-5 max-w-2xl font-secondary text-xs uppercase tracking-[0.25em] text-text-secondary">
                  {room.priceDescription}
                </p>
              )}
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {room.features.map((feature, index) => (
              <AnimatedElement key={index} animation="slide-up" delay={index * 80}>
                <div className="group flex min-h-44 flex-col items-center justify-center rounded-sm border border-border bg-background p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-4xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    {feature.icon}
                  </div>

                  <h3 className="font-primary text-xl text-text-primary">
                    {feature.title}
                  </h3>

                  {feature.description && (
                    <p className="mt-2 font-secondary text-xs leading-5 text-text-secondary">
                      {feature.description}
                    </p>
                  )}
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Book CTA */}
          <div className="mt-14 flex justify-center">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-12 py-4 font-secondary text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-primary-dark hover:shadow-xl"
            >
              <FaWhatsapp className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
              {pageTexts.bookButton}
            </a>
          </div>
        </div>
      </section>

      {/* Common Areas */}
      <section className="bg-background px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <AnimatedElement animation="slide-up">
            <span className="font-secondary text-xs uppercase tracking-[0.35em] text-primary">
              Shared Spaces
            </span>

            <h2 className="mt-4 font-primary text-4xl font-normal text-text-primary sm:text-5xl">
              {commonAreas.title}
            </h2>

            <p className="mx-auto mb-12 mt-6 max-w-4xl font-primary text-xl leading-9 text-text-secondary">
              {commonAreas.description}
            </p>
          </AnimatedElement>

          <PhotoMosaic
            images={commonAreas.images}
            layout={commonAreas.layout as LayoutType}
            columns={commonAreas.columns}
            spacing={commonAreas.spacing}
            padding={commonAreas.padding}
          />
        </div>
      </section>
    </main>
  );
};

export default RoomDetailsPage;