import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400' , '500' ,'600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "ripple",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: {colorPrimary:'#624cf5'}}}>
    <html lang="en">
      <body
        className={cn("font-IBMPlex antaliased" , IBMPlex.variable)}>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
