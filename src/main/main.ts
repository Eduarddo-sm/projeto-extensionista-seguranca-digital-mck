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
  `
};


function popularBoxes() {
  Object.keys(conteudos).forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.innerHTML = conteudos[id];
    }
  });
}

document.addEventListener('DOMContentLoaded', popularBoxes);