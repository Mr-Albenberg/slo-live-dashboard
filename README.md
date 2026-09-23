# SLO Live Operations — Custom GitHub Map

This GitHub Pages project keeps the working **START AUDIO** and **FALLBACK** player. GitHub Actions retrieves an SLO-area aircraft snapshot every five minutes; the website draws its own MapLibre markers and colors.

## Publish

1. Upload this folder's contents to a new GitHub repository, including `.github`, `data`, and `.nojekyll`.
2. In **Settings → Actions → General**, choose **Read and write permissions**.
3. Run **Actions → Refresh SLO aircraft snapshot → Run workflow** once, and wait for a green check.
4. Enable **Settings → Pages → Deploy from a branch → main → /(root)**.

## Change marker colors

Edit the five hex values in the `COLORS` line in `index.html`:

```js
const CENTER=[-120.6596,35.2828], COLORS={commercial:'#5fe2ff',military:'#b188ff',fire:'#ff864d',law:'#59edae',private:'#6f9fb8'};
```

The map reloads the same-origin snapshot once per minute; GitHub normally renews it every five minutes. Locate Me uses continuous browser GPS tracking, so the marker moves as your device location changes.
