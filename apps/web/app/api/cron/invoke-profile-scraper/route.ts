import { NextResponse, type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  console.log({ request });

  return new NextResponse("OK");
  
}