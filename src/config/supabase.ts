import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || '';
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('[supabase] Missing environment variables: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Check Vercel env settings and RLS policies.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface PesquisaGolpeDigital {
  // Seção 1: Perfil
  faixa_etaria: string;
  genero: string;
  genero_outro?: string;
  localizacao: string;
  escolaridade: string;
  familiaridade_tech: string;
  
  // Seção 2: Experiência
  sofreu_golpe: boolean;
  tipos_golpe?: string[];
  tipo_golpe_outro?: string;
  canal_golpe?: string;
  canal_golpe_outro?: string;
  quando_ocorreu?: string;
  como_descobriu?: string;
  como_descobriu_outro?: string;
  
  // Seção 3: Impactos
  prejuizo_financeiro?: boolean;
  valor_perdido?: string;
  impactos?: string[];
  impactos_outro?: string;
  tempo_resolucao?: string;
  
  // Seção 4: Reações
  denunciou?: boolean;
  onde_denunciou?: string;
  motivo_nao_denuncia?: string;
  motivo_nao_denuncia_outro?: string;
  mudancas_seguranca?: string[];
  confianca_identificar?: number;
  
  // Seção 5: Percepções
  prevencao_opiniao?: string;
  recursos_ajuda?: string[];
  recursos_outro?: string;
  impacto_global?: number;
}

export async function salvarPesquisa(dados: PesquisaGolpeDigital) {

  const { data, error } = await supabase
    .from('pesquisa_golpes_digitais')
    .insert([dados])
    .select();

  if (error) {
    console.error('[salvarPesquisa] Erro ao salvar pesquisa:', {
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