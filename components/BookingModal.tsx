"use client";

import { useState } from "react";
import { X, CheckCircle2, Calendar, Sparkles } from "lucide-react";
import { FloatingInput, FloatingTextarea } from "./FloatingInput";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSession?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultSession = "Weddings",
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: defaultSession,
    preferredDate: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate luxury booking transmission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Ambient Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-stone-950 border border-stone-800 text-stone-100 shadow-2xl p-6 sm:p-10 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-stone-400 hover:text-white p-2 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center border border-blue-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
                Request Received
              </p>
              <h3 className="font-serif text-3xl text-white">
                Thank You, {formData.name || "Valued Client"}
              </h3>
              <p className="text-sm text-stone-400 max-w-md mx-auto font-light leading-relaxed">
                Our Laurelton studio concierge has received your commission request. We will review date availability and contact you within 24 hours to arrange your bespoke consultation.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 bg-stone-100 text-stone-950 text-xs uppercase tracking-[0.25em] font-medium hover:bg-white transition-all"
            >
              Return to Studio
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2 border-b border-stone-800/80 pb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blue-400 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Commission</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Reserve Your Session
              </h2>
              <p className="text-xs text-stone-400 font-light">
                Miracle Photography Studio • 227-12A Merrick Blvd, Laurelton, NY • (718) 341-7376
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FloatingInput
                id="booking-name"
                label="Full Name *"
                required
                darkTheme
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatingInput
                  id="booking-email"
                  type="email"
                  label="Email Address *"
                  required
                  darkTheme
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <FloatingInput
                  id="booking-phone"
                  type="tel"
                  label="Phone Number *"
                  required
                  darkTheme
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-session-type"
                    className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-mono"
                  >
                    Session Specialty
                  </label>
                  <select
                    id="booking-session-type"
                    value={formData.sessionType}
                    onChange={(e) =>
                      setFormData({ ...formData, sessionType: e.target.value })
                    }
                    className="w-full bg-stone-900/80 border border-stone-800 text-stone-200 text-xs px-3.5 py-3 outline-none focus:border-blue-400"
                  >
                    <option value="Weddings">Weddings &amp; Elopements</option>
                    <option value="Baby Portraits">Baby &amp; Newborn Portraits</option>
                    <option value="Events">Gala, Quinceañera &amp; Events</option>
                    <option value="New Collection">Fine Art Editorial Portraits</option>
                    <option value="Commercial">Commercial &amp; Brand</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-mono"
                  >
                    Preferred Date / Season
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDate: e.target.value })
                    }
                    className="w-full bg-stone-900/80 border border-stone-800 text-stone-200 text-xs px-3.5 py-2.5 outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <FloatingTextarea
                id="booking-notes"
                label="Tell Us About Your Vision & Venue"
                rows={3}
                darkTheme
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-50"
                >
                  {loading ? "Transmitting Reservation..." : "Submit Reservation Request"}
                </button>
              </div>

              <p className="text-center text-[10px] text-stone-500 font-mono uppercase tracking-wider">
                Direct phone inquiries welcomed anytime: 718-341-7376
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
