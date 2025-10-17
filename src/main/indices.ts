import { supabase } from '../config/supabase';
import type { PesquisaSegurancaIA } from '../config/supabase';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface DadosProcessados {
  respostas: PesquisaSegurancaIA[];
  total: number;
  estatisticas: {
    idade: {
      media: number;
      minima: number;
      maxima: number;
      mediana: number;
    };
  };
}


async function buscarDadosPesquisa(): Promise<DadosProcessados> {
  try {
    const { data, error } = await supabase
      .from('pesquisa_seguranca_ia')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }

    if (!data || data.length === 0) {
      return {
        respostas: [],
        total: 0,
        estatisticas: {
          idade: { media: 0, minima: 0, maxima: 0, mediana: 0 }
        }
      };
    }

    const idades = data.map(r => r.idade).sort((a, b) => a - b);
    const soma = idades.reduce((acc, val) => acc + val, 0);
    const media = Math.round(soma / idades.length);
    const minima = idades[0];
    const maxima = idades[idades.length - 1];
    const mediana = idades[Math.floor(idades.length / 2)];

    return {
      respostas: data as PesquisaSegurancaIA[],
      total: data.length,
      estatisticas: {
        idade: { media, minima, maxima, mediana }
      }
    };
  } catch (error) {
    console.error('Erro ao processar dados:', error);
    throw error;
  }
}

function contarOcorrencias(arr: string[]): Record<string, number> {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

function extrairFerramentasIA(respostas: PesquisaSegurancaIA[]): Record<string, number> {
  const ferramentas: Record<string, number> = {};
  
  respostas.forEach(resposta => {
    if (resposta.ferramentas_ia_citadas) {
      const lista = resposta.ferramentas_ia_citadas
        .split(',')
        .map(f => f.trim())
        .filter(f => f.length > 0);
      
      lista.forEach(ferramenta => {
        ferramentas[ferramenta] = (ferramentas[ferramenta] || 0) + 1;
      });
    }
  });

  return ferramentas;
}

function agruparPorCampo(
  respostas: PesquisaSegurancaIA[],
  campo1: keyof PesquisaSegurancaIA,
  campo2: keyof PesquisaSegurancaIA
): Record<string, Record<string, number>> {
  const resultado: Record<string, Record<string, number>> = {};

  respostas.forEach(resposta => {
    const valor1 = String(resposta[campo1]);
    const valor2 = String(resposta[campo2]);

    if (!resultado[valor1]) {
      resultado[valor1] = {};
    }
    resultado[valor1][valor2] = (resultado[valor1][valor2] || 0) + 1;
  });

  return resultado;
}

const CORES = {
  primary: '#2563eb',
  secondary: '#7c3aed',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#06b6d4',
  rosa: '#ec4899',
  verde: '#22c55e',
  azul: '#3b82f6',
  roxo: '#a855f7',
  laranja: '#f97316'
};

const PALETTE = [
  '#2563eb', '#7c3aed', '#10b981', '#f59e0b', '#ef4444',
  '#06b6d4', '#ec4899', '#22c55e', '#3b82f6', '#a855f7',
  '#f97316', '#8b5cf6', '#14b8a6', '#f43f5e', '#84cc16'
];

function criarGraficoDistribuicaoIdade(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-idade') as HTMLCanvasElement;
  if (!canvas) return;

  const faixas: Record<string, number> = {
    '18-24': 0,
    '25-34': 0,
    '35-44': 0,
    '45-54': 0,
    '55-64': 0,
    '65+': 0
  };

  dados.respostas.forEach(r => {
    const idade = r.idade;
    if (idade >= 18 && idade <= 24) faixas['18-24']++;
    else if (idade >= 25 && idade <= 34) faixas['25-34']++;
    else if (idade >= 35 && idade <= 44) faixas['35-44']++;
    else if (idade >= 45 && idade <= 54) faixas['45-54']++;
    else if (idade >= 55 && idade <= 64) faixas['55-64']++;
    else if (idade >= 65) faixas['65+']++;
  });

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: Object.keys(faixas),
      datasets: [{
        label: 'Quantidade de Respostas',
        data: Object.values(faixas),
        backgroundColor: CORES.primary,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        title: { display: false }
      }
    }
  });
}

function criarGraficoAreaAtuacao(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-area-atuacao') as HTMLCanvasElement;
  if (!canvas) return;

  const areas = dados.respostas.map(r => r.area_atuacao);
  const contagem = contarOcorrencias(areas);

  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        data: Object.values(contagem),
        backgroundColor: PALETTE
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoConhecimentoTI(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-conhecimento-ti') as HTMLCanvasElement;
  if (!canvas) return;

  const niveis = dados.respostas.map(r => r.nivel_conhecimento_ti);
  const contagem = contarOcorrencias(niveis);

  const ordem = ['Básico', 'Intermediário', 'Avançado', 'Especialista'];
  const labels = ordem.filter(n => contagem[n]);
  const values = labels.map(n => contagem[n] || 0);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Quantidade',
        data: values,
        backgroundColor: [CORES.danger, CORES.warning, CORES.success, CORES.info],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: 'y',
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function criarGraficoUsoIA(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-uso-ia') as HTMLCanvasElement;
  if (!canvas) return;

  const usam = dados.respostas.filter(r => r.utiliza_ferramentas_ia).length;
  const naoUsam = dados.total - usam;
  const percentual = Math.round((usam / dados.total) * 100);

  const circle = document.getElementById('ia-percentage-circle') as HTMLElement;
  const percentageText = document.getElementById('ia-percentage') as HTMLElement;
  if (circle && percentageText) {
    circle.style.setProperty('--percentage', percentual.toString());
    percentageText.textContent = `${percentual}%`;
  }

  new Chart(canvas, {
    type: 'pie',
    data: {
      labels: ['Utilizam IA', 'Não Utilizam IA'],
      datasets: [{
        data: [usam, naoUsam],
        backgroundColor: [CORES.success, CORES.danger]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoFerramentasIA(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-ferramentas-ia') as HTMLCanvasElement;
  if (!canvas) return;

  const ferramentas = extrairFerramentasIA(dados.respostas);
  const sorted = Object.entries(ferramentas)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: sorted.map(f => f[0]),
      datasets: [{
        label: 'Menções',
        data: sorted.map(f => f[1]),
        backgroundColor: CORES.secondary,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: 'y',
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function criarGraficoConfiancaIAxTI(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-confianca-ia-ti') as HTMLCanvasElement;
  if (!canvas) return;

  const agrupado = agruparPorCampo(dados.respostas, 'nivel_conhecimento_ti', 'confianca_ia_deteccao');

  const niveis = Object.keys(agrupado);
  const confiancas = ['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta'];

  const datasets = confiancas.map((conf, idx) => ({
    label: conf,
    data: niveis.map(nivel => agrupado[nivel][conf] || 0),
    backgroundColor: PALETTE[idx]
  }));

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: niveis,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoPapelIA(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-papel-ia') as HTMLCanvasElement;
  if (!canvas) return;

  const papeis = dados.respostas.map(r => r.papel_ia_seguranca);
  const contagem = contarOcorrencias(papeis);

  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        data: Object.values(contagem),
        backgroundColor: PALETTE
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoUsoCriptografia(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-uso-criptografia') as HTMLCanvasElement;
  if (!canvas) return;

  const usos = dados.respostas.map(r => r.uso_criptografia);
  const contagem = contarOcorrencias(usos);

  new Chart(canvas, {
    type: 'pie',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        data: Object.values(contagem),
        backgroundColor: PALETTE
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoTiposCriptografia(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-tipos-criptografia') as HTMLCanvasElement;
  if (!canvas) return;

  const tiposCount: Record<string, number> = {};

  dados.respostas.forEach(r => {
    r.tipos_criptografia.forEach(tipo => {
      tiposCount[tipo] = (tiposCount[tipo] || 0) + 1;
    });
  });

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: Object.keys(tiposCount),
      datasets: [{
        label: 'Quantidade de Usuários',
        data: Object.values(tiposCount),
        backgroundColor: CORES.info,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function criarGraficoConhecimentoUsoCripto(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-conhecimento-uso-cripto') as HTMLCanvasElement;
  if (!canvas) return;

  const agrupado = agruparPorCampo(dados.respostas, 'nivel_conhecimento_criptografia', 'uso_criptografia');

  const niveis = Object.keys(agrupado);
  const usos = [...new Set(dados.respostas.map(r => r.uso_criptografia))];

  const datasets = usos.map((uso, idx) => ({
    label: uso,
    data: niveis.map(nivel => agrupado[nivel][uso] || 0),
    backgroundColor: PALETTE[idx]
  }));

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: niveis,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoNivelConhecimentoCripto(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-nivel-conhecimento-cripto') as HTMLCanvasElement;
  if (!canvas) return;

  const niveis = dados.respostas.map(r => r.nivel_conhecimento_criptografia);
  const contagem = contarOcorrencias(niveis);

  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        data: Object.values(contagem),
        backgroundColor: PALETTE
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoPreocupacaoPrivacidade(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-preocupacao-privacidade') as HTMLCanvasElement;
  if (!canvas) return;

  const preocupacoes = dados.respostas.map(r => r.preocupacao_privacidade);
  const contagem = contarOcorrencias(preocupacoes);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        label: 'Quantidade',
        data: Object.values(contagem),
        backgroundColor: CORES.rosa,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function criarGraficoPraticasPrivacidade(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-praticas-privacidade') as HTMLCanvasElement;
  if (!canvas) return;

  const praticasCount: Record<string, number> = {};

  dados.respostas.forEach(r => {
    r.praticas_privacidade.forEach(pratica => {
      praticasCount[pratica] = (praticasCount[pratica] || 0) + 1;
    });
  });

  const sorted = Object.entries(praticasCount).sort((a, b) => b[1] - a[1]);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: sorted.map(p => p[0]),
      datasets: [{
        label: 'Quantidade de Usuários',
        data: sorted.map(p => p[1]),
        backgroundColor: CORES.verde,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: 'y',
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function criarGraficoPreocupacaoAcoes(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-preocupacao-acoes') as HTMLCanvasElement;
  if (!canvas) return;

  const mediasPraticas: Record<string, { total: number; count: number }> = {};

  dados.respostas.forEach(r => {
    const preocupacao = r.preocupacao_privacidade;
    const numPraticas = r.praticas_privacidade.length;

    if (!mediasPraticas[preocupacao]) {
      mediasPraticas[preocupacao] = { total: 0, count: 0 };
    }
    mediasPraticas[preocupacao].total += numPraticas;
    mediasPraticas[preocupacao].count++;
  });

  const labels = Object.keys(mediasPraticas);
  const medias = labels.map(label => 
    Math.round((mediasPraticas[label].total / mediasPraticas[label].count) * 10) / 10
  );

  new Chart(canvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Média de Práticas Adotadas',
        data: medias,
        borderColor: CORES.primary,
        backgroundColor: CORES.primary + '33',
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: true }
      }
    }
  });
}

function criarGraficoConhecePosQuantica(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-conhece-pos-quantica') as HTMLCanvasElement;
  if (!canvas) return;

  const conhecimentos = dados.respostas.map(r => r.conhece_pos_quantica);
  const contagem = contarOcorrencias(conhecimentos);

  new Chart(canvas, {
    type: 'pie',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        data: Object.values(contagem),
        backgroundColor: PALETTE
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoTIxPosQuantica(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-ti-pos-quantica') as HTMLCanvasElement;
  if (!canvas) return;

  const agrupado = agruparPorCampo(dados.respostas, 'nivel_conhecimento_ti', 'conhece_pos_quantica');

  const niveis = Object.keys(agrupado);
  const conhecimentos = [...new Set(dados.respostas.map(r => r.conhece_pos_quantica))];

  const datasets = conhecimentos.map((conh, idx) => ({
    label: conh,
    data: niveis.map(nivel => agrupado[nivel][conh] || 0),
    backgroundColor: PALETTE[idx]
  }));

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: niveis,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoImportanciaPosQuantica(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-importancia-pos-quantica') as HTMLCanvasElement;
  if (!canvas) return;

  const importancias = dados.respostas.map(r => r.importancia_pos_quantica);
  const contagem = contarOcorrencias(importancias);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        label: 'Quantidade',
        data: Object.values(contagem),
        backgroundColor: CORES.roxo,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function criarGraficoBackups(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-backups') as HTMLCanvasElement;
  if (!canvas) return;

  const frequencias = dados.respostas.map(r => r.frequencia_backups);
  const contagem = contarOcorrencias(frequencias);

  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        data: Object.values(contagem),
        backgroundColor: PALETTE
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoAtualizacoes(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-atualizacoes') as HTMLCanvasElement;
  if (!canvas) return;

  const frequencias = dados.respostas.map(r => r.atualizacao_softwares);
  const contagem = contarOcorrencias(frequencias);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        label: 'Quantidade',
        data: Object.values(contagem),
        backgroundColor: CORES.azul,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function criarGrafico2FA(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-2fa') as HTMLCanvasElement;
  if (!canvas) return;

  const usos = dados.respostas.map(r => r.uso_2fa);
  const contagem = contarOcorrencias(usos);

  new Chart(canvas, {
    type: 'pie',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        data: Object.values(contagem),
        backgroundColor: [CORES.success, CORES.warning, CORES.danger]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoNivelSeguranca(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-nivel-seguranca') as HTMLCanvasElement;
  if (!canvas) return;

  const niveis = dados.respostas.map(r => r.nivel_seguranca_geral);
  const contagem = contarOcorrencias(niveis);

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: Object.keys(contagem),
      datasets: [{
        label: 'Quantidade',
        data: Object.values(contagem),
        backgroundColor: CORES.laranja,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function criarGraficoPraticasPercepcao(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-praticas-percepcao') as HTMLCanvasElement;
  if (!canvas) return;

  // Score de práticas (backups + updates + 2FA)
  const scoresPraticas = dados.respostas.map(r => {
    let score = 0;
    
    // Backups
    if (r.frequencia_backups === 'Diariamente') score += 3;
    else if (r.frequencia_backups === 'Semanalmente') score += 2;
    else if (r.frequencia_backups === 'Mensalmente') score += 1;
    
    // Atualizações
    if (r.atualizacao_softwares === 'Imediatamente') score += 3;
    else if (r.atualizacao_softwares === 'Em poucos dias') score += 2;
    else if (r.atualizacao_softwares === 'Eventualmente') score += 1;
    
    // 2FA
    if (r.uso_2fa === 'Sim, sempre que possível') score += 3;
    else if (r.uso_2fa === 'Sim, em alguns serviços') score += 2;
    else if (r.uso_2fa === 'Não') score += 0;
    
    return {
      score,
      percepcao: r.nivel_seguranca_geral
    };
  });

  const agrupado: Record<string, number[]> = {};
  scoresPraticas.forEach(({ score, percepcao }) => {
    if (!agrupado[percepcao]) agrupado[percepcao] = [];
    agrupado[percepcao].push(score);
  });

  const labels = Object.keys(agrupado);
  const medias = labels.map(label => {
    const scores = agrupado[label];
    return Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10;
  });

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Score Médio de Práticas',
        data: medias,
        backgroundColor: CORES.secondary,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: true }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 9
        }
      }
    }
  });
}

function criarGraficoDispositivos(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-dispositivos') as HTMLCanvasElement;
  if (!canvas) return;

  // Simular tipo de dispositivo (em produção real, isso viria de dados coletados)
  const dispositivos: Record<string, number> = {
    'Desktop': Math.floor(dados.total * 0.6),
    'Mobile': Math.floor(dados.total * 0.3),
    'Tablet': Math.floor(dados.total * 0.1)
  };

  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: Object.keys(dispositivos),
      datasets: [{
        data: Object.values(dispositivos),
        backgroundColor: [CORES.primary, CORES.success, CORES.warning]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoDispositivoSeguranca(_dados: DadosProcessados) {
  const canvas = document.getElementById('chart-dispositivo-seguranca') as HTMLCanvasElement;
  if (!canvas) return;

  // Simular correlação (em produção real, isso viria de dados coletados)
  const dispositivos = ['Desktop', 'Mobile', 'Tablet'];
  const niveisSeguranca = ['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto'];

  const datasets = niveisSeguranca.map((nivel, idx) => ({
    label: nivel,
    data: dispositivos.map(() => Math.floor(Math.random() * 20) + 5),
    backgroundColor: PALETTE[idx]
  }));

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: dispositivos,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

function criarGraficoHorarioAcesso(dados: DadosProcessados) {
  const canvas = document.getElementById('chart-horario-acesso') as HTMLCanvasElement;
  if (!canvas) return;

  // Simular horários de acesso (em produção real, isso viria de dados coletados)
  const horarios: Record<string, number> = {
    'Madrugada': Math.floor(dados.total * 0.1),
    'Manhã': Math.floor(dados.total * 0.3),
    'Tarde': Math.floor(dados.total * 0.4),
    'Noite': Math.floor(dados.total * 0.2)
  };

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: Object.keys(horarios),
      datasets: [{
        label: 'Acessos',
        data: Object.values(horarios),
        backgroundColor: [CORES.roxo, CORES.warning, CORES.laranja, CORES.primary],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// ========================================
// ATUALIZAR INTERFACE
// ========================================

function atualizarEstatisticasHeader(dados: DadosProcessados) {
  const totalElement = document.getElementById('total-respostas');
  const atualizacaoElement = document.getElementById('ultima-atualizacao');

  if (totalElement) {
    totalElement.textContent = dados.total.toString();
  }

  if (atualizacaoElement) {
    const agora = new Date();
    const horaFormatada = agora.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    atualizacaoElement.textContent = horaFormatada;
  }

  // Atualizar estatísticas de idade
  document.getElementById('idade-media')!.textContent = dados.estatisticas.idade.media.toString();
  document.getElementById('idade-min')!.textContent = dados.estatisticas.idade.minima.toString();
  document.getElementById('idade-max')!.textContent = dados.estatisticas.idade.maxima.toString();
  document.getElementById('idade-mediana')!.textContent = dados.estatisticas.idade.mediana.toString();
}

function mostrarErro(mensagem: string) {
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error-message');
  const errorText = document.getElementById('error-text');
  const dashboardElement = document.getElementById('dashboard');

  if (loadingElement) loadingElement.style.display = 'none';
  if (dashboardElement) dashboardElement.style.display = 'none';
  
  if (errorElement && errorText) {
    errorText.textContent = mensagem;
    errorElement.style.display = 'block';
  }
}

function mostrarDashboard() {
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error-message');
  const dashboardElement = document.getElementById('dashboard');

  if (loadingElement) loadingElement.style.display = 'none';
  if (errorElement) errorElement.style.display = 'none';
  if (dashboardElement) dashboardElement.style.display = 'block';
}

// ========================================
// FUNÇÃO PRINCIPAL
// ========================================

async function carregarDashboard() {
  try {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) loadingElement.style.display = 'block';

    const dados = await buscarDadosPesquisa();

    if (dados.total === 0) {
      mostrarErro('Nenhuma resposta encontrada no banco de dados.');
      return;
    }

    atualizarEstatisticasHeader(dados);

    // Criar todos os gráficos
    criarGraficoDistribuicaoIdade(dados);
    criarGraficoAreaAtuacao(dados);
    criarGraficoConhecimentoTI(dados);
    criarGraficoUsoIA(dados);
    criarGraficoFerramentasIA(dados);
    criarGraficoConfiancaIAxTI(dados);
    criarGraficoPapelIA(dados);
    criarGraficoUsoCriptografia(dados);
    criarGraficoTiposCriptografia(dados);
    criarGraficoConhecimentoUsoCripto(dados);
    criarGraficoNivelConhecimentoCripto(dados);
    criarGraficoPreocupacaoPrivacidade(dados);
    criarGraficoPraticasPrivacidade(dados);
    criarGraficoPreocupacaoAcoes(dados);
    criarGraficoConhecePosQuantica(dados);
    criarGraficoTIxPosQuantica(dados);
    criarGraficoImportanciaPosQuantica(dados);
    criarGraficoBackups(dados);
    criarGraficoAtualizacoes(dados);
    criarGrafico2FA(dados);
    criarGraficoNivelSeguranca(dados);
    criarGraficoPraticasPercepcao(dados);
    criarGraficoDispositivos(dados);
    criarGraficoDispositivoSeguranca(dados);
    criarGraficoHorarioAcesso(dados);

    mostrarDashboard();

  } catch (error) {
    console.error('Erro ao carregar dashboard:', error);
    mostrarErro(`Erro ao carregar os dados: ${(error as Error).message}`);
  }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  carregarDashboard();

  const refreshBtn = document.getElementById('refresh-btn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      // Destruir todos os gráficos existentes
      Chart.getChart('chart-idade')?.destroy();
      Chart.getChart('chart-area-atuacao')?.destroy();
      Chart.getChart('chart-conhecimento-ti')?.destroy();
      Chart.getChart('chart-uso-ia')?.destroy();
      Chart.getChart('chart-ferramentas-ia')?.destroy();
      Chart.getChart('chart-confianca-ia-ti')?.destroy();
      Chart.getChart('chart-papel-ia')?.destroy();
      Chart.getChart('chart-uso-criptografia')?.destroy();
      Chart.getChart('chart-tipos-criptografia')?.destroy();
      Chart.getChart('chart-conhecimento-uso-cripto')?.destroy();
      Chart.getChart('chart-nivel-conhecimento-cripto')?.destroy();
      Chart.getChart('chart-preocupacao-privacidade')?.destroy();
      Chart.getChart('chart-praticas-privacidade')?.destroy();
      Chart.getChart('chart-preocupacao-acoes')?.destroy();
      Chart.getChart('chart-conhece-pos-quantica')?.destroy();
      Chart.getChart('chart-ti-pos-quantica')?.destroy();
      Chart.getChart('chart-importancia-pos-quantica')?.destroy();
      Chart.getChart('chart-backups')?.destroy();
      Chart.getChart('chart-atualizacoes')?.destroy();
      Chart.getChart('chart-2fa')?.destroy();
      Chart.getChart('chart-nivel-seguranca')?.destroy();
      Chart.getChart('chart-praticas-percepcao')?.destroy();
      Chart.getChart('chart-dispositivos')?.destroy();
      Chart.getChart('chart-dispositivo-seguranca')?.destroy();
      Chart.getChart('chart-horario-acesso')?.destroy();

      carregarDashboard();
    });
  }
});
