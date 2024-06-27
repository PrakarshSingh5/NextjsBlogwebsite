import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;
export const cofig={
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
}