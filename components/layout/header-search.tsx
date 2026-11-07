"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getMessages } from "@/lib/i18n";

/**
 * Campo de pesquisa do cabeçalho. A pesquisa global ainda não existe; ao
 * submeter, o utilizador é informado disso em vez de simular resultados.
 */
export function HeaderSearch() {
  const m = getMessages();
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(m.header.searchPending);
  }

  return (
    <form role="search" onSubmit={handleSubmit} className="relative w-full max-w-md">
      <label htmlFor="global-search" className="sr-only">
        {m.header.searchLabel}
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <Input
        id="global-search"
        type="search"
        name="q"
        placeholder={m.header.searchPlaceholder}
        autoComplete="off"
        onChange={() => setMessage("")}
        className="pl-9"
      />
      <p role="status" aria-live="polite" className="sr-only">
        {message}
      </p>
      {message ? (
        <p
          aria-hidden="true"
          className="absolute left-0 top-full z-40 mt-1 rounded-md border bg-card px-3 py-2 text-xs text-muted-foreground shadow-md"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
