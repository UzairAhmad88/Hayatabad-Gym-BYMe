export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
  programs: string[];
}

export const trainersData: Trainer[] = [
  {
    id: "trainer-1",
    name: "Captain Ahmed Khan",
    role: "Head Strength & Conditioning Coach",
    specialization: "Barbell Powerlifting & Athletic Conditioning",
    experience: "10+ Years",
    bio: "Former competitive strength athlete dedicated to building disciplined, resilient members through scientific progressive overload principles.",
    image: "/images/trainers/trainer-male.jpg",
    certifications: [
      "CSCS - Certified Strength & Conditioning Specialist",
      "REPs Level 4 Master Trainer",
      "IPF Powerlifting Level 2 Coach"
    ],
    programs: ["Strength Training", "Personal Training", "Muscle Hypertrophy"]
  },
  {
    id: "trainer-2",
    name: "Zara Shah",
    role: "Head Female Fitness Coach",
    specialization: "Weight Loss, Toning & Ladies Fitness",
    experience: "7+ Years",
    bio: "Passionate about empowering women through structured resistance training, metabolic conditioning, and sustainable nutrition habits.",
    image: "/images/trainers/trainer-female.jpg",
    certifications: [
      "ACE Certified Personal Trainer",
      "Precision Nutrition Level 1 Coach",
      "Group Fitness Instructor (NASM)"
    ],
    programs: ["Weight Loss", "Functional Training", "Personal Training"]
  },
  {
    id: "trainer-3",
    name: "Bilal Raza",
    role: "Senior Functional & Hypertrophy Coach",
    specialization: "Physique Sculpting & Athletic Mobility",
    experience: "8+ Years",
    bio: "Specializes in biomechanics, muscle hypertrophy splits, and restoring functional mobility in athletes and executive clients.",
    image: "/images/trainers/trainer-male.jpg",
    certifications: [
      "NASM-CPT",
      "FMS Level 2 Certified",
      "ISSA Bodybuilding Specialist"
    ],
    programs: ["Muscle Hypertrophy", "Functional Training", "Personal Training"]
  }
];
