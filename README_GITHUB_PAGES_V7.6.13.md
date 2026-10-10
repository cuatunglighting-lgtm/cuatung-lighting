# GitHub Pages deployment — V7.6.13

Upload the contents of this ZIP to the repository's **root** so `index.html`, `app.js`, `config.js`, `style.css`, `sw.js`, `manifest.json`, and `assets/` are directly at repository root.

The configured Apps Script URL is the URL supplied for the current app. Deploy the matching `02_APPS_SCRIPT_DEPLOY/Code.gs` from the full package to the same Apps Script project and create a new Web App deployment version before publishing this frontend. The UI intentionally rejects mismatched frontend/backend versions.

This frontend package does not contain Google Sheets data or credentials. Keep the existing production Google Sheet; do not create a parallel database for this code update.
