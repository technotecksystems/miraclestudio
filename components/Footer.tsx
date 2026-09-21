"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Phone, MapPin, Mail, Clock, ArrowUpRight, Share2 } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800/80 pt-20 pb-12 selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Editorial Teaser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800/60">
          <div className="lg:col-span-6 space-y-6">
            <Logo variant="light" size="lg" />
            <p className="font-serif text-xl sm:text-2xl text-stone-200 font-light leading-relaxed max-w-lg">
              Preserving life&apos;s luminous milestones with editorial grace, timeless composure, and artistic reverence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-stone-400 font-mono">
                Now Reserving 2025 – 2026 Celebrations &amp; Studio Sessions
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 lg:items-end">
            <div className="text-left lg:text-right space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-blue-400 font-mono">
                Bespoke Consultations
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-100">
                Have a moment in mind?
              </h3>
              <p className="text-sm text-stone-400 max-w-md font-light">
                We accept a limited number of commissions each season to ensure uncompromising dedication to each client story.
              </p>
            </div>

            <div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-stone-100 to-stone-200 hover:from-white hover:to-white text-stone-950 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] group"
              >
                <span>Inquire About A Date</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-stone-800/60 text-sm">
          {/* Col 1: Studio Headquarters */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono">
              The Studio
            </p>
            <div className="space-y-3 font-light text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  227-12A Merrick Blvd<br />
                  Laurelton, NY 11413<br />
                  United States
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:7183417376"
                  className="hover:text-white transition-colors"
                >
                  718-341-7376
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:concierge@miraclestudiony.com"
                  className="hover:text-white transition-colors"
                >
                  concierge@miraclestudiony.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Studio Hours */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono">
              Studio Hours
            </p>
            <div className="space-y-2 font-light text-stone-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="font-normal text-stone-200">By Appointment &amp; Walk-in</span>
              </div>
              <p className="text-xs text-stone-400 pt-1">
                Tuesday – Saturday: 10:00 AM – 6:30 PM
              </p>
              <p className="text-xs text-stone-400">
                Sunday: 11:00 AM – 5:00 PM
              </p>
              <p className="text-xs text-stone-400">
                Monday: Private Location Shoots
              </p>
            </div>
          </div>

          {/* Col 3: Navigation & Portfolios */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono">
              Portfolios &amp; Client Access
            </p>
            <ul className="space-y-2.5 font-light">
              <li>
                <Link
                  href="/gallery?category=Weddings"
                  className="text-stone-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Weddings Collection</span>
                  <span className="text-[10px] text-stone-600">01</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery?category=Baby+Portraits"
                  className="text-stone-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Baby &amp; Newborn Portraits</span>
                  <span className="text-[10px] text-stone-600">02</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery?category=Events"
                  className="text-stone-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Gala &amp; Milestone Events</span>
                  <span className="text-[10px] text-stone-600">03</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery?category=New+Collection"
                  className="text-stone-300 hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>New Fine Art Collection</span>
                  <span className="text-[10px] text-stone-600">04</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/client-portal"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors text-xs font-mono uppercase tracking-wider"
                >
                  <span>Client Gallery Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community & Social */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-mono">
              Connect With Us
            </p>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Follow behind the lens for editorial previews, bridal spotlights, and recent studio sessions in Laurelton, NY.
            </p>
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 bg-blue-600/15 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-600/30 rounded-none transition-all group"
              >
                <FacebookIcon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs uppercase tracking-wider font-medium">Like Us on Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2.5 bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700 rounded-none transition-all group"
              >
                <InstagramIcon className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs uppercase tracking-wider">Follow @miraclestudiony</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Zero third-party powered-by branding) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 space-y-4 md:space-y-0">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Miracle Photography Studio. All rights reserved. Registered trademark in the State of New York.
          </p>
          <div className="flex items-center space-x-6 text-[11px] tracking-wider uppercase font-mono">
            <span>Laurelton, Queens NYC</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">
              Privacy &amp; Terms
            </Link>
            <span>•</span>
            <Link href="/client-portal" className="hover:text-stone-300 transition-colors">
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
