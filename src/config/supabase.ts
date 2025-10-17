import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || '';
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[supabase] Missing environment variables: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Check Vercel env settings and RLS policies.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);



export interface PesquisaSegurancaIA {
  // Seção 1: Perfil
  idade: number;
  area_atuacao: string;
  nivel_conhecimento_ti: string;
  
  // Seção 2: IA
  papel_ia_seguranca: string;
  utiliza_ferramentas_ia: boolean;
  ferramentas_ia_citadas?: string | null;
  confianca_ia_deteccao: string;
  
  // Seção 3: Criptografia
  uso_criptografia: string;
  tipos_criptografia: string[];
  tipos_criptografia_outros?: string | null;
  nivel_conhecimento_criptografia: string;
  
  // Seção 4: Privacidade
  preocupacao_privacidade: string;
  praticas_privacidade: string[];
  praticas_privacidade_outros?: string | null;
  
  // Seção 5: Pós-Quântica
  conhece_pos_quantica: string;
  importancia_pos_quantica: string;
  
  // Seção 6: Práticas
  frequencia_backups: string;
  atualizacao_softwares: string;
  uso_2fa: string;
  nivel_seguranca_geral: string;
}

export async function salvarPesquisaSegurancaIA(dados: PesquisaSegurancaIA) {
  const { data, error } = await supabase
    .from('pesquisa_seguranca_ia')
    .insert([dados])
    .select();

  if (error) {
    console.error('[salvarPesquisaSegurancaIA] Erro ao salvar pesquisa:', {
      message: error.message,
      details: (error as any).details,
      hint: (error as any).hint,
      code: (error as any).code,
    });

    const combined = `Supabase error: ${error.message}${(error as any).details ? ' - ' + (error as any).details : ''}`;
    throw new Error(combined);
  }

  return data;
}