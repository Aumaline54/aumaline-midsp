"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderSearch } from "@/components/layout/header-search";
import { NotificationsMenu } from "@/components/layout/notifications-menu";
import { UserMenu } from "@/components/layout/user-menu";
import { getMessages } from "@/lib/i18n";

interface HeaderProps {
  onOpenMenu: () => void;
  menuOpen: boolean;
  menuId: string;
}

export function Header({ onOpenMenu, menuOpen, menuId }: HeaderProps) {
  const m = getMessages();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b bg-card px-4 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label={m.common.openMenu}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={onOpenMenu}
      >
        <Menu aria-hidden="true" />
      </Button>

      <div className="flex flex-1 items-center">
        <HeaderSearch />
      </div>

      <div className="flex items-center gap-1">
        <NotificationsMenu />
        <UserMenu />
      </div>
    </header>
  );
}
