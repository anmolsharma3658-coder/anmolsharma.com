import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg tracking-tight text-ink">
          Anmol Sharma
          <span className="ml-2 text-xs font-sans uppercase tracking-[0.2em] text-gold">
            Portfolio
          </span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-ink-2">
          <Link href="/#work" className="transition-colors hover:text-ink">
            Work
          </Link>
          <Link href="/#experience" className="transition-colors hover:text-ink">
            Experience
          </Link>
          <Link href="/#skills" className="transition-colors hover:text-ink">
            Skills
          </Link>
          <a
            href="mailto:anmolsharma3658@gmail.com"
            className="rounded-full border border-line-strong px-4 py-1.5 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
