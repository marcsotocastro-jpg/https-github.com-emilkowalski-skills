---
id: privacy
slug: ia-y-privacidad
cat: start
title: Qué datos no deberías compartir nunca con una IA
desc: Una lista clara de lo que no debes pegar en ChatGPT, Gemini o Claude, cómo anonimizar documentos y qué ajustes de privacidad revisar.
date: 2026-08-27
updated: 2026-10-11
level: beginner
prompt: Anonimiza este texto: cambia nombres, direcciones, teléfonos y DNI por etiquetas genéricas.
---
Los asistentes de inteligencia artificial son cómodos precisamente porque puedes pegarles cualquier cosa: un contrato, un correo, una hoja de cálculo. Esa comodidad tiene un riesgo. Lo que escribes sale de tu ordenador y se procesa en los servidores de la empresa que ofrece el servicio. En esta guía verás qué no compartir nunca, cómo aprovechar la IA con documentos sensibles sin exponerte y qué ajustes conviene revisar.

## Qué pasa con lo que escribes

Cada herramienta tiene su propia política, y estas cambian con el tiempo. En general, ten en cuenta tres cosas:

- **Tus conversaciones se guardan** en tu historial, al menos durante un tiempo, para que puedas volver a ellas.
- **Algunas herramientas pueden usar las conversaciones para mejorar sus modelos**, salvo que lo desactives en los ajustes o uses una versión para empresas con otras condiciones.
- **Las personas pueden revisar conversaciones** en determinados casos, por ejemplo para detectar abusos o mejorar la calidad.

No se trata de tener miedo, sino de actuar como lo harías con cualquier servicio en internet: hay cosas que no se envían por un canal que no controlas.

## Lo que no deberías pegar nunca

1. **Contraseñas, códigos de verificación y claves de acceso.** No hay ninguna tarea que necesite tu contraseña real.
2. **Datos bancarios:** números de tarjeta, IBAN completos, capturas de tu banca online.
3. **Documentos de identidad:** DNI, pasaporte, número de la Seguridad Social.
4. **Información médica identificable:** informes con tu nombre o el de otra persona, diagnósticos, recetas.
5. **Datos de otras personas sin su permiso:** clientes, alumnos, pacientes, empleados, familiares.
6. **Información confidencial de tu empresa:** contratos sin firmar, cifras no publicadas, planes estratégicos, código privado, salvo que tu empresa use una versión aprobada para ello.
7. **Cualquier cosa que no te gustaría ver publicada.** Si te daría vergüenza o te causaría problemas que se filtrara, no lo pegues.

>! **Ojo:** si trabajas con datos de clientes o pacientes, compartirlos con una herramienta externa puede incumplir la normativa de protección de datos (RGPD). Consulta antes con tu empresa o con la persona responsable de privacidad.

## Cómo usar la IA con documentos sensibles: anonimiza

La buena noticia es que para casi todas las tareas no hacen falta los datos reales. La IA no necesita saber que tu cliente se llama Laura Martín y vive en la calle Mayor para ayudarte a responderle. Sustituye los datos por etiquetas antes de pegar:

| Dato real | Sustitúyelo por |
|---|---|
| Nombres y apellidos | Cliente A, Empleado B, Paciente 1 |
| Direcciones | [DIRECCIÓN] |
| Teléfonos y emails | [TELÉFONO], [EMAIL] |
| DNI, números de cuenta | [DNI], [CUENTA] |
| Nombre de la empresa | La empresa, Proveedor X |
| Cifras exactas confidenciales | Valores aproximados o porcentajes |

Si el documento es largo, puedes pedirle a la IA que te ayude a detectar qué hay que anonimizar usando un ejemplo inventado, o hacerlo con la función de buscar y reemplazar de tu procesador de textos. Si el texto ya no es sensible (por ejemplo, un correo sin datos personales), puedes usar este prompt para limpiar detalles:

```prompt
Anonimiza el siguiente texto. Sustituye nombres de personas por "Persona A", "Persona B"…, empresas por "Empresa 1"…, y cualquier dirección, teléfono, email, DNI o número de cuenta por una etiqueta entre corchetes. No cambies nada más. Al final, lista las sustituciones que has hecho.

[pega el texto]
```

Después de recibir la respuesta, vuelve a poner los datos reales tú mismo en tu documento.

## Ajustes que conviene revisar hoy

Los nombres cambian según la herramienta, pero busca estas opciones en la configuración de tu cuenta:

- **Uso de datos para entrenar o mejorar el modelo.** Muchas herramientas permiten desactivarlo.
- **Historial de conversaciones.** Comprueba si puedes borrar conversaciones antiguas o usar un modo temporal que no las guarde.
- **Memoria o personalización.** Algunas herramientas recuerdan datos sobre ti entre conversaciones. Revisa qué ha guardado y borra lo que no quieras.
- **Aplicaciones conectadas.** Si has conectado tu correo, tu calendario o tu almacenamiento en la nube, revisa qué permisos tiene.

> **Consejo:** dedica cinco minutos una vez al mes a revisar estos ajustes y borrar conversaciones que contengan información que ya no necesitas. Es la misma higiene digital que aplicarías a tu correo.

## En el trabajo: pregunta antes de usar

Muchas empresas ya tienen normas sobre qué herramientas de IA se pueden usar y con qué información. Algunas ofrecen versiones corporativas con condiciones de privacidad más estrictas. Antes de pegar cualquier documento del trabajo, comprueba:

- Si tu empresa permite usar esa herramienta.
- Si existe una versión aprobada (por ejemplo, integrada en el paquete de ofimática que ya usáis).
- Qué tipo de información está prohibida.

Si no hay normas, propón crearlas. Es mejor que cada persona no tenga que decidir por su cuenta.

## Cuidado también con lo que la IA te pide

Algunas páginas y extensiones se hacen pasar por herramientas de IA para robar datos. Desconfía si:

- Una «IA» te pide tu contraseña de otra cuenta, tus datos bancarios o que instales programas desconocidos.
- Recibes un correo o mensaje que dice venir de una herramienta de IA y te pide verificar tu cuenta con un enlace.
- Una extensión del navegador pide permiso para leer todos los sitios que visitas.

Accede siempre escribiendo tú la dirección oficial o desde la aplicación oficial de la tienda de tu móvil.

## Preguntas frecuentes

### ¿Las empresas de IA leen mis conversaciones?

Depende de la herramienta y de tu configuración. En general, las conversaciones se procesan de forma automática, pero algunas pueden ser revisadas por personas en casos concretos. Lee la política de privacidad de la herramienta y desactiva las opciones que no quieras.

### ¿Puedo subir un PDF con datos personales si luego borro la conversación?

Borrar la conversación reduce el riesgo, pero no garantiza que los datos no se hayan procesado o guardado temporalmente. Lo más seguro es anonimizar el documento antes de subirlo.

### ¿Es seguro usar la IA para escribir a un cliente?

Sí, siempre que no incluyas sus datos personales. Describe la situación con etiquetas («un cliente se queja de un retraso de cinco días») y añade tú el nombre y los detalles al final.
