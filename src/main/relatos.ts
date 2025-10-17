interface Relato {
  id?: string;
  titulo?: string | null;
  descricao: string;
  contato?: string | null;
  anonimo?: boolean;
  created_at?: string;
}

const cardsContainer = document.getElementById('cards-container');

async function fetchRelatos() {
  try {
    const res = await fetch('/api/relatos');
    if (!res.ok) throw new Error(`Erro ao buscar relatos: ${res.status}`);
    const data = await res.json();

    const relatos: Relato[] = Array.isArray(data) ? data : data?.data || [];

    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';

    relatos.forEach((relato: Relato) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${relato.titulo ?? 'Relato'}</h3>
        <p>${relato.descricao}</p>
        <small class="meta">${relato.created_at ? new Date(relato.created_at).toLocaleString() : ''}</small>
      `;
      cardsContainer.appendChild(card);
    });
  } catch (err) {
    console.error('Erro ao carregar relatos:', err);
  }
}

fetchRelatos();

const style = document.createElement('style');
style.textContent = `
  .floating-relato-btn {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    z-index: 1000;
    background: linear-gradient(135deg, #667eea 0%, #1a0353ff 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .floating-relato-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(102, 126, 234, 0.6);
  }
  .floating-relato-btn:active {
    transform: translateY(-2px);
  }

  .relato-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1100;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  .relato-modal {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    width: 500px;
    max-width: calc(100% - 2rem);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease;
  }

  .relato-modal h3 {
    margin: 0 0 1.5rem 0;
    font-size: 1.8rem;
    font-weight: 700;
    color: #2d3748;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .relato-modal .form-group {
    margin-bottom: 1.25rem;
  }

  .relato-modal label.field-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #4a5568;
    font-size: 0.95rem;
  }

  .relato-modal input[type="text"],
  .relato-modal textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 0.875rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.2s ease;
    background: #f7fafc;
  }

  .relato-modal input[type="text"]:focus,
  .relato-modal textarea:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .relato-modal textarea {
    resize: vertical;
    min-height: 120px;
  }

  .relato-modal .checkbox-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: #f7fafc;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }

  .relato-modal input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #667eea;
  }

  .relato-modal .checkbox-wrapper label {
    margin: 0;
    cursor: pointer;
    color: #4a5568;
    font-weight: 500;
  }

  .relato-modal .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
  }

  .relato-modal button {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    font-family: inherit;
  }

  .relato-modal #relato-cancel {
    background: #e2e8f0;
    color: #4a5568;
  }

  .relato-modal #relato-cancel:hover {
    background: #cbd5e0;
  }

  .relato-modal #relato-send {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  .relato-modal #relato-send:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
  }

  .relato-modal #relato-send:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 640px) {
    .relato-modal {
      padding: 1.5rem;
    }
    
    .floating-relato-btn {
      width: 60px;
      height: 60px;
      font-size: 1rem;
    }
  }
`;
document.head.appendChild(style);

function createFloatingButton() {
  const btn = document.createElement('button');
  btn.className = 'floating-relato-btn';
  btn.title = 'Enviar relato';
  btn.textContent = 'Relatar';
  btn.addEventListener('click', () => openRelatoModal());
  document.body.appendChild(btn);
}

function openRelatoModal() {
  const backdrop = document.createElement('div');
  backdrop.className = 'relato-modal-backdrop';

  const modal = document.createElement('div');
  modal.className = 'relato-modal';
  modal.innerHTML = `
    <h3>Compartilhe seu Relato</h3>
    
    <div class="form-group">
      <label class="field-label" for="relato-titulo">Título</label>
      <input type="text" id="relato-titulo" placeholder="Ex: Tentativa de golpe via WhatsApp" />
    </div>

    <div class="form-group">
      <label class="field-label" for="relato-descricao">Descrição *</label>
      <textarea id="relato-descricao" rows="6" placeholder="Conte o que aconteceu com você. Seu relato pode ajudar outras pessoas..." required></textarea>
    </div>

    <div class="form-group">
      <label class="field-label" for="relato-contato">Contato (opcional)</label>
      <input type="text" id="relato-contato" placeholder="Email ou telefone para contato" />
    </div>

    <div class="checkbox-wrapper">
      <input type="checkbox" id="relato-anonimo" checked />
      <label for="relato-anonimo">🔒 Enviar anonimamente</label>
    </div>

    <div class="actions">
      <button id="relato-cancel">Cancelar</button>
      <button id="relato-send">Enviar Relato</button>
    </div>
  `;

  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  const remove = () => backdrop.remove();
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) remove(); });
  modal.querySelector('#relato-cancel')!.addEventListener('click', remove);

  modal.querySelector('#relato-send')!.addEventListener('click', async () => {
    const titulo = (modal.querySelector('#relato-titulo') as HTMLInputElement).value.trim();
    const descricao = (modal.querySelector('#relato-descricao') as HTMLTextAreaElement).value.trim();
    const contato = (modal.querySelector('#relato-contato') as HTMLInputElement).value.trim();
    const anonimo = (modal.querySelector('#relato-anonimo') as HTMLInputElement).checked;

    if (!descricao) {
      alert('Por favor, descreva o ocorrido.');
      return;
    }

    const sendBtn = modal.querySelector('#relato-send') as HTMLButtonElement;
    sendBtn.disabled = true;
    sendBtn.textContent = 'Enviando...';

    try {
      const res = await fetch('/api/relatos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: titulo || null, descricao, contato: contato || null, anonimo })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || `Status ${res.status}`);
      }

      alert('✅ Relato enviado com sucesso! Obrigado por compartilhar.');
      remove();
      fetchRelatos();
    } catch (err) {
      console.error('Erro ao enviar relato:', err);
      alert('Erro ao enviar relato: ' + ((err && (err as Error).message) || String(err)));
      sendBtn.disabled = false;
      sendBtn.textContent = 'Enviar Relato';
    }
  });
}

createFloatingButton();
