import { NextResponse } from 'next/server';

export function middleware(request) {
  const maintenanceEnabled = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' || process.env.MAINTENANCE_MODE === 'true';

  if (!maintenanceEnabled) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Allow the maintenance page and essential assets only
  if (
    pathname === '/maintenance.html' ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.startsWith('/_next/')
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/maintenance.html';
  return NextResponse.rewrite(url);
}

export const config = {
  // Apply to all routes except Next static assets
  matcher: ['/((?!_next/static|_next/image).*)'],
};


