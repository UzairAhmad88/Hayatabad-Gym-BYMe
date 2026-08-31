export interface GalleryItem {
  id: string;
  title: string;
  category: "GYM" | "TRAINING" | "EQUIPMENT" | "MEMBERS" | "EVENTS";
  image: string;
  caption: string;
}

export const galleryCategories = [
  "ALL",
  "GYM",
  "TRAINING",
  "EQUIPMENT",
  "MEMBERS",
  "EVENTS"
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Main Power Racks Area",
    category: "GYM",
    image: "/images/hero/hero-bg.jpg",
    caption: "State-of-the-art power rack setup with ambient dark athletic lighting."
  },
  {
    id: "g2",
    title: "Barbell Deadlift Training",
    category: "TRAINING",
    image: "/images/programs/strength.jpg",
    caption: "Member executing deadlift session under head coach supervision."
  },
  {
    id: "g3",
    title: "Heavy Dumbbell Rack",
    category: "EQUIPMENT",
    image: "/images/facilities/freeweights.jpg",
    caption: "Calibrated dumbbells up to 60kg for intense hypertrophic training."
  },
  {
    id: "g4",
    title: "1-on-1 Personal Coaching",
    category: "MEMBERS",
    image: "/images/trainers/trainer-male.jpg",
    caption: "Dedicated coach analyzing form and movement mechanics."
  },
  {
    id: "g5",
    title: "Ladies Group Conditioning",
    category: "EVENTS",
    image: "/images/trainers/trainer-female.jpg",
    caption: "High-energy morning workout session during dedicated ladies hours."
  },
  {
    id: "g6",
    title: "Cardio & Treadmill Deck",
    category: "GYM",
    image: "/images/hero/hero-bg.jpg",
    caption: "Commercial treadmills and rowers for high-efficiency stamina work."
  }
];
