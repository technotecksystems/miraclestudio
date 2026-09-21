"use client";

import { useEffect } from "react";
import Image from "next/image";
import { PhotoItem } from "@/data/galleryData";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag } from "lucide-react";

interface LightboxProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
  onBookStyle?: (category: string) => void;
}

export default function Lightbox({
  photo,
  photos,
  onClose,
  onSelectPhoto,
  onBookStyle,
}: LightboxProps) {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 px-6 py-5 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          <span className="text-xs uppercase tracking-[0.25em] text-blue-400 font-mono">
            {photo.category}
          </span>
          <span className="text-stone-600">•</span>
          <span className="text-xs tracking-widest text-stone-400 font-mono">
            {currentIndex + 1} of {photos.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="text-stone-300 hover:text-white p-2 transition-colors flex items-center gap-2 group"
          aria-label="Close Lightbox"
        >
          <span className="text-[11px] uppercase tracking-widest hidden sm:inline text-stone-400 group-hover:text-white">
            Close (Esc)
          </span>
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-stone-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full border border-stone-800 backdrop-blur-md transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-stone-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full border border-stone-800 backdrop-blur-md transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div
        className="relative max-w-6xl w-full h-[85vh] mx-auto px-4 sm:px-12 flex flex-col lg:flex-row items-center justify-center gap-8 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Canvas */}
        <div className="relative w-full h-full flex-1 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-h-[70vh] lg:max-h-[82vh]">
            <Image
              src={photo.image}
              alt={photo.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Editorial Details Panel */}
        <div className="w-full lg:w-80 flex flex-col justify-between bg-stone-950/80 border border-stone-800/80 p-6 backdrop-blur-md text-stone-200 shrink-0">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-mono mb-1">
                Miracle Archive
              </p>
              <h2 className="font-serif text-2xl text-white font-normal leading-snug">
                {photo.title}
              </h2>
            </div>

            {photo.description && (
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {photo.description}
              </p>
            )}

            <div className="space-y-2 pt-2 border-t border-stone-800 text-xs text-stone-300 font-light">
              {photo.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{photo.location}</span>
                </div>
              )}
              {photo.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Captured {photo.year}</span>
                </div>
              )}
            </div>

            {photo.tags && photo.tags.length > 0 && (
              <div className="pt-2 flex flex-wrap gap-1.5">
                {photo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-stone-900 text-stone-400 border border-stone-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-stone-800/80 mt-6 space-y-2">
            <button
              onClick={() => onBookStyle?.(photo.category)}
              className="w-full py-3 bg-stone-100 hover:bg-white text-stone-950 text-xs uppercase tracking-[0.2em] font-medium transition-all text-center"
            >
              <span>Inquire About This Style</span>
            </button>
            <p className="text-[10px] text-stone-500 text-center font-mono uppercase tracking-wider">
              Studio:{" "}
              <a href="tel:7183417376" className="text-stone-400 hover:text-white underline">
                718-341-7376
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
