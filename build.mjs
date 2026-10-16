// Generador estático de IA en Simple. Sin dependencias: `node build.mjs` crea la carpeta dist/.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import SITE from './site.config.mjs';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'dist');
const LANGS = ['es', 'en'];
const PREVIEW_ADS = process.argv.includes('--preview-ads');

/* ---------- Textos de la interfaz ---------- */
const T = {
  es: {
    locale: 'es_ES', home: 'Inicio', guides: 'Guías', allGuides: 'Todas las guías', tools: 'Herramientas', about: 'Sobre nosotros', contact: 'Contacto',
    skip: 'Saltar al contenido', mainNav: 'Principal', language: 'Idioma', search: 'Buscar', searchPh: 'Buscar guías', menu: 'Abrir menú',
    tagline: 'La inteligencia artificial, sin complicaciones.', footDesc: 'Guías prácticas de IA en español, escritas y revisadas por personas.',
    sections: 'Secciones', legal: 'Legal', project: 'Proyecto', made: 'Hecho en España · Revisado por personas',
    by: 'Por', published: 'Publicada el', updated: 'Actualizada el', minRead: 'min de lectura', min: 'min',
    inThisGuide: 'En esta guía', faq: 'Preguntas frecuentes', next: 'Siguiente guía', related: 'Sigue leyendo', copyPrompt: 'Prompt para copiar', copy: 'Copiar',
    ad: 'Publicidad', levels: { beginner: 'Principiantes', intermediate: 'Intermedio' }, all: 'Todas', seeAll: 'Ver todas', latest: 'Últimas guías', fresh: 'Recién publicadas',
    startHere: 'Empieza por aquí', whatDo: '¿Qué quieres hacer con IA?', featured: 'Destacada', example: 'Ejemplo real', you: 'Tú', copyDemo: 'Copiar prompt',
    servicesEyebrow: 'Servicios para empresas', servicesTitle: '¿Quieres utilizar IA en tu negocio?',
    servicesText: 'Te ayudamos a implementar herramientas de inteligencia artificial, automatizaciones y chatbots para ahorrar tiempo y atender mejor a tus clientes.',
    servicesList: ['Chatbots que responden a tus clientes', 'Automatización de tareas repetitivas', 'Formación práctica para tu equipo'], servicesBtn: 'Quiero información',
    toolsEyebrow: 'Las que usamos', toolsTitle: 'Herramientas de IA recomendadas', toolCols: ['Herramienta', 'Sirve para', 'Precio', 'Nota'], tryTool: 'Probar',
    pricesNote: (d) => `Precios orientativos consultados en ${d}. Comprueba siempre el precio actual en la web oficial. Algunos enlaces pueden ser de afiliado: si compras a través de ellos podemos recibir una comisión, sin coste extra para ti.`,
    guidesCount: (n) => `${n} ${n === 1 ? 'guía' : 'guías'}`, filterPh: 'Buscar en las guías', noResults: 'No hay guías con esa búsqueda. Prueba con otra palabra o quita el filtro.',
    labEyebrow: 'Pruébalo ahora', labTitle: 'Monta tu primer prompt en 10 segundos', labTask: '¿Qué quieres hacer?', labTopic: '¿Sobre qué?', labTone: 'Tono', labLength: 'Extensión', labOut: 'Tu prompt', labTryGpt: 'Probar en ChatGPT', labTryClaude: 'Probar en Claude',
    tickerLabel: 'Lo que más se copia', heroEyebrow: 'Guías prácticas en español', heroTitle: ['Aprende a usar la IA', 'sin complicarte'],
    heroLead: 'Guías, herramientas y ejemplos para aprovechar la inteligencia artificial en tu trabajo, tus estudios, tu negocio y tu día a día.',
    heroCta: 'Ver guías', heroCta2: 'Explorar herramientas', stats: ['guías paso a paso', 'herramientas que usamos', 'para empezar'],
    authorBox: 'Sobre el autor', toolsPageTitle: 'Herramientas de IA', toolsPageDesc: 'Las herramientas de inteligencia artificial que usamos y recomendamos, con para qué sirve cada una y su precio orientativo.',
    guidesPageDesc: 'Todas nuestras guías prácticas para aprender a usar la inteligencia artificial paso a paso, con ejemplos que puedes copiar.',
    notFound: 'No encontramos esa página', notFoundText: 'Puede que la dirección haya cambiado. Prueba desde el inicio o busca una guía.', backHome: 'Volver al inicio',
  },
  en: {
    locale: 'en_US', home: 'Home', guides: 'Guides', allGuides: 'All guides', tools: 'Tools', about: 'About', contact: 'Contact',
    skip: 'Skip to content', mainNav: 'Main', language: 'Language', search: 'Search', searchPh: 'Search guides', menu: 'Open menu',
    tagline: 'Artificial intelligence, made simple.', footDesc: 'Practical AI guides, written and reviewed by people.',
    sections: 'Sections', legal: 'Legal', project: 'Project', made: 'Made in Spain · Reviewed by people',
    by: 'By', published: 'Published', updated: 'Updated', minRead: 'min read', min: 'min',
    inThisGuide: 'In this guide', faq: 'Frequently asked questions', next: 'Next guide', related: 'Keep reading', copyPrompt: 'Prompt to copy', copy: 'Copy',
    ad: 'Advertisement', levels: { beginner: 'Beginner', intermediate: 'Intermediate' }, all: 'All', seeAll: 'See all', latest: 'Latest guides', fresh: 'Just published',
    startHere: 'Start here', whatDo: 'What do you want to do with AI?', featured: 'Featured', example: 'Real example', you: 'You', copyDemo: 'Copy prompt',
    servicesEyebrow: 'Services for businesses', servicesTitle: 'Want to use AI in your business?',
    servicesText: 'We help you set up AI tools, automations and chatbots so you save time and serve your customers better.',
    servicesList: ['Chatbots that answer your customers', 'Automating repetitive tasks', 'Hands-on training for your team'], servicesBtn: 'Get in touch',
    toolsEyebrow: 'The ones we use', toolsTitle: 'Recommended AI tools', toolCols: ['Tool', 'Good for', 'Price', 'Rating'], tryTool: 'Try',
    pricesNote: (d) => `Approximate prices checked in ${d}. Always check the current price on the official site. Some links may be affiliate links: if you buy through them we may earn a commission at no extra cost to you.`,
    guidesCount: (n) => `${n} ${n === 1 ? 'guide' : 'guides'}`, filterPh: 'Search the guides', noResults: 'No guides match that search. Try another word or clear the filter.',
    labEyebrow: 'Try it now', labTitle: 'Build your first prompt in 10 seconds', labTask: 'What do you want to do?', labTopic: 'About what?', labTone: 'Tone', labLength: 'Length', labOut: 'Your prompt', labTryGpt: 'Try in ChatGPT', labTryClaude: 'Try in Claude',
    tickerLabel: 'Most copied prompts', heroEyebrow: 'Practical guides in plain English', heroTitle: ['Learn to use AI', 'without the hassle'],
    heroLead: 'Guides, tools and examples to get real value from artificial intelligence at work, in your studies, in your business and in everyday life.',
    heroCta: 'Browse guides', heroCta2: 'Explore tools', stats: ['step-by-step guides', 'tools we use', 'to get started'],
    authorBox: 'About the author', toolsPageTitle: 'AI tools', toolsPageDesc: 'The artificial intelligence tools we use and recommend, what each one is good for and its approximate price.',
    guidesPageDesc: 'All our practical guides to learn how to use artificial intelligence step by step, with examples you can copy.',
    notFound: "We couldn't find that page", notFoundText: 'The address may have changed. Start from the home page or search for a guide.', backHome: 'Back to home',
  },
};

const CATS = {
  start: { es: ['primeros-pasos', 'Primeros pasos', 'Lo básico para empezar con buen pie: qué es un prompt, los errores más comunes y cómo proteger tus datos.'], en: ['getting-started', 'Getting started', 'The basics to start on the right foot: what a prompt is, the most common mistakes and how to protect your data.'] },
  work: { es: ['trabajo', 'Trabajo', 'Usa la IA para tu currículum, tus entrevistas, tus correos y tus documentos, y gana tiempo cada día.'], en: ['work', 'Work', 'Use AI for your CV, interviews, emails and documents, and save time every day.'] },
  study: { es: ['estudios', 'Estudios', 'Estudia mejor, aprende idiomas y organízate con herramientas de IA, muchas de ellas gratuitas.'], en: ['study', 'Study', 'Study smarter, learn languages and get organised with AI tools, many of them free.'] },
  business: { es: ['negocios', 'Negocios', 'Ideas realistas de IA para autónomos y pequeños negocios que quieren ahorrar tiempo y atender mejor.'], en: ['business', 'Business', 'Realistic AI ideas for freelancers and small businesses that want to save time and serve customers better.'] },
  content: { es: ['crear-contenido', 'Crear contenido', 'Ideas, guiones, imágenes y vídeos para redes sociales, sin ser diseñador.'], en: ['content', 'Content creation', 'Ideas, scripts, images and videos for social media, no design skills needed.'] },
  compare: { es: ['comparativas', 'Comparativas', 'Comparamos herramientas de IA para que elijas la que encaja contigo.'], en: ['comparisons', 'Comparisons', 'We compare AI tools so you can pick the one that fits you.'] },
};
const NAV_CATS = ['work', 'study', 'business', 'content'];
const INTENTS = {
  es: [['Buscar trabajo', 'work'], ['Estudiar mejor', 'study'], ['Mejorar un negocio', 'business'], ['Crear contenido', 'content'], ['Escribir mejores prompts', 'start'], ['Elegir herramienta', 'compare'], ['Proteger mis datos', 'start'], ['Ahorrar tiempo', 'work']],
  en: [['Find a job', 'work'], ['Study smarter', 'study'], ['Grow a business', 'business'], ['Create content', 'content'], ['Write better prompts', 'start'], ['Pick a tool', 'compare'], ['Protect my data', 'start'], ['Save time', 'work']],
};

/* ---------- Rutas ---------- */
const PAGES = {
  home: { es: '/', en: '/en/' },
  guides: { es: '/guias/', en: '/en/guides/' },
  tools: { es: '/herramientas/', en: '/en/tools/' },
  about: { es: '/sobre-nosotros/', en: '/en/about/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
  thanks: { es: '/gracias/', en: '/en/thanks/' },
  legal: { es: '/aviso-legal/', en: '/en/legal-notice/' },
  privacy: { es: '/politica-de-privacidad/', en: '/en/privacy-policy/' },
  cookies: { es: '/politica-de-cookies/', en: '/en/cookie-policy/' },
  affiliate: { es: '/afiliacion-y-publicidad/', en: '/en/affiliates-and-ads/' },
};
const catUrl = (id, l) => (l === 'es' ? `/categoria/${CATS[id].es[0]}/` : `/en/category/${CATS[id].en[0]}/`);
const guideUrl = (g) => (g.lang === 'es' ? `/guias/${g.slug}/` : `/en/guides/${g.slug}/`);
const abs = (p) => SITE.url + p;

/* ---------- Utilidades ---------- */
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const fmtDate = (d, l) => new Date(d + 'T12:00:00Z').toLocaleDateString(l === 'es' ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const arrow = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"/></svg>';
function write(p, content) { const f = path.join(OUT, p.endsWith('/') ? p + 'index.html' : p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, content); }

/* ---------- Guías: lectura y Markdown ---------- */
function parseFront(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error('Falta la cabecera --- en una guía');
  const meta = {};
  for (const line of m[1].split('\n')) { const i = line.indexOf(':'); if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, '$1'); }
  return { meta, body: m[2] };
}
let GUIDES = [];
const byId = (id, l) => GUIDES.find((g) => g.id === id && g.lang === l);
function inline(s, l) {
  s = esc(s);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
    if (u.startsWith('guia:')) { const g = byId(u.slice(5), l); if (!g) throw new Error('Enlace a guía inexistente: ' + u); return `<a href="${guideUrl(g)}">${t}</a>`; }
    if (u.startsWith('page:')) return `<a href="${PAGES[u.slice(5)][l]}">${t}</a>`;
    return `<a href="${u}" target="_blank" rel="noopener">${t}</a>`;
  });
  return s;
}
function parseBody(src) {
  const L = src.replace(/\r/g, '').split('\n'); const blocks = []; let i = 0;
  const isStart = (x) => /^(#{2,3} |```|> |>! |- |\d+\. |\|)/.test(x);
  while (i < L.length) {
    const x = L[i];
    if (!x.trim()) { i++; continue; }
    if (x.startsWith('```prompt')) { const buf = []; i++; while (i < L.length && !L[i].startsWith('```')) buf.push(L[i++]); i++; blocks.push({ t: 'prompt', text: buf.join('\n').trim() }); continue; }
    if (x.startsWith('## ')) { blocks.push({ t: 'h2', text: x.slice(3).trim() }); i++; continue; }
    if (x.startsWith('### ')) { blocks.push({ t: 'h3', text: x.slice(4).trim() }); i++; continue; }
    if (x.startsWith('>! ') || x.startsWith('> ')) { const warn = x.startsWith('>!'); const buf = []; while (i < L.length && /^>!? /.test(L[i])) buf.push(L[i++].replace(/^>!? /, '')); blocks.push({ t: 'quote', warn, text: buf.join(' ') }); continue; }
    if (/^- /.test(x)) { const items = []; while (i < L.length && /^- /.test(L[i])) items.push(L[i++].slice(2)); blocks.push({ t: 'ul', items }); continue; }
    if (/^\d+\. /.test(x)) { const items = []; while (i < L.length && /^\d+\. /.test(L[i])) items.push(L[i++].replace(/^\d+\. /, '')); blocks.push({ t: 'ol', items }); continue; }
    if (x.startsWith('|')) { const rows = []; while (i < L.length && L[i].startsWith('|')) { const r = L[i++]; if (/^\|[\s:|-]+\|$/.test(r)) continue; rows.push(r.slice(1, -1).split('|').map((c) => c.trim())); } blocks.push({ t: 'table', rows }); continue; }
    const buf = []; while (i < L.length && L[i].trim() && !isStart(L[i])) buf.push(L[i++]); blocks.push({ t: 'p', text: buf.join(' ') });
  }
  return blocks;
}
const FAQ_RE = /^(preguntas frecuentes|faq|frequently asked questions)$/i;
function loadGuides() {
  for (const l of LANGS) {
    const dir = path.join(ROOT, 'content', l);
    for (const f of fs.readdirSync(dir).filter((n) => n.endsWith('.md'))) {
      const { meta, body } = parseFront(fs.readFileSync(path.join(dir, f), 'utf8'));
      for (const k of ['id', 'slug', 'cat', 'title', 'desc', 'date', 'level', 'prompt']) if (!meta[k]) throw new Error(`${l}/${f}: falta "${k}"`);
      if (!CATS[meta.cat]) throw new Error(`${l}/${f}: categoría desconocida ${meta.cat}`);
      const blocks = parseBody(body);
      const words = body.replace(/[#>*`|\-\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;
      GUIDES.push({ ...meta, updated: meta.updated || meta.date, lang: l, blocks, words, min: Math.max(3, Math.round(words / 200)), file: `${l}/${f}` });
    }
  }
  for (const g of GUIDES) if (!byId(g.id, g.lang === 'es' ? 'en' : 'es')) console.warn(`Aviso: ${g.file} no tiene traducción (id ${g.id})`);
  GUIDES.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
}
function renderGuideBody(g) {
  const l = g.lang, t = T[l]; const toc = []; const faq = []; let html = ''; let h2n = 0; let firstP = true; let inFaq = false; let q = null;
  const flushQ = () => { if (q) { faq.push(q); q = null; } };
  for (const b of g.blocks) {
    if (b.t === 'h2') {
      flushQ();
      if (FAQ_RE.test(b.text)) { inFaq = true; html += ad('before-faq', l) + `<h2 id="faq">${esc(b.text)}</h2><div class="faq">%%FAQ%%</div>`; toc.push(['faq', b.text]); continue; }
      inFaq = false; h2n++; if (h2n === 3) html += ad('mid-article', l);
      const id = slugify(b.text); toc.push([id, b.text]); html += `<h2 id="${id}">${inline(b.text, l)}</h2>`; continue;
    }
    if (inFaq) { if (b.t === 'h3') { flushQ(); q = { q: b.text, a: [] }; } else if (q) q.a.push(b); continue; }
    if (b.t === 'h3') html += `<h3>${inline(b.text, l)}</h3>`;
    else if (b.t === 'p') { html += `<p${firstP ? ' class="intro"' : ''}>${inline(b.text, l)}</p>`; if (firstP) { html += ad('after-intro', l); firstP = false; } }
    else html += blockHtml(b, l);
  }
  flushQ();
  const faqHtml = faq.map((f) => `<details><summary>${esc(f.q)}</summary>${f.a.map((b) => blockHtml(b, l)).join('')}</details>`).join('');
  return { html: html.replace('%%FAQ%%', faqHtml), toc, faq };
}
function blockHtml(b, l) {
  const t = T[l];
  if (b.t === 'p') return `<p>${inline(b.text, l)}</p>`;
  if (b.t === 'ul') return `<ul>${b.items.map((x) => `<li>${inline(x, l)}</li>`).join('')}</ul>`;
  if (b.t === 'ol') return `<ol>${b.items.map((x) => `<li>${inline(x, l)}</li>`).join('')}</ol>`;
  if (b.t === 'quote') return `<div class="tip${b.warn ? ' warn' : ''}">${inline(b.text, l)}</div>`;
  if (b.t === 'prompt') return `<div class="prompt"><div class="prompt-top"><span>${t.copyPrompt}</span><button class="copy" type="button">${t.copy}</button></div><pre>${esc(b.text)}</pre></div>`;
  if (b.t === 'table') { const [h, ...rows] = b.rows; return `<div class="tbl"><table><thead><tr>${h.map((c) => `<th>${inline(c, l)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c, l)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; }
  return '';
}
const plain = (blocks) => blocks.map((b) => b.text || (b.items || []).join(' ')).join(' ').replace(/\*\*|`|\[|\]\([^)]*\)/g, '');

/* ---------- Anuncios ---------- */
const AD_FMT = { 'below-hero': 'auto', 'home-mid': 'auto', 'list-feed': 'feed', 'after-intro': 'article', 'mid-article': 'article', 'before-faq': 'auto', 'before-related': 'auto', sidebar: 'auto' };
const AD_INFO = {
  horizontal: { es: ['Display horizontal', '728 × 90 · móvil 320 × 100'], en: ['Horizontal display', '728 × 90 · mobile 320 × 100'] },
  article: { es: ['In-article', 'Adaptable · 336 × 280'], en: ['In-article', 'Responsive · 336 × 280'] },
  feed: { es: ['In-feed', 'Nativo, con aspecto de tarjeta'], en: ['In-feed', 'Native, card-style'] },
  sidebar: { es: ['Display lateral', '300 × 250'], en: ['Sidebar display', '300 × 250'] },
};
const adw = (slot, l) => { const a = ad(slot, l); return a ? `<div class="w ad-band">${a}</div>` : ''; };
function ad(slot, l) {
  const id = SITE.adsense.slots[slot], fmt = AD_FMT[slot], kind = fmt === 'feed' ? 'feed' : slot === 'sidebar' ? 'sidebar' : fmt === 'article' ? 'article' : 'horizontal';
  if (SITE.adsense.client && id) {
    const attrs = fmt === 'article' ? 'data-ad-format="fluid" data-ad-layout="in-article"' : fmt === 'feed' ? `data-ad-format="fluid" data-ad-layout-key="${esc(SITE.adsense.feedLayoutKey)}"` : 'data-ad-format="auto" data-full-width-responsive="true"';
    return `<aside class="ad ad--${kind}" aria-label="${T[l].ad}"><span class="ad-label">${T[l].ad}</span><div class="ad-box live"><ins class="adsbygoogle" style="display:block${fmt === 'article' ? ';text-align:center' : ''}" data-ad-client="${esc(SITE.adsense.client)}" data-ad-slot="${esc(id)}" ${attrs}></ins></div></aside>`;
  }
  if (PREVIEW_ADS || SITE.adsense.showPlaceholders) { const [name, size] = AD_INFO[kind][l]; return `<aside class="ad ad--${kind}" data-slot="${slot}" aria-label="${T[l].ad}"><span class="ad-label">${T[l].ad}</span><div class="ad-box"><div><b>${name}</b>${size}</div></div></aside>`; }
  return '';
}

/* ---------- Plantilla común ---------- */
let VER = '';
function shell({ l, key, title, desc, body, jsonld = [], noindex = false, type = 'website', counterpart, kind = 'page' }) {
  const t = T[l], path_ = counterpart[l], other = l === 'es' ? 'en' : 'es';
  const ogImg = abs(`/assets/og-${l}.png`);
  const alt = noindex ? '' : LANGS.map((x) => `<link rel="alternate" hreflang="${x}" href="${abs(counterpart[x])}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${abs(counterpart.es)}">`;
  const adsHead = SITE.adsense.client ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(SITE.adsense.client)}" crossorigin="anonymous"></script>` : '';
  const ga = SITE.ga4 ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(SITE.ga4)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${esc(SITE.ga4)}');</script>` : '';
  const nav = [`<a href="${PAGES.guides[l]}" data-k="guides">${t.guides}</a>`, ...NAV_CATS.map((c) => `<a href="${catUrl(c, l)}" data-k="cat:${c}">${CATS[c][l][1]}</a>`), `<a href="${PAGES.tools[l]}" data-k="tools">${t.tools}</a>`].join('');
  const fullTitle = key === 'home' ? title : `${title} · ${SITE.name}`;
  return `<!doctype html>
<html lang="${l}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${abs(path_)}">${alt}
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<meta property="og:site_name" content="${SITE.name}"><meta property="og:type" content="${type}"><meta property="og:locale" content="${t.locale}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${abs(path_)}"><meta property="og:image" content="${ogImg}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f5f6f1" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#111311" media="(prefers-color-scheme: dark)">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/bricolage-grotesque-3.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/fonts/fonts.css">
<link rel="stylesheet" href="/assets/styles.css?v=${VER}">
${adsHead}${ga}${jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('')}
</head>
<body data-lang="${l}" data-kind="${kind}" data-key="${esc(key)}">
<a class="skip" href="#main">${t.skip}</a>
<header><div class="w bar">
  <a class="logo" href="${PAGES.home[l]}" aria-label="${SITE.name}, ${t.home}"><i>IA</i><span>en Simple</span></a>
  <nav id="nv" aria-label="${t.mainNav}">${nav}</nav>
  <div class="sb"><input id="q" type="search" placeholder="${t.searchPh}" aria-label="${t.search}" autocomplete="off" data-index="${l === 'es' ? '/search.json' : '/en/search.json'}"><div id="res" role="listbox" hidden></div></div>
  <nav class="lang" aria-label="${t.language}"><a href="${counterpart.es}" hreflang="es" lang="es"${l === 'es' ? ' aria-current="page"' : ''}>ES</a><a href="${counterpart.en}" hreflang="en" lang="en"${l === 'en' ? ' aria-current="page"' : ''}>EN</a></nav>
  <button class="burger" id="bg" type="button" aria-label="${t.menu}" aria-expanded="false" aria-controls="nv"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M1 1h16M1 7h16M1 13h10"/></svg></button>
</div><div id="prog" hidden></div></header>
<div id="toast" role="status" aria-live="polite"></div>
<main id="main">
${body}
</main>
<footer><div class="w">
  <div class="fgrid">
    <div><b>${SITE.name}</b><p style="max-width:32ch">${t.footDesc}</p></div>
    <div><b>${t.sections}</b><a href="${PAGES.guides[l]}">${t.allGuides}</a>${Object.keys(CATS).map((c) => `<a href="${catUrl(c, l)}">${CATS[c][l][1]}</a>`).join('')}<a href="${PAGES.tools[l]}">${t.tools}</a></div>
    <div><b>${t.legal}</b>${['legal', 'privacy', 'cookies', 'affiliate'].map((k) => `<a href="${PAGES[k][l]}">${LEGAL_TITLES[k][l]}</a>`).join('')}</div>
    <div><b>${t.project}</b><a href="${PAGES.about[l]}">${t.about}</a><a href="${PAGES.contact[l]}">${t.contact}</a><a href="${counterpart[other]}" hreflang="${other}" lang="${other}">${other === 'en' ? 'English version' : 'Versión en español'}</a>${Object.entries(SITE.social).filter(([, v]) => v).map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener me">${k[0].toUpperCase() + k.slice(1)}</a>`).join('')}</div>
  </div>
  <div class="big" aria-hidden="true">IA en <span class="mk">Simple</span></div>
  <div class="copyline"><span>© ${new Date().getFullYear()} ${SITE.name}</span><span>${t.made}</span></div>
</div></footer>
<script>window.SITE=${JSON.stringify({ lang: l, ads: !!SITE.adsense.client, total: GUIDES.filter((g) => g.lang === l).length })}</script>
<script src="/assets/app.js?v=${VER}" defer></script>
</body>
</html>
`;
}
const LEGAL_TITLES = {
  legal: { es: 'Aviso legal', en: 'Legal notice' }, privacy: { es: 'Política de privacidad', en: 'Privacy policy' },
  cookies: { es: 'Política de cookies', en: 'Cookie policy' }, affiliate: { es: 'Afiliación y publicidad', en: 'Affiliates and ads' },
};
const crumbs = (l, items) => `<nav class="crumb" aria-label="${l === 'es' ? 'Migas de pan' : 'Breadcrumb'}"><a href="${PAGES.home[l]}">${T[l].home}</a> / ${items.map(([n, u]) => (u ? `<a href="${u}">${esc(n)}</a>` : esc(n))).join(' / ')}</nav>`;
const crumbLd = (l, items) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [[T[l].home, PAGES.home[l]], ...items].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, ...(u ? { item: abs(u) } : {}) })) });
const orgLd = { '@type': 'Organization', name: SITE.name, url: SITE.url, logo: { '@type': 'ImageObject', url: abs('/assets/logo.png') } };

/* ---------- Componentes ---------- */
const cover = (g) => `<div class="cover ruled"><span class="cat">${CATS[g.cat][g.lang][1]}</span>${g.level === 'intermediate' ? `<span class="lvl">${T[g.lang].levels.intermediate}</span>` : ''}<q>${esc(g.prompt)}</q></div>`;
const card = (g) => `<a class="card" href="${guideUrl(g)}" data-url="${guideUrl(g)}" data-cat="${g.cat}" data-level="${g.level}" data-text="${esc((g.title + ' ' + g.desc).toLowerCase())}">${cover(g)}<div class="cb"><h3>${esc(g.title)}</h3><p>${esc(g.desc)}</p><span class="meta">${fmtDate(g.updated, g.lang)} · ${g.min} ${T[g.lang].min}</span></div></a>`;
const withFeed = (list, l) => list.map((g, i) => card(g) + (i === 2 && list.length > 3 ? ad('list-feed', l) : '')).join('');
const link = (tool) => tool.aff || tool.url, rel = (tool) => (tool.aff ? 'sponsored noopener' : 'noopener');
function toolsTable(l, n = SITE.tools.length) {
  const t = T[l];
  return `<div class="tools"><div class="trow th" aria-hidden="true"><span></span>${t.toolCols.map((c) => `<span>${c}</span>`).join('')}<span></span></div>${SITE.tools.slice(0, n).map((x) => `<div class="trow"><div class="lg" aria-hidden="true">${x.n[0]}</div><div><h3>${x.n}</h3><p class="d">${esc(x[l].d)}</p></div><p class="u">${esc(x[l].u)}</p><span class="pr">${esc(x[l].p)}</span><span class="rt" aria-label="${x.r.toFixed(1)} / 5">${x.r.toFixed(1)}</span><a class="btn ghost sm" href="${esc(link(x))}" target="_blank" rel="${rel(x)}">${t.tryTool} ${arrow}</a></div>`).join('')}</div><p class="meta" style="margin-top:14px;max-width:80ch">${esc(t.pricesNote(SITE.pricesCheckedOn[l]))}</p>`;
}
const services = (l) => { const t = T[l]; return `<section class="sec"><div class="w"><div class="cta"><div><span class="eyebrow">${t.servicesEyebrow}</span><h2>${t.servicesTitle}</h2><p>${t.servicesText}</p></div><div><ul>${t.servicesList.map((x) => `<li>${x}</li>`).join('')}</ul><a class="btn" href="${PAGES.contact[l]}">${t.servicesBtn} ${arrow}</a></div></div></div></section>`; };
const both = (k) => ({ es: PAGES[k].es, en: PAGES[k].en });

/* ---------- Páginas ---------- */
function home(l) {
  const t = T[l], list = GUIDES.filter((g) => g.lang === l), f = list[0];
  const demo = DEMO[l][0];
  const body = `<section class="hero ruled"><div class="w hero-grid">
<div class="hero-copy"><span class="eyebrow">${t.heroEyebrow}</span><h1>${t.heroTitle[0]} <span class="mk">${t.heroTitle[1]}</span></h1><p class="lead">${t.heroLead}</p>
<div class="acts"><a class="btn" href="${PAGES.guides[l]}">${t.heroCta} ${arrow}</a><a class="btn ghost" href="${PAGES.tools[l]}">${t.heroCta2}</a></div>
<div class="stats"><div><b data-count="${list.length}">${list.length}</b>${t.stats[0]}</div><div><b data-count="${SITE.tools.length}">${SITE.tools.length}</b>${t.stats[1]}</div><div><b>0 €</b>${t.stats[2]}</div></div></div>
<div class="chat" aria-label="${t.example}"><div class="chat-top"><span>${t.example}</span><em id="dtag">${demo[2]}</em></div>
<div class="chat-body" id="cbody"><div class="msg you"><span class="who">${t.you}</span>${esc(demo[0])}</div><div class="msg ai"><span class="who">IA</span>${esc(demo[1])}</div></div>
<div class="chat-foot"><div class="dots" id="dots">${DEMO[l].map((_, i) => `<button class="dot${i ? '' : ' on'}" type="button" data-i="${i}" aria-label="${i + 1}"></button>`).join('')}</div><button class="copy" type="button" id="dcopy">${t.copyDemo}</button></div></div>
</div></section>
<section class="ticker" aria-label="${t.tickerLabel}"><span class="tl">${t.tickerLabel}</span><div class="tv"><div class="ticker-track">${[...list, ...list].map((g, i) => `<button class="tk" type="button" data-p="${esc(g.prompt)}"${i >= list.length ? ' aria-hidden="true" tabindex="-1"' : ''}><span>${esc(g.prompt)}</span></button>`).join('')}</div></div></section>
${adw('below-hero', l)}
<section class="sec" style="padding-top:48px"><div class="w"><div class="head"><div><span class="eyebrow">${t.startHere}</span><h2>${t.whatDo}</h2></div></div>
<div class="intents">${INTENTS[l].map(([n, c]) => `<a class="intent" href="${catUrl(c, l)}"><div><small>${CATS[c][l][1]}</small><b>${n}</b></div><span class="arr">${arrow}</span></a>`).join('')}</div></div></section>
${labHtml(l)}
<section class="sec" style="padding-top:0"><div class="w"><div class="head"><div><span class="eyebrow">${t.fresh}</span><h2>${t.latest}</h2><div class="progress" id="progress" hidden></div></div><a class="more" href="${PAGES.guides[l]}">${t.seeAll}</a></div>
<div id="resume"></div>
<a class="card feature" href="${guideUrl(f)}" data-url="${guideUrl(f)}">${cover(f)}<div class="cb"><span class="eyebrow">${t.featured} · ${CATS[f.cat][l][1]}</span><h3>${esc(f.title)}</h3><p>${esc(f.desc)}</p><span class="meta">${fmtDate(f.updated, l)} · ${f.min} ${t.minRead}</span></div></a>
<div class="grid g3">${withFeed(list.slice(1, 6), l)}</div></div></section>
${adw('home-mid', l)}
<section class="sec" style="background:var(--card);border-block:1px solid var(--line)"><div class="w"><div class="head"><div><span class="eyebrow">${t.toolsEyebrow}</span><h2>${t.toolsTitle}</h2></div><a class="more" href="${PAGES.tools[l]}">${t.seeAll}</a></div>${toolsTable(l, 5)}</div></section>
${services(l)}`;
  const desc = l === 'es' ? 'Guías prácticas y ejemplos que puedes copiar para usar la inteligencia artificial en tu trabajo, tus estudios y tu negocio, sin complicaciones.' : 'Practical guides and copy-ready examples to use artificial intelligence at work, in your studies and in your business, without the hassle.';
  return shell({ l, key: 'home', kind: 'home', title: `${SITE.name} · ${t.tagline}`, desc, body, counterpart: both('home'),
    jsonld: [{ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: abs(PAGES.home[l]), inLanguage: l, publisher: orgLd }] });
}
function listPage(l, catId) {
  const t = T[l], all = GUIDES.filter((g) => g.lang === l), list = catId ? all.filter((g) => g.cat === catId) : all;
  const title = catId ? CATS[catId][l][1] : t.guides, desc = catId ? CATS[catId][l][2] : t.guidesPageDesc;
  const chips = catId ? '' : `<div class="chips" id="chc">${[['', t.all], ...Object.keys(CATS).map((c) => [c, CATS[c][l][1]])].map(([v, n], i) => `<button class="chip${i ? '' : ' on'}" type="button" data-cat="${v}" aria-pressed="${!i}">${n}</button>`).join('')}</div>`;
  const body = `<div class="w">${crumbs(l, catId ? [[t.guides, PAGES.guides[l]], [title]] : [[title]])}<div class="pagehead"><span class="eyebrow">${t.guidesCount(list.length)}</span><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>${ad('below-hero', l) ? `<div class="ad-band" style="padding-top:0">${ad('below-hero', l)}</div>` : ''}
<div class="filters" id="filters" style="margin-bottom:28px"><input id="cq" type="search" placeholder="${t.filterPh}" aria-label="${t.filterPh}">${chips}<div class="chips" id="chl">${[['', t.all], ['beginner', t.levels.beginner], ['intermediate', t.levels.intermediate]].map(([v, n], i) => `<button class="chip${i ? '' : ' on'}" type="button" data-level="${v}" aria-pressed="${!i}">${n}</button>`).join('')}</div></div>
<div class="grid g3" id="cl" style="padding-bottom:24px">${withFeed(list, l)}</div><p id="nores" hidden>${t.noResults}</p>
${catId ? `<div class="head" style="margin-top:40px"><h2>${l === 'es' ? 'Otras secciones' : 'Other sections'}</h2></div><div class="chips">${Object.keys(CATS).filter((c) => c !== catId).map((c) => `<a class="chip" href="${catUrl(c, l)}">${CATS[c][l][1]}</a>`).join('')}</div>` : ''}</div>${services(l)}`;
  const cp = catId ? { es: catUrl(catId, 'es'), en: catUrl(catId, 'en') } : both('guides');
  return shell({ l, key: catId ? 'cat:' + catId : 'guides', kind: 'list', title, desc, body, counterpart: cp,
    jsonld: [crumbLd(l, catId ? [[t.guides, PAGES.guides[l]], [title]] : [[title]]), { '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, description: desc, inLanguage: l, hasPart: list.map((g) => ({ '@type': 'Article', headline: g.title, url: abs(guideUrl(g)) })) }] });
}
function guidePage(g) {
  const l = g.lang, t = T[l], all = GUIDES.filter((x) => x.lang === l);
  const { html, toc, faq } = renderGuideBody(g);
  const idx = all.indexOf(g), nx = all[(idx + 1) % all.length];
  const relA = all.filter((x) => x.cat === g.cat && x !== g && x !== nx).concat(all.filter((x) => x.cat !== g.cat && x !== nx && x !== g)).slice(0, 3);
  const other = byId(g.id, l === 'es' ? 'en' : 'es');
  const cp = { [l]: guideUrl(g), [l === 'es' ? 'en' : 'es']: other ? guideUrl(other) : PAGES.guides[l === 'es' ? 'en' : 'es'] };
  const catName = CATS[g.cat][l][1];
  const body = `<div class="w">${crumbs(l, [[catName, catUrl(g.cat, l)], [g.title]])}<article class="art"><div class="art-main">
<span class="eyebrow">${catName} · ${t.levels[g.level]}</span><h1>${esc(g.title)}</h1>
<p class="meta">${t.by} <a href="${PAGES.about[l]}">${esc(SITE.author.name[l])}</a> · ${t.published} ${fmtDate(g.date, l)}${g.updated !== g.date ? ` · ${t.updated} ${fmtDate(g.updated, l)}` : ''} · ${g.min} ${t.minRead}</p>
${html}
<div class="author"><div class="lg" aria-hidden="true">IA</div><div><span class="eyebrow">${t.authorBox}</span><p style="margin-top:6px"><a href="${PAGES.about[l]}"><b>${esc(SITE.author.name[l])}</b></a>. ${esc(SITE.author.bio[l])}</p></div></div>
<a class="next" href="${guideUrl(nx)}"><span><span class="eyebrow">${t.next} · ${nx.min} ${t.min}</span><b>${esc(nx.title)}</b></span><span class="arr">${arrow}</span></a>
${ad('before-related', l)}
<h2>${t.related}</h2><div class="related">${relA.map((r) => `<a href="${guideUrl(r)}"><b>${esc(r.title)}</b><span class="meta">${r.min} ${t.min}</span></a>`).join('')}</div>
</div>
<aside class="side"><nav class="toc" aria-label="${t.inThisGuide}"><span class="eyebrow">${t.inThisGuide}</span>${toc.map(([id, n]) => `<a href="#${id}" data-g="${id}">${esc(n)}</a>`).join('')}<span class="left" id="left">${g.min} ${t.minRead}</span></nav>${ad('sidebar', l)}</aside></article></div>${services(l)}`;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.desc, datePublished: g.date, dateModified: g.updated, inLanguage: l, wordCount: g.words, image: abs(`/assets/og-${l}.png`),
      author: { '@type': 'Organization', name: SITE.author.name[l], url: abs(PAGES.about[l]) }, publisher: orgLd, mainEntityOfPage: abs(guideUrl(g)), articleSection: catName },
    crumbLd(l, [[catName, catUrl(g.cat, l)], [g.title]]),
  ];
  if (faq.length) jsonld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })) });
  return shell({ l, key: 'guide:' + g.id, kind: 'guide', type: 'article', title: g.title, desc: g.desc, body, counterpart: cp, jsonld });
}
function toolsPage(l) {
  const t = T[l], related = GUIDES.filter((g) => g.lang === l && (g.cat === 'compare' || g.cat === 'start')).slice(0, 6);
  const body = `<div class="w">${crumbs(l, [[t.toolsPageTitle]])}<div class="pagehead"><span class="eyebrow">${t.toolsEyebrow}</span><h1>${t.toolsPageTitle}</h1><p>${t.toolsPageDesc}</p></div>
${toolsTable(l)}<div class="head" style="margin-top:56px"><h2>${l === 'es' ? 'Guías para elegir bien' : 'Guides to choose well'}</h2></div><div class="grid g3" style="padding-bottom:24px">${related.map(card).join('')}</div></div>${services(l)}`;
  return shell({ l, key: 'tools', kind: 'page', title: t.toolsPageTitle, desc: t.toolsPageDesc, body, counterpart: both('tools'), jsonld: [crumbLd(l, [[t.toolsPageTitle]])] });
}
function textPage(l, key, title, desc, inner, opts = {}) {
  const body = `<div class="w">${crumbs(l, [[title]])}<div class="sec pg" style="padding-top:24px">${inner}</div></div>${opts.services ? services(l) : ''}`;
  return shell({ l, key, kind: 'page', title, desc, body, counterpart: both(key), noindex: !!opts.noindex, jsonld: [crumbLd(l, [[title]])] });
}

/* ---------- Datos de la portada (demo y laboratorio, se pasan a app.js) ---------- */
const DEMO = {
  es: [
    ['Explícame la fotosíntesis como si tuviera 12 años y luego hazme 3 preguntas tipo test.', 'Imagina que cada hoja es una pequeña cocina. Usa la luz del sol, el agua y el aire para fabricar su propio alimento, y de paso suelta oxígeno. Pregunta 1: ¿qué tres ingredientes necesita la planta?', 'Estudios'],
    ['Dame 10 ideas de reels para una tienda de cerámica artesanal.', '1. Una taza, del barro al horno, en 30 segundos. 2. Antes y después del esmaltado. 3. Tu pieza favorita y la que más te costó. 4. Preguntas de clientes respondidas en el torno…', 'Contenido'],
    ['Hazme de entrevistador para un puesto de administrativo y dame feedback.', 'Perfecto, empezamos. Primera pregunta: cuéntame una vez que tuviste mucho trabajo acumulado y poco tiempo. ¿Cómo lo organizaste? Responde con calma y luego te digo qué mejorar.', 'Trabajo'],
  ],
  en: [
    ['Explain photosynthesis as if I were 12, then give me 3 multiple-choice questions.', 'Picture every leaf as a tiny kitchen. It uses sunlight, water and air to make its own food, and releases oxygen along the way. Question 1: which three ingredients does the plant need?', 'Study'],
    ['Give me 10 reel ideas for a handmade pottery shop.', '1. A mug, from clay to kiln, in 30 seconds. 2. Before and after glazing. 3. Your favourite piece and the hardest one to make. 4. Customer questions answered at the wheel…', 'Content'],
    ['Act as an interviewer for an office assistant role and give me feedback.', "Great, let's begin. First question: tell me about a time you had a lot of work piling up and little time. How did you organise it? Take your time, then I'll tell you what to improve.", 'Work'],
  ],
};
const LAB = {
  es: {
    tasks: {
      email: ['Escribir un correo', 'pedir a mi casero que arregle la calefacción', 'Actúa como experto en comunicación. Escribe un correo {tono} sobre esto: {tema}. Incluye un asunto claro y una despedida. Si te falta información, hazme antes 2 preguntas.', 'emails'],
      learn: ['Entender un tema', 'cómo funciona la inflación', 'Explícame {tema} como si tuviera 15 años, con un tono {tono}. Usa un ejemplo de la vida diaria y termina con 3 preguntas para comprobar que lo he entendido.', 'study'],
      social: ['Ideas para redes', 'mi cafetería de barrio', 'Dame 10 ideas de publicaciones para Instagram sobre {tema}. Tono {tono}. Para cada idea indica el gancho de la primera línea, el formato (reel, carrusel o foto) y una llamada a la acción.', 'instagram'],
      interview: ['Preparar una entrevista', 'dependiente en una tienda de ropa', 'Hazme de entrevistador para un puesto de {tema}. Hazme una pregunta cada vez, espera mi respuesta y dame un feedback {tono} sobre qué mejorar.', 'interview'],
      cv: ['Mejorar mi CV', 'auxiliar administrativo', 'Revisa mi currículum para un puesto de {tema}. Señala qué palabras clave faltan y reescribe mis logros con verbos de acción y cifras, con un tono {tono}. Este es mi CV: [pega aquí tu CV]', 'resume'],
    },
    tones: [['cercano', 'Cercano'], ['profesional', 'Profesional'], ['directo', 'Directo']],
    lengths: [['Respuesta breve, de menos de 150 palabras.', 'Corta'], ['Respuesta detallada y paso a paso.', 'Detallada']],
    words: 'palabras', guide: 'Aprende más en la guía:',
  },
  en: {
    tasks: {
      email: ['Write an email', 'asking my landlord to fix the heating', 'Act as a communication expert. Write a {tono} email about this: {tema}. Include a clear subject line and a sign-off. If you are missing information, ask me 2 questions first.', 'emails'],
      learn: ['Understand a topic', 'how inflation works', 'Explain {tema} as if I were 15, in a {tono} tone. Use an everyday example and finish with 3 questions to check I understood.', 'study'],
      social: ['Social media ideas', 'my neighbourhood café', 'Give me 10 Instagram post ideas about {tema}. Tone: {tono}. For each idea, include the opening hook, the format (reel, carousel or photo) and a call to action.', 'instagram'],
      interview: ['Prepare an interview', 'sales assistant at a clothing store', 'Act as an interviewer for a {tema} role. Ask me one question at a time, wait for my answer and give me {tono} feedback on what to improve.', 'interview'],
      cv: ['Improve my CV', 'office administrator', 'Review my CV for a {tema} role. Point out missing keywords and rewrite my achievements with action verbs and numbers, in a {tono} tone. Here is my CV: [paste your CV here]', 'resume'],
    },
    tones: [['friendly', 'Friendly'], ['professional', 'Professional'], ['direct', 'Direct']],
    lengths: [['Keep the answer short, under 150 words.', 'Short'], ['Give a detailed, step-by-step answer.', 'Detailed']],
    words: 'words', guide: 'Learn more in the guide:',
  },
};
function labHtml(l) {
  const t = T[l], L = LAB[l], first = Object.values(L.tasks)[0];
  const chipRow = (id, items, attr) => `<div class="chips" id="${id}">${items.map(([v, n], i) => `<button type="button" class="chip${i ? '' : ' on'}" data-${attr}="${esc(v)}" aria-pressed="${!i}">${n}</button>`).join('')}</div>`;
  return `<section class="sec" id="lab" style="padding-top:0"><div class="w"><div class="head"><div><span class="eyebrow">${t.labEyebrow}</span><h2>${t.labTitle}</h2></div></div>
<div class="lab"><div class="lab-ctrl">
<fieldset><legend>${t.labTask}</legend>${chipRow('lt', Object.entries(L.tasks).map(([k, v]) => [k, v[0]]), 'k')}</fieldset>
<label><span>${t.labTopic}</span><input id="ltema" value="${esc(first[1])}" autocomplete="off"></label>
<fieldset><legend>${t.labTone}</legend>${chipRow('lto', L.tones, 't')}</fieldset>
<fieldset><legend>${t.labLength}</legend>${chipRow('ll', L.lengths, 'l')}</fieldset></div>
<div class="lab-out"><div class="lab-top"><span>${t.labOut}</span><span id="lwc"></span></div><pre id="lpre" aria-live="polite">${esc(first[2].replace('{tema}', first[1]).replace('{tono}', L.tones[0][0]))} ${esc(L.lengths[0][0])}</pre>
<div class="lab-foot"><button class="btn sm" id="lcopy" type="button">${t.copyDemo}</button><a class="btn ghost sm" id="lgpt" href="https://chatgpt.com" target="_blank" rel="noopener">${t.labTryGpt}</a><a class="btn ghost sm" id="lcl" href="https://claude.ai" target="_blank" rel="noopener">${t.labTryClaude}</a><a class="more" id="lguide" href="${PAGES.guides[l]}"></a></div></div></div></div></section>`;
}

/* ---------- Construcción ---------- */
import { legalPages } from './content/pages.mjs';
function build() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.cpSync(path.join(ROOT, 'assets'), path.join(OUT, 'assets'), { recursive: true });
  fs.cpSync(path.join(ROOT, 'static'), OUT, { recursive: true });
  VER = crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, 'assets/styles.css')) + fs.readFileSync(path.join(ROOT, 'assets/app.js'))).digest('hex').slice(0, 8);
  loadGuides();
  const urls = []; // [counterpart, lastmod]
  for (const l of LANGS) {
    if (!GUIDES.some((g) => g.lang === l)) { console.warn(`Aviso: no hay guías en ${l}, se omite`); continue; }
    write(PAGES.home[l], home(l)); urls.push([both('home'), GUIDES[0].updated]);
    write(PAGES.guides[l], listPage(l)); urls.push([both('guides'), GUIDES[0].updated]);
    for (const c of Object.keys(CATS)) { write(catUrl(c, l), listPage(l, c)); urls.push([{ es: catUrl(c, 'es'), en: catUrl(c, 'en') }, GUIDES[0].updated]); }
    write(PAGES.tools[l], toolsPage(l)); urls.push([both('tools'), GUIDES[0].updated]);
    for (const p of legalPages(l, { SITE, T, PAGES, esc, catUrl, CATS })) { write(PAGES[p.key][l], textPage(l, p.key, p.title, p.desc, p.html, p)); if (!p.noindex) urls.push([both(p.key), p.updated]); }
    // Índice de búsqueda
    const idx = [...GUIDES.filter((g) => g.lang === l).map((g) => ({ k: T[l].guides, t: g.title, d: g.desc, u: guideUrl(g) })), ...Object.keys(CATS).map((c) => ({ k: l === 'es' ? 'Sección' : 'Section', t: CATS[c][l][1], d: CATS[c][l][2], u: catUrl(c, l) })), { k: T[l].tools, t: T[l].toolsPageTitle, d: SITE.tools.map((x) => x.n).join(', '), u: PAGES.tools[l] }];
    write(l === 'es' ? '/search.json' : '/en/search.json', JSON.stringify(idx));
    // Datos de la portada para app.js
    write(l === 'es' ? '/assets/data-es.json' : '/assets/data-en.json', JSON.stringify({ demo: DEMO[l], lab: { ...LAB[l], tasks: Object.fromEntries(Object.entries(LAB[l].tasks).map(([k, v]) => { const g = byId(v[3], l); return [k, [v[0], v[1], v[2], g ? guideUrl(g) : PAGES.guides[l], g ? g.title : T[l].allGuides]]; })) } }));
  }
  for (const g of GUIDES) { write(guideUrl(g), guidePage(g)); const o = byId(g.id, g.lang === 'es' ? 'en' : 'es'); if (g.lang === 'es') urls.push([{ es: guideUrl(g), en: o ? guideUrl(o) : null }, g.updated]); else if (!o) urls.push([{ en: guideUrl(g) }, g.updated]); }
  // 404
  write('/404.html', shell({ l: 'es', key: '404', kind: 'page', title: T.es.notFound, desc: T.es.notFoundText, noindex: true, counterpart: both('home'),
    body: `<div class="w sec pg"><span class="eyebrow">Error 404</span><h1>${T.es.notFound}</h1><p>${T.es.notFoundText}</p><p lang="en" class="meta">${T.en.notFound}. ${T.en.notFoundText}</p><p style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn" href="/">${T.es.backHome}</a><a class="btn ghost" href="/en/">${T.en.backHome}</a></p></div>` }));
  // Sitemap con alternativas por idioma
  const sm = urls.flatMap(([cp, lm]) => LANGS.filter((x) => cp[x]).map((x) => `<url><loc>${abs(cp[x])}</loc><lastmod>${lm}</lastmod>${LANGS.filter((y) => cp[y]).map((y) => `<xhtml:link rel="alternate" hreflang="${y}" href="${abs(cp[y])}"/>`).join('')}</url>`));
  write('/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sm.join('\n')}\n</urlset>\n`);
  write('/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);
  if (SITE.adsense.client) write('/ads.txt', `google.com, ${SITE.adsense.client.replace('ca-', '')}, DIRECT, f08c47fec0942fa0\n`);
  // Avisos
  const pend = [];
  if (/\[/.test(Object.values(SITE.owner).join(''))) pend.push('Rellena tus datos de titular en site.config.mjs (owner) para el aviso legal.');
  if (!SITE.adsense.client) pend.push('Añade tu ID de AdSense (adsense.client) antes de solicitar la revisión; se generará ads.txt.');
  const n = GUIDES.length;
  console.log(`Listo: ${n} guías (${GUIDES.filter((g) => g.lang === 'es').length} ES / ${GUIDES.filter((g) => g.lang === 'en').length} EN), ${sm.length} URLs en el sitemap → dist/`);
  const short = GUIDES.filter((g) => g.words < 900); if (short.length) console.log('Guías cortas (<900 palabras): ' + short.map((g) => `${g.file} (${g.words})`).join(', '));
  pend.forEach((p) => console.log('Pendiente: ' + p));
}
build();
