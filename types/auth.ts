/**
 * Contratos de autenticação. Servem apenas de ponto de ligação para a futura
 * integração com Supabase Auth; nesta etapa não existe autenticação real.
 */
export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: string;
  /** `true` enquanto o utilizador for um marcador de demonstração. */
  isDemo: boolean;
}
