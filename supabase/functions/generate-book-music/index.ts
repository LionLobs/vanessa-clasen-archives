import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const PROMPTS: Record<string, { prompt: string; duration: number }> = {
  sombras: {
    prompt: 'Dark cinematic psychological thriller ambient score. Sparse piano, low cello drones, distant whispers, vinyl crackle, tension and unease, slow heartbeat, noir literary atmosphere. Instrumental, no vocals.',
    duration: 45,
  },
  mar: {
    prompt: 'Brazilian coastal noir ambient score. Slow waves, distant foghorn, melancholic acoustic guitar with reverb, deep cello, tension of buried secrets, oceanic dread. Instrumental, no vocals.',
    duration: 45,
  },
  guardia: {
    prompt: 'Portuguese historical romance ambient score. Renaissance lute and harpsichord, soft strings, fado-inspired melancholy, candlelit library atmosphere, the weight of forgotten manuscripts, elegant and timeless. Instrumental, no vocals.',
    duration: 45,
  },
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { bookId } = await req.json();
    const config = PROMPTS[bookId];
    if (!config) {
      return new Response(JSON.stringify({ error: 'unknown_book' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const fileName = `${bookId}.mp3`;
    const publicUrl = `${supabaseUrl}/storage/v1/object/public/book-audio/${fileName}`;

    // Check if cached
    const head = await fetch(publicUrl, { method: 'HEAD' });
    if (head.ok) {
      return new Response(JSON.stringify({ url: publicUrl, cached: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const elevenKey = Deno.env.get('ELEVENLABS_API_KEY');
    if (!elevenKey) throw new Error('ELEVENLABS_API_KEY not configured');

    // Generate music
    const musicRes = await fetch('https://api.elevenlabs.io/v1/music', {
      method: 'POST',
      headers: {
        'xi-api-key': elevenKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: config.prompt,
        music_length_ms: config.duration * 1000,
      }),
    });

    if (!musicRes.ok) {
      const txt = await musicRes.text();
      throw new Error(`ElevenLabs music failed [${musicRes.status}]: ${txt}`);
    }

    const audioBuffer = await musicRes.arrayBuffer();

    // Upload to storage
    const { error: upErr } = await supabase.storage
      .from('book-audio')
      .upload(fileName, audioBuffer, {
        contentType: 'audio/mpeg',
        upsert: true,
      });

    if (upErr) throw upErr;

    return new Response(JSON.stringify({ url: publicUrl, cached: false }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'unknown error';
    console.error('generate-book-music error:', msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});