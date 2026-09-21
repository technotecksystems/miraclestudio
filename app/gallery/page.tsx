"use client";

import { useState, useMemo, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { GALLERY_PHOTOS, GALLERY_CATEGORIES, PhotoItem, GalleryCategory } from "@/data/galleryData";
import Lightbox from "@/components/Lightbox";
import BookingModal from "@/components/BookingModal";
import { Eye } from "lucide-react";

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") as GalleryCategory | null;
  const validUrlCategory = categoryFromUrl && GALLERY_CATEGORIES.includes(categoryFromUrl) ? categoryFromUrl : null;

  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | null>(null);
  const activeCategory = selectedCategory ?? validUrlCategory ?? "All";

  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [sessionToBook, setSessionToBook] = useState("Weddings");

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  const handleBookFromStyle = (category: string) => {
    setSessionToBook(category);
    setBookingOpen(true);
  };

  return (
    <div className="pt-28 pb-32 bg-stone-950 text-stone-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Gallery Editorial Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-mono">
            Master Archives
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-[1.1]">
            Curated Portfolios
          </h1>
          <p className="text-base sm:text-lg text-stone-400 font-light leading-relaxed">
            From monumental cathedral vows to quiet newborn breaths and vibrant NYC galas. Every frame captured with thoughtful precision and timeless color.
          </p>
        </div>

        {/* Category Tabs / Filters */}
        <div className="sticky top-20 z-30 bg-stone-950/90 backdrop-blur-md py-4 border-y border-stone-800/80 mb-12">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-3 sm:gap-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {GALLERY_CATEGORIES.map((category) => {
                const count =
                  category === "All"
                    ? GALLERY_PHOTOS.length
                    : GALLERY_PHOTOS.filter((p) => p.category === category).length;
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative whitespace-nowrap px-4 sm:px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "bg-white text-stone-950 shadow-md"
                        : "bg-stone-900/60 text-stone-400 hover:text-white hover:bg-stone-800/80 border border-stone-800/80"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-none ${
                        isActive ? "bg-stone-200 text-stone-900" : "bg-stone-800 text-stone-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center text-xs text-stone-500 font-mono uppercase tracking-widest">
              <span>Showing {filteredPhotos.length} Works</span>
            </div>
          </div>
        </div>

        {/* Category Intro Teaser Card */}
        {activeCategory !== "All" && (
          <div className="mb-10 p-6 sm:p-8 bg-stone-900/70 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-blue-400 font-mono">
                Featured Portfolio Focus
              </p>
              <h3 className="font-serif text-xl text-white">
                {activeCategory} Portfolio
              </h3>
              <p className="text-xs text-stone-400 font-light mt-0.5">
                {activeCategory === "Weddings" &&
                  "Documentary elegance and fine art romance across Long Island, NYC, and upstate New York."}
                {activeCategory === "Baby Portraits" &&
                  "Pure, organic newborn and milestone portraiture in our Laurelton studio sanctuary."}
                {activeCategory === "Events" &&
                  "High-profile galas, quinceañeras, and corporate celebrations captured with cinematic vibrancy."}
                {activeCategory === "Editorial Portraits" &&
                  "Our signature fine art editorial series exploring sculptural chiaroscuro lighting and modern executive poise."}
              </p>
            </div>

            <button
              onClick={() => handleBookFromStyle(activeCategory)}
              className="whitespace-nowrap px-5 py-2.5 bg-stone-100 hover:bg-white text-stone-950 text-xs uppercase tracking-[0.2em] font-medium transition-all"
            >
              Commission {activeCategory}
            </button>
          </div>
        )}

        {/* Masonry / Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => {
            const isTall = photo.aspect === "portrait";

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group cursor-pointer relative overflow-hidden bg-stone-900 border border-stone-800/80 transition-all duration-500 hover:border-stone-600 hover:shadow-2xl ${
                  isTall ? "sm:row-span-2" : ""
                }`}
              >
                {/* Image Container */}
                <div
                  className={`relative w-full overflow-hidden ${
                    isTall ? "aspect-[3/4] sm:aspect-[4/5] h-full min-h-[380px]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-blue-400 font-mono block">
                        {photo.category} • {photo.location}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-white leading-snug">
                        {photo.title}
                      </h3>
                      {photo.description && (
                        <p className="text-xs text-stone-300 font-light line-clamp-2">
                          {photo.description}
                        </p>
                      )}
                      <div className="pt-2 flex items-center text-xs text-blue-300 font-mono uppercase tracking-wider">
                        <Eye className="w-3.5 h-3.5 mr-1.5" />
                        <span>View Full Artwork</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges on Top */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-stone-950/70 text-stone-300 font-mono backdrop-blur-md">
                      {photo.category}
                    </span>
                    {photo.featured && (
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-blue-600/90 text-white font-mono backdrop-blur-md">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Bottom Studio Note & Inquire Banner */}
        <div className="mt-24 p-8 sm:p-12 bg-stone-900/60 border border-stone-800 text-stone-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-mono">
              Archival Fine Art &amp; Albums
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Every photograph is hand-finished for museum-grade permanence.
            </h3>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              We provide Italian leather-bound heirloom albums, deep acrylic wall art, and archival velvet cotton prints right from our Laurelton, NY laboratory.
            </p>
          </div>

          <button
            onClick={() => {
              setSessionToBook("Weddings");
              setBookingOpen(true);
            }}
            className="whitespace-nowrap px-8 py-3.5 bg-white text-stone-950 text-xs uppercase tracking-[0.25em] font-medium hover:bg-stone-100 transition-all shadow-xl"
          >
            Inquire For Your Date
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        onBookStyle={(cat) => handleBookFromStyle(cat)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultSession={sessionToBook}
      />
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-950 text-white flex items-center justify-center">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Loading Miracle Gallery...
          </p>
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
