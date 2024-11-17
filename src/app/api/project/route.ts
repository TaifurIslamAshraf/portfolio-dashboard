import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const body = req.body;

  if (body) {
    return NextResponse.json({ message: "body message", body });
  }

  return NextResponse.json({ message: "All Projects" });
}
