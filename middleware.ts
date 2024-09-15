import { auth } from "./auth";

export default auth(function (req) {
  const { auth, nextUrl } = req;
  const isLoggedIn = !!auth;

  if (auth?.user?.role === "USER" && nextUrl.pathname.includes("/dashboard")) {
    return Response.redirect(new URL("/", nextUrl.origin));
  }

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
