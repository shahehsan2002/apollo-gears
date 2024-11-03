/* eslint-disable @typescript-eslint/no-explicit-any */
import nexiosInstance from "@/config/nexios.config";
import { AuthOptions } from "@/config/nextauth.config";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };