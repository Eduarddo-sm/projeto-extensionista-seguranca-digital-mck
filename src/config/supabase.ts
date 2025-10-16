import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

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
    console.error('Erro ao salvar pesquisa:', error);
    throw error;
  }

  return data;
}