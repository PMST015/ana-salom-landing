# Landing page — Ana María Salom Reyes

Sitio construido con Next.js (App Router), TypeScript, Tailwind CSS y shadcn/ui, exportado
como HTML/CSS/JS estático y desplegado en el hosting cPanel del dominio `anamariasalomreyes.com`.

## Build de producción

```bash
npm run build
```

Genera el sitio estático en `out/`. `next.config.ts` está configurado con `output: "export"`
porque el sitio se sirve como hosting compartido (no requiere servidor Node en producción).

## Despliegue automático

Cada `push` a `main` dispara `.github/workflows/deploy.yml`, que construye el sitio y lo sube
por FTPS a `public_html` del hosting mediante los secrets del repositorio
(`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR`). No se necesita subir archivos
a mano.
