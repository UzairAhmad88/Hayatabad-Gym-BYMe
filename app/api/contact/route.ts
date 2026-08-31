import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { saveContactMessage } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const saved = await saveContactMessage(result.data);

    return NextResponse.json({
      ok: true,
      message: "Thank you for contacting HAYATABAD GYM. We will reach out shortly!",
      data: saved
    });
  } catch (error) {
    console.error("API error /api/contact:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
