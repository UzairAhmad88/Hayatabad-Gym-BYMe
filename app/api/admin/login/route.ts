import { NextResponse } from "next/server";
import { adminLoginSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = adminLoginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Username and password required" },
        { status: 400 }
      );
    }

    const { username, password } = result.data;
    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "hayatabad2026";

    if (username !== adminUser || password !== adminPass) {
      return NextResponse.json(
        { error: "Invalid admin credentials" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ ok: true, message: "Logged in successfully" });
    response.cookies.set({
      name: "admin_session",
      value: "authenticated_admin_token",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 // 24 hours
    });

    return response;
  } catch (error) {
    console.error("Admin login API error:", error);
    return NextResponse.json(
      { error: "Server authentication error" },
      { status: 500 }
    );
  }
}
