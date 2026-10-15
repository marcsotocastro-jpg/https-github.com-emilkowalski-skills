---
id: summarize
slug: resumir-documentos-ia
cat: work
title: Cómo resumir documentos, PDF y reuniones con IA
desc: Resúmenes útiles de informes, contratos, artículos y actas en minutos. Qué pedir, cómo evitar que la IA se invente cosas y prompts para cada caso.
date: 2026-09-15
updated: 2026-10-07
level: beginner
prompt: Resume este documento en 5 puntos clave y lista las decisiones pendientes. Cita la página de cada dato.
---
Resumir es una de las tareas que mejor hace la inteligencia artificial. Un informe de cuarenta páginas, un contrato largo o las notas desordenadas de una reunión pueden convertirse en un resumen claro en un minuto. Pero un resumen solo sirve si es fiel al original y está hecho para lo que necesitas. En esta guía verás cómo pedir resúmenes útiles y cómo comprobar que no faltan ni sobran cosas.

## Cómo darle el documento a la IA

Tienes tres opciones, según la herramienta y el documento:

- **Subir el archivo.** Muchos asistentes permiten adjuntar PDF, documentos de texto u hojas de cálculo.
- **Pegar el texto.** Funciona con cualquier herramienta. Si el documento es muy largo, pégalo por partes.
- **Compartir un enlace.** Algunas herramientas pueden leer páginas web, pero no siempre acceden a todo el contenido. Si el resumen parece incompleto, pega el texto.

>! **Ojo:** antes de subir un documento, piensa si contiene datos personales o información confidencial. Si es así, anonimízalo o consulta si tu empresa permite usar esa herramienta. Lo explicamos en [qué datos no compartir con una IA](guia:privacy).

## La regla de oro: di para qué es el resumen

«Resume este documento» da un resumen genérico. Lo que hace útil un resumen es saber quién lo va a leer y para qué. Compara:

- Un resumen para decidir si leer el documento entero.
- Un resumen para explicárselo a tu jefa en dos minutos.
- Un resumen para estudiar un tema.
- Un resumen para saber qué tienes que hacer tú.

Cada uno destaca cosas diferentes. Díselo siempre a la IA.

## Prompts para cada tipo de documento

### Informes y documentos de trabajo

```prompt
Resume el documento adjunto para una persona que tiene 2 minutos. Estructura:
1. La conclusión principal en una frase.
2. Los 5 puntos clave, con las cifras importantes.
3. Riesgos o problemas que menciona.
4. Decisiones o acciones pendientes.
Indica la página o el apartado de donde sale cada dato. Si algo no está claro en el documento, dilo en lugar de suponerlo.
```

Pedir la página o el apartado de cada dato es la mejor forma de comprobar el resumen después.

### Contratos y documentos legales

La IA te ayuda a entender un contrato, pero no sustituye a un profesional cuando hay mucho en juego.

```prompt
Explícame este contrato en lenguaje sencillo. Quiero saber: qué me obligo a hacer, qué se obliga a hacer la otra parte, duración y cómo se cancela, penalizaciones, pagos y plazos, y cláusulas que suelen ser problemáticas o poco habituales. Cita el número de cláusula de cada punto. No me des consejo legal: solo explícame qué dice.
```

### Artículos y noticias largas

```prompt
Resume este artículo en 5 líneas. Después, separa claramente: qué son hechos comprobables, qué son opiniones del autor y qué datos aportan fuentes. Termina con las 2 preguntas que debería hacerme para entender mejor el tema.
```

### Reuniones y notas

Si tienes la transcripción o tus notas, la IA las convierte en un acta clara.

```prompt
Convierte estas notas de reunión en un acta con: asistentes, temas tratados (un párrafo corto cada uno), decisiones tomadas y una tabla de tareas con responsable y fecha. Si una tarea no tiene responsable o fecha, márcala como "sin asignar". No añadas nada que no esté en las notas.

[pega tus notas o la transcripción]
```

> **Consejo:** antes de grabar o transcribir una reunión, avisa a los asistentes y pide su permiso. Además de ser lo correcto, en muchos casos es obligatorio.

## Cómo comprobar que el resumen es fiable

Los resúmenes de IA suelen ser buenos, pero pueden omitir matices importantes o, en ocasiones, incluir algo que no está en el original. Para documentos importantes:

1. **Revisa las cifras y nombres** con el documento original, usando las referencias de página que pediste.
2. **Pregunta por lo que falta:**

```prompt
¿Qué información importante del documento no has incluido en el resumen? ¿Hay alguna excepción, condición o letra pequeña que pueda cambiar la conclusión?
```

3. **Haz preguntas concretas** sobre el documento, como lo harías con un compañero que lo ha leído: «¿Qué dice exactamente sobre los plazos de pago?».

## Documentos muy largos

Si el documento es tan largo que la herramienta no lo admite entero, o el resumen se queda superficial, divide el trabajo:

1. Resume cada capítulo o apartado por separado.
2. Pega todos los resúmenes parciales en una conversación nueva.
3. Pide un resumen final a partir de ellos.

Así no se pierden partes intermedias, que es lo que suele ocurrir con documentos muy extensos.

## Más allá del resumen

Una vez que la IA ha leído un documento, puedes pedirle mucho más que un resumen:

- «Crea 10 preguntas de examen sobre este tema.» Útil para estudiar; más ideas en [cómo estudiar con IA](guia:study).
- «Redacta un correo a mi equipo con lo que tienen que saber de este informe.»
- «Compara estos dos documentos y lista las diferencias.»
- «Convierte las cifras de este informe en una tabla.»

## Preguntas frecuentes

### ¿Puede la IA resumir un PDF escaneado?

Depende de la herramienta. Algunas reconocen el texto de imágenes y escaneos, pero la calidad baja si el escaneo es malo. Si el resultado es raro, pasa antes el PDF por una herramienta de reconocimiento de texto.

### ¿Es fiable resumir con IA documentos importantes?

Es muy útil como primer paso, pero para documentos con consecuencias legales, médicas o económicas, revisa siempre el original y consulta a un profesional.

### ¿Qué longitud debe tener un buen resumen?

Depende del uso, pero una buena referencia es entre el 5 % y el 10 % del original, o lo que se lea en dos minutos. Indícalo en el prompt: «máximo 150 palabras» o «5 puntos».
