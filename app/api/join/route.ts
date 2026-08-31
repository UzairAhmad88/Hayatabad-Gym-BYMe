import { NextResponse } from "next/server";
import { joinSchema } from "@/lib/validations";
import { saveMembershipApplication } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = joinSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const saved = await saveMembershipApplication(result.data);

    return NextResponse.json({
      ok: true,
      message: "Application submitted successfully! Our gym advisor will contact you within 24 hours.",
      data: saved
    });
  } catch (error) {
    console.error("API error /api/join:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
