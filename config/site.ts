export const siteConfig = {
  name: "HAYATABAD GYM",
  tagline: "BUILD YOUR STRONGEST SELF.",
  description:
    "Peshawar's premier dark athletic fitness platform. Dedicated strength training, functional fitness, expert coaching, and modern bodybuilding in Hayatabad.",
  location: {
    address: "Phase 3, Main Jamrud Road, Hayatabad, Peshawar, KP, Pakistan",
    city: "Peshawar",
    area: "Hayatabad",
    country: "Pakistan",
    coordinates: {
      lat: 33.9912,
      lng: 71.4391
    },
    googleMapsUrl: "https://maps.google.com/?q=Hayatabad+Peshawar"
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_GYM_PHONE || "+92 300 1234567",
    whatsapp: process.env.NEXT_PUBLIC_GYM_WHATSAPP || "+923001234567",
    email: process.env.NEXT_PUBLIC_GYM_EMAIL || "info@hayatabadgym.pk",
    whatsappMessage:
      "Hi! I would like to inquire about HAYATABAD GYM membership and free trial."
  },
  hours: {
    monSat: "06:00 AM – 11:00 PM",
    sunday: "04:00 PM – 10:00 PM",
    ladiesTime: "10:00 AM – 01:00 PM (Mon-Sat)"
  },
  social: {
    instagram: "https://instagram.com/hayatabadgym",
    facebook: "https://facebook.com/hayatabadgym",
    youtube: "https://youtube.com/hayatabadgym"
  },
  cta: {
    primary: "JOIN NOW",
    secondary: "BOOK A FREE TRIAL"
  }
};

export type SiteConfig = typeof siteConfig;
