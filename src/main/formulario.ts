import { salvarPesquisaSegurancaIA } from '../config/supabase';
import type { PesquisaSegurancaIA } from '../config/supabase';

export const formulario = `
  <h2>Pesquisa: Segurança Digital e Inteligência Artificial</h2>
  <p>Sua opinião é fundamental para entendermos como a sociedade percebe e utiliza tecnologias de IA e criptografia na segurança digital. Este questionário é anônimo e levará cerca de 5 minutos.</p>
  
  <form id="formPesquisa">
    <div class="progress-indicator">
      <div class="progress-step active" data-step="1">
        <div class="step-number">1</div>
        <div class="step-label">Perfil</div>
      </div>
      <div class="progress-step" data-step="2">
        <div class="step-number">2</div>
        <div class="step-label">IA e Segurança</div>
      </div>
      <div class="progress-step" data-step="3">
        <div class="step-number">3</div>
        <div class="step-label">Criptografia</div>
      </div>
      <div class="progress-step" data-step="4">
        <div class="step-number">4</div>
        <div class="step-label">Privacidade</div>
      </div>
      <div class="progress-step" data-step="5">
        <div class="step-number">5</div>
        <div class="step-label">Pós-Quântica</div>
      </div>
      <div class="progress-step" data-step="6">
        <div class="step-number">6</div>
        <div class="step-label">Práticas</div>
      </div>
    </div>


    <div class="form-step active" data-step="1">
      <div class="form-section">
        <h3>Seção 1: Perfil do Respondente</h3>
        
        <div class="form-group">
          <label for="idade">Idade *</label>
          <input type="number" id="idade" name="idade" min="13" max="120" required placeholder="Ex: 25">
        </div>

        <div class="form-group">
          <label for="areaAtuacao">Área de atuação profissional *</label>
          <input type="text" id="areaAtuacao" name="areaAtuacao" required placeholder="Ex: Tecnologia, Educação, Saúde...">
        </div>

        <div class="form-group">
          <label>Nível de conhecimento em TI *</label>
          <div class="radio-group">
            <label><input type="radio" name="nivelTI" value="nenhum" required> Nenhum</label>
            <label><input type="radio" name="nivelTI" value="basico"> Básico</label>
            <label><input type="radio" name="nivelTI" value="intermediario"> Intermediário</label>
            <label><input type="radio" name="nivelTI" value="avancado"> Avançado</label>
            <label><input type="radio" name="nivelTI" value="especialista"> Especialista</label>
          </div>
        </div>
      </div>
    </div>


    <div class="form-step" data-step="2">
      <div class="form-section">
        <h3>Seção 2: Conhecimento sobre IA em Segurança Digital</h3>
        
        <div class="form-group">
          <label>Você entende o papel da IA na segurança digital? *</label>
          <div class="radio-group">
            <label><input type="radio" name="papelIA" value="nada" required> Nada</label>
            <label><input type="radio" name="papelIA" value="pouco"> Pouco</label>
            <label><input type="radio" name="papelIA" value="moderado"> Moderado</label>
            <label><input type="radio" name="papelIA" value="avancado"> Avançado</label>
          </div>
        </div>

        <div class="form-group">
          <label>Você utiliza ou conhece ferramentas de IA voltadas à segurança digital? *</label>
          <div class="radio-group">
            <label><input type="radio" name="utilizaFerramentasIA" value="sim" required> Sim</label>
            <label><input type="radio" name="utilizaFerramentasIA" value="nao"> Não</label>
          </div>
        </div>

        <div id="ferramentasIADetalhes" style="display: none;">
          <div class="form-group">
            <label for="ferramentasIACitadas">Se sim, cite quais *</label>
            <input type="text" id="ferramentasIACitadas" name="ferramentasIACitadas" placeholder="Ex: Antivírus com IA, firewalls inteligentes...">
          </div>
        </div>

        <div class="form-group">
          <label>Em que nível você confia em sistemas de IA para detectar ameaças digitais? *</label>
          <div class="radio-group">
            <label><input type="radio" name="confiancaIA" value="nada" required> Nada</label>
            <label><input type="radio" name="confiancaIA" value="pouco"> Pouco</label>
            <label><input type="radio" name="confiancaIA" value="moderado"> Moderado</label>
            <label><input type="radio" name="confiancaIA" value="total"> Total</label>
          </div>
        </div>
      </div>
    </div>


    <div class="form-step" data-step="3">
      <div class="form-section">
        <h3>Seção 3: Uso de Ferramentas de Criptografia</h3>
        
        <div class="form-group">
          <label>Você utiliza criptografia para proteger seus dados pessoais ou profissionais? *</label>
          <div class="radio-group">
            <label><input type="radio" name="usoCriptografia" value="nunca" required> Nunca</label>
            <label><input type="radio" name="usoCriptografia" value="raramente"> Raramente</label>
            <label><input type="radio" name="usoCriptografia" value="frequentemente"> Frequentemente</label>
            <label><input type="radio" name="usoCriptografia" value="sempre"> Sempre</label>
          </div>
        </div>

        <div class="form-group">
          <label>Quais tipos de criptografia você já utilizou? (marque todos que se aplicam) *</label>
          <div class="checkbox-group">
            <label><input type="checkbox" name="tiposCriptografia" value="email"> E-mails (PGP, S/MIME)</label>
            <label><input type="checkbox" name="tiposCriptografia" value="arquivos"> Arquivos (AES, ZIP com senha, etc.)</label>
            <label><input type="checkbox" name="tiposCriptografia" value="mensagens"> Aplicativos de mensagens (Signal, WhatsApp, Telegram, etc.)</label>
            <label><input type="checkbox" name="tiposCriptografia" value="outros"> Outros: <input type="text" name="tiposCriptografiaOutros" class="inline-input"></label>
          </div>
        </div>

        <div class="form-group">
          <label>Avalie seu nível de conhecimento sobre criptografia *</label>
          <div class="radio-group">
            <label><input type="radio" name="nivelCriptografia" value="nenhum" required> Nenhum</label>
            <label><input type="radio" name="nivelCriptografia" value="basico"> Básico</label>
            <label><input type="radio" name="nivelCriptografia" value="intermediario"> Intermediário</label>
            <label><input type="radio" name="nivelCriptografia" value="avancado"> Avançado</label>
          </div>
        </div>
      </div>
    </div>


    <div class="form-step" data-step="4">
      <div class="form-section">
        <h3>Seção 4: Percepção sobre Privacidade Online</h3>
        
        <div class="form-group">
          <label>Você se preocupa com sua privacidade online? *</label>
          <div class="radio-group">
            <label><input type="radio" name="preocupacaoPrivacidade" value="nada" required> Nada</label>
            <label><input type="radio" name="preocupacaoPrivacidade" value="pouco"> Pouco</label>
            <label><input type="radio" name="preocupacaoPrivacidade" value="moderadamente"> Moderadamente</label>
            <label><input type="radio" name="preocupacaoPrivacidade" value="muito"> Muito</label>
          </div>
        </div>

        <div class="form-group">
          <label>Quais práticas você adota para proteger sua privacidade online? (marque todos que se aplicam) *</label>
          <div class="checkbox-group">
            <label><input type="checkbox" name="praticasPrivacidade" value="senhas"> Uso de senhas fortes e gerenciadores de senha</label>
            <label><input type="checkbox" name="praticasPrivacidade" value="vpn"> VPN</label>
            <label><input type="checkbox" name="praticasPrivacidade" value="navegacao_anonima"> Navegação anônima / modo privado</label>
            <label><input type="checkbox" name="praticasPrivacidade" value="permissoes"> Revisão de permissões de aplicativos</label>
            <label><input type="checkbox" name="praticasPrivacidade" value="outros"> Outros: <input type="text" name="praticasPrivacidadeOutros" class="inline-input"></label>
          </div>
        </div>
      </div>
    </div>

  
    <div class="form-step" data-step="5">
      <div class="form-section">
        <h3>Seção 5: Interesse em Proteção Pós-Quântica</h3>
        
        <div class="form-group">
          <label>Você conhece a criptografia pós-quântica? *</label>
          <div class="radio-group">
            <label><input type="radio" name="conhecePosQuantica" value="nao" required> Não</label>
            <label><input type="radio" name="conhecePosQuantica" value="ja_ouvi"> Já ouvi falar</label>
            <label><input type="radio" name="conhecePosQuantica" value="basico"> Conhecimento básico</label>
            <label><input type="radio" name="conhecePosQuantica" value="avancado"> Conhecimento avançado</label>
          </div>
        </div>

        <div class="form-group">
          <label>Você considera importante adotar tecnologias de proteção pós-quântica no futuro? *</label>
          <div class="radio-group">
            <label><input type="radio" name="importanciaPosQuantica" value="nada" required> Nada</label>
            <label><input type="radio" name="importanciaPosQuantica" value="pouco"> Pouco</label>
            <label><input type="radio" name="importanciaPosQuantica" value="moderado"> Moderado</label>
            <label><input type="radio" name="importanciaPosQuantica" value="muito"> Muito</label>
          </div>
        </div>
      </div>
    </div>


    <div class="form-step" data-step="6">
      <div class="form-section">
        <h3>Seção 6: Práticas de Segurança Digital Adotadas</h3>
        
        <div class="form-group">
          <label>Com que frequência você realiza backups de seus dados? *</label>
          <div class="radio-group">
            <label><input type="radio" name="frequenciaBackups" value="nunca" required> Nunca</label>
            <label><input type="radio" name="frequenciaBackups" value="raramente"> Raramente</label>
            <label><input type="radio" name="frequenciaBackups" value="mensalmente"> Mensalmente</label>
            <label><input type="radio" name="frequenciaBackups" value="semanalmente"> Semanalmente</label>
            <label><input type="radio" name="frequenciaBackups" value="diariamente"> Diariamente</label>
          </div>
        </div>

        <div class="form-group">
          <label>Você realiza atualizações de softwares e sistemas regularmente? *</label>
          <div class="radio-group">
            <label><input type="radio" name="atualizacaoSoftwares" value="nunca" required> Nunca</label>
            <label><input type="radio" name="atualizacaoSoftwares" value="raramente"> Raramente</label>
            <label><input type="radio" name="atualizacaoSoftwares" value="frequentemente"> Frequentemente</label>
            <label><input type="radio" name="atualizacaoSoftwares" value="sempre"> Sempre</label>
          </div>
        </div>

        <div class="form-group">
          <label>Você utiliza autenticação em dois fatores (2FA) em serviços críticos? *</label>
          <div class="radio-group">
            <label><input type="radio" name="uso2FA" value="nunca" required> Nunca</label>
            <label><input type="radio" name="uso2FA" value="raramente"> Raramente</label>
            <label><input type="radio" name="uso2FA" value="frequentemente"> Frequentemente</label>
            <label><input type="radio" name="uso2FA" value="sempre"> Sempre</label>
          </div>
        </div>

        <div class="form-group">
          <label>Avalie seu nível geral de segurança digital *</label>
          <div class="radio-group">
            <label><input type="radio" name="nivelSegurancaGeral" value="baixo" required> Baixo</label>
            <label><input type="radio" name="nivelSegurancaGeral" value="moderado"> Moderado</label>
            <label><input type="radio" name="nivelSegurancaGeral" value="alto"> Alto</label>
            <label><input type="radio" name="nivelSegurancaGeral" value="excelente"> Excelente</label>
          </div>
        </div>
      </div>
    </div>


    <div id="agradecimento" class="form-section" style="display: none;">
      <h3>Obrigado pela sua participação!</h3>
      <p>Suas informações são valiosas para compreendermos melhor como a sociedade interage com tecnologias de segurança digital, IA e criptografia.</p>
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
`;

export function initFormularioNavegacao() {
  let currentStep = 1;
  const totalSteps = 6;

  const btnPrev = document.getElementById('btnPrev') as HTMLButtonElement;
  const btnNext = document.getElementById('btnNext') as HTMLButtonElement;
  const btnSubmit = document.getElementById('btnSubmit') as HTMLButtonElement;
  const form = document.getElementById('formPesquisa') as HTMLFormElement;

  if (!btnPrev || !btnNext || !btnSubmit || !form) {
    console.error('Elementos do formulário não encontrados');
    return;
  }


  const radioFerramentasIA = document.getElementsByName('utilizaFerramentasIA');
  radioFerramentasIA.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const detalhes = document.getElementById('ferramentasIADetalhes');
      const input = document.getElementById('ferramentasIACitadas') as HTMLInputElement;
      if ((e.target as HTMLInputElement).value === 'sim') {
        detalhes!.style.display = 'block';
        input.required = true;
      } else {
        detalhes!.style.display = 'none';
        input.required = false;
        input.value = '';
      }
    });
  });


  function validateCurrentStep(): boolean {
    const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    if (!currentStepElement) return false;

    const requiredInputs = currentStepElement.querySelectorAll('input[required], select[required]');
    
    for (const input of Array.from(requiredInputs)) {
      const inputElement = input as HTMLInputElement;
      
      if (inputElement.type === 'radio') {
        const radioGroup = document.getElementsByName(inputElement.name);
        const isChecked = Array.from(radioGroup).some((radio: any) => radio.checked);
        if (!isChecked) {
          alert(`Por favor, responda a pergunta: ${inputElement.closest('.form-group')?.querySelector('label')?.textContent}`);
          return false;
        }
      } else if (!inputElement.value.trim()) {
        alert(`Por favor, preencha o campo: ${inputElement.labels?.[0]?.textContent || 'obrigatório'}`);
        inputElement.focus();
        return false;
      }
    }

    const checkboxGroups = currentStepElement.querySelectorAll('.checkbox-group');
    for (const group of Array.from(checkboxGroups)) {
      const checkboxes = group.querySelectorAll('input[type="checkbox"]');
      const isAnyChecked = Array.from(checkboxes).some((cb: any) => cb.checked);
      
      if (checkboxes.length > 0 && !isAnyChecked) {
        const label = group.closest('.form-group')?.querySelector('label')?.textContent;
        alert(`Por favor, selecione pelo menos uma opção em: ${label}`);
        return false;
      }
    }

    return true;
  }


  function showStep(step: number, shouldScroll: boolean = false) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    
    const stepElement = document.querySelector(`.form-step[data-step="${step}"]`);
    stepElement?.classList.add('active');

    document.querySelectorAll('.progress-step').forEach((ps, index) => {
      if (index < step) {
        ps.classList.add('active');
      } else {
        ps.classList.remove('active');
      }
    });

    btnPrev.style.display = step === 1 ? 'none' : 'inline-flex';
    btnNext.style.display = step === totalSteps ? 'none' : 'inline-flex';
    btnSubmit.style.display = step === totalSteps ? 'inline-flex' : 'none';

   
    if (shouldScroll) {
      const formularioElement = document.getElementById('formulario');
      if (formularioElement) {
        formularioElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  btnNext.addEventListener('click', () => {
    if (validateCurrentStep()) {
      currentStep++;
      showStep(currentStep, true); 
    }
  });

  btnPrev.addEventListener('click', () => {
    currentStep--;
    showStep(currentStep, true); 
  });



  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateCurrentStep()) {
      return;
    }

    const formData = new FormData(form);
    
   
    const dados: PesquisaSegurancaIA = {
      idade: parseInt(formData.get('idade') as string),
      area_atuacao: formData.get('areaAtuacao') as string,
      nivel_conhecimento_ti: formData.get('nivelTI') as string,
      papel_ia_seguranca: formData.get('papelIA') as string,
      utiliza_ferramentas_ia: formData.get('utilizaFerramentasIA') === 'sim',
      ferramentas_ia_citadas: formData.get('ferramentasIACitadas') as string || null,
      confianca_ia_deteccao: formData.get('confiancaIA') as string,
      uso_criptografia: formData.get('usoCriptografia') as string,
      tipos_criptografia: formData.getAll('tiposCriptografia').filter(v => v !== 'outros') as string[],
      tipos_criptografia_outros: formData.get('tiposCriptografiaOutros') as string || null,
      nivel_conhecimento_criptografia: formData.get('nivelCriptografia') as string,
      preocupacao_privacidade: formData.get('preocupacaoPrivacidade') as string,
      praticas_privacidade: formData.getAll('praticasPrivacidade').filter(v => v !== 'outros') as string[],
      praticas_privacidade_outros: formData.get('praticasPrivacidadeOutros') as string || null,
      conhece_pos_quantica: formData.get('conhecePosQuantica') as string,
      importancia_pos_quantica: formData.get('importanciaPosQuantica') as string,
      frequencia_backups: formData.get('frequenciaBackups') as string,
      atualizacao_softwares: formData.get('atualizacaoSoftwares') as string,
      uso_2fa: formData.get('uso2FA') as string,
      nivel_seguranca_geral: formData.get('nivelSegurancaGeral') as string,
    };

    try {
      btnSubmit.disabled = true;
      btnSubmit.textContent = 'Enviando...';

      await salvarPesquisaSegurancaIA(dados);

      document.querySelectorAll('.form-step').forEach(s => (s as HTMLElement).style.display = 'none');
      (document.querySelector('.form-navigation') as HTMLElement).style.display = 'none';
      (document.getElementById('agradecimento') as HTMLElement).style.display = 'block';

      setTimeout(() => {
        form.reset();
        currentStep = 1;
        showStep(currentStep, false);
        document.querySelectorAll('.form-step').forEach(s => (s as HTMLElement).style.display = '');
        (document.querySelector('.form-navigation') as HTMLElement).style.display = 'flex';
        (document.getElementById('agradecimento') as HTMLElement).style.display = 'none';
        btnSubmit.disabled = false;
        btnSubmit.textContent = 'Enviar Respostas';
      }, 5000);

    } catch (error) {
      console.error('Erro ao enviar pesquisa:', error);
      alert('Erro ao enviar pesquisa. Por favor, tente novamente.');
      btnSubmit.disabled = false;
      btnSubmit.textContent = 'Enviar Respostas';
    }
  });

  showStep(1, false);
}