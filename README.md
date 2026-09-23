# SLO Public Safety and Live Flights

This repository is ready for GitHub Pages. The complete website is in `index.html`.

## What it does

- Uses a custom dark, futuristic aircraft map instead of embedding a third-party map with controls or advertising.
- Refreshes nearby aircraft every 20 seconds and lets you click a marker for flight, type, registration, altitude, speed, and squawk.
- Applies best-effort colors: cyan commercial, purple military, orange fire, green law enforcement, and blue private/unknown.
- Keeps the Broadcastify audio player in the top control bar.

Aircraft category labels are inferred from publicly broadcast transponder fields and callsigns. They are informational only and may be wrong or incomplete, particularly for government and private aircraft.

## Incidents

The official SLO County source, PulsePoint, publishes selected CAL FIRE/SLO County and SLO City Fire dispatch CAD incidents, but this static site does not pull its underlying incident data. The dashboard therefore does not draw current red dispatch circles. Connecting them properly requires an approved/official incident-data feed or a backend service that is permitted to retrieve and republish that data.

## Publish using the GitHub website

1. Sign in at https://github.com.
2. Select the **+** menu in the upper-right corner and choose **New repository**.
3. Name it `slo-live-dashboard`, set it to **Public**, and select **Create repository**.
4. On the repository page, choose **uploading an existing file** (or **Add file > Upload files**).
5. Upload `index.html`, `.nojekyll`, and `README.md` from this folder. Do not upload the ZIP itself.
6. Enter a commit message such as `Add SLO dashboard`, then select **Commit changes**.
7. Open **Settings > Pages**.
8. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
9. Select the `main` branch, choose `/ (root)`, and press **Save**.
10. Wait a few minutes and revisit **Settings > Pages**. GitHub will display the public website address.

The address normally looks like:

`https://YOUR-USERNAME.github.io/slo-live-dashboard/`

## Updating the site

Upload a replacement `index.html` to the same repository and commit the change. GitHub Pages will republish it automatically.

## Playback note

The page first attempts direct HLS playback. If Broadcastify blocks the browser request, select **Fallback player** or **Open source**. GitHub Pages removes ChatGPT's network-preview restriction, but it cannot override restrictions imposed by Broadcastify or ADS-B Exchange.
