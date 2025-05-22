import { NextRequest, NextResponse } from "next/server";
import { defaultlocale, locales } from "./libs/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const ismissinglocale = locales.every((locale) => !pathname.startsWith(`/${locale}`));
  if (ismissinglocale) {
    const url = request.nextUrl.clone();
    url.pathname = `${defaultlocale}${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|lib|img|js|favicon.ico).*)"],
};
