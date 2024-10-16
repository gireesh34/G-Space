//import localFont from "next/font/local";

import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

//import Exp from '../components/Exp';
//import logo from "../public/logo.svg";
const inter = Inter({  subsets: ["latin"],
});
export const metadata = {
  title: "Gireesh | Portfolio",
  description: "I develop 3D visuals, user interfaces and web applications",
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=1024" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
