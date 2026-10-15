---
id: prompt
slug: que-es-un-prompt
cat: start
title: Qué es un prompt y cómo escribir uno que funcione
desc: La fórmula sencilla de cinco piezas para pedirle cosas a ChatGPT, Claude o Gemini y obtener respuestas útiles a la primera.
date: 2026-08-20
updated: 2026-10-13
level: beginner
prompt: Actúa como profesor de cocina. Dame un menú semanal barato para dos personas, en una tabla.
---
Un prompt es el mensaje que le escribes a una inteligencia artificial para pedirle algo. Puede ser una pregunta, una orden o un texto largo con instrucciones. La calidad de la respuesta depende casi por completo de la calidad de ese mensaje: si pides algo vago, recibes algo vago. En esta guía aprenderás una fórmula de cinco piezas que funciona en cualquier asistente y verás ejemplos que puedes copiar hoy mismo.

## Por qué la misma IA da respuestas buenas y malas

Los asistentes de IA no leen tu mente. No saben quién eres, para qué quieres el texto ni qué has probado ya. Cuando escribes «hazme un correo para mi jefe», la IA tiene que adivinar el tono, la longitud, el motivo y hasta tu relación con esa persona. Rellena los huecos con lo más genérico posible, y por eso el resultado suena a plantilla.

La solución no es aprender trucos raros. Es darle la misma información que le darías a una persona nueva en tu trabajo a la que le encargas una tarea: qué necesitas, para quién, con qué datos y cómo quieres recibirlo.

## La fórmula de las cinco piezas

No hace falta usar las cinco siempre, pero cuantas más incluyas, mejor será el resultado. Piensa en ellas como una lista de comprobación.

1. **Rol:** quién quieres que sea la IA. «Actúa como un profesor de matemáticas de secundaria» o «como un experto en atención al cliente».
2. **Tarea:** qué tiene que hacer exactamente, con un verbo claro. Resume, escribe, compara, corrige, propón, explica.
3. **Contexto:** la información que solo tú tienes. Para quién es, por qué lo necesitas, qué datos hay que usar, qué has intentado ya.
4. **Formato:** cómo quieres la respuesta. Una tabla, una lista de cinco puntos, un correo de menos de 120 palabras, un guion de 30 segundos.
5. **Tono:** cómo debe sonar. Cercano, formal, directo, divertido, para un niño de diez años.

Así se ve un prompt con las cinco piezas:

```prompt
Actúa como un experto en atención al cliente (rol). Escribe una respuesta a una clienta que se queja de que su pedido llegó con 5 días de retraso (tarea). Somos una tienda online pequeña de cosmética natural; el retraso fue culpa de la empresa de transporte y queremos ofrecerle un 10 % de descuento en su próxima compra (contexto). Máximo 100 palabras, sin listas (formato). Tono amable y sincero, sin sonar a plantilla (tono).
```

Compara ese mensaje con «responde a una clienta enfadada por un retraso». El primero produce una respuesta que puedes enviar casi sin tocar. El segundo, una que tendrás que reescribir entera.

## Antes y después: tres ejemplos reales

### Estudiar

Antes: «Explícame la Revolución francesa».

Después:

```prompt
Explícame las causas de la Revolución francesa como si tuviera 15 años. Usa tres causas principales, cada una con un ejemplo concreto. Termina con 3 preguntas tipo test para comprobar que lo he entendido, sin darme las respuestas hasta que conteste.
```

### Trabajo

Antes: «Hazme un resumen de este documento».

Después:

```prompt
Resume el documento que te pego abajo para mi jefa, que solo tiene dos minutos. Quiero: una frase con la conclusión principal, tres puntos clave con cifras si las hay y una lista de las decisiones que tenemos que tomar. Si algo no está claro en el documento, dímelo en lugar de inventarlo.

[pega aquí el documento]
```

### Vida diaria

Antes: «Dame recetas».

Después:

```prompt
Actúa como un cocinero práctico. Dame un menú de cenas de lunes a viernes para dos personas, con un presupuesto ajustado y que se prepare en menos de 30 minutos. No nos gusta el pescado. Preséntalo en una tabla con el plato, los ingredientes y el tiempo, y añade al final la lista de la compra agrupada por secciones del supermercado.
```

> **Consejo:** cuando no sepas qué contexto dar, termina tu prompt con «Antes de responder, hazme las preguntas que necesites para hacerlo bien». La IA te preguntará lo que le falta y la respuesta final será mucho mejor.

## Conversa: el primer resultado es un borrador

Mucha gente abandona tras la primera respuesta. Es un error. Un asistente de IA funciona mejor como una conversación: pides, revisas y corriges. Estas frases de seguimiento funcionan muy bien:

- «Hazlo más corto, la mitad de largo.»
- «Más cercano, como si se lo dijeras a un amigo.»
- «Quita las frases hechas y las palabras rimbombantes.»
- «Dame tres versiones distintas para elegir.»
- «¿Qué le falta a esto para ser excelente? Mejóralo.»
- «Explica por qué has elegido esa opción.»

Cada corrección le enseña a la IA lo que buscas dentro de esa conversación. Si cambias de tema por completo, abre una conversación nueva para que lo anterior no interfiera.

## Errores que arruinan un prompt

- **Pedir demasiadas cosas a la vez.** Si necesitas un correo, un resumen y un plan, pídelos en mensajes separados.
- **No dar los datos.** La IA no sabe tu horario, tus precios ni el nombre de tu cliente. Si no se los das, se los inventará.
- **Pedir opiniones como si fueran hechos.** «¿Cuál es el mejor portátil?» depende de para qué lo quieras. Explica tu uso y tu presupuesto.
- **Aceptar cifras sin comprobarlas.** La IA puede inventarse datos con total seguridad. Lo explicamos en [los errores más comunes al usar la IA](guia:mistakes).

>! **Ojo:** no pegues en un prompt contraseñas, datos bancarios, informes médicos o información confidencial de tu empresa. Lee [qué datos no deberías compartir nunca con una IA](guia:privacy) antes de empezar.

## Plantilla para guardar

Copia esta plantilla en tus notas y rellena los huecos cada vez que tengas una tarea nueva:

```prompt
Actúa como [rol]. Necesito que [tarea con un verbo claro].
Contexto: [para quién es, para qué lo necesito, datos importantes].
Formato: [lista, tabla, correo, longitud máxima].
Tono: [cercano, formal, directo…].
Si te falta información, pregúntame antes de responder.
```

Si prefieres no escribirla a mano, en la portada tienes un laboratorio que monta prompts como este en segundos con solo elegir la tarea y el tono.

## Preguntas frecuentes

### ¿Funciona igual en ChatGPT, Claude y Gemini?

Sí. La fórmula se basa en dar instrucciones claras, y eso funciona en cualquier asistente. Cada uno tiene su estilo de respuesta, así que merece la pena probar el mismo prompt en dos herramientas y quedarte con la que mejor encaje contigo.

### ¿Tiene que estar en inglés para que funcione mejor?

No. Los asistentes actuales entienden y escriben muy bien en español. Escribe en el idioma en el que quieras recibir la respuesta.

### ¿Un prompt más largo siempre es mejor?

No siempre. Lo importante es que contenga la información necesaria. Un prompt de tres líneas con rol, tarea y formato suele bastar para tareas sencillas. Para tareas complejas, sí conviene dar más contexto.

### ¿Tengo que ser educado con la IA?

No es obligatorio, pero escribir como le hablarías a una persona suele dar instrucciones más claras y completas. Lo que de verdad importa es la claridad.
