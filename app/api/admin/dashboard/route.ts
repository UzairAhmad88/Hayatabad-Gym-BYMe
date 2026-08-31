import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminMetrics, getAdminData } from "@/lib/storage";

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session || session.value !== "authenticated_admin_token") {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const metrics = await getAdminMetrics();
  const data = await getAdminData();

  return NextResponse.json({
    ok: true,
    metrics,
    data
  });
}
