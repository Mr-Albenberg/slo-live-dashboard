# SLO Live Operations — reliable edition

This version is designed for **GitHub Pages**. It intentionally uses the live aircraft and audio players that render directly in the browser, rather than browser API calls or a direct HLS request that can be blocked by CORS or stream-token restrictions.

## Publish

1. Create a GitHub repository.
2. Upload `index.html` and `.nojekyll` from this folder.
3. In **Settings → Pages**, publish from the `main` branch and `/ (root)` folder.
4. Open the displayed `https://YOUR-USERNAME.github.io/REPOSITORY/` link.

## Notes

- The map is an embedded live-aircraft service so aircraft will remain visible. Its internal aircraft colors, data, and provider UI cannot be changed by this site.
- The top player is Broadcastify's supplied player, which is more reliable than the direct playlist. Play may still require one click because browsers prohibit unsolicited audio.
- **Locate Me** asks for browser permission and recenters the live map at your current device location.
- The site deliberately does not invent dispatch locations. A permitted, location-bearing incident data source is needed before red circles can be added.
