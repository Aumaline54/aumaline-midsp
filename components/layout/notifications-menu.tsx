"use client";

import { Bell } from "lucide-react";
import { Popover } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { demoNotifications } from "@/features/dashboard/demo-data";
import { formatDateTime } from "@/lib/format";
import { getMessages } from "@/lib/i18n";

export function NotificationsMenu() {
  const m = getMessages();

  return (
    <Popover
      triggerLabel={`${m.header.notifications} (${demoNotifications.length})`}
      triggerClassName="relative size-9 justify-center"
      trigger={
        <>
          <Bell aria-hidden="true" className="size-5" />
          <span
            aria-hidden="true"
            className="absolute right-1.5 top-1.5 size-2 rounded-full bg-primary ring-2 ring-card"
          />
        </>
      }
    >
      <div className="flex items-center justify-between px-3 py-2">
        <h2 className="text-sm font-semibold">{m.header.notifications}</h2>
        <Badge variant="muted">{m.common.demoData}</Badge>
      </div>
      {demoNotifications.length === 0 ? (
        <p className="px-3 py-4 text-sm text-muted-foreground">{m.header.notificationsEmpty}</p>
      ) : (
        <ul className="divide-y">
          {demoNotifications.map((item) => (
            <li key={item.id} className="px-3 py-2.5">
              <p className="text-sm">{item.text}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{formatDateTime(item.at)}</p>
            </li>
          ))}
        </ul>
      )}
    </Popover>
  );
}
