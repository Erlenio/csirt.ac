import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req : NextRequest){
    let token = req.cookies.get('token')?.value;

    if(!token){
        const authHeader = req.headers.get('authorization');
        if(authHeader?.startsWith('Bearer ')){
            token = authHeader.split(' ')[1]
        }
    }

    if(!token){ return NextResponse.redirect(new URL('/login', req.url)) }

    return NextResponse.next();

}

export const config = {
    matcher: [
        '/admin/:path*'
    ]
}