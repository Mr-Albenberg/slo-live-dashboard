function response(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}

export async function onRequestGet(context) {
  const source = context.env.INCIDENTS_GEOJSON_URL;
  if (!source) return response({ type: 'FeatureCollection', features: [], message: 'No authorized incident feed configured' }, 503);
  try {
    const upstream = await fetch(source, { headers: { accept: 'application/geo+json, application/json' } });
    if (!upstream.ok) throw new Error(`Incident feed returned ${upstream.status}`);
    const data = await upstream.json();
    if (data.type !== 'FeatureCollection' || !Array.isArray(data.features)) throw new Error('Incident feed must return GeoJSON FeatureCollection');
    return response(data);
  } catch (error) {
    return response({ type: 'FeatureCollection', features: [], message: error.message }, 502);
  }
}
