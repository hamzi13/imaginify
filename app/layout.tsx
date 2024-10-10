import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'


const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["100", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};
// function Header() {
//   return (
//     <header>
     
//       <SignedIn>
//         {/* Mount the UserButton component */}
//         <UserButton />
//       </SignedIn>
//       <SignedOut>
//         {/* Signed out users get sign in button */}
//         <SignInButton />
//       </SignedOut>
//     </header>
//   )
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624CF5'}
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {/* <Header/> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
