import Link from "next/link";
import { siteConfig } from "@/config/site";

/** Marca provisória em texto; será substituída pelo logótipo oficial. */
export function Logo() {
  return (
    <Link
      href="/dashboard"
      aria-label={`${siteConfig.name} — Dashboard`}
      className="flex items-center gap-2.5 rounded-md"
    >
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground"
      >
        A
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-[0.18em]">{siteConfig.company}</span>
        <span className="mt-1 text-[0.65rem] font-medium tracking-[0.25em] text-muted-foreground">
          {siteConfig.shortName}
        </span>
      </span>
    </Link>
  );
}
