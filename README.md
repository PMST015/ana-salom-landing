# Landing page — Ana María Salom Reyes

Sitio construido con Next.js (App Router), TypeScript, Tailwind CSS y shadcn/ui, exportado
como HTML/CSS/JS estático y desplegado en el hosting cPanel del dominio `anamariasalomreyes.com`.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio. El contenido editable
(bio, servicios, FAQ, contacto, logos de empresas/aliados) vive en `src/lib/site-content.ts`.

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

## Pendientes de contenido

- Foto profesional en alta resolución de Ana.
- Logos reales de empresas familiares asesoradas (sección "Empresas").
- Logos y URLs reales de los proyectos aliados (sección "Aliados").
- Confirmar URL exacta de LinkedIn en `src/lib/site-content.ts`.
- Reemplazar `SITE_URL` en `src/lib/site-content.ts` por el dominio definitivo si cambia.
