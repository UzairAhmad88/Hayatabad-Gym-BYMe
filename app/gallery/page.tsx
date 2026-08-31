"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { galleryItems, galleryCategories, GalleryItem } from "@/lib/data/gallery";
import { CTA } from "@/components/home/CTA";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="bg-[#080808] py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#B7FF00]">
              Visual Showcase
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-tight text-white sm:text-7xl">
              HAYATABAD GYM GALLERY.
            </h1>
            <p className="mt-6 text-lg text-[#A5A5A5] leading-relaxed">
              Explore authentic photos of our training floors, power racks, coaches, and workout energy.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-12 flex flex-wrap gap-2 border-b border-white/10 pb-6">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-black uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#B7FF00] text-black shadow-[0_0_15px_rgba(183,255,0,0.3)]"
                    : "bg-[#121212] text-[#A5A5A5] hover:text-white hover:bg-[#1B1B1B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="bg-[#121212] py-16 border-t border-white/10">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-[#1B1B1B] text-left focus:outline-none focus:ring-2 focus:ring-[#B7FF00]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-85 transition-opacity group-hover:opacity-95" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full bg-[#B7FF00] px-3 py-1 text-[10px] font-black text-black">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-xl font-black uppercase text-white group-hover:text-[#B7FF00]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#A5A5A5] line-clamp-1">{item.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full overflow-hidden rounded-3xl border border-white/20 bg-[#121212] p-4 sm:p-6"
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white font-bold hover:bg-[#B7FF00] hover:text-black transition"
            >
              ✕
            </button>

            <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 px-2">
              <span className="rounded-full bg-[#B7FF00] px-3 py-1 text-xs font-black text-black">
                {lightboxItem.category}
              </span>
              <h3 className="mt-3 text-2xl font-black uppercase text-white">
                {lightboxItem.title}
              </h3>
              <p className="mt-1 text-sm text-[#A5A5A5]">{lightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}

      <CTA />
    </>
  );
}
