"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Client Login", href: "/client-portal" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-stone-950/85 backdrop-blur-md border-b border-stone-800/60 py-3 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="light" size={scrolled ? "sm" : "md"} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 via-sky-400 to-amber-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action & Phone */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:7183417376"
              className="flex items-center text-xs tracking-widest text-stone-300 hover:text-blue-400 transition-colors uppercase"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-blue-400" />
              <span>718-341-7376</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-stone-950 bg-stone-100 hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:hidden">
            <button
              onClick={onOpenBooking}
              className="text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 sm:px-3 py-1.5 bg-stone-100 text-stone-950 font-medium whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-stone-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-stone-950/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        }`}
      >
        <div className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.35em] text-blue-400 font-mono">
            Navigation Menu
          </p>
          <div className="space-y-4 flex flex-col">
            {NAV_LINKS.map((link, idx) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-serif tracking-wide py-2 border-b border-stone-800/60 flex items-center justify-between ${
                    isActive ? "text-blue-400 font-normal pl-2" : "text-stone-300"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans tracking-widest text-stone-600">
                    0{idx + 1}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Drawer Footer */}
        <div className="space-y-6 pt-8 border-t border-stone-800/80">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500 mb-1">
              Studio Location
            </p>
            <p className="text-xs text-stone-300">
              227-12A Merrick Blvd, Laurelton, NY 11413
            </p>
          </div>
          <div className="flex items-center justify-between">
            <a
              href="tel:7183417376"
              className="text-xs tracking-wider text-blue-400 flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-2" />
              718-341-7376
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking?.();
              }}
              className="px-4 py-2 text-xs uppercase tracking-widest bg-stone-100 text-stone-950 font-medium"
            >
              Book Session
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
