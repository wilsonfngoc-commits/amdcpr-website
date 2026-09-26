// Cloudflare Pages Function — newsletter subscribe
// Stores emails in a simple KV-like pattern using environment

export async function onRequest(context) {
  const { request } = context;
  
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers,
    });
  }

  try {
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers,
      });
    }

    // Check if KV binding exists
    if (context.env.NEWSLETTER_KV) {
      // Store in KV
      const existing = await context.env.NEWSLETTER_KV.get('subscribers');
      const subscribers = existing ? JSON.parse(existing) : [];
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        await context.env.NEWSLETTER_KV.put('subscribers', JSON.stringify(subscribers));
      }
      console.log(`Newsletter subscribe: ${email} (stored in KV)`);
    } else {
      // Fallback: log to console (visible in Cloudflare Pages logs)
      console.log(`Newsletter subscribe: ${email} (no KV binding — logged only)`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers,
    });
  }
}
