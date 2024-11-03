import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    console.log(request,"Middleware");
}

export const config = {
    matcher: [
        "/login",
        "/register",
        "/dashboard/:page*",
        "/admin-dashboard/:page*",
        "/driver-dashboard/:page*",
        
    ]
}


//PUBLIC ROUTES
//PUBLIC PROTECTED ROUTES
//PRIVATE PROTECTED ROUTES