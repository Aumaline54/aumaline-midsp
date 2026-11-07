import type { AppUser } from "@/types/auth";

/**
 * Ponto único de acesso ao utilizador actual.
 *
 * Nesta etapa devolve um utilizador de demonstração. Na fase de autenticação,
 * a implementação passa a consultar o Supabase Auth e o resto da aplicação
 * não precisa de alterações.
 */
export function getCurrentUser(): AppUser {
  return {
    id: "demo-user",
    name: "Utilizador Demo",
    email: "demo@aumaline.example",
    role: "Gestor de projectos (demonstração)",
    isDemo: true,
  };
}
