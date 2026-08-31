import { StatsCounter } from "./StatsCounter";

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "10+", label: "Years Experience" },
  { value: "20+", label: "Training Programs" },
  { value: "10+", label: "Expert Trainers" }
];

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#121212]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <StatsCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
