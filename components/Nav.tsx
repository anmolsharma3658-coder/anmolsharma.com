import Link from "next/link";

// Fixed smoked-glass bar: consistent over both light and dark sections,
// so its colors are pinned rather than theme-driven.
export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0a0b0e]/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-[#ece9e2]"
        >
          Anmol Sharma
          <span className="ml-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#c5a15f]">
            Portfolio
          </span>
        </Link>
        <div className="flex items-center gap-7 text-sm text-[#a3a8b0]">
          <Link href="/#work" className="nav-link hover:text-[#ece9e2]">
            Work
          </Link>
          <Link href="/#experience" className="nav-link hidden hover:text-[#ece9e2] sm:block">
            Experience
          </Link>
          <Link href="/#skills" className="nav-link hidden hover:text-[#ece9e2] sm:block">
            Skills
          </Link>
          <a
            href="mailto:anmolsharma3658@gmail.com"
            className="rounded-full border border-[#2b3240] px-4 py-1.5 text-[#ece9e2] transition-colors duration-300 hover:border-[#c5a15f] hover:text-[#c5a15f]"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
