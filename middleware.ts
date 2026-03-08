import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/espace-client')) {
    const token = request.cookies.get('savet_session')?.value
    if (!token) {
      const loginUrl = new URL('/connexion', request.url)
      loginUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/espace-client', '/espace-client/:path*'],
}
