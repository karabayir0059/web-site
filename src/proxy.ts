import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

const handler = auth((req) => {
  const isLoggedIn = !!req.auth;
  const pathname = req.nextUrl.pathname;

  // Admin sayfalarına erişim kontrolü
  if (pathname.startsWith("/admin") && !isLoggedIn && pathname !== "/admin/giris") {
    return NextResponse.redirect(new URL("/admin/giris", req.url));
  }

  // Giriş yapmış kullanıcıyı login sayfasından dashboard'a yönlendir
  if (pathname === "/admin/giris" && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
});

export const proxy = handler;

export const config = {
  matcher: ["/admin/:path*"],
};
