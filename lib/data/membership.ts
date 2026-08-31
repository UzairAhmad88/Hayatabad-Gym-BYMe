export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "BASIC ATHLETE",
    price: "PKR 5,000",
    period: "per month",
    popular: false,
    description: "Essential gym floor access for consistent self-guided lifters.",
    features: [
      "Full access to Heavy Weight & Machine Floor",
      "Full access to Cardio Deck",
      "Locker room & shower amenities",
      "Standard operating hours access",
      "Basic initial orientation session"
    ],
    ctaText: "JOIN BASIC"
  },
  {
    id: "premium",
    name: "PREMIUM PRO",
    price: "PKR 8,500",
    period: "per month",
    popular: true,
    description: "Complete access including functional turf track and group classes.",
    features: [
      "Unlimited access to ALL Gym Floors & Turf Track",
      "Access to all Functional & HIIT Group Classes",
      "1x Monthly Personal Coach Check-in & Body Composition Scan",
      "Free guest pass (1 per month)",
      "Priority locker access & towel service",
      "Discounts on trainer supplements"
    ],
    ctaText: "JOIN PREMIUM PRO"
  },
  {
    id: "elite",
    name: "ELITE VIP",
    price: "PKR 18,000",
    period: "per month",
    popular: false,
    description: "The ultimate 1-on-1 coaching experience with full VIP perks.",
    features: [
      "Includes 8 Dedicated 1-on-1 Personal Training Sessions",
      "Customized Workout & Nutritional Blueprint",
      "Unlimited 24/7 Priority Gym & Turf Track Access",
      "Weekly InBody progress analysis",
      "Dedicated private locker reservation",
      "Unlimited free guest passes"
    ],
    ctaText: "JOIN ELITE VIP"
  }
];

export const membershipFaqs = [
  {
    question: "What are the gym operating hours?",
    answer:
      "We are open Monday through Saturday from 06:00 AM to 11:00 PM, and Sundays from 04:00 PM to 10:00 PM. Dedicated Ladies Hours are 10:00 AM – 01:00 PM Mon-Sat."
  },
  {
    question: "Is there a registration or admission fee?",
    answer:
      "Standard registration fee is PKR 1,500, which includes your member card, digital key fob, and full movement assessment. We frequently run trial promos!"
  },
  {
    question: "Can I freeze my membership if I travel?",
    answer:
      "Yes! Premium Pro and Elite VIP members can freeze their membership for up to 30 days per year without extra charge."
  },
  {
    question: "How do I book a free trial session?",
    answer:
      "You can click 'Book A Free Trial' anywhere on the site or submit your application online. Our team will contact you via WhatsApp or call to schedule your visit."
  }
];
