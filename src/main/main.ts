import { formulario, initFormularioNavegacao } from './formulario';

const conteudos = {
  introducao: `
    <h1>A Nova Arquitetura da Segurança Digital: Integrando IA e Criptografia na Ciberdefesa Moderna</h1>
    <p>A Inteligência Artificial (IA) e a Criptografia representam as duas faces da moeda na segurança digital do século XXI. Enquanto a IA atua como o motor de inteligência, análise e automação, a Criptografia é a fundação matemática que garante a confidencialidade e a integridade dos dados. A convergência dessas duas disciplinas não é apenas uma tendência; é a base para a próxima geração de ciberdefesa.</p>
    <p>Este artigo explora como essa dupla dinâmica está redefinindo o campo da cibersegurança, atuando tanto na linha de frente contra ameaças avançadas quanto na construção de uma arquitetura de privacidade inquebrável.</p>
  `,

  iaCiberseguranca: `
    <h2>Parte 1: IA e Cibersegurança – Uma Dupla de Gume Duplo</h2>
    <p>A IA emergiu como um pilar fundamental no cenário da cibersegurança, atuando tanto como uma poderosa ferramenta de defesa quanto como uma arma a ser explorada por adversários. Compreender essa dinâmica é crucial para a proteção digital na era moderna.</p>
  `,

  papelEstrategico: `
    <h3>1. O Papel Estratégico da IA na Defesa</h3>
    <p>A capacidade da IA de processar e analisar vastos volumes de dados em tempo real a torna uma aliada essencial na detecção e resposta a ameaças cibernéticas.</p>
    
    <h4>Detecção em Tempo Real e Análise Preditiva</h4>
    <p>Sistemas baseados em Machine Learning (Aprendizado de Máquina) identificam instantaneamente padrões, anomalias e comportamentos que sinalizam ataques potenciais — desde malwares nunca vistos (<em>zero-day</em>) até movimentos laterais dentro da rede — antes que se concretizem. A IA aprende o "comportamento normal" de usuários e sistemas, tornando qualquer desvio um alerta de alta prioridade.</p>
    
    <h4>Resposta Rápida e Automação (SOAR)</h4>
    <p>A automação de processos de segurança (Orquestração, Automação e Resposta de Segurança - SOAR) otimiza a resposta a incidentes. A IA classifica alertas, prioriza ameaças, bloqueia IPs maliciosos e isola <em>endpoints</em> comprometidos, minimizando o tempo de exposição e aliviando a carga de trabalho das equipes de segurança humana, permitindo que se concentrem em investigações complexas.</p>
  `,

  usoMalicioso: `
    <h3>2. O Uso Malicioso da IA por Atores Adversários</h3>
    <p>A sofisticação da tecnologia é, infelizmente, espelhada no lado ofensivo. Criminosos cibernéticos e estados-nação estão utilizando a IA para aprimorar drasticamente suas estratégias de ataque.</p>
    
    <h4>Ataques Sofisticados e Hiperpersonalizados</h4>
    <p>A IA generativa é empregada para criar campanhas de <em>phishing</em> e <em>spear-phishing</em> incrivelmente convincentes, personalizando o texto e o contexto com base em dados coletados da vítima. Ferramentas automatizam a varredura e exploração de vulnerabilidades, tornando os ataques mais rápidos, evasivos e difíceis de rastrear por defesas tradicionais baseadas em assinaturas.</p>
    
    <h4>Ameaças de <em>Deepfake</em> e Enganabilidade</h4>
    <p>A capacidade de gerar <em>deepfakes</em> de voz e vídeo representa uma ameaça crescente. Por exemplo, a falsificação de voz por IA pode ser usada para comprometer um colaborador em uma chamada, facilitando a invasão de contas ou a realização de fraudes financeiras de alto impacto, como a autorização de transferências bancárias.</p>
  `,

  vulnerabilidades: `
    <h3>3. Vulnerabilidades Intrínsecas nos Sistemas de IA</h3>
    <p>Os próprios modelos de IA, ao serem implementados, introduzem novos vetores de ataque que devem ser protegidos com a criptografia e outras técnicas de <em>hardening</em>.</p>
    
    <h4>Ataques Adversariais e Manipulação</h4>
    <p>Atacantes podem fornecer dados sutilmente alterados (<em>adversarial examples</em>) para enganar um modelo de IA. No contexto de segurança, isso pode levar a um <strong>falso negativo</strong> (um ataque real é ignorado pelo sistema de detecção) ou a um <strong>falso positivo</strong> (um usuário legítimo é bloqueado), comprometendo a eficácia da defesa.</p>
    
    <h4><em>Model Poisoning</em> (Envenenamento de Modelo)</h4>
    <p>A adulteração intencional dos dados de treinamento pode comprometer o modelo de IA, fazendo com que ele aprenda a tomar decisões tendenciosas ou falhe em identificar ameaças específicas. Esse tipo de ataque é particularmente perigoso em infraestruturas críticas onde a IA é usada para controle ou tomada de decisões de segurança.</p>
  `,

  iaECriptografia: `
    <h2>Parte 2: IA e Criptografia – A Nova Fronteira da Segurança Digital</h2>
    <p>A Inteligência Artificial (IA) e a Criptografia, embora distintas em sua natureza (análise vs. sigilo), estão convergindo rapidamente para moldar o futuro da segurança e da privacidade digital. Sua união promete sistemas mais inteligentes, eficientes e inquebráveis.</p>
  `,

  otimizacaoCriptografia: `
    <h3>1. Otimização da Criptografia pela IA</h3>
    <p>A IA atua como a inteligência por trás da gestão dos processos criptográficos, que são notoriamente complexos e intensivos em recursos.</p>
    
    <table>
      <thead>
        <tr>
          <th>Área de Aplicação</th>
          <th>Interação da IA com a Criptografia</th>
          <th>Exemplo de Uso</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Gerenciamento Inteligente de Chaves (KMS)</strong></td>
          <td>Monitoramento Comportamental: A IA detecta padrões de acesso anômalos às chaves criptográficas.</td>
          <td>Automação da rotação de chaves com base no risco e no volume de uso, otimizando a segurança e o <em>compliance</em>.</td>
        </tr>
        <tr>
          <td><strong>Quebra e Análise de Códigos (Criptoanálise)</strong></td>
          <td>Machine Learning analisa padrões e vulnerabilidades em cifras e implementações.</td>
          <td>Aceleramento da identificação de fraquezas em protocolos existentes, levando à criação de algoritmos mais robustos.</td>
        </tr>
        <tr>
          <td><strong>Detecção de Intrusões no Tráfego Criptografado</strong></td>
          <td>Análise de Tráfego Criptografado (ETA): A IA monitora o tráfego de rede criptografado para anomalias comportamentais.</td>
          <td>Permite a detecção de atividade maliciosa sem a necessidade de descriptografar o conteúdo (inspeção SSL/TLS), mantendo a privacidade.</td>
        </tr>
      </tbody>
    </table>
  `,

  protecaoIntegridade: `
    <h3>2. Criptografia Protegendo a Integridade e a Privacidade da IA</h3>
    <p>A criptografia é essencial para proteger a integridade, a confidencialidade e a privacidade dos modelos de IA e seus dados de treinamento, mitigando os riscos de <em>Model Poisoning</em> e vazamento de dados.</p>
    
    <h4>Confidencialidade do Modelo (Aprendizado Federado)</h4>
    <p>Técnicas como o Aprendizado Federado (<em>Federated Learning</em>) permitem que modelos de IA sejam treinados em dados descentralizados e criptografados (<em>na fonte</em>). Isso garante que os dados brutos e confidenciais jamais saiam dos dispositivos dos usuários (por exemplo, celulares, hospitais), protegendo a privacidade individual.</p>
    
    <h4>Segurança de Dados de Treinamento</h4>
    <p>A criptografia de ponta a ponta e o <em>hashing</em> protegem os <em>datasets</em> massivos usados para treinar a IA, prevenindo a manipulação (<em>data poisoning</em>) e o vazamento de informações sensíveis, sendo uma camada crítica de <em>compliance</em> com leis de privacidade globais.</p>
  `,

  computacaoConfidencial: `
    <h3>3. O Futuro: A Revolução da Computação Confidencial</h3>
    <p>A convergência mais ambiciosa é a que permite o trabalho com dados mantidos em sigilo total, removendo o conflito entre utilidade e privacidade.</p>
    
    <h4>Criptografia Homomórfica (HE)</h4>
    <p>Esta técnica de ponta permite que a IA realize cálulos e análises em dados que permanecem <strong>permanentemente criptografados</strong>. Isso abre caminho para a <strong>Computação Confidencial</strong>, onde a privacidade e a utilidade dos dados são maximizadas simultaneamente, especialmente em ambientes de nuvem e <em>cross-organizational</em> (por exemplo, dois bancos analisando dados em conjunto sem revelar as informações individuais dos clientes).</p>
    
    <h4>Criptografia Pós-Quântica (PQC)</h4>
    <p>Com a ameaça iminente dos computadores quânticos — capazes de quebrar grande parte da criptografia atual (como RSA e ECC) —, a IA tem um papel crucial na transição para a nova era. A IA é utilizada para testar a resistência de novos algoritmos criptográficos (que são imunes a ataques quânticos) contra as formas mais sofisticadas de criptoanálise, acelerando o desenvolvimento e a implementação da PQC.</p>
  `,

  recomendacoes: `
    <h2>Parte 3: Recomendações e Boas Práticas – Navegando na Convergência</h2>
    <p>Para aproveitar os benefícios da IA na defesa cibernética e, ao mesmo tempo, mitigar os riscos apresentados por ataques baseados em IA e novas tecnologias, organizações e indivíduos devem adotar um conjunto de práticas de segurança avançadas e proativas.</p>
  `,

  fortalecimentoDefesa: `
    <h3>1. Fortalecimento da Defesa com IA e Automação</h3>
    <ul>
      <li><strong>Implementação de Soluções <em>AI-Powered</em>:</strong> Adote ferramentas de Detecção e Resposta Estendida (XDR) e Análise Comportamental de Usuários e Entidades (UEBA) que utilizam Machine Learning para identificar anomalias e ataques <em>zero-day</em> baseados em comportamento, e não apenas em assinaturas.</li>
      <li><strong>Teste de Stress e Validação Contínua:</strong> Use IA para simular ataques (<em>Breach and Attack Simulation</em>) e testar a resistência das suas defesas de forma contínua, identificando e corrigindo proativamente as vulnerabilidades antes que os adversários o façam.</li>
    </ul>
  `,

  mitigacaoRiscos: `
    <h3>2. Mitigação de Riscos de Ataques Baseados em IA</h3>
    <ul>
      <li><strong>Treinamento Anti-Phishing e Anti-Deepfake:</strong> Implemente programas de conscientização que incluam a simulação de e-mails e mídias <em>deepfake</em> de alta qualidade, ensinando os colaboradores a identificar não apenas texto malicioso, mas também anomalias de voz e vídeo.</li>
      <li><strong>Autenticação Multifator (MFA) Inviolável:</strong> Implemente e force o uso de MFA baseada em chaves de segurança físicas (U2F/FIDO2) ou aplicativos, que são mais resistentes a ataques de troca de SIM (<em>SIM Swapping</em>) e <em>phishing</em> de credenciais.</li>
    </ul>
  `,

  governancaEtica: `
    <h3>3. Governança, Ética e Privacidade da IA em Segurança</h3>
    <ul>
      <li><strong>Princípios de IA Responsável:</strong> Crie e aplique um conjunto de princípios éticos para o desenvolvimento e uso de sistemas de IA, focando em <strong>transparência</strong> (explicabilidade do modelo), <strong>justiça</strong> (evitar vieses) e <strong>privacidade</strong>.</li>
      <li><strong>Privacidade por Design:</strong> Certifique-se de que a coleta e o processamento de dados para o treinamento da IA de segurança estejam em total conformidade com regulamentos como LGPD e GDPR, utilizando técnicas de anonimização e Criptografia Homomórfica sempre que possível para processar dados sensíveis.</li>
      <li><strong>Auditoria de Modelos:</strong> Realize auditorias regulares nos modelos de IA para detectar vulnerabilidades (<em>adversarial attacks</em>) e garantir a precisão, prevenindo falsos positivos ou falsos negativos que comprometam a segurança.</li>
    </ul>
  `,

  preparacaoPosQuantico: `
    <h3>4. Preparação para o Futuro Pós-Quântico</h3>
    <ul>
      <li><strong>Inventário e Estratégia Pós-Quântica (PQC):</strong> Mantenha um inventário detalhado de todos os algoritmos criptográficos em uso e o ciclo de vida das chaves. Comece a planejar a migração gradual para algoritmos PQC padronizados (como os selecionados pelo NIST), garantindo que os sistemas mais críticos sejam os primeiros a serem adaptados contra ameaças de computação quântica.</li>
    </ul>
  `,

  conclusao: `
    <h2>Conclusão</h2>
    <p>A sinergia entre IA e Criptografia está forjando uma nova era para a cibersegurança. Ao mesmo tempo que a IA oferece a velocidade e a inteligência necessárias para combater ameaças automatizadas e complexas, a Criptografia fornece a fundação de confiança e privacidade para que a IA possa operar de maneira segura e ética.</p>
    <p>O sucesso na proteção digital futura dependerá da capacidade das organizações de integrar ambas as disciplinas, gerenciando os riscos da tecnologia de ponta (<em>deepfakes</em>, ataques adversariais) e maximizando os benefícios de forma responsável e proativa, construindo uma arquitetura de segurança que é, ao mesmo tempo, inteligente e inquebrável.</p>
  `,

  formulario: formulario
};

type ConteudosKey = keyof typeof conteudos;

function popularBoxes() {
  Object.keys(conteudos).forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.innerHTML = conteudos[id as ConteudosKey];
    }
  });
  

  initFormularioNavegacao();
}

const anchorLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', (event: Event) => {
    event.preventDefault(); 

    const targetId = link.getAttribute('href')?.substring(1); 
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

document.addEventListener('DOMContentLoaded', popularBoxes);