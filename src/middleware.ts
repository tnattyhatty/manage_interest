export { default } from 'next-auth/middleware';

export const config = { matcher: ['/dashboard'] };

// import type { NextRequest } from 'next/server';
// import { NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('currentUser')?.value;

//   if (currentUser) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }
//   return NextResponse.redirect(new URL('/login', request.url));
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };
