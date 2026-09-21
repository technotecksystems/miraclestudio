"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import { FloatingInput } from "@/components/FloatingInput";
import {
  Unlock,
  Download,
  Heart,
  LogOut,
  Check,
} from "lucide-react";

// Mock client private gallery collection
const CLIENT_GALLERY_PHOTOS = [
  {
    id: "cg-1",
    title: "Cathedral Steps First Look",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cg-2",
    title: "Veil in the Ocean Wind",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cg-3",
    title: "Twilight Ballroom Waltz",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cg-4",
    title: "The Manor Terrace Embrace",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cg-5",
    title: "Champagne Celebration & Cheers",
    aspect: "landscape",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "cg-6",
    title: "Intimate Whisper Before Vows",
    aspect: "portrait",
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ClientPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accessCode: "",
    referral: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(["cg-1", "cg-3"]);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleValidate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.accessCode.trim()) newErrors.accessCode = "Gallery access passcode is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidate()) return;

    setIsSubmitting(true);
    // Simulate authentication check
    setTimeout(() => {
      setIsSubmitting(false);
      setIsAuthenticated(true);
    }, 800);
  };

  const handleDemoUnlock = () => {
    setFormData({
      name: "Marcus & Elena Thompson",
      email: "elena.thompson@example.com",
      phone: "718-555-0192",
      accessCode: "MIRACLE-2024",
      referral: "Oheka Castle Wedding Planner",
    });
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsAuthenticated(true);
    }, 600);
  };

  const handleDownloadAll = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  // If client unlocked the private gallery
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-950 text-stone-100 pt-28 pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Client Portal Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-stone-800 gap-4 mb-12">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-mono">
                Verified Client Access
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                {formData.name || "Elena & Marcus Thompson"}
              </h1>
              <p className="text-xs text-stone-400 font-light">
                Private Collection • Captured October 14, 2024 • Oheka Castle, NY
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadAll}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-white text-stone-950 text-xs uppercase tracking-[0.2em] font-medium transition-all"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Preparing ZIP Archive...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Full Gallery (High-Res)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-900 border border-stone-800 text-stone-400 hover:text-white text-xs uppercase tracking-wider transition-all"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Exit Portal</span>
              </button>
            </div>
          </div>

          {/* Gallery Subnav & Stats */}
          <div className="flex items-center justify-between py-3 px-6 bg-stone-900/60 border border-stone-800/80 mb-8 text-xs font-mono text-stone-400">
            <div className="flex items-center space-x-6">
              <span>All Photos ({CLIENT_GALLERY_PHOTOS.length})</span>
              <span className="text-stone-700">|</span>
              <span className="flex items-center gap-1.5 text-rose-400">
                <Heart className="w-3.5 h-3.5 fill-rose-500" />
                Favorites ({favorites.length})
              </span>
            </div>
            <div className="hidden sm:block text-[11px] text-stone-500">
              Passcode: <span className="text-stone-300 font-mono">MIRACLE-2024</span> (Active)
            </div>
          </div>

          {/* Photo Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_GALLERY_PHOTOS.map((photo) => {
              const isFav = favorites.includes(photo.id);

              return (
                <div
                  key={photo.id}
                  className="group relative bg-stone-900 border border-stone-800/80 overflow-hidden shadow-lg transition-all"
                >
                  <div
                    className={`relative w-full ${
                      photo.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={photo.url}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                      {/* Top Action Buttons */}
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => toggleFavorite(photo.id)}
                          className={`p-2 rounded-full backdrop-blur-md transition-all ${
                            isFav
                              ? "bg-rose-600 text-white"
                              : "bg-black/60 text-stone-300 hover:text-white"
                          }`}
                          aria-label="Toggle Favorite"
                        >
                          <Heart className={`w-4 h-4 ${isFav ? "fill-white" : ""}`} />
                        </button>
                        <button
                          onClick={handleDownloadAll}
                          className="p-2 rounded-full bg-black/60 text-stone-300 hover:text-white backdrop-blur-md transition-all"
                          aria-label="Download Photo"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Bottom Title */}
                      <div>
                        <p className="font-serif text-base text-white">{photo.title}</p>
                        <p className="text-[10px] uppercase font-mono text-stone-400">
                          Original RAW 45MP • Print Ready
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Studio Watermark Assurance */}
          <div className="mt-16 text-center text-xs text-stone-500 font-light space-y-1">
            <p>Full commercial and personal reproduction rights granted under Miracle Studio License.</p>
            <p>Client Support: 227-12A Merrick Blvd, Laurelton, NY • 718-341-7376</p>
          </div>
        </div>
      </div>
    );
  }

  // Pixieset / Pic-Time Inspired Premium Centered Portal Card
  return (
    <div className="relative min-h-screen bg-stone-950 flex items-center justify-center px-4 py-28 overflow-hidden">
      {/* Background Ambience / Blurred Photography Depth */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          alt="Studio Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 filter blur-xl scale-110"
        />
        <div className="absolute inset-0 bg-stone-950/85" />
      </div>

      {/* Floating Centered Pixieset/Pic-Time Card */}
      <div className="relative z-10 w-full max-w-lg bg-stone-900/90 border border-stone-800/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8 sm:p-12 text-stone-100">
        {/* Studio Branding */}
        <div className="text-center space-y-4 pb-8 border-b border-stone-800/80">
          <div className="flex justify-center">
            <Logo variant="light" size="md" />
          </div>

          <div className="space-y-1 pt-2">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-mono">
              Private Client Vault
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Access Your Gallery
            </h1>
            <p className="text-xs text-stone-400 font-light max-w-sm mx-auto leading-relaxed">
              Please enter your contact details and gallery passcode provided during your proofing consultation.
            </p>
          </div>
        </div>

        {/* Demo Shortcut Pill */}
        <div className="mt-6 mb-6 p-3 bg-blue-950/40 border border-blue-800/50 flex items-center justify-between text-xs">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-mono tracking-wider text-blue-300 block">
              Demo Access Mode
            </span>
            <span className="text-stone-300 text-xs">
              Test &apos;The Thompson Wedding&apos; portal
            </span>
          </div>
          <button
            type="button"
            onClick={handleDemoUnlock}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] uppercase tracking-wider font-medium transition-all"
          >
            Instant Unlock
          </button>
        </div>

        {/* Registration & Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FloatingInput
            id="client-name"
            label="Full Name *"
            darkTheme
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FloatingInput
              id="client-email"
              type="email"
              label="Email Address *"
              darkTheme
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
            />
            <FloatingInput
              id="client-phone"
              type="tel"
              label="Phone Number *"
              darkTheme
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              error={errors.phone}
            />
          </div>

          <FloatingInput
            id="client-passcode"
            type="password"
            label="Gallery Passcode *"
            darkTheme
            value={formData.accessCode}
            onChange={(e) => setFormData({ ...formData, accessCode: e.target.value })}
            error={errors.accessCode}
          />

          <div>
            <label
              htmlFor="client-referral"
              className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-mono"
            >
              How did you hear about us? (Optional)
            </label>
            <select
              id="client-referral"
              value={formData.referral}
              onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
              className="w-full bg-stone-900/80 border border-stone-800 text-stone-200 text-xs px-3.5 py-3 outline-none focus:border-blue-400"
            >
              <option value="">Please select an option...</option>
              <option value="Wedding Planner / Venue Referral">Wedding Planner / Venue Referral</option>
              <option value="Friend or Family Recommendation">Friend or Family Recommendation</option>
              <option value="Facebook / Social Media">Facebook / Social Media</option>
              <option value="Google Search / Laurelton NY">Google Search / Laurelton NY</option>
              <option value="Passed By Merrick Blvd Studio">Passed By Merrick Blvd Studio</option>
              <option value="Returning Patron">Returning Patron</option>
            </select>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-white hover:bg-stone-100 text-stone-950 text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Authenticating Credentials...</span>
              ) : (
                <>
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Enter Private Gallery</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Security & Studio Footnote */}
        <div className="pt-6 mt-6 border-t border-stone-800/80 text-center space-y-2">
          <p className="text-[11px] text-stone-400 font-light">
            Lost your passkey? Contact our studio concierge directly at{" "}
            <a href="tel:7183417376" className="text-blue-400 hover:underline">
              718-341-7376
            </a>
          </p>
          <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono">
            Miracle Studio • 227-12A Merrick Blvd, Laurelton, NY 11413
          </p>
        </div>
      </div>
    </div>
  );
}
