// Small client for the relatos page: fetch list, show cards, and provide a floating button
// that opens a modal form to submit a relato to /api/relatos

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
    // api returns { data } or an array depending on implementation; normalize
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

// Inject styles for floating button and modal
const style = document.createElement('style');
style.textContent = `
  .floating-relato-btn {
    position: fixed;
    right: 5%;
    bottom: 5%;
    z-index: 1000;
    background: #0b5fff;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
    font-size: 1.5rem;
  }
  .relato-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1100;
  }
  .relato-modal {
    background: white;
    padding: 18px;
    border-radius: 8px;
    width: 420px;
    max-width: calc(100% - 32px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  }
  .relato-modal textarea, .relato-modal input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    margin-bottom: 8px;
  }
  .relato-modal .actions { display:flex; gap:8px; justify-content:flex-end; }
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
    <h3>Enviar relato</h3>
    <input type="text" id="relato-titulo" placeholder="Título (opcional)" />
    <textarea id="relato-descricao" rows="6" placeholder="Descreva o ocorrido" required></textarea>
    <input type="text" id="relato-contato" placeholder="Contato (opcional)" />
    <label><input type="checkbox" id="relato-anonimo" checked /> Enviar anonimamente</label>
    <div class="actions">
      <button id="relato-cancel">Cancelar</button>
      <button id="relato-send">Enviar</button>
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

    (modal.querySelector('#relato-send') as HTMLButtonElement).disabled = true;
    (modal.querySelector('#relato-send') as HTMLButtonElement).textContent = 'Enviando...';

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

      alert('Relato enviado com sucesso!');
      remove();
      fetchRelatos();
    } catch (err) {
      console.error('Erro ao enviar relato:', err);
      alert('Erro ao enviar relato: ' + ((err && (err as Error).message) || String(err)));
      (modal.querySelector('#relato-send') as HTMLButtonElement).disabled = false;
      (modal.querySelector('#relato-send') as HTMLButtonElement).textContent = 'Enviar';
    }
  });
}

createFloatingButton();
