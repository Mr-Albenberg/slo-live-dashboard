# SLO Live Operations — custom map Worker

This is a **Cloudflare Worker app**, not a GitHub Pages site. The Worker serves the dashboard and fetches aircraft data on the server, which is what prevents the browser CORS failure from the previous custom-map attempt.

## Deploy (recommended)

1. Create a new GitHub repository and upload the contents of this folder.
2. Open a terminal in the downloaded folder.
3. Run `npm install`.
4. Run `npx wrangler login` and complete the browser sign-in.
5. Run `npm run deploy`.
6. Open the `workers.dev` address Wrangler prints.

Cloudflare's free Worker plan is sufficient for a personal dashboard. Do **not** use GitHub Pages for this project: it cannot run `src/worker.js`, so `/api/aircraft` will not exist and the plane map will be empty.

## What works

- Custom MapLibre map with no embedded flight-site buttons or links.
- SLO aircraft data through the Worker, refreshed every 20 seconds.
- Best-effort marker colors: commercial, military, fire, law enforcement, private/unknown.
- A moving device-location marker. Press **Locate Me** once to start tracking, again to stop.
- Broadcastify's supplied player, rather than a fragile direct HLS request.

## Dispatch circles

No approved public endpoint presently supplies live, mappable SLO dispatch locations. The dashboard deliberately does not create fake incidents. A permitted GeoJSON incident endpoint can be added to the Worker later.
