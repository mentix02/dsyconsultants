import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import "./globals.css";
import { Inter } from "next/font/google";

import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "DSY Consultants | Redefining Legal Care",
  description:
    "DSY CONSULTANTS is a Legal Consulting Agency based out of Faridabad delivering tailored solutions since 2018.",
  keywords: ["DSY Consultants", "Legal Consulting", "Faridabad", "Law", "Advisory"],
  openGraph: {
    type: "website",
    title: "DSY Consultants",
    description: "Redefining Legal Care. Legal Consulting Agency in Faridabad offering tailored solutions since 2018.",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="min-h-screen">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
