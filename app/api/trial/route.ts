import { NextResponse } from "next/server";
import { trialSchema } from "@/lib/validations";
import { saveTrialBooking } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = trialSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid trial booking data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const saved = await saveTrialBooking(result.data);

    return NextResponse.json({
      ok: true,
      message: "Free trial pass booked! Show this confirmation when you arrive at HAYATABAD GYM.",
      data: saved
    });
  } catch (error) {
    console.error("API error /api/trial:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
