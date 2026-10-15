---
id: excel
slug: formulas-excel-ia
cat: work
title: Cómo crear fórmulas de Excel y Google Sheets con IA
desc: Pide fórmulas en lenguaje normal, entiende las que ya tienes y limpia datos sin saber programar. Con ejemplos de BUSCARX, SUMAR.SI.CONJUNTO y más.
date: 2026-09-18
updated: 2026-10-06
level: intermediate
prompt: Escribe una fórmula de Excel que sume las ventas de la columna D solo si la región de la columna B es "Norte".
---
Las hojas de cálculo son una de las herramientas más potentes del trabajo diario, pero muchas personas se quedan en sumar y poco más porque las fórmulas parecen un idioma extraño. Con la inteligencia artificial puedes describir lo que quieres en lenguaje normal y recibir la fórmula exacta, con una explicación de cómo funciona. En esta guía aprenderás a pedir fórmulas que funcionen a la primera, a entender las que heredas de otros y a limpiar datos desordenados.

## La clave: describe tu hoja

La IA no ve tu archivo, así que tienes que describírselo. Una buena descripción incluye:

- **El programa:** Excel o Google Sheets, y si lo sabes, la versión. Algunas funciones solo existen en versiones recientes.
- **El idioma del programa.** Si tu Excel está en español, las funciones tienen nombres en español (SUMA, BUSCARV, SI) y los argumentos se separan con punto y coma. Díselo para que no te dé la fórmula en inglés.
- **Qué hay en cada columna** y desde qué fila empiezan los datos.
- **Qué quieres obtener** y en qué celda.

## Plantilla para pedir una fórmula

```prompt
Uso Excel en español (Microsoft 365). Mi hoja tiene estos datos desde la fila 2:
- Columna A: fecha del pedido
- Columna B: región (Norte, Sur, Este, Oeste)
- Columna C: comercial
- Columna D: importe en euros
Quiero en la celda G2 [lo que quieres calcular].
Dame la fórmula exacta, explica qué hace cada parte y dime qué pasaría si hay celdas vacías.
```

## Ejemplos de fórmulas que puedes pedir

### Sumar con condiciones

«Quiero sumar los importes de la región Norte en septiembre.» La IA te propondrá algo así:

`=SUMAR.SI.CONJUNTO(D:D; B:B; "Norte"; A:A; ">="&FECHA(2026;9;1); A:A; "<"&FECHA(2026;10;1))`

Y te explicará que suma la columna D cuando se cumplen todas las condiciones: región Norte y fecha dentro de septiembre.

### Buscar un dato en otra tabla

«Tengo en otra hoja una tabla con el código de producto en la columna A y el precio en la columna C. Quiero traer el precio según el código.»

`=BUSCARX(A2; Productos!A:A; Productos!C:C; "No encontrado")`

Si tu versión de Excel no tiene BUSCARX, pide la alternativa con BUSCARV o con INDICE y COINCIDIR.

### Clasificar con condiciones

«Si el importe es mayor de 1.000, pon "Grande"; si está entre 300 y 1.000, "Medio"; si no, "Pequeño".»

`=SI(D2>1000; "Grande"; SI(D2>=300; "Medio"; "Pequeño"))`

### Contar valores únicos, fechas, porcentajes

También puedes pedir cuántos clientes distintos hay, cuántos días han pasado entre dos fechas, qué porcentaje del total supone cada fila o el mes en texto a partir de una fecha. Describe el resultado y la IA elige la función.

> **Consejo:** prueba cada fórmula primero en una copia del archivo o en una fila, y comprueba el resultado con un par de casos que puedas calcular a mano. Si el resultado es raro, copia el error exacto que te da Excel y pégaselo a la IA.

## Entender una fórmula que no es tuya

Heredar una hoja con fórmulas larguísimas es muy común. Pega la fórmula y pide una explicación:

```prompt
Explícame paso a paso qué hace esta fórmula de Excel, como si no supiera nada de fórmulas. Después dime si se puede simplificar y si tiene algún error posible.

=SI.ERROR(INDICE(Ventas!$D:$D; COINCIDIR(1; (Ventas!$A:$A=A2)*(Ventas!$B:$B=B2); 0)); 0)
```

## Corregir errores

Los errores #N/D, #¡VALOR!, #REF! o #DIV/0! tienen causas concretas. Cuando aparezcan:

```prompt
Esta fórmula me da el error [error] en Excel en español: [pega la fórmula]. En las celdas que usa hay [describe qué datos hay, por ejemplo: números con el símbolo € escritos como texto]. ¿Por qué falla y cómo lo arreglo?
```

Una causa muy común: números que en realidad están guardados como texto (por ejemplo, importados de otro programa). La IA te dirá cómo convertirlos.

## Limpiar datos desordenados

La IA también ayuda a ordenar datos antes de analizarlos:

- Separar nombre y apellidos que están en la misma celda.
- Quitar espacios sobrantes o caracteres raros.
- Unificar formatos de fecha.
- Poner en mayúscula la primera letra.

```prompt
En la columna A tengo nombres completos como "garcía lópez, ANA". Quiero en la columna B el nombre ("Ana") y en la C los apellidos ("García López"), con mayúscula inicial. Dame las fórmulas para Excel en español.
```

>! **Ojo:** no pegues en la IA hojas con datos personales de clientes o empleados, ni cifras confidenciales. Para que te ayude con la fórmula basta con describir las columnas o inventar dos o tres filas de ejemplo con datos falsos.

## Ir un paso más allá

Cuando domines las fórmulas, puedes pedir a la IA:

- **Tablas dinámicas:** «explícame cómo crear una tabla dinámica que muestre las ventas por comercial y mes».
- **Gráficos:** «qué tipo de gráfico es mejor para mostrar la evolución de ventas por región».
- **Formato condicional:** «cómo resalto en rojo las facturas vencidas».
- **Automatizaciones:** macros en Excel o scripts en Google Sheets. Aquí revisa con más cuidado: un script con errores puede modificar muchos datos a la vez. Haz siempre una copia antes de ejecutarlo.

Si trabajas con documentos largos además de hojas de cálculo, te será útil [cómo resumir documentos con IA](guia:summarize).

## Preguntas frecuentes

### ¿Por qué la fórmula que me da la IA no funciona?

Las causas más comunes son: la fórmula está en inglés y tu Excel en español, usa comas en lugar de punto y coma, usa una función que tu versión no tiene o las columnas no coinciden con tu hoja. Díselo a la IA indicando el error exacto.

### ¿Sirve igual para Google Sheets?

Sí. La mayoría de funciones son iguales o muy parecidas. Indica siempre qué programa usas porque algunas funciones existen solo en uno de los dos.

### ¿Necesito una versión de pago de la IA?

No. Para pedir y explicar fórmulas, los planes gratuitos de los asistentes principales funcionan bien. Algunas versiones de pago pueden analizar archivos completos, lo que ahorra describir la hoja.
