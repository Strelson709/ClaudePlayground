# ClaudePlayground – Todo-Liste

Einfache Todo-App mit **Nuxt 4 + Vue 3** zum Testen. Aufgaben werden im Browser (`localStorage`) gespeichert.

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:3000
```

## Statisch bauen

```bash
npm run generate   # Ausgabe in .output/public
```

## GitHub Pages

Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht die App bei jedem Push auf `main`.
Einmalig aktivieren: **Settings → Pages → Source: GitHub Actions**.
Danach erreichbar unter `https://<user>.github.io/ClaudePlayground/`.
