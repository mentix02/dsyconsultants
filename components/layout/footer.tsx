import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/60 md:flex-row">
        <p>© {new Date().getFullYear()} DSY Consultants. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="mailto:dsyconsultants@gmail.com" className="hover:text-white">
            dsyconsultants@gmail.com
          </Link>
          <span className="hidden text-white/30 md:inline">|</span>
          <Link href="tel:9899950713" className="hover:text-white">
            +91 9899950713
          </Link>
        </div>
      </div>
    </footer>
  );
}
