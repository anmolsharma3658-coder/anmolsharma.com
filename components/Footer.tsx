import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-3">
            {profile.location} · {profile.title}
          </p>
        </div>
        <div className="flex gap-6 text-sm text-ink-2">
          <a href={`mailto:${profile.email}`} className="nav-link hover:text-gold">
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            className="nav-link hover:text-gold"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
