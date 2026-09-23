# SLO Live Operations — GitHub-only custom map

This edition is designed for **GitHub Pages**. GitHub Actions downloads an SLO aircraft snapshot every five minutes and commits it as `data/aircraft.json`; the custom map reads that same-origin file, avoiding browser CORS failures.

## Publish it

1. Create a **new public GitHub repository** and upload everything in this folder, including the hidden `.github` and `.nojekyll` entries.
2. In the repository, open **Settings → Actions → General**. Under **Workflow permissions**, choose **Read and write permissions**, then save.
3. Open **Actions → Refresh SLO aircraft snapshot → Run workflow**. Wait for the green check.
4. Open **Settings → Pages**. Choose **Deploy from a branch**, then `main` and `/ (root)`, and save.
5. Use the `github.io` Pages link that GitHub displays.

## Tradeoffs

- This is fully GitHub-hosted, but GitHub Actions can only refresh on a schedule. Aircraft positions are normally up to about five minutes old, and scheduled Actions can sometimes be delayed by GitHub.
- The audio player is Broadcastify's supplied popout player. You may need to press its play button due to browser autoplay rules.
- There is no permitted map-ready public incident-location source in this project, so it does not draw invented dispatch circles.
