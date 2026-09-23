const AIRCRAFT_SOURCES = [
  'https://api.adsb.lol/v2/point/35.2828/-120.6596/100',
  'https://api.airplanes.live/v2/point/35.2828/-120.6596/100'
];

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=10, s-maxage=15'
    }
  });
}

async function aircraft() {
  let lastError = 'No aircraft source responded';
  for (const source of AIRCRAFT_SOURCES) {
    try {
      const response = await fetch(source, {
        headers: { accept: 'application/json', 'user-agent': 'SLO-Live-Operations/1.0' },
        cf: { cacheTtl: 10, cacheEverything: true }
      });
      if (!response.ok) throw new Error(`${new URL(source).hostname}: HTTP ${response.status}`);
      const data = await response.json();
      const ac = Array.isArray(data.ac) ? data.ac : data.aircraft;
      if (!Array.isArray(ac)) throw new Error(`${new URL(source).hostname}: invalid aircraft response`);
      return json({ ac, source: new URL(source).hostname });
    } catch (error) {
      lastError = error.message;
    }
  }
  return json({ error: 'Aircraft data is temporarily unavailable', detail: lastError }, 502);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/aircraft' && request.method === 'GET') return aircraft();
    if (url.pathname === '/api/incidents' && request.method === 'GET') {
      return json({ type: 'FeatureCollection', features: [], message: 'No authorized incident source configured' }, 503);
    }
    return env.ASSETS.fetch(request);
  }
};
