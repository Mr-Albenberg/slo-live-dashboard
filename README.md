# SLO Live Operations — Custom Map Edition

Deploy this project to **Cloudflare Pages**, not GitHub Pages. Cloudflare Pages serves the static dashboard and the small `/api` functions that retrieve aircraft data without browser CORS failures.

## Deploy from GitHub

1. Create a public or private GitHub repository and upload this folder's contents.
2. Create a free Cloudflare account at https://dash.cloudflare.com.
3. Open **Workers & Pages**, select **Create application**, then **Pages**, then **Connect to Git**.
4. Select your repository.
5. Set the framework preset to **None**, build command to blank, and build output directory to `/`.
6. Deploy. Cloudflare provides a `pages.dev` URL.

## Features

- Custom MapLibre map with keyless OpenFreeMap basemap.
- Live SLO-area aircraft, colored by best-effort commercial, military, fire, law-enforcement, or private/unknown classification.
- Click an aircraft for callsign, type, registration, altitude, speed, and squawk.
- **Locate me** starts live location tracking: the blue pin moves as your device location updates. Click again to stop tracking.
- Broadcastify direct player plus in-page fallback player.

## Dispatch circles

The map can display active incidents as pulsing red circles when an authorized GeoJSON feed is available. Set a Cloudflare Pages environment variable named `INCIDENTS_GEOJSON_URL` to the approved feed URL. It must return a GeoJSON `FeatureCollection` of active incident points. Without it, the dashboard accurately says no feed is connected rather than displaying made-up calls.

## Important

Aircraft labels are based on public transponder/callsign information and can be incomplete or wrong. Aircraft data is for personal awareness, not aviation decisions. The included data sources have their own terms and attribution requirements.
