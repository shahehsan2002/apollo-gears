import nexiosInstance from "@/config/nexios.config";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
       async signIn ({ account, profile }: any) { {
            console.log(account, profile);

            if(!profile || !account) {
                return false
            }

            const response = await nexiosInstance.post("/auth/login",{
                name: profile?.name,
                email: profile?.email,
                img: profile?.picture,
            })
            console.log(response.data, 'db res')
        }
            return true;
        },
        
    },
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET as string,
});

export { handler as GET, handler as POST };
