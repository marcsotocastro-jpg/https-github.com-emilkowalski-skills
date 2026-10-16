# IA en Simple

Web de guías prácticas de inteligencia artificial, en español e inglés, preparada para publicar y solicitar Google AdSense.

- 20 guías en español y 20 en inglés (unas 900–1.200 palabras cada una), con una página propia por guía.
- Botón **ES / EN** arriba a la derecha que lleva a la misma página en el otro idioma (con `hreflang` para Google).
- Páginas de sección, herramientas, sobre nosotros, contacto (formulario de Netlify) y textos legales.
- `sitemap.xml`, `robots.txt`, datos estructurados (Article, BreadcrumbList, FAQPage), imágenes para redes y `ads.txt` automático.
- Fuentes alojadas en la propia web (sin Google Fonts) y sin dependencias: solo hace falta Node 18 o superior.

## Cómo funciona

| Carpeta o archivo | Qué contiene |
|---|---|
| `site.config.mjs` | **Lo único que tienes que tocar:** dominio, tus datos de titular, ID de AdSense, Analytics, redes y herramientas. |
| `content/es/*.md`, `content/en/*.md` | Las guías. Cada una lleva una cabecera con `id` (igual en los dos idiomas), `slug`, `cat`, `title`, `desc`, fechas, `level` y `prompt`. |
| `content/pages.mjs` | Sobre nosotros, contacto y páginas legales en los dos idiomas. |
| `assets/` | Estilos, JavaScript, fuentes e imágenes. |
| `build.mjs` | Genera la web en `dist/`. |

```bash
node build.mjs                 # genera dist/
node build.mjs --preview-ads   # igual, pero muestra los huecos de anuncios para revisarlos
npx serve dist                 # (opcional) para verla en local
```

### Escribir una guía nueva

Crea `content/es/mi-guia.md` y `content/en/my-guide.md` con el mismo `id`. Formato del texto:

- `## Título` y `### Subtítulo`. Una sección `## Preguntas frecuentes` (o `## FAQ`) con `### pregunta` se convierte en desplegables y en datos estructurados.
- Bloques de prompt para copiar: ` ```prompt ` … ` ``` `.
- `> **Consejo:** …` para un consejo y `>! **Ojo:** …` para un aviso.
- Enlaces internos: `[texto](guia:id-de-la-guia)` o `[texto](page:tools)`.
- Tablas con `| col | col |`.

El primer párrafo es la introducción.

### Espacios de anuncios

La web tiene 8 espacios de AdSense ya colocados. Mientras un espacio no tenga su número de bloque, se ve un hueco reservado con la etiqueta «Publicidad» (`adsense.showPlaceholders: true`). Así sabes dónde irá cada anuncio y la página no salta cuando cargue.

| Espacio | Dónde aparece | Formato |
|---|---|---|
| `below-hero` | Bajo la portada y bajo la cabecera de cada sección | Display horizontal |
| `home-mid` | Portada, entre las guías y las herramientas | Display horizontal |
| `list-feed` | Tras la 3.ª tarjeta de cada listado | In-feed |
| `after-intro` | Tras la introducción de cada guía | In-article |
| `mid-article` | Antes de la tercera sección de cada guía | In-article |
| `before-faq` | Antes de las preguntas frecuentes | Display |
| `before-related` | Antes de «Sigue leyendo» | Display |
| `sidebar` | Barra lateral de las guías (solo ordenador) | Display 300 × 250 |

Cuando pegas el número de un bloque en `adsense.slots`, ese hueco se convierte en un anuncio real.

## Publicar en Netlify (recomendado, gratis)

1. Entra en [netlify.com](https://www.netlify.com) con tu cuenta de GitHub → **Add new site → Import an existing project** → elige este repositorio. Netlify lee `netlify.toml` (comando `node build.mjs`, carpeta `dist`).
2. En **Domain management**, añade tu dominio (`iaensimple.com`) y sigue las instrucciones de DNS. El HTTPS se activa solo.
3. Los mensajes del formulario de contacto llegan a **Forms** en el panel de Netlify; activa allí el aviso por email.

También funciona en Cloudflare Pages o Vercel (comando `node build.mjs`, carpeta `dist`), pero el formulario de contacto depende de Netlify.

## Antes de solicitar AdSense: lista de comprobación

1. **Rellena tus datos** en `site.config.mjs` → `owner` (nombre, NIF, dirección, email). La LSSI obliga a mostrarlos en el aviso legal. El generador te avisa mientras falten.
2. **Pon un autor real** en `author` si puedes (nombre y una frase sobre ti): da más confianza a Google y a los lectores.
3. **Revisa y personaliza las guías.** Están escritas para ser útiles y originales, pero añade tu experiencia, capturas propias y ejemplos reales. Revisa también los precios de `tools`.
4. **Haz revisar los textos legales** (`content/pages.mjs`) por un profesional.
5. Publica la web y registra el dominio en **Google Search Console**: verifica la propiedad y envía `https://iaensimple.com/sitemap.xml`.
6. Crea tu cuenta en [AdSense](https://adsense.google.com), añade el sitio y copia tu ID `ca-pub-…` en `adsense.client`. Al publicar, la web incluye el código de AdSense en todas las páginas y genera `ads.txt` sola.
7. En AdSense → **Privacidad y mensajes**, crea el **mensaje de consentimiento del RGPD** (plataforma certificada de Google). Es obligatorio para mostrar anuncios en Europa y la web ya lo explica en la política de cookies.
8. Solicita la revisión. Si prefieres que el revisor no vea huecos vacíos, pon `showPlaceholders: false` hasta que tengas los bloques (puedes activar los anuncios automáticos mientras tanto). Cuando te aprueben, crea un bloque de anuncios por espacio y pega su número en `adsense.slots`. También puedes activar los anuncios automáticos.

## Ideas para ganar más

- Publica 2–3 guías nuevas por semana sobre búsquedas concretas y actualiza las existentes (cambia `updated`).
- Rellena `aff` en las herramientas con tus enlaces de afiliado (llevan `rel="sponsored"` automáticamente).
- Comparte cada guía en redes con un vídeo corto; las imágenes para compartir ya se generan (`assets/og-es.png`, `assets/og-en.png`).
