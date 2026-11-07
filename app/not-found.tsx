import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="text-2xl font-semibold">Página não encontrada</h1>
      <p className="text-sm text-muted-foreground">O endereço que indicou não existe nesta aplicação.</p>
      <Link href="/dashboard" className={buttonVariants()}>
        Voltar ao Dashboard
      </Link>
    </main>
  );
}
