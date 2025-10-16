const conteudos = {
  praticasDeSeguranca: `
    <h2>1. Práticas de Segurança</h2>
    <p>A segurança digital tornou-se uma necessidade essencial na era da informação, em que bilhões de dispositivos estão interconectados. Proteger dados pessoais e corporativos exige mais do que softwares: demanda cultura organizacional, políticas claras e educação digital.</p>
    
    <h3>Entre as principais práticas recomendadas estão:</h3>
    <ul>
      <li><strong>Autenticação multifator (MFA):</strong> adiciona camadas extras de verificação de identidade.</li>
      <li><strong>Segmentação de rede:</strong> separa setores e limita o alcance de ataques.</li>
      <li><strong>Atualização constante de sistemas e antivírus:</strong> corrige vulnerabilidades conhecidas.</li>
      <li><strong>Backups seguros e frequentes:</strong> reduzem prejuízos em caso de falhas ou ataques.</li>
      <li><strong>Filosofia Zero Trust:</strong> não confiar em nenhum acesso por padrão, verificando continuamente.</li>
      <li><strong>Capacitação de usuários:</strong> conscientizar sobre golpes e boas práticas online.</li>
    </ul>
    
    <p>De acordo com relatórios da Check Point e TOTVS, a segurança deve ser tratada como processo contínuo, combinando tecnologia, política e comportamento humano. Ferramentas como VPNs, firewalls, DLP e antivírus são indispensáveis para a proteção contra malwares, phishing e ransomware.</p>
    
    <h4>Conclusão:</h4>
    <p>A adoção dessas práticas fortalece a resiliência cibernética e garante integridade e confiabilidade no ambiente digital.</p>
    
    <h4>Fontes:</h4>
    <ul>
      <li>TOTVS. Segurança de rede: práticas e tecnologias essenciais. Blog TOTVS, 2024.</li>
      <li>CHECK POINT. Network Security Best Practices. Check Point Cyber Hub, 2024.</li>
      <li>SAFERNET. Segurança digital e a infinidade de dados que compartilhamos na web. SaferNet, 2024.</li>
    </ul>
  `,

  relatosDeOcorrencias: `
    <h2>2. Relatos de Ocorrências</h2>
    <p>Casos recentes de ataques cibernéticos demonstram o crescimento das ameaças e a necessidade de medidas preventivas constantes.</p>
    
    <h3>Ataque à Salesforce (2025)</h3>
    <p>O ataque à Salesforce (2025) afetou cerca de 6 milhões de clientes de empresas como GAP, Qantas e Fujifilm. Dados pessoais foram expostos após o grupo criminoso divulgar informações roubadas em um site da rede Tor. A Salesforce negou pagamento de resgate, enquanto investigações apontaram que algumas companhias pagaram para evitar divulgação.</p>
    
    <h3>Caso Okta (2022)</h3>
    <p>Outro caso relevante foi o da Okta (2022), alvo do grupo LAPSUS$, que conseguiu acesso interno a sistemas críticos. A violação atingiu cerca de 2,5% dos clientes e mostrou a importância de controles de autenticação robustos e restrição de privilégios.</p>
    
    <h4>Conclusão:</h4>
    <p>Os relatos evidenciam que nenhuma organização está imune. A segurança deve ser proativa, e não reativa, com foco em prevenção e resposta rápida a incidentes.</p>
    
    <h4>Fontes:</h4>
    <ul>
      <li>SECURITY WEEK. Extortion Group Leaks Millions of Records from Salesforce Hacks., 2025.</li>
      <li>PORTSWIGGER. Okta Investigates LAPSUS$ Gangs Compromise Claims., 2022.</li>
    </ul>
  `,

  tiposDeAtaques: `
    <h2>Tipos de Ataques na Internet</h2>
    <p>Abaixo, você encontra uma seleção de ataques frequentes na internet, organizados por técnica ou vetor. Muitos combinam estratégias técnicas e manipulação humana.</p>

    <h3>1. Malware</h3>
    <p>Software malicioso que tem por objetivo infectar um dispositivo, roubar dados, danificar sistemas ou conceder controle ao invasor.</p>
    <p><strong>Tipos de malware incluem:</strong></p>
    <ul>
      <li><strong>Vírus:</strong> se anexam a arquivos legítimos e se propagam quando esses arquivos são executados.</li>
      <li><strong>Worms:</strong> replicam-se automaticamente através de redes, explorando vulnerabilidades para se propagar.</li>
      <li><strong>Trojan (Cavalo de Tróia):</strong> se disfarçam como programas legítimos, mas escondem funcionalidades maliciosas.</li>
      <li><strong>Ransomware:</strong> criptografa dados e exige pagamento para liberar o acesso.</li>
      <li><strong>Spyware / Keyloggers:</strong> monitoram atividades do usuário (digitações, navegação) para coletar informações sigilosas.</li>
      <li><strong>Cryptojacking:</strong> infecta dispositivos para usar seus recursos computacionais na mineração de criptomoedas sem consentimento.</li>
    </ul>

    <h3>2. Phishing e Engenharia Social</h3>
    <p>Ataques que exploram falhas humanas, engano e confiança para obter credenciais ou induzir a ações inseguras:</p>
    <ul>
      <li><strong>Phishing genérico:</strong> envio de e-mails falsos que parecem vir de instituições confiáveis, com links ou anexos maliciosos.</li>
      <li><strong>Spear phishing:</strong> phishing altamente direcionado, buscando vítimas específicas (um funcionário de finanças, por exemplo).</li>
      <li><strong>Whaling:</strong> variante de spear phishing que mira executivos ou pessoas de alto escalão.</li>
      <li><strong>Business Email Compromise (BEC):</strong> ataques em que o invasor se passa por fornecedor, executivo ou parceiro para enganar e conseguir pagamentos ou dados.</li>
      <li><strong>Spoofing:</strong> falsificação de identidade, endereço de e-mail, número de telefone ou site para parecer legítimo.</li>
    </ul>

    <h3>3. Ataques de Negação de Serviço (DoS / DDoS)</h3>
    <p>O objetivo é tornar um serviço indisponível, inundando-o com tráfego excessivo:</p>
    <ul>
      <li><strong>DoS (Denial of Service):</strong> um único ponto envia tráfego ou solicitações demais para sobrecarregar o alvo.</li>
      <li><strong>DDoS (Distributed DoS):</strong> muitos dispositivos (às vezes infectados como botnet) orquestram o ataque simultaneamente para aumentar a escala e dificultar a mitigação.</li>
    </ul>

    <h3>4. Injeção de Código / Ataques a Aplicações Web</h3>
    <p>Exploram vulnerabilidades em aplicativos web para executar comandos maliciosos ou acessar dados:</p>
    <ul>
      <li><strong>SQL Injection:</strong> o invasor injeta comandos SQL maliciosos em campos de entrada (formulários, parâmetros) para acessar ou manipular o banco de dados.</li>
      <li><strong>Cross-Site Scripting (XSS):</strong> scripts maliciosos são inseridos em páginas web visitadas por usuários para executar ações indesejadas no navegador da vítima.</li>
      <li><strong>Ataques de injeção de código genérico:</strong> explorar falhas que permitem execução de código arbitrário.</li>
    </ul>

    <h3>5. Man-in-the-Middle (MITM)</h3>
    <p>O atacante intercepta a comunicação entre duas partes, podendo ler, modificar ou injetar dados:</p>
    <ul>
      <li>Especialmente perigoso em redes Wi-Fi públicas não seguras, onde o invasor pode se posicionar entre o usuário e o servidor.</li>
      <li>Também pode ocorrer após infecção por malware, que redireciona o tráfego por um componente malicioso no dispositivo.</li>
    </ul>

    <h3>6. Exploits de Dia Zero (Zero-day)</h3>
    <p>Vulnerabilidades desconhecidas ou não corrigidas são exploradas antes mesmo de haver uma correção ou patch disponível. Quando divulgadas, o fabricante ainda não teve tempo de liberar atualização, e invasores rapidamente aproveitam essa janela para atacar.</p>

    <h3>7. Ataques à Cadeia de Suprimentos (Supply Chain Attack)</h3>
    <p>O alvo não é diretamente a empresa, mas fornecedores ou componentes externos:</p>
    <ul>
      <li>Inserir malware em uma biblioteca de software utilizada por diversas empresas, para que todas sejam afetadas.</li>
      <li>Também pode envolver comprometimento de hardware, serviços terceirizados ou atualizações falsas.</li>
    </ul>

    <h3>8. Ataques a Dispositivos IoT</h3>
    <p>Com a proliferação de objetos conectados (câmeras, sensores, eletrodomésticos), muitos não têm segurança adequada. Os invasores exploram falhas desses dispositivos para acesso à rede ou para incorporá-los a botnets.</p>

    <h3>9. Brute-force / Ataques de Força Bruta</h3>
    <p>Tentativas automatizadas de adivinhar credenciais por meio da repetição de tentativas:</p>
    <ul>
      <li>Pode envolver dicionários de senhas comuns ou combinações sistemáticas.</li>
      <li><strong>Credential stuffing:</strong> usar credenciais vazadas anteriormente para tentar acesso em outros serviços.</li>
    </ul>

    <h3>10. Ataques Mistos (Mixed Threat)</h3>
    <p>Combinação de múltiplas técnicas simultâneas para explorar diferentes vetores. Por exemplo, um e-mail de phishing que entrega malware, que por sua vez executa injeção de código ou cria backdoor. Esses ataques são mais difíceis de detectar porque cada componente pode parecer legítimo isoladamente.</p>

    <h3>11. Watering Hole</h3>
    <p>É um tipo de ataque em que o invasor identifica sites frequentemente visitados pelas vítimas-alvo e compromete esses sites com malware. Assim, usuários visitando um site legítimo acabam infectados, sem perceber. A técnica é perigosa porque é difícil de detectar e atua de forma discreta.</p>

    <h4>Conclusão:</h4>
    <p>O conhecimento desses tipos de ataques é fundamental para desenvolver estratégias de defesa eficazes. A combinação de tecnologia, conscientização e práticas de segurança robustas é essencial para proteger dados e sistemas contra ameaças em constante evolução.</p>

    <h4>Fontes:</h4>
    <ul>
      <li>SentinelOne. Malware Types and Detection., 2024.</li>
      <li>IBM. Cyber Attack Types and Prevention., 2024.</li>
      <li>Cisco. Network Security Threats., 2024.</li>
      <li>Fortinet. Web Application Attacks., 2024.</li>
      <li>Rapid7. Common Cyber Threats., 2024.</li>
    </ul>
  `,

  recomendacoesDePrevencao: `
    <h2>3. Recomendações de Prevenção</h2>
    <p>A prevenção é o pilar da segurança digital. Diversos especialistas destacam medidas simples, mas eficazes, para reduzir riscos e fortalecer a proteção das informações.</p>
    
    <h3>Medidas Recomendadas</h3>
    <ul>
      <li><strong>Educação digital:</strong> treinar usuários para identificar golpes e links suspeitos.</li>
      <li><strong>Antivírus e firewall atualizados:</strong> monitorar e bloquear tráfego malicioso.</li>
      <li><strong>Atualizações automáticas:</strong> corrigir brechas de segurança com rapidez.</li>
      <li><strong>Backups regulares:</strong> armazenar cópias seguras em locais isolados.</li>
      <li><strong>Política de senhas seguras:</strong> adotar gerenciadores e autenticação 2FA.</li>
      <li><strong>Proteção de dispositivos IoT:</strong> segmentar redes e limitar acessos.</li>
      <li><strong>Monitoramento constante:</strong> uso de ferramentas EDR e análise de logs.</li>
      <li><strong>Conformidade com a LGPD:</strong> proteger dados em todas as etapas.</li>
    </ul>
    
    <p>Segundo a Check Point (2024), empresas devem migrar de um modelo de detecção para um de prevenção ativa, utilizando inteligência de ameaças para antecipar ataques.</p>
    
    <h4>Conclusão:</h4>
    <p>A segurança deve ser encarada como um compromisso contínuo, unindo tecnologia, gestão e conscientização.</p>
    
    <h4>Fontes:</h4>
    <ul>
      <li>CHECK POINT. Network Security Best Practices., 2024.</li>
      <li>TOTVS. Segurança de Rede: Boas Práticas e Soluções Corporativas., 2024.</li>
      <li>SAFERNET. Conscientização Digital e Proteção de Dados., 2024.</li>
    </ul>
  `,

  recomendacoesDeAplicacoes: `
    <h2>4. Recomendações de Aplicações</h2>
    <p>Ferramentas digitais são grandes aliadas da segurança. O uso de gerenciadores de senha, VPNs, autenticação multifator e assinatura eletrônica é essencial para proteger informações pessoais e corporativas.</p>
    
    <h3>Principais Gerenciadores de Senha (2025)</h3>
    <table>
      <thead>
        <tr>
          <th>Aplicativo</th>
          <th>Nota</th>
          <th>Destaques</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NordPass</td>
          <td>⭐ 4.9</td>
          <td>Arquitetura "zero knowledge", multiplataforma</td>
        </tr>
        <tr>
          <td>1Password</td>
          <td>⭐ 4.6</td>
          <td>Escaneamento da dark web, compartilhamento seguro</td>
        </tr>
        <tr>
          <td>RoboForm</td>
          <td>⭐ 4.4</td>
          <td>Criptografia de ponta e facilidade de uso</td>
        </tr>
        <tr>
          <td>Keeper</td>
          <td>⭐ 4.2</td>
          <td>Autenticação 2FA e interface moderna</td>
        </tr>
        <tr>
          <td>Proton Pass</td>
          <td>⭐ 4.0</td>
          <td>Suporte a passkeys e armazenamento seguro</td>
        </tr>
        <tr>
          <td>Bitdefender Password Manager</td>
          <td>⭐ 4.0</td>
          <td>Integrado à suíte antivírus</td>
        </tr>
        <tr>
          <td>Dashlane</td>
          <td>⭐ 3.9</td>
          <td>Equilíbrio entre segurança e praticidade</td>
        </tr>
        <tr>
          <td>Norton Password Manager</td>
          <td>⭐ 3.8</td>
          <td>Login biométrico integrado</td>
        </tr>
        <tr>
          <td>Total Password Manager</td>
          <td>⭐ 3.8</td>
          <td>Monitoramento de senhas comprometidas</td>
        </tr>
      </tbody>
    </table>
    
    <p>Além disso, ferramentas como TOTVS Assinatura Eletrônica (com criptografia SHA-256) garantem autenticidade e validade jurídica, conforme a LGPD.</p>
    
    <h4>Conclusão:</h4>
    <p>Aplicações seguras e certificadas são indispensáveis para fortalecer a privacidade e a confiabilidade digital.</p>
    
    <h4>Fontes:</h4>
    <ul>
      <li>CYBERNEWS. Best Password Managers BR., 2025.</li>
      <li>TOTVS. Assinatura Eletrônica e Segurança de Dados., 2024.</li>
    </ul>
  `,

  conclusaoGeral: `
    <h2>Conclusão Geral</h2>
    <p>A segurança digital é um compromisso coletivo. Ela depende tanto de soluções tecnológicas quanto da conscientização e responsabilidade de cada indivíduo. A proteção da informação não é um obstáculo à liberdade, mas sim uma condição fundamental para garanti-la.</p>
    
    <p>Empresas, instituições e usuários precisam estar atentos às novas ameaças e investir em prevenção, cultura cibernética e boas práticas. Somente assim será possível construir um ambiente digital mais seguro e confiável.</p>
  `,

  formulario: `
    <h2>Pesquisa sobre Golpes Digitais</h2>
    <p>Sua experiência é importante para entendermos melhor os golpes digitais e como preveni-los. Por favor, responda este questionário de forma sincera e anônima.</p>
    
    <form id="formPesquisa">
      <div class="progress-indicator">
        <div class="progress-step active" data-step="1">
          <div class="step-number">1</div>
          <div class="step-label">Perfil</div>
        </div>
        <div class="progress-step" data-step="2">
          <div class="step-number">2</div>
          <div class="step-label">Experiência</div>
        </div>
        <div class="progress-step" data-step="3">
          <div class="step-number">3</div>
          <div class="step-label">Impactos</div>
        </div>
        <div class="progress-step" data-step="4">
          <div class="step-number">4</div>
          <div class="step-label">Reações</div>
        </div>
        <div class="progress-step" data-step="5">
          <div class="step-number">5</div>
          <div class="step-label">Percepções</div>
        </div>
      </div>


      <div class="form-step active" data-step="1">
        <div class="form-section">
          <h3>Seção 1: Perfil</h3>
          
          <div class="form-group">
            <label>Faixa etária *</label>
            <div class="radio-group">
              <label><input type="radio" name="faixaEtaria" value="menos18" required> Menos de 18</label>
              <label><input type="radio" name="faixaEtaria" value="18-24"> 18-24</label>
              <label><input type="radio" name="faixaEtaria" value="25-34"> 25-34</label>
              <label><input type="radio" name="faixaEtaria" value="35-44"> 35-44</label>
              <label><input type="radio" name="faixaEtaria" value="45-54"> 45-54</label>
              <label><input type="radio" name="faixaEtaria" value="55-64"> 55-64</label>
              <label><input type="radio" name="faixaEtaria" value="65mais"> 65 ou mais</label>
            </div>
          </div>

          <div class="form-group">
            <label>Gênero *</label>
            <div class="radio-group">
              <label><input type="radio" name="genero" value="feminino" required> Feminino</label>
              <label><input type="radio" name="genero" value="masculino"> Masculino</label>
              <label><input type="radio" name="genero" value="prefiroNaoDizer"> Prefiro não dizer</label>
              <label><input type="radio" name="genero" value="outro"> Outro: <input type="text" name="generoOutro" class="inline-input"></label>
            </div>
          </div>

          <div class="form-group">
            <label for="localizacao">Localização (cidade / estado) *</label>
            <input type="text" id="localizacao" name="localizacao" required placeholder="Ex: São Paulo, SP">
          </div>

          <div class="form-group">
            <label for="escolaridade">Nível de escolaridade *</label>
            <select id="escolaridade" name="escolaridade" required>
              <option value="">Selecione...</option>
              <option value="fundamental">Ensino Fundamental</option>
              <option value="medio">Ensino Médio</option>
              <option value="superior">Ensino Superior</option>
              <option value="posGraduacao">Pós-graduação</option>
            </select>
          </div>

          <div class="form-group">
            <label>Grau de familiaridade com tecnologia *</label>
            <div class="radio-group">
              <label><input type="radio" name="familiaridadeTech" value="muitoBaixo" required> Muito baixo</label>
              <label><input type="radio" name="familiaridadeTech" value="baixo"> Baixo</label>
              <label><input type="radio" name="familiaridadeTech" value="medio"> Médio</label>
              <label><input type="radio" name="familiaridadeTech" value="alto"> Alto</label>
              <label><input type="radio" name="familiaridadeTech" value="muitoAlto"> Muito alto</label>
            </div>
          </div>
        </div>
      </div>


      <div class="form-step" data-step="2">
        <div class="form-section">
          <h3>Seção 2: Experiência com Golpes</h3>
          
          <div class="form-group">
            <label>Você já sofreu algum golpe/fraude digital? *</label>
            <div class="radio-group">
              <label><input type="radio" name="sofreuGolpe" value="sim" required> Sim</label>
              <label><input type="radio" name="sofreuGolpe" value="nao"> Não</label>
            </div>
          </div>

          <div id="golpeDetalhes" style="display: none;">
            <div class="form-group">
              <label>Qual tipo de golpe foi? (pode marcar mais de um) *</label>
              <div class="checkbox-group">
                <label><input type="checkbox" name="tipoGolpe" value="phishing"> Phishing (e-mail, mensagem falsa)</label>
                <label><input type="checkbox" name="tipoGolpe" value="redesSociais"> Golpe via redes sociais</label>
                <label><input type="checkbox" name="tipoGolpe" value="financeiro"> Golpe financeiro / investimento falso</label>
                <label><input type="checkbox" name="tipoGolpe" value="rouboIdentidade"> Roubo de identidade</label>
                <label><input type="checkbox" name="tipoGolpe" value="appFalso"> Aplicativo / site falso</label>
                <label><input type="checkbox" name="tipoGolpe" value="suporteFalso"> Golpe de suporte técnico falso</label>
                <label><input type="checkbox" name="tipoGolpe" value="outroTipo"> Outro: <input type="text" name="tipoGolpeOutro" class="inline-input"></label>
              </div>
            </div>

            <div class="form-group">
              <label>Em que canal o golpe ocorreu? *</label>
              <div class="radio-group">
                <label><input type="radio" name="canalGolpe" value="email"> E-mail</label>
                <label><input type="radio" name="canalGolpe" value="sms"> SMS / Mensagem de texto</label>
                <label><input type="radio" name="canalGolpe" value="whatsapp"> WhatsApp ou app de mensagens</label>
                <label><input type="radio" name="canalGolpe" value="redesSociais"> Redes sociais</label>
                <label><input type="radio" name="canalGolpe" value="telefone"> Ligação telefônica</label>
                <label><input type="radio" name="canalGolpe" value="siteApp"> Site ou aplicativo móvel</label>
                <label><input type="radio" name="canalGolpe" value="outroCanal"> Outro: <input type="text" name="canalGolpeOutro" class="inline-input"></label>
              </div>
            </div>

            <div class="form-group">
              <label for="quandoOcorreu">Quando ocorreu o golpe? *</label>
              <input type="text" id="quandoOcorreu" name="quandoOcorreu" placeholder="Ex: Janeiro/2024 ou há 6 meses">
            </div>

            <div class="form-group">
              <label>Como você descobriu que foi vítima do golpe? *</label>
              <div class="radio-group">
                <label><input type="radio" name="comoDescobriu" value="imediato"> Percebi imediatamente</label>
                <label><input type="radio" name="comoDescobriu" value="extrato"> Ao ver extrato bancário ou fatura</label>
                <label><input type="radio" name="comoDescobriu" value="outraPessoa"> Outra pessoa me avisou</label>
                <label><input type="radio" name="comoDescobriu" value="alerta"> Mensagem ou alerta da instituição financeira / empresa</label>
                <label><input type="radio" name="comoDescobriu" value="outroDesc"> Outro: <input type="text" name="comoDescobriuOutro" class="inline-input"></label>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="form-step" data-step="3">
        <div class="form-section">
          <h3>Seção 3: Impactos</h3>
          
          <div class="form-group">
            <label>Você teve prejuízo financeiro? *</label>
            <div class="radio-group">
              <label><input type="radio" name="prejuizoFinanceiro" value="sim" required> Sim</label>
              <label><input type="radio" name="prejuizoFinanceiro" value="nao"> Não</label>
            </div>
          </div>

          <div id="valorPrejuizo" style="display: none;">
            <div class="form-group">
              <label>Estimativa de valor perdido *</label>
              <div class="radio-group">
                <label><input type="radio" name="valorPerdido" value="menos100"> Menos de R$ 100</label>
                <label><input type="radio" name="valorPerdido" value="100-500"> R$ 100 a R$ 500</label>
                <label><input type="radio" name="valorPerdido" value="500-2000"> R$ 500 a R$ 2.000</label>
                <label><input type="radio" name="valorPerdido" value="2000-10000"> R$ 2.000 a R$ 10.000</label>
                <label><input type="radio" name="valorPerdido" value="mais10000"> Mais de R$ 10.000</label>
                <label><input type="radio" name="valorPerdido" value="prefiroNaoInformar"> Prefiro não informar</label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>O golpe teve impacto em quais desses aspectos? (marcar todos os que se aplicam) *</label>
            <div class="checkbox-group">
              <label><input type="checkbox" name="impactos" value="emocional"> Emocional / psicológico (ansiedade, vergonha, raiva, etc.)</label>
              <label><input type="checkbox" name="impactos" value="relacoes"> Relações pessoais / familiares</label>
              <label><input type="checkbox" name="impactos" value="trabalho"> Trabalho / renda / emprego</label>
              <label><input type="checkbox" name="impactos" value="identidade"> Segurança de outros dados pessoais / identidade</label>
              <label><input type="checkbox" name="impactos" value="confianca"> Confiança em serviços online/instituições</label>
              <label><input type="checkbox" name="impactos" value="outroImpacto"> Outro: <input type="text" name="impactosOutro" class="inline-input"></label>
            </div>
          </div>

          <div class="form-group">
            <label>Quanto tempo demorou para resolver ou mitigar os danos? *</label>
            <div class="radio-group">
              <label><input type="radio" name="tempoResolucao" value="resolvido" required> Já está resolvido totalmente</label>
              <label><input type="radio" name="tempoResolucao" value="menos1mes"> Demorou menos de 1 mês</label>
              <label><input type="radio" name="tempoResolucao" value="1-3meses"> 1-3 meses</label>
              <label><input type="radio" name="tempoResolucao" value="3-6meses"> 3-6 meses</label>
              <label><input type="radio" name="tempoResolucao" value="mais6meses"> Mais de 6 meses</label>
              <label><input type="radio" name="tempoResolucao" value="naoResolvido"> Ainda não resolvido</label>
            </div>
          </div>
        </div>
      </div>


      <div class="form-step" data-step="4">
        <div class="form-section">
          <h3>Seção 4: Reações e Prevenção</h3>
          
          <div class="form-group">
            <label>Você denunciou o golpe para alguma instituição / autoridade? *</label>
            <div class="radio-group">
              <label><input type="radio" name="denunciou" value="sim" required> Sim</label>
              <label><input type="radio" name="denunciou" value="nao"> Não</label>
            </div>
          </div>

          <div id="qualDenuncia" style="display: none;">
            <div class="form-group">
              <label for="ondeDenunciou">Qual instituição? *</label>
              <input type="text" id="ondeDenunciou" name="ondeDenunciou" placeholder="Ex: Banco, Polícia, Plataforma digital...">
            </div>
          </div>

          <div id="motivoNaoDenuncia" style="display: none;">
            <div class="form-group">
              <label>Se não denunciou, qual o motivo? *</label>
              <div class="radio-group">
                <label><input type="radio" name="motivoNaoDenuncia" value="naoSabia"> Não sabia a quem denunciar</label>
                <label><input type="radio" name="motivoNaoDenuncia" value="vergonha"> Vergonha / constrangimento</label>
                <label><input type="radio" name="motivoNaoDenuncia" value="naoResolver"> Achar que não ia resolver nada</label>
                <label><input type="radio" name="motivoNaoDenuncia" value="prejuizoPequeno"> Prejuízo pequeno / não valia esforço</label>
                <label><input type="radio" name="motivoNaoDenuncia" value="outroMotivo"> Outro: <input type="text" name="motivoNaoDenunciaOutro" class="inline-input"></label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Após o golpe, você mudou comportamentos de segurança digital? *</label>
            <div class="checkbox-group">
              <label><input type="checkbox" name="mudancas" value="senhasFortes"> Uso de senhas mais fortes</label>
              <label><input type="checkbox" name="mudancas" value="2fa"> Autenticação de dois fatores</label>
              <label><input type="checkbox" name="mudancas" value="verificacao"> Verificação de remetentes antes de clicar em links</label>
              <label><input type="checkbox" name="mudancas" value="antivirus"> Uso de antivírus ou outras ferramentas</label>
              <label><input type="checkbox" name="mudancas" value="informacao"> Informar-se melhor sobre golpes</label>
              <label><input type="checkbox" name="mudancas" value="nenhumaMudanca"> Nenhuma mudança</label>
            </div>
          </div>

          <div class="form-group">
            <label for="confiancaIdentificar">Em uma escala de 1 a 5, quão confiante você se sente agora para identificar possíveis golpes? *</label>
            <div class="scale-group">
              <div class="scale-labels">
                <span>1 - Nada confiante</span>
                <span>5 - Muito confiante</span>
              </div>
              <input type="range" id="confiancaIdentificar" name="confiancaIdentificar" min="1" max="5" value="3" step="1" required>
              <output for="confiancaIdentificar">3</output>
            </div>
          </div>
        </div>
      </div>


      <div class="form-step" data-step="5">
        <div class="form-section">
          <h3>Seção 5: Percepções e Melhoria</h3>
          
          <div class="form-group">
            <label for="prevencao">Em sua opinião, o que poderia ter prevenido esse golpe? *</label>
            <textarea id="prevencao" name="prevencao" rows="4" placeholder="Descreva sua opinião..." required></textarea>
          </div>

          <div class="form-group">
            <label>Que tipos de informação ou recursos ajudariam pessoas como você a evitar golpes? *</label>
            <div class="checkbox-group">
              <label><input type="checkbox" name="recursos" value="campanhas"> Campanhas educativas</label>
              <label><input type="checkbox" name="recursos" value="alertas"> Alertas via bancos / instituições financeiras</label>
              <label><input type="checkbox" name="recursos" value="ferramentas"> Ferramentas de segurança / tecnologia (ex: detecção automática)</label>
              <label><input type="checkbox" name="recursos" value="legislacao"> Legislação / punição para criminosos</label>
              <label><input type="checkbox" name="recursos" value="outroRecurso"> Outro: <input type="text" name="recursosOutro" class="inline-input"></label>
            </div>
          </div>

          <div class="form-group">
            <label for="impactoGlobal">Em uma escala de 1 a 5, qual o nível de impacto global (financeiro + emocional) que esse golpe causou para você? *</label>
            <div class="scale-group">
              <div class="scale-labels">
                <span>1 - Muito baixo</span>
                <span>5 - Extremamente alto</span>
              </div>
              <input type="range" id="impactoGlobal" name="impactoGlobal" min="1" max="5" value="3" step="1" required>
              <output for="impactoGlobal">3</output>
            </div>
          </div>
        </div>
      </div>


      <div id="agradecimento" class="form-section" style="display: none;">
        <h3>Obrigado pela sua participação!</h3>
        <p>Suas informações são valiosas para ajudar a combater golpes digitais e proteger mais pessoas.</p>
      </div>


      <div class="form-navigation">
        <button type="button" class="btn-nav btn-prev" id="btnPrev">
          <span>←</span> Voltar
        </button>
        <button type="button" class="btn-nav btn-next" id="btnNext">
          Prosseguir <span>→</span>
        </button>
        <button type="submit" class="btn-submit" id="btnSubmit" style="display: none;">
          Enviar Respostas
        </button>
      </div>
    </form>
  `
};

type ConteudosKey = keyof typeof conteudos;

function popularBoxes() {
  Object.keys(conteudos).forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.innerHTML = conteudos[id as ConteudosKey];
    }
  });
  
  inicializarFormulario();
}

function inicializarFormulario() {
  const form = document.getElementById('formPesquisa') as HTMLFormElement;
  if (!form) return;

  let currentStep = 1;
  let sofreuGolpeValue = '';

  const steps = form.querySelectorAll('.form-step');
  const progressSteps = form.querySelectorAll('.progress-step');
  const btnPrev = document.getElementById('btnPrev') as HTMLButtonElement;
  const btnNext = document.getElementById('btnNext') as HTMLButtonElement;
  const btnSubmit = document.getElementById('btnSubmit') as HTMLButtonElement;


  function showStep(step: number) {
    steps.forEach((s, index) => {
      s.classList.remove('active');
      if (index + 1 === step) {
        s.classList.add('active');
      }
    });

    progressSteps.forEach((s, index) => {
      s.classList.remove('active', 'completed');
      if (index + 1 === step) {
        s.classList.add('active');
      } else if (index + 1 < step) {
        s.classList.add('completed');
      }
    });


    btnPrev.style.display = step === 1 ? 'none' : 'inline-flex';
    
    if (sofreuGolpeValue === 'nao' && step === 2) {
      btnNext.style.display = 'none';
      btnSubmit.style.display = 'inline-flex';
    } else if (step === 5) {
      btnNext.style.display = 'none';
      btnSubmit.style.display = 'inline-flex';
    } else {
      btnNext.style.display = 'inline-flex';
      btnSubmit.style.display = 'none';
    }

 
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  function validateCurrentStep(): boolean {
    const currentStepElement = form.querySelector(`.form-step[data-step="${currentStep}"]`);
    if (!currentStepElement) return true;

    const requiredInputs = currentStepElement.querySelectorAll('[required]');
    let isValid = true;

    requiredInputs.forEach(input => {
      const inputElement = input as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      
      if (inputElement.type === 'radio') {
        const radioGroup = currentStepElement.querySelectorAll(`[name="${inputElement.name}"]`);
        const isChecked = Array.from(radioGroup).some(radio => (radio as HTMLInputElement).checked);
        if (!isChecked) {
          isValid = false;
          inputElement.setCustomValidity('Por favor, selecione uma opção');
        } else {
          inputElement.setCustomValidity('');
        }
      } else if (inputElement.type === 'checkbox') {
      
        const checkboxGroup = currentStepElement.querySelectorAll(`[name="${inputElement.name}"]`);
        const isChecked = Array.from(checkboxGroup).some(cb => (cb as HTMLInputElement).checked);
        if (!isChecked && inputElement.hasAttribute('required')) {
          isValid = false;
        }
      } else {
        if (!inputElement.value.trim()) {
          isValid = false;
          inputElement.reportValidity();
        }
      }
    });

    return isValid;
  }


  btnNext.addEventListener('click', () => {
    if (!validateCurrentStep()) {
      alert('Por favor, preencha todos os campos obrigatórios antes de prosseguir.');
      return;
    }

 
    if (currentStep === 2 && sofreuGolpeValue === 'nao') {
      document.getElementById('agradecimento')!.style.display = 'block';
      steps.forEach(s => s.classList.remove('active'));
      return;
    }

    if (currentStep < 5) {
      currentStep++;
      showStep(currentStep);
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
      document.getElementById('agradecimento')!.style.display = 'none';
    }
  });

  // Lógica condicional - Sofreu golpe
  const sofreuGolpe = form.querySelectorAll('input[name="sofreuGolpe"]');
  const golpeDetalhes = document.getElementById('golpeDetalhes');

  sofreuGolpe.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      sofreuGolpeValue = target.value;
      
      if (target.value === 'sim') {
        golpeDetalhes!.style.display = 'block';
        // Tornar campos obrigatórios
        golpeDetalhes?.querySelectorAll('input, select, textarea').forEach(input => {
          if (input.getAttribute('name') !== 'tipoGolpeOutro' && 
              input.getAttribute('name') !== 'canalGolpeOutro' && 
              input.getAttribute('name') !== 'comoDescobriuOutro') {
            input.setAttribute('required', 'true');
          }
        });
      } else {
        golpeDetalhes!.style.display = 'none';
        golpeDetalhes?.querySelectorAll('input, select, textarea').forEach(input => {
          input.removeAttribute('required');
        });
      }
    });
  });


  const prejuizoFinanceiro = form.querySelectorAll('input[name="prejuizoFinanceiro"]');
  const valorPrejuizo = document.getElementById('valorPrejuizo');

  prejuizoFinanceiro.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value === 'sim') {
        valorPrejuizo!.style.display = 'block';
        valorPrejuizo?.querySelectorAll('input[type="radio"]').forEach(input => {
          input.setAttribute('required', 'true');
        });
      } else {
        valorPrejuizo!.style.display = 'none';
        valorPrejuizo?.querySelectorAll('input[type="radio"]').forEach(input => {
          input.removeAttribute('required');
        });
      }
    });
  });


  const denunciou = form.querySelectorAll('input[name="denunciou"]');
  const qualDenuncia = document.getElementById('qualDenuncia');
  const motivoNaoDenuncia = document.getElementById('motivoNaoDenuncia');

  denunciou.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value === 'sim') {
        qualDenuncia!.style.display = 'block';
        motivoNaoDenuncia!.style.display = 'none';
        document.getElementById('ondeDenunciou')?.setAttribute('required', 'true');
        motivoNaoDenuncia?.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
      } else {
        qualDenuncia!.style.display = 'none';
        motivoNaoDenuncia!.style.display = 'block';
        document.getElementById('ondeDenunciou')?.removeAttribute('required');
        motivoNaoDenuncia?.querySelectorAll('input[type="radio"]').forEach(input => input.setAttribute('required', 'true'));
      }
    });
  });


  const ranges = form.querySelectorAll('input[type="range"]');
  ranges.forEach(range => {
    const output = range.nextElementSibling as HTMLOutputElement;
    range.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      output.value = target.value;
    });
  });


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!validateCurrentStep()) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }


    const formData = new FormData(form);
    console.log('Dados do formulário:', Object.fromEntries(formData));
    
    alert('Obrigado por participar da pesquisa! Suas respostas foram registradas.');
    form.reset();
    currentStep = 1;
    showStep(1);
    sofreuGolpeValue = '';
  });


  showStep(1);
}

document.addEventListener('DOMContentLoaded', popularBoxes);