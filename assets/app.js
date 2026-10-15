/* IA en Simple · interacción de la web. Todo es mejora progresiva: sin JavaScript la web se lee entera. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const L = (window.SITE && SITE.lang) || 'es';
  const S = {
    es: { copied: 'Prompt copiado. Pégalo en tu IA favorita', copiedBtn: 'Copiado', copyFail: 'No se pudo copiar. Mantén pulsado el texto para copiarlo', read: '✓ Leída', left: (m) => `Te quedan ~${m} min`, done: 'Has terminado la guía', completed: (n, t) => `Guía completada · llevas ${n} de ${t}`, progress: (n, t) => `Has leído ${n} de ${t} guías`, resume: 'Sigue donde lo dejaste', none: 'Sin resultados', all: 'Ver todas las guías' },
    en: { copied: 'Prompt copied. Paste it into your favourite AI', copiedBtn: 'Copied', copyFail: "Couldn't copy. Press and hold the text to copy it", read: '✓ Read', left: (m) => `~${m} min left`, done: "You've finished this guide", completed: (n, t) => `Guide completed · ${n} of ${t} done`, progress: (n, t) => `You've read ${n} of ${t} guides`, resume: 'Pick up where you left off', none: 'No results', all: 'See all guides' },
  }[L];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Progreso del lector: solo en este navegador (almacenamiento local, sin cookies) */
  const store = { get(k, d) { try { const v = localStorage.getItem('iaes-' + k); return v ? JSON.parse(v) : d; } catch (_) { return d; } }, set(k, v) { try { localStorage.setItem('iaes-' + k, JSON.stringify(v)); } catch (_) {} } };
  const readSet = () => new Set(store.get('read', []));
  const mine = (set) => [...set].filter((u) => (L === 'en') === u.startsWith('/en/')).length;

  function toast(msg) { const t = $('#toast'); if (!t) return; t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 2600); }
  function copy(txt, btn) {
    const done = () => { toast(S.copied); if (!btn.classList.contains('copy') && btn.id !== 'lcopy') return; const o = btn.textContent; btn.textContent = S.copiedBtn; setTimeout(() => (btn.textContent = o), 1600); };
    const fail = () => { const pre = btn.closest('.prompt,.chat,.lab-out')?.querySelector('pre,.msg.you'); if (!pre) return toast(S.copyFail); const r = document.createRange(); r.selectNodeContents(pre); const s = getSelection(); s.removeAllRanges(); s.addRange(r); toast(S.copyFail); };
    try { navigator.clipboard.writeText(txt).then(done, fail); } catch (_) { fail(); }
  }

  /* Menú y buscador */
  const bg = $('#bg'), nv = $('#nv');
  bg && (bg.onclick = () => { const o = nv.classList.toggle('open'); bg.setAttribute('aria-expanded', o); });
  const key = document.body.dataset.key; $$('#nv a').forEach((a) => a.classList.toggle('on', a.dataset.k === key));
  const q = $('#q'), res = $('#res'); let index = null;
  if (q) {
    q.addEventListener('focus', () => { if (!index) fetch(q.dataset.index).then((r) => r.json()).then((d) => (index = d)).catch(() => (index = [])); }, { once: true });
    q.addEventListener('input', () => {
      const v = q.value.trim().toLowerCase(); if (!v || !index) { res.hidden = true; return; }
      const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); const nv_ = norm(v);
      const hits = index.filter((x) => norm(x.t + ' ' + x.d).includes(nv_)).slice(0, 7);
      res.innerHTML = hits.length ? hits.map((h) => `<a href="${h.u}"><small>${esc(h.k)}</small>${esc(h.t)}</a>`).join('') : `<a href="${L === 'es' ? '/guias/' : '/en/guides/'}"><small>${S.none}</small>${S.all}</a>`;
      res.hidden = false;
    });
    document.addEventListener('click', (e) => { if (!e.target.closest('.sb')) res.hidden = true; });
    q.addEventListener('keydown', (e) => { if (e.key === 'Escape') { res.hidden = true; q.blur(); } });
  }

  /* Marcas de "leída" en tarjetas */
  const rs = readSet();
  $$('.card[data-url]').forEach((c) => { if (rs.has(c.dataset.url)) { const m = c.querySelector('.meta'); if (m && !m.querySelector('.read')) m.insertAdjacentHTML('beforeend', ` · <span class="read">${S.read}</span>`); } });

  /* Movimiento: entradas escalonadas, fosforito y contadores */
  const canReveal = 'IntersectionObserver' in window && !reduce;
  if (canReveal) document.documentElement.classList.add('js');
  const REVEAL = '.hero-copy > *, .chat, .head, .intent, .card, .trow:not(.th), .cta > div, .pagehead > *, .art-main > h1, .art-main > .eyebrow, .art-main > .meta, .lab-ctrl > *, .lab-out, .resume, .next, footer .fgrid > div, .big, .pg > *';
  function countUp(el) { const to = +el.dataset.count; delete el.dataset.count; const t0 = performance.now(); const f = (t) => { const p = Math.min(1, (t - t0) / 1000); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }
  if (canReveal) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (!e.isIntersecting) return; const el = e.target; io.unobserve(el); el.classList.add('in'); if (el.dataset.count) countUp(el); }), { rootMargin: '0px 0px -8% 0px' });
    const seen = new Map();
    $$(REVEAL).forEach((el) => { el.dataset.r = ''; const n = seen.get(el.parentElement) || 0; seen.set(el.parentElement, n + 1); el.style.setProperty('--d', Math.min(n, 6) * 70 + 'ms'); io.observe(el); });
    $$('.mk,[data-count]').forEach((el) => io.observe(el));
  }

  /* Botones de copiar en las guías */
  $$('.prompt .copy').forEach((b) => (b.onclick = () => copy(b.closest('.prompt').querySelector('pre').textContent, b)));

  /* Portada: demo, cinta, laboratorio, progreso */
  if (document.body.dataset.kind === 'home') {
    fetch(`/assets/data-${L}.json`).then((r) => r.json()).then((data) => { demo(data.demo); lab(data.lab); }).catch(() => {});
    const tk = $('.ticker'); tk && (tk.onclick = (e) => { const b = e.target.closest('.tk'); if (b) copy(b.dataset.p, b); });
    const n = mine(rs), total = SITE.total, pr = $('#progress');
    if (pr && n) { pr.innerHTML = `<div class="pbar" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${n}"><i style="width:${Math.min(100, (n / total) * 100)}%"></i></div><span>${S.progress(Math.min(n, total), total)}</span>`; pr.hidden = false; }
    const last = store.get('last-' + L, null), rz = $('#resume');
    if (rz && last && !rs.has(last.u)) rz.innerHTML = `<a class="resume" href="${esc(last.u)}"><span><span class="eyebrow">${S.resume}</span><br><b>${esc(last.t)}</b></span><span class="arr"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 7h10M8 3l4 4-4 4"/></svg></span></a>`;
  }
  function demo(D) {
    const body = $('#cbody'), tag = $('#dtag'), dots = $('#dots'); if (!body) return; let i = 0, timer = null;
    const you = L === 'es' ? 'Tú' : 'You';
    const show = (n, animate) => {
      i = n; clearTimeout(timer); const [p, r, t] = D[n]; tag.textContent = t; $$('.dot', dots).forEach((d, k) => d.classList.toggle('on', k === n));
      if (!animate || reduce) { body.innerHTML = `<div class="msg you"><span class="who">${you}</span>${esc(p)}</div><div class="msg ai"><span class="who">IA</span>${esc(r)}</div>`; if (!reduce) timer = setTimeout(() => show((i + 1) % D.length, true), 7000); return; }
      body.innerHTML = `<div class="msg you"><span class="who">${you}</span>${esc(p)}</div><div class="msg ai"><span class="who">IA</span><span class="typ"></span><span class="caret"></span></div>`;
      const el = $('.typ', body); let k = 0;
      const step = () => { if (!el.isConnected) return; k += 2; el.textContent = r.slice(0, k); if (k < r.length) timer = setTimeout(step, 22); else { el.nextSibling.remove(); timer = setTimeout(() => show((i + 1) % D.length, true), 5500); } };
      timer = setTimeout(step, 500);
    };
    dots.onclick = (e) => { const b = e.target.closest('.dot'); if (b) show(+b.dataset.i, true); };
    $('#dcopy').onclick = (e) => copy(D[i][0], e.currentTarget);
    if (!reduce) timer = setTimeout(() => show(1, true), 6000);
  }
  function lab(LB) {
    const inp = $('#ltema'); if (!inp) return; const keys = Object.keys(LB.tasks);
    let k = keys[0], tone = LB.tones[0][0], len = LB.lengths[0][0], cur = '';
    const render = (f) => {
      const [, ex, tpl, gUrl, gTitle] = LB.tasks[k], vals = { tema: inp.value.trim() || ex, tono: tone }, hl = (m) => (f === m || f === 'all' ? ' fl' : '');
      cur = tpl.replace(/\{(tema|tono)\}/g, (_, m) => vals[m]) + ' ' + len;
      $('#lpre').innerHTML = esc(tpl).replace(/\{(tema|tono)\}/g, (_, m) => `<span class="v${hl(m)}">${esc(vals[m])}</span>`) + ` <span class="v${hl('l')}">${esc(len)}</span>`;
      $('#lwc').textContent = cur.split(/\s+/).length + ' ' + LB.words;
      $('#lgpt').href = 'https://chatgpt.com/?q=' + encodeURIComponent(cur); $('#lcl').href = 'https://claude.ai/new?q=' + encodeURIComponent(cur);
      const g = $('#lguide'); g.href = gUrl; g.textContent = `${LB.guide} ${gTitle}`;
    };
    const group = (id, set) => ($('#' + id).onclick = (e) => { const b = e.target.closest('.chip'); if (!b) return; $$('.chip', $('#' + id)).forEach((c) => { c.classList.toggle('on', c === b); c.setAttribute('aria-pressed', c === b); }); set(b); });
    group('lt', (b) => { k = b.dataset.k; inp.value = LB.tasks[k][1]; render('all'); });
    group('lto', (b) => { tone = b.dataset.t; render('tono'); });
    group('ll', (b) => { len = b.dataset.l; render('l'); });
    inp.oninput = () => render(null);
    $('#lcopy').onclick = (e) => copy(cur, e.currentTarget);
    render(null);
  }

  /* Listados: filtro por texto, categoría y nivel */
  const cl = $('#cl');
  if (cl && $('#filters')) {
    let txt = '', cat = '', lvl = '';
    const apply = () => { let n = 0; $$('.card', cl).forEach((c) => { const ok = (!txt || c.dataset.text.includes(txt)) && (!cat || c.dataset.cat === cat) && (!lvl || c.dataset.level === lvl); c.hidden = !ok; if (ok) n++; }); $$('.ad', cl).forEach((a) => (a.hidden = !!(txt || cat || lvl))); $('#nores').hidden = n > 0; };
    $('#cq').oninput = (e) => { txt = e.target.value.trim().toLowerCase(); apply(); };
    const chips = (id, set) => { const el = $('#' + id); el && (el.onclick = (e) => { const b = e.target.closest('.chip'); if (!b) return; $$('.chip', el).forEach((c) => { c.classList.toggle('on', c === b); c.setAttribute('aria-pressed', c === b); }); set(b); apply(); }); };
    chips('chc', (b) => (cat = b.dataset.cat)); chips('chl', (b) => (lvl = b.dataset.level));
  }

  /* Guías: barra de lectura, índice activo, minutos restantes y guía completada */
  if (document.body.dataset.kind === 'guide') {
    const main = $('.art-main'), prog = $('#prog'), left = $('#left'), toc = $$('.toc a'), url = location.pathname, mins = parseInt(left?.textContent) || 5;
    store.set('last-' + L, { u: url, t: $('h1').textContent });
    prog.hidden = false; let raf = 0, done = false;
    const tick = () => {
      raf = 0; const r = main.getBoundingClientRect(), vh = innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.35 - r.top) / Math.max(1, r.height - vh * 0.5)));
      prog.style.transform = `scaleX(${p})`;
      if (left) left.textContent = p >= 0.97 ? S.done : S.left(Math.max(1, Math.ceil(mins * (1 - p))));
      let on = null; toc.forEach((a) => { const h = document.getElementById(a.dataset.g); if (h && h.getBoundingClientRect().top < vh * 0.3) on = a.dataset.g; });
      toc.forEach((a) => a.classList.toggle('on', a.dataset.g === on));
      if (p > 0.85 && !done) { done = true; const s = readSet(); if (!s.has(url)) { s.add(url); store.set('read', [...s]); toast(S.completed(mine(s), SITE.total)); } }
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(tick); }, { passive: true }); tick();
  }

  /* Anuncios de AdSense (solo si están configurados) */
  if (SITE.ads) $$('ins.adsbygoogle').forEach(() => { try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (_) {} });
})();
