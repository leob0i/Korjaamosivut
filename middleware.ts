import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const allowedPaths = [
  "/maaraaikaishuollot",
  "/jarrupalvelut",
  "/matkailuautot",
  "/diagnostiikka",
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname !== "/" && !allowedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|api|.*\\.(?:jpg|jpeg|png|gif|webp|avif|svg)).*)"],
}
