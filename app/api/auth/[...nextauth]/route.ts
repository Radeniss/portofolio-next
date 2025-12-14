import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log("Authorize function called with credentials:", credentials);

          if (!credentials?.email || !credentials?.password) {
            console.log("Missing email or password");
            return null;
          }

          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          console.log("User found in database:", user);

          if (!user) {
            console.log("No user found with that email.");
            return null;
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );

          console.log("Password comparison result:", isPasswordCorrect);

          if (!isPasswordCorrect) {
            console.log("Password comparison failed.");
            return null;
          }
          
          console.log("Authentication successful, returning user.");
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword;
        } catch (error) {
          console.error("Error in authorize function:", error);
          return null; // Return null on any error
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
