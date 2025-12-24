import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";

const Poppines = Poppins({
  variable: "--font-poppines",
  subsets: ["latin"],
  weight:["300","400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Saikishan Protfolio",
  description: "Saikishan Protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className= {`${Poppines.className} antialiased bg-slate-950 `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
