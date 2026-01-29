import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { message: "Missing slug for preview." },
      { status: 400 }
    );
  }

  draftMode().enable();

  return NextResponse.redirect(new URL(`/blog/${slug}`, request.url));
}
