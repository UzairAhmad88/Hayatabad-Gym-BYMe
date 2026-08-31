export interface Program {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  duration: string;
  intensity: "Moderate" | "High" | "Extreme" | "Custom";
  benefits: string[];
  method: string[];
  whoItIsFor: string[];
  schedulePreview: string;
}

export const programsData: Program[] = [
  {
    slug: "strength-training",
    number: "01",
    title: "Strength Training",
    subtitle: "Heavy compound lifting & athletic power",
    description:
      "Master progressive overload with olympic barbells, squat racks, and specialized powerlifting platforms.",
    fullDescription:
      "Our Strength Training program is engineered for individuals dedicated to building raw power, bone density, and athletic body composition. Guided by certified strength coaches, you will master compound lifts including squats, deadlifts, bench press, and overhead presses within a disciplined, supportive environment.",
    image: "/images/programs/strength.jpg",
    duration: "60 mins / session",
    intensity: "Extreme",
    benefits: [
      "Significant increase in maximum strength & muscular power",
      "Enhanced metabolic rate and accelerated fat loss",
      "Improved joint stability and bone mineral density",
      "Personalized progressive overload tracking"
    ],
    method: [
      "Barbell compound movement mastery",
      "Periodized loading protocols (Linear & Undulating)",
      "Dedicated rack time and spotter safety standards",
      "Postural and mobility accessory work"
    ],
    whoItIsFor: [
      "Beginners wanting proper lifting mechanics",
      "Powerlifters & athletic strength enthusiasts",
      "Anyone seeking total body structural transformation"
    ],
    schedulePreview: "Mon, Wed, Fri • 07:00 AM & 06:00 PM"
  },
  {
    slug: "weight-loss",
    number: "02",
    title: "Weight Loss & Body Recomp",
    subtitle: "High-burn metabolic conditioning & nutrition support",
    description:
      "Sculpt a leaner physique through metabolic resistance circuits, HIIT, and structured progress tracking.",
    fullDescription:
      "Target fat loss without sacrificing hard-earned muscular strength. The Weight Loss program combines high-intensity interval training, functional cardio circuits, and nutrition guidance to optimize calorie burn and boost long-term metabolic health.",
    image: "/images/facilities/freeweights.jpg",
    duration: "45 mins / session",
    intensity: "High",
    benefits: [
      "Rapid calorie burn during and after workouts (EPOC effect)",
      "Enhanced cardiovascular endurance and stamina",
      "Preservation of lean muscle tissue during fat reduction",
      "Regular body composition monitoring"
    ],
    method: [
      "High-Intensity Interval Training (HIIT) circuits",
      "Kettlebell & dumbbell conditioning blocks",
      "Heart rate zone training",
      "Tailored nutritional guidelines & accountability"
    ],
    whoItIsFor: [
      "Individuals aiming for sustainable body fat reduction",
      "Anyone overcoming workout plateaus",
      "Busy professionals seeking maximum workout efficiency"
    ],
    schedulePreview: "Daily • 08:00 AM & 07:00 PM"
  },
  {
    slug: "personal-training",
    number: "03",
    title: "Personal Training",
    subtitle: "1-on-1 dedicated coaching & custom programming",
    description:
      "Accelerate your results with bespoke workout routines, movement screening, and direct coach accountability.",
    fullDescription:
      "Get undivided attention from Hayatabad Gym's elite master trainers. Every session is custom-crafted to your biomechanics, fitness level, and specific goals—whether that means rehab, contest prep, or peak performance.",
    image: "/images/trainers/trainer-male.jpg",
    duration: "60 mins / session",
    intensity: "Custom",
    benefits: [
      "Tailored workout and recovery plans designed exclusively for you",
      "Real-time form correction to maximize safety & gains",
      "Faster progression through focused 1-on-1 instruction",
      "Flexible session scheduling built around your lifestyle"
    ],
    method: [
      "Full FMS (Functional Movement Screen) diagnostic",
      "Targeted strength & hypertrophy protocols",
      "Nutritional alignment and macronutrient coaching",
      "Weekly performance reviews"
    ],
    whoItIsFor: [
      "Clients requiring targeted individual attention",
      "Athletes preparing for specific performance milestones",
      "Individuals recovering from past injuries"
    ],
    schedulePreview: "Flexible Booking • By Appointment"
  },
  {
    slug: "functional-training",
    number: "04",
    title: "Functional & Athletic Training",
    subtitle: "Mobility, agility, core power & real-world movement",
    description:
      "Develop athletic agility, core stability, cable resistance power, and injury-proof joint health.",
    fullDescription:
      "Functional fitness builds a body that performs as good as it looks. Training on our dedicated artificial turf track with battle ropes, plyometric boxes, kettlebells, and sleds builds dynamic core power and real-world agility.",
    image: "/images/hero/hero-bg.jpg",
    duration: "50 mins / session",
    intensity: "High",
    benefits: [
      "Improved balance, agility, and dynamic coordination",
      "Stronger core stabilizer muscles",
      "Increased mobility and reduced joint stiffness",
      "Engaging, varied high-energy group workouts"
    ],
    method: [
      "Multi-directional sled pushes & pulls",
      "Battle rope waves & kettlebell complexes",
      "Plyometric jump training and agility ladder drills",
      "Core activation & posture correction drills"
    ],
    whoItIsFor: [
      "Sports athletes and weekend warriors",
      "Fitness enthusiasts looking for dynamic variety",
      "Anyone seeking functional stamina for everyday life"
    ],
    schedulePreview: "Tue, Thu, Sat • 06:30 PM"
  },
  {
    slug: "muscle-building",
    number: "05",
    title: "Muscle Hypertrophy",
    subtitle: "Science-backed muscular volume & body sculpting",
    description:
      "Sculpt symmetry, muscular mass, and definition with biomechanically tuned isolation machines and cables.",
    fullDescription:
      "Designed for bodybuilders and physique enthusiasts. Our muscle building routine optimizes mechanical tension, metabolic stress, and muscle damage variables to trigger maximal muscle growth across all major muscle groups.",
    image: "/images/programs/strength.jpg",
    duration: "75 mins / session",
    intensity: "High",
    benefits: [
      "Maximized hypertrophy through optimal mechanical tension",
      "Comprehensive machine, cable, and free-weight selection",
      "Balanced physique symmetry and aesthetic development",
      "Structured progressive volume splits"
    ],
    method: [
      "Push-Pull-Legs and Upper-Lower split structures",
      "Time-Under-Tension (TUT) execution controls",
      "Isolation & compound machine supersets",
      "Post-workout recovery protocol planning"
    ],
    whoItIsFor: [
      "Bodybuilders and physique competitors",
      "Hardgainers looking to pack on quality mass",
      "Advanced trainees wanting focused isolation growth"
    ],
    schedulePreview: "Mon through Sat • All Hours"
  },
  {
    slug: "cardio-endurance",
    number: "06",
    title: "Cardio & Stamina",
    subtitle: "Heart health, stamina & endurance conditioning",
    description:
      "Elevate your cardiovascular ceiling with premium stair climbers, rowers, treadmills, and air bikes.",
    fullDescription:
      "Boost your stamina, lung capacity, and heart health on our dedicated cardio deck equipped with high-tech displays, incline treadmills, Concept2 rowers, and assault bikes.",
    image: "/images/facilities/freeweights.jpg",
    duration: "45 mins / session",
    intensity: "Moderate",
    benefits: [
      "Optimal cardiovascular function and lower resting heart rate",
      "High calorie expenditure and fat loss acceleration",
      "Enhanced stamina for heavy weightlifting recovery",
      "Low-impact cardio options for joint protection"
    ],
    method: [
      "Steady-State Low-Intensity (LISS) training",
      "Interval ramp challenges",
      "Rowing & air bike sprints",
      "Heart rate zone optimization"
    ],
    whoItIsFor: [
      "Anyone boosting heart health and endurance",
      "Warm-up and active recovery sessions",
      "Runners and stamina seekers"
    ],
    schedulePreview: "Available Daily • 06:00 AM - 11:00 PM"
  }
];
