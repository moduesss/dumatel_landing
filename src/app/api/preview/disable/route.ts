import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  draftMode().then((mode) => mode.disable());
  return NextResponse.redirect(new URL("/", request.url));
}
