"use client";

import { useState } from "react";
import { FloatingInput, FloatingTextarea } from "@/components/FloatingInput";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    sessionType: "Weddings",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      sessionType: "Weddings",
      subject: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="pt-28 pb-32 bg-stone-950 text-stone-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Our Studio</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-[1.1]">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-stone-400 font-light leading-relaxed">
            Whether planning an intimate Long Island wedding, scheduling a newborn heirloom portrait, or visiting our Merrick Boulevard studio in Laurelton, we look forward to meeting you.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details, Social, & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Studio Info Card */}
            <div className="bg-stone-900/70 border border-stone-800 p-8 space-y-6">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-mono">
                  Atelier Address
                </p>
                <h3 className="font-serif text-2xl text-white">
                  Miracle Photography Studio
                </h3>
              </div>

              <div className="space-y-4 font-light text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-normal">227-12A Merrick Blvd</p>
                    <p className="text-stone-400">Laurelton, NY 11413</p>
                    <p className="text-stone-500 text-xs mt-0.5">United States</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <a
                      href="tel:7183417376"
                      className="text-white hover:text-blue-400 transition-colors font-mono text-sm"
                    >
                      718-341-7376
                    </a>
                    <span className="text-stone-500 text-xs block">Studio line &amp; inquiries</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <a
                      href="mailto:concierge@miraclestudiony.com"
                      className="text-white hover:text-blue-400 transition-colors text-sm"
                    >
                      concierge@miraclestudiony.com
                    </a>
                    <span className="text-stone-500 text-xs block">24-hour response concierge</span>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-4 border-t border-stone-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Studio Hours</span>
                </div>
                <div className="text-xs text-stone-300 space-y-1 font-light">
                  <p className="flex justify-between">
                    <span>Tuesday – Saturday</span>
                    <span className="text-stone-400 font-mono">10:00 AM – 6:30 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-stone-400 font-mono">11:00 AM – 5:00 PM</span>
                  </p>
                  <p className="flex justify-between text-stone-500">
                    <span>Monday</span>
                    <span className="font-mono">Location Shoots Only</span>
                  </p>
                </div>
              </div>

              {/* Social Channels with "Like Us on Facebook" */}
              <div className="pt-4 border-t border-stone-800/80 space-y-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-mono">
                  Follow &amp; Connect
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Like Us on Facebook button as requested */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-2.5 bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-600/40 transition-all text-xs uppercase tracking-wider font-medium group"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>Like Us on Facebook</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-2.5 bg-stone-900 border border-stone-800 text-stone-300 hover:text-white hover:border-stone-700 transition-all text-xs uppercase tracking-wider font-medium group"
                  >
                    <InstagramIcon className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Live Google Map for Laurelton, NY 11413 */}
            <div className="bg-stone-900/70 border border-stone-800 p-2 overflow-hidden space-y-3">
              <div className="px-4 pt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-blue-400 font-mono">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Interactive Map • Laurelton, NY</span>
                </div>
                <a
                  href="https://maps.google.com/?q=227-12A+Merrick+Blvd,+Laurelton,+NY+11413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-stone-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full h-72 bg-stone-950">
                <iframe
                  title="Miracle Photography Studio Location Map"
                  src="https://maps.google.com/maps?q=227-12A+Merrick+Blvd,+Laurelton,+NY+11413&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.05) opacity(0.9)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="px-4 pb-2 text-[10px] font-mono text-stone-500 uppercase tracking-widest text-center">
                Merrick Blvd &amp; 227th St • Convenient parking available
              </p>
            </div>
          </div>

          {/* Right Column: Styled Modern Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-900/70 border border-stone-800 p-8 sm:p-12 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center border border-blue-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
                      Inquiry Dispatched
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-white">
                      Thank You, {formData.fullName}
                    </h2>
                    <p className="text-sm text-stone-300 font-light max-w-md mx-auto leading-relaxed">
                      Your inquiry has been directly routed to our principal photographer at Miracle Photography Studio. We will be in touch shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3.5 bg-white text-stone-950 text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-100 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 pb-4 border-b border-stone-800/80">
                    <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
                      Private Inquiry
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                      Commission an Art Piece
                    </h2>
                    <p className="text-xs text-stone-400 font-light">
                      Please complete the details below. For urgent reservations or event dates within 30 days, call 718-341-7376 directly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <FloatingInput
                      id="contact-name"
                      label="Full Name *"
                      required
                      darkTheme
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingInput
                        id="contact-email"
                        type="email"
                        label="Email Address *"
                        required
                        darkTheme
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      <FloatingInput
                        id="contact-phone"
                        type="tel"
                        label="Phone Number"
                        darkTheme
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-session"
                          className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-mono"
                        >
                          Subject / Session Specialty
                        </label>
                        <select
                          id="contact-session"
                          value={formData.sessionType}
                          onChange={(e) =>
                            setFormData({ ...formData, sessionType: e.target.value })
                          }
                          className="w-full bg-stone-900/80 border border-stone-800 text-stone-200 text-xs px-3.5 py-3 outline-none focus:border-blue-400"
                        >
                          <option value="Weddings">Weddings &amp; Elopements</option>
                          <option value="Baby Portraits">Baby &amp; Newborn Milestone</option>
                          <option value="Events">Galas &amp; Quinceañeras</option>
                          <option value="New Collection">Fine Art Editorial Series</option>
                          <option value="Commercial">Commercial &amp; Headshots</option>
                          <option value="General Inquiry">General Studio Inquiry</option>
                        </select>
                      </div>

                      <FloatingInput
                        id="contact-subject"
                        label="Subject Line *"
                        required
                        darkTheme
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                    </div>

                    <FloatingTextarea
                      id="contact-message"
                      label="Your Message or Event Details *"
                      rows={5}
                      required
                      darkTheme
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-white hover:bg-stone-100 text-stone-950 text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] disabled:opacity-50 flex items-center justify-center gap-2 group"
                    >
                      {loading ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Transmit Inquiry</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono pt-2">
                    <span>Laurelton, NY 11413</span>
                    <span>Direct: 718-341-7376</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
