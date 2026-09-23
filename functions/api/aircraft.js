const SOURCES = [
  'https://api.airplanes.live/v2/point/35.2828/-120.6596/100',
  'https://opendata.adsb.fi/api/v3/lat/35.2828/lon/-120.6596/dist/100'
];

function response(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=10, s-maxage=15' }
  });
}

export async function onRequestGet() {
  let lastError;
  for (const source of SOURCES) {
    try {
      const upstream = await fetch(source, { headers: { accept: 'application/json' }, cf: { cacheTtl: 10, cacheEverything: true } });
      if (!upstream.ok) throw new Error(`upstream ${upstream.status}`);
      const data = await upstream.json();
      const ac = Array.isArray(data.ac) ? data.ac : data.aircraft;
      if (!Array.isArray(ac)) throw new Error('unexpected aircraft payload');
      return response({ ac, source: new URL(source).hostname });
    } catch (error) { lastError = error; }
  }
  return response({ error: 'Aircraft sources are temporarily unavailable', detail: lastError?.message }, 502);
}
