import { describe, it, expect } from "vitest";
import { joinSchema, trialSchema, contactSchema, adminLoginSchema } from "../lib/validations";
import { programsData } from "../lib/data/programs";
import { membershipPlans } from "../lib/data/membership";
import { siteConfig } from "../config/site";

describe("Validation Schemas", () => {
  it("validates correct membership application data", () => {
    const valid = {
      name: "Tariq Khan",
      phone: "03001234567",
      email: "tariq@example.com",
      membership: "PREMIUM PRO",
      goal: "Muscle Building"
    };
    expect(joinSchema.safeParse(valid).success).toBe(true);
  });

  it("fails membership application with short name or phone", () => {
    const invalid = {
      name: "A",
      phone: "123",
      goal: ""
    };
    expect(joinSchema.safeParse(invalid).success).toBe(false);
  });

  it("validates trial booking data", () => {
    const valid = {
      name: "Usman Afridi",
      phone: "03129876543",
      date: "2026-09-01",
      time: "06:00 PM",
      goal: "Strength Training"
    };
    expect(trialSchema.safeParse(valid).success).toBe(true);
  });

  it("validates contact message schema", () => {
    const valid = {
      name: "Sana Shah",
      message: "Hello, I would like to inquire about ladies gym hours."
    };
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("validates admin login credentials schema", () => {
    const valid = { username: "admin", password: "hayatabad2026" };
    expect(adminLoginSchema.safeParse(valid).success).toBe(true);
  });
});

describe("Data Integrity & Configuration", () => {
  it("contains all 6 required fitness programs", () => {
    expect(programsData.length).toBe(6);
    expect(programsData.map((p) => p.slug)).toContain("strength-training");
    expect(programsData.map((p) => p.slug)).toContain("weight-loss");
    expect(programsData.map((p) => p.slug)).toContain("personal-training");
  });

  it("contains 3 membership pricing tiers", () => {
    expect(membershipPlans.length).toBe(3);
    expect(membershipPlans.map((m) => m.name)).toContain("BASIC ATHLETE");
    expect(membershipPlans.map((m) => m.name)).toContain("PREMIUM PRO");
    expect(membershipPlans.map((m) => m.name)).toContain("ELITE VIP");
  });

  it("has valid site configuration details", () => {
    expect(siteConfig.name).toBe("HAYATABAD GYM");
    expect(siteConfig.location.city).toBe("Peshawar");
    expect(siteConfig.location.area).toBe("Hayatabad");
  });
});
