"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingModal from "./BookingModal";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSession, setBookingSession] = useState("Weddings");

  const handleOpenBooking = (sessionType?: string) => {
    if (sessionType) setBookingSession(sessionType);
    setBookingOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone-950 text-stone-100">
      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <main className="flex-1 w-full">{children}</main>
      <Footer onOpenBooking={() => handleOpenBooking()} />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultSession={bookingSession}
      />
    </div>
  );
}
