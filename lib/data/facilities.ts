export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export const facilitiesData: Facility[] = [
  {
    id: "free-weights",
    title: "Heavy Free Weights & Power Racks",
    category: "Strength Zone",
    description:
      "Fully equipped with competition powerlifting racks, Olympic bumper plates, calibrated steel plates, and dumbbells ranging up to 60kg.",
    image: "/images/facilities/freeweights.jpg",
    features: [
      "5 Commercial Squat & Power Racks",
      "Dumbbells 2.5kg up to 60kg",
      "Deadlift lifting platforms with rubber dampening",
      "Adjustable incline, decline & flat benches"
    ]
  },
  {
    id: "cardio-deck",
    title: "Cardio & Stamina Deck",
    category: "Endurance",
    description:
      "High-tech cardio section overlooking the gym floor featuring touchscreens, heart rate monitors, and air resistance trainers.",
    image: "/images/hero/hero-bg.jpg",
    features: [
      "Incline commercial treadmills",
      "Concept2 rowing machines & assault bikes",
      "StairMaster stair climbers",
      "Ellipticals & stationary bikes"
    ]
  },
  {
    id: "functional-turf",
    title: "Functional & Cross-Training Arena",
    category: "Athletic Zone",
    description:
      "Spacious artificial turf track designed for sled pushes, battle ropes, plyometrics, and high-intensity group functional circuits.",
    image: "/images/programs/strength.jpg",
    features: [
      "25-meter sprint & weighted sled track",
      "Wall-mounted pull-up rig & gymnastics rings",
      "Kettlebells, medicine balls & slam balls",
      "Plyometric jump boxes & agility ladders"
    ]
  },
  {
    id: "isolation-machines",
    title: "Pin & Plate-Loaded Machine Floor",
    category: "Hypertrophy",
    description:
      "Targeted biomechanical isolation machinery from top international brands for precise muscle hypertrophy without unnecessary joint strain.",
    image: "/images/facilities/freeweights.jpg",
    features: [
      "Plate-loaded leg presses, hack squats & chest presses",
      "Multi-station cable crossovers & lat pull-down towers",
      "Hamstring curl & leg extension stations",
      "Smith machines with safety locks"
    ]
  },
  {
    id: "lockers-amenities",
    title: "Executive Lockers & Refreshment Lounge",
    category: "Comfort",
    description:
      "Clean, modern changing rooms equipped with secure digital keyless lockers, hot showers, and a protein smoothie bar.",
    image: "/images/hero/hero-bg.jpg",
    features: [
      "Secure keyfob locker storage",
      "Continuous hot water showers & changing stalls",
      "Filter drinking water stations",
      "Post-workout protein shake lounge"
    ]
  }
];
