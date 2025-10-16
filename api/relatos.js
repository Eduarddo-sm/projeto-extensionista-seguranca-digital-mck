import { createClient } from '@supabase/supabase-js';

// This endpoint expects the following environment variables to be set in your deployment platform (Vercel, Netlify functions, etc.):
// - SUPABASE_URL (or VITE_SUPABASE_URL)
// - SUPABASE_SERVICE_ROLE_KEY (service_role key - keep this secret and only set on the server)

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export default async function handler(req, res) {

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return res.status(500).json({ error: 'Supabase server configuration is missing. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY as environment variables.' });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false }
  });


  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('relatos')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) {
        console.error('[api/relatos] Supabase select error:', error);
        return res.status(500).json({ error: error.message, details: error.details || null });
      }

      return res.status(200).json({ data });
    } catch (err) {
      console.error('[api/relatos] Unexpected error:', err);
      return res.status(500).json({ error: (err && err.message) || String(err) });
    }
  }


  if (req.method === 'POST') {
    try {
      const body = req.body && typeof req.body === 'object' ? req.body : JSON.parse(req.body || '{}');

      const { titulo, descricao, contato, anonimo } = body;

      if (!descricao && !titulo) {
        return res.status(400).json({ error: 'Campo obrigatório ausente: descricao (ou titulo).' });
      }

      const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null;
      const userAgent = req.headers['user-agent'] || null;

      const payload = {
        titulo: titulo || null,
        descricao: descricao || null,
        contato: contato || null,
        anonimo: anonimo === undefined ? true : !!anonimo,
        ip_address: ip,
        user_agent: userAgent
      };

      const { data, error } = await supabase.from('relatos').insert([payload]).select();

      if (error) {
        console.error('[api/relatos] Supabase insert error:', error);
        return res.status(500).json({ error: error.message, details: error.details || null });
      }

      return res.status(201).json({ data });
    } catch (err) {
      console.error('[api/relatos] Unexpected error:', err);
      return res.status(500).json({ error: (err && err.message) || String(err) });
    }
  }


  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}
