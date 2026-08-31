export interface ScheduleSession {
  id: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  program: string;
  trainer: string;
  time: string;
  duration: string;
  level: "All Levels" | "Intermediate" | "Advanced";
  room: "Main Gym Floor" | "Turf Arena" | "Cardio Studio";
}

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
] as const;

export const scheduleData: ScheduleSession[] = [
  {
    id: "s1",
    day: "Monday",
    program: "Strength Training",
    trainer: "Captain Ahmed Khan",
    time: "07:00 AM – 08:00 AM",
    duration: "60 min",
    level: "Intermediate",
    room: "Main Gym Floor"
  },
  {
    id: "s2",
    day: "Monday",
    program: "Weight Loss Circuit",
    trainer: "Zara Shah",
    time: "10:30 AM – 11:30 AM",
    duration: "60 min",
    level: "All Levels",
    room: "Turf Arena"
  },
  {
    id: "s3",
    day: "Monday",
    program: "Hypertrophy Push Split",
    trainer: "Bilal Raza",
    time: "06:00 PM – 07:15 PM",
    duration: "75 min",
    level: "Advanced",
    room: "Main Gym Floor"
  },
  {
    id: "s4",
    day: "Tuesday",
    program: "Functional & Athletic Sleds",
    trainer: "Bilal Raza",
    time: "06:30 PM – 07:30 PM",
    duration: "60 min",
    level: "All Levels",
    room: "Turf Arena"
  },
  {
    id: "s5",
    day: "Wednesday",
    program: "Barbell Squat Mastery",
    trainer: "Captain Ahmed Khan",
    time: "07:00 AM – 08:00 AM",
    duration: "60 min",
    level: "Intermediate",
    room: "Main Gym Floor"
  },
  {
    id: "s6",
    day: "Wednesday",
    program: "Ladies HIIT & Conditioning",
    trainer: "Zara Shah",
    time: "10:30 AM – 11:30 AM",
    duration: "60 min",
    level: "All Levels",
    room: "Turf Arena"
  },
  {
    id: "s7",
    day: "Thursday",
    program: "Functional Agility & Core",
    trainer: "Bilal Raza",
    time: "06:30 PM – 07:30 PM",
    duration: "60 min",
    level: "All Levels",
    room: "Turf Arena"
  },
  {
    id: "s8",
    day: "Friday",
    program: "Heavy Deadlift & Back",
    trainer: "Captain Ahmed Khan",
    time: "06:00 PM – 07:15 PM",
    duration: "75 min",
    level: "Advanced",
    room: "Main Gym Floor"
  },
  {
    id: "s9",
    day: "Saturday",
    program: "Weekend Warrior Circuit",
    trainer: "Zara Shah",
    time: "05:00 PM – 06:00 PM",
    duration: "60 min",
    level: "All Levels",
    room: "Turf Arena"
  },
  {
    id: "s10",
    day: "Sunday",
    program: "Open Gym & Mobility",
    trainer: "On-Duty Coach",
    time: "04:00 PM – 08:00 PM",
    duration: "Flexible",
    level: "All Levels",
    room: "Main Gym Floor"
  }
];
