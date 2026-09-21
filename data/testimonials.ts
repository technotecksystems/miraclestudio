export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  category: string;
  location: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Miracle Photography turned our wedding day into a timeless work of fine art. The way they harnessed natural light at Oheka Castle left our family in tears of gratitude. True masters of their craft.",
    author: "Elena & Marcus Vance",
    role: "Bride & Groom",
    category: "Weddings",
    location: "Long Island, NY",
    date: "October 2024",
  },
  {
    id: "2",
    quote:
      "Finding a photographer who can capture the fragility and stillness of a newborn without fussy, artificial props is rare. The studio team created a serene oasis and our prints are heirlooms forever.",
    author: "Sophia & David Chen",
    role: "Parents of Baby Leo",
    category: "Baby Portraits",
    location: "Laurelton, Queens",
    date: "January 2025",
  },
  {
    id: "3",
    quote:
      "We hired Miracle for our foundation's 25th Annual Gala in Manhattan. Their discreet, documentary yet ultra-luxe editorial approach gave us imagery that rivaled Vanity Fair party pages.",
    author: "Ambassador Julian Ross",
    role: "Executive Director",
    category: "High-Society Events",
    location: "Manhattan, NY",
    date: "December 2024",
  },
  {
    id: "4",
    quote:
      "From the initial consultation at their Merrick Blvd studio to the private digital gallery reveal, every step was white-glove perfection. They don't just take pictures; they bottle moments.",
    author: "Kendra Washington",
    role: "Editorial & Milestone Portrait Client",
    category: "Fine Art Portrait",
    location: "Floral Park, NY",
    date: "February 2025",
  },
];
