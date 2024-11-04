import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log(request, "Middleware");
}

const { pathname } = request.nextUrl;

const accessToken = cookies().get("accessToken")?.value;

if (!accessToken) {
  return NextResponse.redirect(new URL("/login"));
}

// error back pattern

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "/driver-dashboard/:page*",
  ],
};

//PUBLIC ROUTES
//PUBLIC PROTECTED ROUTES
//PRIVATE PROTECTED ROUTES
