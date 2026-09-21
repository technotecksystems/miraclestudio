"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import { GALLERY_PHOTOS } from "@/data/galleryData";
import { TESTIMONIALS } from "@/data/testimonials";
import Lightbox from "@/components/Lightbox";
import BookingModal from "@/components/BookingModal";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Camera,
  Heart,
  Award,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

export default function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedSessionType, setSelectedSessionType] = useState("Weddings");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Curate 4 featured works for the homepage teaser
  const featuredWorks = [
    GALLERY_PHOTOS.find((p) => p.id === "w-1")!,
    GALLERY_PHOTOS.find((p) => p.id === "b-1")!,
    GALLERY_PHOTOS.find((p) => p.id === "e-1")!,
    GALLERY_PHOTOS.find((p) => p.id === "nc-1")!,
  ];

  const handleOpenBooking = (sessionType: string = "Weddings") => {
    setSelectedSessionType(sessionType);
    setBookingOpen(true);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Full-Bleed Hero Carousel */}
      <HeroCarousel onOpenBooking={() => handleOpenBooking("Weddings")} />

      {/* 2. Editorial Studio Philosophy / Specialty Statement */}
      <section className="relative py-24 sm:py-32 bg-stone-950 text-stone-100 border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Accent Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                <span>Laurelton, New York</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.15]">
                Where genuine emotion meets editorial composure.
              </h2>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-widest text-stone-500 font-mono">
                  Established 2011 • Merrick Boulevard Atelier
                </p>
              </div>
            </div>

            {/* Right Detailed Narrative */}
            <div className="lg:col-span-8 space-y-6 text-stone-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                At <strong className="text-white font-normal">Miracle Photography Studio</strong>, we reject stiff, assembly-line posing and fleeting digital gimmicks. We believe the photographs you commission today are the heirlooms your children and grandchildren will hold in their hands half a century from now.
              </p>
              <p>
                From cathedral veils catching ocean breezes in Long Island to the tender hush of a newborn sleeping in our sunlit Merrick Blvd studio, we capture the nuances of human connection with cinematic reverence, luminous natural optics, and quiet luxury.
              </p>

              {/* Specialty Badges Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-800/80">
                <div className="space-y-2">
                  <div className="text-blue-400 font-serif text-2xl">01.</div>
                  <h4 className="text-white font-serif text-base tracking-wide">
                    Weddings &amp; Elopements
                  </h4>
                  <p className="text-xs text-stone-400 leading-normal">
                    Editorial documentary and fine-art couple portraiture throughout New York, Long Island, and destination retreats.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-blue-400 font-serif text-2xl">02.</div>
                  <h4 className="text-white font-serif text-base tracking-wide">
                    Baby &amp; Milestone
                  </h4>
                  <p className="text-xs text-stone-400 leading-normal">
                    Serene, prop-free newborn studies celebrating organic beauty and the purest family bonds.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-blue-400 font-serif text-2xl">03.</div>
                  <h4 className="text-white font-serif text-base tracking-wide">
                    Galas &amp; Fine Art
                  </h4>
                  <p className="text-xs text-stone-400 leading-normal">
                    High-society event coverage, executive portraits, and our bespoke Noir Glass private editorial collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Contrast Warm Transition: Featured Portfolios */}
      <section className="py-24 sm:py-32 bg-[#faf7f2] text-stone-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-stone-300/80 gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-blue-700 font-mono">
                Curated Portfolios
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 font-normal">
                Featured Collections
              </h2>
              <p className="text-sm sm:text-base text-stone-600 font-light">
                Explore our signature works across four distinct studio disciplines.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-stone-900 hover:text-blue-700 transition-colors group"
            >
              <span>Explore Complete Archive</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4-Card Editorial Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredWorks.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer flex flex-col space-y-4"
                onClick={() => setSelectedPhoto(item)}
              >
                {/* Image Container with Luxury Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-blue-300 font-mono mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg leading-snug">{item.title}</h4>
                    <p className="text-xs text-stone-300 font-light mt-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-blue-300" />
                      <span>View in Lightbox</span>
                    </p>
                  </div>

                  {/* Corner Number */}
                  <div className="absolute top-4 right-4 bg-stone-950/70 text-white text-[10px] font-mono px-2 py-0.5 backdrop-blur-md">
                    0{index + 1}
                  </div>
                </div>

                {/* Card Meta Below */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-mono uppercase tracking-wider">
                    <span>{item.category}</span>
                    <span>{item.year || "2024"}</span>
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Category Quick Jump */}
          <div className="mt-16 pt-10 border-t border-stone-300/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-stone-600">
            <span>Filter By Collection:</span>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/gallery?category=Weddings"
                className="px-4 py-2 bg-stone-200/70 hover:bg-stone-900 hover:text-white transition-all"
              >
                Weddings
              </Link>
              <Link
                href="/gallery?category=Baby+Portraits"
                className="px-4 py-2 bg-stone-200/70 hover:bg-stone-900 hover:text-white transition-all"
              >
                Baby Portraits
              </Link>
              <Link
                href="/gallery?category=Events"
                className="px-4 py-2 bg-stone-200/70 hover:bg-stone-900 hover:text-white transition-all"
              >
                Events &amp; Galas
              </Link>
              <Link
                href="/gallery?category=New+Collection"
                className="px-4 py-2 bg-stone-200/70 hover:bg-stone-900 hover:text-white transition-all"
              >
                New Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Short "About the Studio" Teaser Section */}
      <section className="py-24 sm:py-32 bg-stone-900 text-stone-100 border-y border-stone-800">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-10">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>About Miracle Photography</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight">
              Crafting visual heirlooms in the heart of Laurelton.
            </h2>
          </div>

          <div className="space-y-5 text-stone-300 font-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Located prominently at <strong className="text-white font-normal">227-12A Merrick Blvd, Laurelton, NY</strong>, Miracle Photography Studio was founded on a singular conviction: that photographic artistry should not feel sterile, scripted, or outdated.
            </p>
            <p>
              Over the past decade and a half, our atelier has evolved into Queens and Long Island&apos;s premier sanctuary for discerning couples and families. We combine master-level camera craftsmanship with high-end digital color grading and museum-grade archival prints that last for generations.
            </p>
          </div>

          {/* Studio Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-stone-800/80 max-w-3xl mx-auto">
            <div className="space-y-1">
              <div className="font-serif text-4xl text-white font-light">1,200+</div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                Weddings &amp; Milestones
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-4xl text-white font-light">15+ Years</div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                Laurelton NYC Heritage
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-4xl text-blue-400 font-light">4.9 / 5★</div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                Client Praise
              </div>
            </div>
          </div>

          {/* Action Link & Location Tag */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <button
              onClick={() => handleOpenBooking("Weddings")}
              className="px-8 py-3.5 bg-white hover:bg-stone-100 text-stone-950 text-xs uppercase tracking-[0.25em] font-medium transition-all"
            >
              Schedule Studio Visit
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-300 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>227-12A Merrick Blvd, Laurelton, NY</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Testimonials & Client Acclaim Strip */}
      <section className="py-24 sm:py-32 bg-stone-950 text-stone-100 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
              Client Acclaim
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal">
              Words From Our Patrons
            </h2>
            <p className="text-sm text-stone-400 font-light">
              Stories from couples, parents, and community leaders who trusted Miracle Studio with their most cherished milestones.
            </p>
          </div>

          {/* Testimonial Active Display */}
          <div className="relative max-w-4xl mx-auto bg-stone-900/60 border border-stone-800/80 p-8 sm:p-14 backdrop-blur-md">
            <Quote className="w-12 h-12 text-blue-500/20 absolute top-8 left-8 -z-0 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-stone-100 font-light leading-relaxed italic">
                &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-stone-800 gap-4">
                <div>
                  <h4 className="font-serif text-lg text-white">
                    {TESTIMONIALS[activeTestimonial].author}
                  </h4>
                  <p className="text-xs text-stone-400 font-light">
                    {TESTIMONIALS[activeTestimonial].role} • {TESTIMONIALS[activeTestimonial].location}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() =>
                      setActiveTestimonial(
                        (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                      )
                    }
                    className="p-2.5 border border-stone-700 hover:border-stone-500 hover:text-white text-stone-400 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-stone-500">
                    0{activeTestimonial + 1} / 0{TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
                    }
                    className="p-2.5 border border-stone-700 hover:border-stone-500 hover:text-white text-stone-400 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Grand Call-To-Action Ribbon */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-stone-950 to-blue-950 border-b border-stone-800 text-stone-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
              Ready To Create Magic?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Let us preserve your next chapter with timeless grace.
            </h2>
            <p className="text-sm text-stone-400 font-light">
              Visit us at 227-12A Merrick Blvd, Laurelton, NY or reach us directly at 718-341-7376.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleOpenBooking("Weddings")}
              className="px-8 py-4 bg-white hover:bg-stone-100 text-stone-950 text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-xl"
            >
              Book a Session
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 bg-stone-900/80 border border-stone-700 hover:border-stone-500 text-white text-xs uppercase tracking-[0.25em] font-medium transition-all"
            >
              Contact Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        photo={selectedPhoto}
        photos={featuredWorks}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        onBookStyle={(cat) => {
          setSelectedPhoto(null);
          handleOpenBooking(cat);
        }}
      />

      {/* Direct Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultSession={selectedSessionType}
      />
    </div>
  );
}
