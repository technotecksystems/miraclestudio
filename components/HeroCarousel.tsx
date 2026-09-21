"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  category: string;
  tagline: string;
  subtitle: string;
  location: string;
  accent: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90",
    category: "Weddings & Ceremonies",
    tagline: "Poetry in Motion. Preserved Forever.",
    subtitle: "High-end wedding photojournalism and fine-art bridal portraiture across New York & destination estates.",
    location: "Hudson Valley, NY",
    accent: "The Hudson Solstice",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=90",
    category: "Editorial Portraits",
    tagline: "Sculpted by Light. Defined by Grace.",
    subtitle: "Masterful editorial studio portraiture celebrating human depth, poise, and individual legacy.",
    location: "Miracle Studio Suite",
    accent: "The Chiaroscuro Series",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=2000&q=90",
    category: "Newborn & Milestone Portraits",
    tagline: "The Fragility of First Whispers.",
    subtitle: "Serene, organic baby portraiture designed to freeze moments of wonder before they become memories.",
    location: "Laurelton Studio Suite A",
    accent: "The Heirloom Wool Studies",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=90",
    category: "Galas & Grand Celebrations",
    tagline: "The Spirit of Celebration, Undiluted.",
    subtitle: "Immersive event documentary capturing the kinetic elegance of society galas and grand milestones.",
    location: "The Plaza Hotel, NYC",
    accent: "The Metropolitan Gala",
  },
];

interface HeroCarouselProps {
  onOpenBooking: () => void;
}

export default function HeroCarousel({ onOpenBooking }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const activeSlide = HERO_SLIDES[current];

  return (
    <section className="relative w-full h-screen h-[100svh] min-h-[580px] max-h-[1080px] flex flex-col pt-20 sm:pt-28 lg:pt-32 pb-5 sm:pb-8 bg-stone-950 overflow-hidden select-none max-w-full">
      {/* Background Images with smooth cinematic crossfade */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.tagline}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`object-cover object-center transform transition-transform duration-10000 ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/60" />
            <div className="absolute inset-0 bg-radial-vignette opacity-70" />
          </div>
        );
      })}

      {/* Main Foreground Content (Vertically centered within available space between navbar and bottom bar) */}
      <div className="relative z-20 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="w-full max-w-3xl">
          {/* Eyebrow Label: Dynamic category + Location (wraps cleanly, never clips) */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] font-mono text-blue-400 mb-4 sm:mb-5 max-w-full">
            <span className="font-medium whitespace-normal">{activeSlide.category}</span>
            <span className="text-stone-500 font-sans">•</span>
            <span className="text-stone-300 font-light whitespace-normal">{activeSlide.location}</span>
          </div>

          {/* Editorial Headline (Enlarged to 40px with generous leading for fine-art print presence) */}
          <h1 className="font-serif text-[40px] sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[72px] text-white font-normal leading-[1.14] sm:leading-[1.08] tracking-tight mb-4 sm:mb-6 max-w-full break-words">
            {activeSlide.tagline}
          </h1>

          {/* Subtext establishing studio's specialty - legible, not footnote-sized */}
          <p className="text-[15px] sm:text-base lg:text-lg text-stone-300 font-light max-w-2xl leading-relaxed mb-6 sm:mb-8 line-clamp-3 sm:line-clamp-none">
            {activeSlide.subtitle}
          </p>

          {/* CTA Buttons - Full-width stacked on mobile with generous spacing */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
            <Link
              href="/gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-white hover:bg-stone-100 text-stone-950 text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] group"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-stone-950/70 hover:bg-stone-900 border border-stone-600 hover:border-stone-400 text-white text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-md transition-all"
            >
              <span>Book a Session</span>
            </button>
          </div>

          {/* Supporting Heritage Divider & Pulse Indicator (Naturally bridges vertical space above bottom bar) */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-stone-800/70 max-w-sm sm:max-w-md flex items-center justify-between text-[11px] font-mono text-stone-400">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="uppercase tracking-[0.2em] text-[10px] sm:text-[11px] text-stone-300">
                Est. Serving Laurelton Families
              </span>
            </div>
            <span className="text-stone-500 uppercase tracking-widest text-[9px] sm:text-[10px]">
              Merrick Blvd Studio
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Status / Navigation Bar (Pinned cleanly at the bottom) */}
      <div className="relative z-20 shrink-0 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="pt-3.5 sm:pt-5 border-t border-stone-800/80 flex items-center justify-between gap-3 text-xs font-mono text-stone-400 max-w-full">
          {/* GROUP 1 (LEFT): Slide Counter (01/04) + Progress Bar only */}
          <div className="flex items-center space-x-3 sm:space-x-5 shrink-0">
            <div className="flex items-center space-x-1.5 text-xs">
              <span className="text-white font-medium text-xs sm:text-sm">
                0{current + 1}
              </span>
              <span className="text-stone-600">/</span>
              <span className="text-stone-400 text-xs">0{HERO_SLIDES.length}</span>
            </div>

            {/* Progress Bar Indicators */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === current
                      ? "w-6 sm:w-10 bg-blue-400"
                      : "w-2 sm:w-3 bg-stone-700 hover:bg-stone-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* GROUP 2 (RIGHT): Location Text + Prev/Next Arrows grouped together */}
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            <span className="hidden sm:inline-block tracking-wider uppercase text-[10px] sm:text-xs text-stone-400 font-mono">
              Miracle Studio • Merrick Blvd, Laurelton NY
            </span>
            <span className="inline-block sm:hidden tracking-wider uppercase text-[10px] text-stone-400 font-mono">
              Laurelton, NY
            </span>
            <div className="flex items-center space-x-1 border-l border-stone-800 pl-2 sm:pl-3.5">
              <button
                onClick={prevSlide}
                className="p-1.5 sm:p-2 border border-stone-800 hover:border-stone-500 hover:text-white bg-stone-900/60 backdrop-blur transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-1.5 sm:p-2 border border-stone-800 hover:border-stone-500 hover:text-white bg-stone-900/60 backdrop-blur transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
