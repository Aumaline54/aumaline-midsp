"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Popover } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth/session";
import { getMessages } from "@/lib/i18n";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function UserMenu() {
  const m = getMessages();
  const user = getCurrentUser();

  return (
    <Popover
      triggerLabel={`${m.header.profileMenu}: ${user.name}`}
      triggerClassName="h-9 px-1.5"
      trigger={
        <>
          <span
            aria-hidden="true"
            className="flex size-7 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background"
          >
            {initials(user.name)}
          </span>
          <span className="hidden max-w-32 truncate text-sm font-medium md:inline">{user.name}</span>
          <ChevronDown aria-hidden="true" className="hidden size-4 text-muted-foreground md:block" />
        </>
      }
    >
      <div className="px-3 py-2">
        <p className="text-sm font-semibold">{user.name}</p>
        <p className="truncate text-xs text-muted-foreground">{user.email}</p>
        {user.isDemo ? <p className="mt-1 text-xs text-muted-foreground">{m.common.demoData}</p> : null}
      </div>
      <div className="border-t py-1">
        <Link
          href="/configuracoes"
          className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
        >
          {m.header.settings}
        </Link>
        <Button
          variant="ghost"
          disabled
          aria-disabled="true"
          className="h-auto w-full justify-start px-3 py-2 font-normal"
        >
          {m.header.signOut}
        </Button>
        <p className="px-3 pb-2 text-xs text-muted-foreground">{m.header.authPending}</p>
      </div>
    </Popover>
  );
}
