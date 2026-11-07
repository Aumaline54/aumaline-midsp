"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation, methodologyLink } from "@/config/navigation";
import { getMessages } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
  /** Chamado ao navegar (usado para fechar a gaveta em ecrãs pequenos). */
  onNavigate?: () => void;
}

function isActive(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkBase =
  "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors";

export function SidebarNav({ onNavigate }: SidebarNavProps) {
  const pathname = usePathname();
  const m = getMessages();
  const MethodologyIcon = methodologyLink.icon;
  const methodologyActive = isActive(pathname, methodologyLink.href);

  return (
    <nav aria-label={m.common.primaryNavigation} className="flex flex-1 flex-col gap-4 overflow-y-auto p-3">
      <ul className="flex flex-col gap-0.5">
        {mainNavigation.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
                className={cn(
                  linkBase,
                  active
                    ? "bg-red-50 text-primary"
                    : "text-neutral-700 hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon aria-hidden="true" className="size-4 shrink-0" />
                <span className="truncate">{m.nav[item.id]}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto border-t pt-3">
        <Link
          href={methodologyLink.href}
          aria-current={methodologyActive ? "page" : undefined}
          onClick={onNavigate}
          className={cn(
            linkBase,
            methodologyActive
              ? "bg-red-50 text-primary"
              : "text-neutral-700 hover:bg-muted hover:text-foreground",
          )}
        >
          <MethodologyIcon aria-hidden="true" className="size-4 shrink-0" />
          <span className="truncate">{m.methodologyNav}</span>
        </Link>
      </div>
    </nav>
  );
}
