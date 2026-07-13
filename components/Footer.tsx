import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-3">
            {profile.location} · {profile.title}
          </p>
        </div>
        <div className="flex gap-5 text-sm text-ink-2">
          <a href={`mailto:${profile.email}`} className="hover:text-gold">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} className="hover:text-gold">
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
