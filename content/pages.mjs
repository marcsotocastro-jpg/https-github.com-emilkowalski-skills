// Páginas fijas: sobre nosotros, contacto, gracias y textos legales, en español e inglés.
// Revisa estos textos con un profesional antes de publicar: son una base sólida, no asesoramiento legal.
export function legalPages(l, { SITE, PAGES, esc }) {
  const o = SITE.owner, e = (s) => esc(s), mail = e(o.email), upd = '2026-10-15';
  const updated = l === 'es' ? 'Última actualización: 15 de octubre de 2026.' : 'Last updated: 15 October 2026.';
  const ga = !!SITE.ga4;
  const P = (k) => PAGES[k][l];
  if (l === 'es') return [
    { key: 'about', updated: upd, services: true, title: 'Sobre nosotros', desc: 'Quiénes somos, cómo escribimos y probamos nuestras guías de inteligencia artificial y cómo nos financiamos.', html: `
<span class="eyebrow">El proyecto</span><h1>Sobre nosotros</h1>
<p style="font-size:1.2rem">IA en Simple nace con una idea sencilla: que cualquier persona pueda usar la inteligencia artificial para <span class="mk">ahorrar tiempo y hacer mejor su trabajo</span>, sin tecnicismos ni promesas exageradas.</p>
<h2>Qué encontrarás aquí</h2>
<p>Guías prácticas, paso a paso, para tareas reales: preparar un currículum, estudiar para un examen, responder reseñas de tu negocio, escribir un correo difícil o elegir qué herramienta usar. Cada guía incluye ejemplos de prompts que puedes copiar y adaptar.</p>
<h2>Cómo escribimos cada guía</h2>
<ul>
<li><strong>Probamos antes de publicar.</strong> Cada prompt de ejemplo se ha probado en al menos una herramienta de IA real.</li>
<li><strong>Explicamos el porqué.</strong> No solo te damos la receta: te contamos por qué funciona para que puedas adaptarla.</li>
<li><strong>Somos honestos con los límites.</strong> La IA se equivoca. Te decimos cuándo comprobar los datos y qué no deberías compartir nunca.</li>
<li><strong>Actualizamos.</strong> Las herramientas cambian rápido. Revisamos las guías y mostramos la fecha de la última actualización.</li>
</ul>
<h2>Quién está detrás</h2>
<p>${e(SITE.author.name.es)}. ${e(SITE.author.bio.es)}</p>
<h2>Cómo nos financiamos</h2>
<p>La web es gratuita. Se mantiene con publicidad de Google AdSense, algunos enlaces de afiliado y los servicios de implantación de IA que ofrecemos a empresas. Nada de eso decide qué recomendamos. Lo explicamos con detalle en <a href="${P('affiliate')}">Afiliación y publicidad</a>.</p>
<h2>Contacto</h2>
<p>¿Has visto un error o quieres proponer una guía? Escríbenos desde la página de <a href="${P('contact')}">contacto</a>.</p>` },

    { key: 'contact', updated: upd, title: 'Contacto', desc: 'Escríbenos para proponer una guía, avisarnos de un error o pedir información sobre IA para tu negocio.', html: `
<span class="eyebrow">Hablemos</span><h1>Contacto</h1>
<p style="color:var(--muted);max-width:56ch">Cuéntanos qué necesitas. Respondemos en uno o dos días laborables. También puedes escribirnos a <strong>${mail}</strong>.</p>
<form class="f" name="contacto" method="POST" action="${P('thanks')}" data-netlify="true" netlify-honeypot="empresa-web">
<input type="hidden" name="form-name" value="contacto">
<p class="hp"><label>No rellenes este campo <input name="empresa-web" tabindex="-1" autocomplete="off"></label></p>
<label for="fn">Nombre<input id="fn" name="nombre" required autocomplete="name"></label>
<label for="fe">Email<input id="fe" name="email" type="email" required autocomplete="email"></label>
<label for="fm">Motivo<select id="fm" name="motivo"><option>Información sobre servicios para empresas</option><option>Proponer una guía</option><option>Avisar de un error</option><option>Colaboración</option><option>Otro</option></select></label>
<label for="fg">Mensaje<textarea id="fg" name="mensaje" rows="6" required></textarea></label>
<label style="font-weight:400;display:flex;gap:10px;align-items:flex-start"><input type="checkbox" name="privacidad" required style="width:auto;margin-top:4px"> He leído y acepto la <a href="${P('privacy')}">política de privacidad</a>.</label>
<div><button class="btn" type="submit">Enviar mensaje</button></div>
</form>
<p class="note">Responsable: ${e(o.name)}. Finalidad: responder a tu mensaje. Base legal: tu consentimiento. Puedes ejercer tus derechos escribiendo a ${mail}. Más información en la <a href="${P('privacy')}">política de privacidad</a>.</p>` },

    { key: 'thanks', updated: upd, noindex: true, title: 'Mensaje enviado', desc: 'Hemos recibido tu mensaje.', html: `
<span class="eyebrow">Gracias</span><h1>Hemos recibido <span class="mk">tu mensaje</span></h1><p>Te responderemos en uno o dos días laborables. Mientras tanto, puedes seguir leyendo nuestras guías.</p><p><a class="btn" href="${P('guides')}">Ver guías</a></p>` },

    { key: 'legal', updated: upd, title: 'Aviso legal', desc: 'Datos del titular de IA en Simple y condiciones de uso del sitio web.', html: `
<span class="eyebrow">Legal</span><h1>Aviso legal</h1><p class="meta">${updated}</p>
<h2>Titular del sitio web</h2>
<p>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), te informamos de que este sitio web, ${e(SITE.url.replace('https://', ''))}, es titularidad de:</p>
<ul><li><strong>Titular:</strong> ${e(o.name)}</li><li><strong>NIF:</strong> ${e(o.nif)}</li><li><strong>Domicilio:</strong> ${e(o.address)}</li><li><strong>Email:</strong> ${mail}</li></ul>
<h2>Objeto</h2>
<p>IA en Simple es un sitio web divulgativo que publica guías y recursos sobre el uso práctico de la inteligencia artificial. Acceder y navegar por el sitio implica aceptar este aviso legal.</p>
<h2>Uso del sitio</h2>
<p>Te comprometes a usar el sitio y sus contenidos de forma lícita, sin dañar su funcionamiento ni los derechos de terceros.</p>
<h2>Propiedad intelectual</h2>
<p>Los textos, el diseño, el logotipo y el código de este sitio pertenecen a su titular o se usan con permiso. Puedes citar fragmentos breves enlazando a la fuente. No está permitida la reproducción total o la distribución con fines comerciales sin autorización por escrito. Los nombres de las herramientas mencionadas son marcas de sus respectivos propietarios.</p>
<h2>Responsabilidad sobre los contenidos</h2>
<p>Las guías tienen carácter informativo. Revisamos su contenido con cuidado, pero la inteligencia artificial y sus herramientas cambian con frecuencia y pueden cometer errores. Comprueba siempre la información importante antes de tomar decisiones, especialmente en temas legales, médicos o económicos. El titular no se responsabiliza del uso que se haga de la información ni de los contenidos de sitios de terceros enlazados.</p>
<h2>Enlaces y publicidad</h2>
<p>El sitio muestra publicidad de Google AdSense y puede incluir enlaces de afiliado. Consulta la página <a href="${P('affiliate')}">Afiliación y publicidad</a>.</p>
<h2>Legislación aplicable</h2>
<p>Este aviso legal se rige por la legislación española.</p>` },

    { key: 'privacy', updated: upd, title: 'Política de privacidad', desc: 'Cómo tratamos tus datos personales en IA en Simple, con qué finalidad y cuáles son tus derechos.', html: `
<span class="eyebrow">Legal</span><h1>Política de privacidad</h1><p class="meta">${updated}</p>
<h2>Responsable del tratamiento</h2>
<ul><li><strong>Responsable:</strong> ${e(o.name)}</li><li><strong>NIF:</strong> ${e(o.nif)}</li><li><strong>Domicilio:</strong> ${e(o.address)}</li><li><strong>Email:</strong> ${mail}</li></ul>
<h2>Qué datos tratamos y para qué</h2>
<h3>Formulario de contacto</h3>
<p>Si nos escribes, tratamos tu nombre, tu email y el contenido de tu mensaje para responderte. La base legal es tu consentimiento. Conservamos los mensajes el tiempo necesario para atender tu consulta y, como máximo, un año después de la última comunicación, salvo obligación legal.</p>
<h3>Publicidad (Google AdSense)</h3>
<p>Este sitio muestra anuncios de Google AdSense. Google y sus socios pueden usar cookies y tecnologías similares para mostrar anuncios, medir su rendimiento y, si lo aceptas, personalizarlos según tus intereses. La base legal es tu consentimiento, que recogemos con la plataforma de gestión del consentimiento certificada de Google. Puedes aceptar, rechazar o configurar tus preferencias, y cambiarlas cuando quieras. Más información en <a href="https://policies.google.com/technologies/ads?hl=es">cómo usa Google las cookies en publicidad</a> y en la <a href="https://policies.google.com/privacy?hl=es">política de privacidad de Google</a>.</p>
${ga ? `<h3>Analítica (Google Analytics)</h3><p>Si lo aceptas, usamos Google Analytics para saber de forma agregada qué páginas se visitan y cómo se llega a ellas. La base legal es tu consentimiento.</p>` : ''}
<h3>Preferencias de lectura</h3>
<p>Para mostrarte qué guías has leído y dónde te quedaste, la web guarda esa información solo en tu navegador (almacenamiento local). No nos llega a nosotros ni a terceros, y puedes borrarla desde la configuración de tu navegador.</p>
<h2>Destinatarios y transferencias</h2>
<p>No vendemos tus datos. Los proveedores que nos ayudan a prestar el servicio pueden acceder a ellos en nuestro nombre: el alojamiento web y la gestión del formulario (Netlify, Inc.) y la publicidad${ga ? ' y la analítica' : ''} (Google Ireland Limited y Google LLC). Algunos de estos proveedores pueden tratar datos en Estados Unidos, amparados por el Marco de Privacidad de Datos UE-EE. UU. o por cláusulas contractuales tipo de la Comisión Europea.</p>
<h2>Tus derechos</h2>
<p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento en cualquier momento, escribiendo a ${mail}. Si consideras que no hemos atendido bien tu solicitud, puedes presentar una reclamación ante la <a href="https://www.aepd.es">Agencia Española de Protección de Datos</a>.</p>
<h2>Menores</h2>
<p>Este sitio no está dirigido a menores de 14 años y no recogemos conscientemente sus datos.</p>
<h2>Cambios</h2>
<p>Podemos actualizar esta política. Indicaremos siempre la fecha de la última actualización.</p>` },

    { key: 'cookies', updated: upd, title: 'Política de cookies', desc: 'Qué cookies y tecnologías similares usa IA en Simple, para qué sirven y cómo gestionarlas.', html: `
<span class="eyebrow">Legal</span><h1>Política de cookies</h1><p class="meta">${updated}</p>
<h2>Qué son las cookies</h2>
<p>Las cookies son pequeños archivos que un sitio web guarda en tu navegador. Algunas son necesarias para que la web funcione y otras sirven para medir visitas o mostrar publicidad.</p>
<h2>Cookies que usamos</h2>
<div class="tbl"><table><thead><tr><th>Tipo</th><th>Quién</th><th>Para qué</th><th>¿Necesita tu consentimiento?</th></tr></thead><tbody>
<tr><td>Técnicas y de preferencias</td><td>IA en Simple (almacenamiento local)</td><td>Recordar las guías que has leído y tu progreso. No es una cookie y no sale de tu navegador.</td><td>No</td></tr>
<tr><td>Consentimiento</td><td>Google (plataforma de consentimiento)</td><td>Guardar tus preferencias sobre cookies.</td><td>No</td></tr>
<tr><td>Publicidad</td><td>Google AdSense y sus socios</td><td>Mostrar anuncios, limitar cuántas veces ves el mismo, medir su rendimiento y, si lo aceptas, personalizarlos.</td><td>Sí</td></tr>
${ga ? '<tr><td>Analítica</td><td>Google Analytics</td><td>Medir de forma agregada las visitas y el uso de la web.</td><td>Sí</td></tr>' : ''}
</tbody></table></div>
<h2>Cómo gestionar tu consentimiento</h2>
<p>La primera vez que visitas la web te mostramos un aviso para aceptar, rechazar o configurar las cookies que no son necesarias. Puedes cambiar tu decisión en cualquier momento desde el enlace de configuración de privacidad que aparece en la web. También puedes borrar o bloquear las cookies desde la configuración de tu navegador, aunque algunas funciones podrían dejar de funcionar.</p>
<p>Puedes ver y controlar cómo te muestra anuncios Google en <a href="https://adssettings.google.com">Mi Centro de Anuncios</a>.</p>` },

    { key: 'affiliate', updated: upd, title: 'Afiliación y publicidad', desc: 'Cómo se financia IA en Simple: publicidad de Google AdSense, enlaces de afiliado y servicios, y cómo protegemos la independencia de nuestras recomendaciones.', html: `
<span class="eyebrow">Transparencia</span><h1>Afiliación y publicidad</h1><p class="meta">${updated}</p>
<h2>Publicidad</h2>
<p>Mostramos anuncios de Google AdSense. Los anuncios están señalados con la palabra «Publicidad» y los elige Google, no nosotros. Que una marca se anuncie aquí no significa que la recomendemos.</p>
<h2>Enlaces de afiliado</h2>
<p>Algunos enlaces a herramientas pueden ser de afiliado: si te registras o compras a través de ellos, podemos recibir una comisión sin que tú pagues más. Estos enlaces llevan el atributo <code>rel="sponsored"</code>.</p>
<h2>Nuestro compromiso</h2>
<ul><li>Recomendamos herramientas por su utilidad, no por la comisión.</li><li>Mencionamos alternativas gratuitas siempre que existen.</li><li>Si una herramienta empeora o cambia de precio, actualizamos la guía.</li></ul>
<p>Si tienes cualquier duda, escríbenos a ${mail}.</p>` },
  ];

  return [
    { key: 'about', updated: upd, services: true, title: 'About us', desc: 'Who we are, how we write and test our artificial intelligence guides, and how the site is funded.', html: `
<span class="eyebrow">The project</span><h1>About us</h1>
<p style="font-size:1.2rem">IA en Simple started with a simple idea: anyone should be able to use artificial intelligence to <span class="mk">save time and do better work</span>, without jargon or overblown promises.</p>
<h2>What you'll find here</h2>
<p>Practical, step-by-step guides for real tasks: writing a CV, studying for an exam, replying to reviews of your business, writing a difficult email or choosing which tool to use. Every guide includes example prompts you can copy and adapt.</p>
<h2>How we write each guide</h2>
<ul>
<li><strong>We test before publishing.</strong> Every example prompt has been tried in at least one real AI tool.</li>
<li><strong>We explain the why.</strong> We don't just hand you a recipe: we tell you why it works so you can adapt it.</li>
<li><strong>We're honest about the limits.</strong> AI makes mistakes. We tell you when to double-check and what you should never share.</li>
<li><strong>We keep guides up to date.</strong> Tools change fast. We review our guides and show the date of the last update.</li>
</ul>
<h2>Who's behind it</h2>
<p>${e(SITE.author.name.en)}. ${e(SITE.author.bio.en)}</p>
<h2>How the site is funded</h2>
<p>The site is free. It's supported by Google AdSense advertising, some affiliate links and the AI consulting services we offer to businesses. None of that decides what we recommend. Read the details in <a href="${P('affiliate')}">Affiliates and ads</a>.</p>
<h2>Contact</h2>
<p>Spotted a mistake or want to suggest a guide? Write to us from the <a href="${P('contact')}">contact page</a>.</p>` },

    { key: 'contact', updated: upd, title: 'Contact', desc: 'Write to us to suggest a guide, report a mistake or ask about AI for your business.', html: `
<span class="eyebrow">Let's talk</span><h1>Contact</h1>
<p style="color:var(--muted);max-width:56ch">Tell us what you need. We reply within one or two working days. You can also email us at <strong>${mail}</strong>.</p>
<form class="f" name="contact-en" method="POST" action="${P('thanks')}" data-netlify="true" netlify-honeypot="company-site">
<input type="hidden" name="form-name" value="contact-en">
<p class="hp"><label>Leave this field empty <input name="company-site" tabindex="-1" autocomplete="off"></label></p>
<label for="fn">Name<input id="fn" name="name" required autocomplete="name"></label>
<label for="fe">Email<input id="fe" name="email" type="email" required autocomplete="email"></label>
<label for="fm">Reason<select id="fm" name="reason"><option>Business services</option><option>Suggest a guide</option><option>Report a mistake</option><option>Partnership</option><option>Other</option></select></label>
<label for="fg">Message<textarea id="fg" name="message" rows="6" required></textarea></label>
<label style="font-weight:400;display:flex;gap:10px;align-items:flex-start"><input type="checkbox" name="privacy" required style="width:auto;margin-top:4px"> I have read and accept the <a href="${P('privacy')}">privacy policy</a>.</label>
<div><button class="btn" type="submit">Send message</button></div>
</form>
<p class="note">Controller: ${e(o.name)}. Purpose: replying to your message. Legal basis: your consent. You can exercise your rights by writing to ${mail}. More in the <a href="${P('privacy')}">privacy policy</a>.</p>` },

    { key: 'thanks', updated: upd, noindex: true, title: 'Message sent', desc: 'We have received your message.', html: `
<span class="eyebrow">Thank you</span><h1>We've got <span class="mk">your message</span></h1><p>We'll reply within one or two working days. In the meantime, feel free to keep reading our guides.</p><p><a class="btn" href="${P('guides')}">Browse guides</a></p>` },

    { key: 'legal', updated: upd, title: 'Legal notice', desc: 'Details of the owner of IA en Simple and terms of use of the website.', html: `
<span class="eyebrow">Legal</span><h1>Legal notice</h1><p class="meta">${updated}</p>
<h2>Website owner</h2>
<p>In accordance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), this website, ${e(SITE.url.replace('https://', ''))}, is owned by:</p>
<ul><li><strong>Owner:</strong> ${e(o.name)}</li><li><strong>Tax ID (NIF):</strong> ${e(o.nif)}</li><li><strong>Address:</strong> ${e(o.address)}</li><li><strong>Email:</strong> ${mail}</li></ul>
<h2>Purpose</h2>
<p>IA en Simple is an informational website that publishes guides and resources on the practical use of artificial intelligence. Accessing and browsing the site means you accept this legal notice.</p>
<h2>Use of the site</h2>
<p>You agree to use the site and its content lawfully, without harming its operation or the rights of others.</p>
<h2>Intellectual property</h2>
<p>The texts, design, logo and code of this site belong to its owner or are used with permission. You may quote short excerpts with a link to the source. Full reproduction or commercial distribution requires written permission. The names of the tools mentioned are trademarks of their respective owners.</p>
<h2>Liability for content</h2>
<p>Our guides are for information only. We review them carefully, but artificial intelligence and its tools change often and can make mistakes. Always check important information before making decisions, especially on legal, medical or financial matters. The owner is not responsible for how the information is used or for the content of linked third-party sites.</p>
<h2>Links and advertising</h2>
<p>The site shows Google AdSense ads and may include affiliate links. See <a href="${P('affiliate')}">Affiliates and ads</a>.</p>
<h2>Governing law</h2>
<p>This legal notice is governed by Spanish law.</p>` },

    { key: 'privacy', updated: upd, title: 'Privacy policy', desc: 'How IA en Simple processes your personal data, for what purpose and what your rights are.', html: `
<span class="eyebrow">Legal</span><h1>Privacy policy</h1><p class="meta">${updated}</p>
<h2>Data controller</h2>
<ul><li><strong>Controller:</strong> ${e(o.name)}</li><li><strong>Tax ID (NIF):</strong> ${e(o.nif)}</li><li><strong>Address:</strong> ${e(o.address)}</li><li><strong>Email:</strong> ${mail}</li></ul>
<h2>What data we process and why</h2>
<h3>Contact form</h3>
<p>If you write to us, we process your name, email and message to reply to you. The legal basis is your consent. We keep messages for as long as needed to handle your request and for no more than one year after our last exchange, unless the law requires otherwise.</p>
<h3>Advertising (Google AdSense)</h3>
<p>This site shows Google AdSense ads. Google and its partners may use cookies and similar technologies to serve ads, measure their performance and, if you agree, personalise them based on your interests. The legal basis is your consent, collected through Google's certified consent management platform. You can accept, reject or customise your choices and change them at any time. Learn more about <a href="https://policies.google.com/technologies/ads">how Google uses cookies in advertising</a> and read <a href="https://policies.google.com/privacy">Google's privacy policy</a>.</p>
${ga ? `<h3>Analytics (Google Analytics)</h3><p>If you agree, we use Google Analytics to understand, in aggregate, which pages are visited and how people find them. The legal basis is your consent.</p>` : ''}
<h3>Reading preferences</h3>
<p>To show which guides you've read and where you left off, the site stores that information only in your browser (local storage). It never reaches us or third parties, and you can delete it in your browser settings.</p>
<h2>Recipients and transfers</h2>
<p>We don't sell your data. Providers that help us run the service may access it on our behalf: web hosting and form handling (Netlify, Inc.) and advertising${ga ? ' and analytics' : ''} (Google Ireland Limited and Google LLC). Some of these providers may process data in the United States under the EU-US Data Privacy Framework or the European Commission's standard contractual clauses.</p>
<h2>Your rights</h2>
<p>You can exercise your rights of access, rectification, erasure, objection, restriction and portability, and withdraw your consent at any time, by writing to ${mail}. If you believe we haven't handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es">AEPD</a>) or your local supervisory authority.</p>
<h2>Children</h2>
<p>This site is not aimed at children under 14 and we do not knowingly collect their data.</p>
<h2>Changes</h2>
<p>We may update this policy. We will always show the date of the last update.</p>` },

    { key: 'cookies', updated: upd, title: 'Cookie policy', desc: 'Which cookies and similar technologies IA en Simple uses, what they are for and how to manage them.', html: `
<span class="eyebrow">Legal</span><h1>Cookie policy</h1><p class="meta">${updated}</p>
<h2>What cookies are</h2>
<p>Cookies are small files a website stores in your browser. Some are needed for the site to work; others are used to measure visits or show advertising.</p>
<h2>Cookies we use</h2>
<div class="tbl"><table><thead><tr><th>Type</th><th>Who</th><th>Purpose</th><th>Needs your consent?</th></tr></thead><tbody>
<tr><td>Technical and preferences</td><td>IA en Simple (local storage)</td><td>Remembering which guides you've read and your progress. It isn't a cookie and never leaves your browser.</td><td>No</td></tr>
<tr><td>Consent</td><td>Google (consent platform)</td><td>Storing your cookie choices.</td><td>No</td></tr>
<tr><td>Advertising</td><td>Google AdSense and partners</td><td>Serving ads, limiting how often you see the same one, measuring performance and, if you agree, personalising them.</td><td>Yes</td></tr>
${ga ? '<tr><td>Analytics</td><td>Google Analytics</td><td>Measuring visits and site usage in aggregate.</td><td>Yes</td></tr>' : ''}
</tbody></table></div>
<h2>How to manage your consent</h2>
<p>The first time you visit, we show a notice to accept, reject or customise non-essential cookies. You can change your choice at any time using the privacy settings link shown on the site. You can also delete or block cookies in your browser settings, although some features may stop working.</p>
<p>You can review and control how Google shows you ads in <a href="https://adssettings.google.com">My Ad Center</a>.</p>` },

    { key: 'affiliate', updated: upd, title: 'Affiliates and ads', desc: 'How IA en Simple is funded: Google AdSense ads, affiliate links and services, and how we keep our recommendations independent.', html: `
<span class="eyebrow">Transparency</span><h1>Affiliates and ads</h1><p class="meta">${updated}</p>
<h2>Advertising</h2>
<p>We show Google AdSense ads. Ads are labelled "Advertisement" and are chosen by Google, not by us. A brand advertising here doesn't mean we recommend it.</p>
<h2>Affiliate links</h2>
<p>Some links to tools may be affiliate links: if you sign up or buy through them, we may earn a commission at no extra cost to you. These links carry the <code>rel="sponsored"</code> attribute.</p>
<h2>Our commitment</h2>
<ul><li>We recommend tools for their usefulness, not the commission.</li><li>We mention free alternatives whenever they exist.</li><li>If a tool gets worse or changes its price, we update the guide.</li></ul>
<p>Any questions? Email us at ${mail}.</p>` },
  ];
}
