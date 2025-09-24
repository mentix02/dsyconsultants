import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

export default function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className={`text-xl tracking-wide ${playfair.className}`}>
          DSY Consultants
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#services" className="text-sm text-white/80 hover:text-white">
            Services
          </Link>
          <Link href="/#about" className="text-sm text-white/80 hover:text-white">
            About
          </Link>
          <Link href="/#contact" className="text-sm text-white/80 hover:text-white">
            Contact
          </Link>
          <Link href="/faq" className="text-sm text-white/80 hover:text-white">
            FAQ
          </Link>
        </nav>
        <Link
          href="/#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-white px-4 py-2 text-sm hover:bg-white hover:text-black"
        >
          Consult Today <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}
