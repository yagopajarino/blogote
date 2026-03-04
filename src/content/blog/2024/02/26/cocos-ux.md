---
title: "Mejorando la UX de Cocos 🥥"
description: "Si vos también estás manija del bullmarket con el cambio de gobierno, habrás averiguado formas de invertir tu plata y quizás te hayas encontrado con Cocos Capital, que permite comprar y vender productos financieros sin comisiones (no es chivo) (por ahora)."
pubDate: 2024-02-26
tags: ["ux"]
heroImage: "./20240226-cover.jpeg"
heroImageCaption: "Moring walk, Pinamar, Argentina"
---

Si vos también estás manija del bullmarket con el cambio de gobierno, habrás averiguado formas de invertir tu plata y quizás te hayas encontrado con Cocos Capital, que permite comprar y vender productos financieros sin comisiones (no es chivo) (por ahora).

Hace un par de meses vengo usando la web de cocos para invertir parte de mis ingresos. Casi al toque de empezar a usarla encontré algo que se puede mejorar a nivel experiencia (personal) de usuario. La sección de mercado, que permite ver todos los activos con su precio, volumen, variación, etc. no se puede ordenar por ninguna de estas variables.

En mi caso, por ejemplo me interesaba ver cual es el activo con mayor volumen operado, cantidad de operaciones o el que tiene la mayor variación en el precio.

:::tip
El volumen operado ayuda a prevenir riesgos de liquidez: el riesgo de comprar un activo y luego no poder venderlo porque nadie te lo quiera comprar 🥲
:::

El desafío entonces era desarrollar un script que permitiera ordenar el panel de instrumentos por cualquiera de las variables que se muestran: precio, variación, cajas de puntas comprador y vendedor, precio mínimo, máximo, total operado, cantidad de operaciones; de forma ascendente y descendente. Hacerlo en VanillaJS para poder integrarlo directamente en el navegador web.

Con aprox 100 lineas de Vanilla JavaScript se puede lograr. El video está disponible en [este post de LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7137816305012781056/)

El código es open source y está disponible en [cocos-order-panel | Github](https://github.com/yagopajarino/cocos-orden-panel)

## Cómo

La idea es profundizar acerca de cómo lograr lo anterior. Si venís de LinkedIn, habrás visto que lo de arriba es el post que acompaña a [esta publicación](https://www.linkedin.com/feed/update/urn:li:activity:7137816305012781056/)

Si viste el video, lo que hago es copiar el codigo del repositorio y pegarlo en la consola que google chrome. Cada pagina web a la que accedemos carga lo que se conoce como DOM que el navegador se encarga de mostrar en la pantalla.

:::tip
DOM (Document Object Model) es la representación de la estructura de la web en un árbol que permite conectarla scripts
:::

Entonces gracias a la interfaz que provee el DOM, se puede cargar un script a la web y que este lo interprete y ejecute.

## Algoritmo

El algoritmo debe:

1. Hallar todos los titulos de columnas de la tabla de instrumentos
2. Agregar un eventListener a cada titulo de columna
   1. Cuando se haga click debe ordenar todas las filas en base al titulo seleccionado
   2. Debe hacerlo primero de forma ascendente y luego descendente

Para ello hay que estudiar como está estructurada la web de cocos, viendo el HTML, todos los titulos de columna comparten la clase `markets-table-header` luego usando `document.querySelector(".markets-table-header");` se obtiene un array con los headers de las columnas.

Lo que sigue es a cada uno de esos elementos agregar un eventListener que dada una columna:

1. identifique que numero de columna se clickeo
2. obtenga todas las filas de la tabla
3. ordene todas las filas de la tabla en base al numero de columna
4. borre todas las filas de la tabla
5. agregue las filas de la tabla de forma ordenada

Esta es la parte mas complicada del proceso porque hay que identificar que columna se clickeo usando el titulo, idnetificar que numero de columna tiene este titulo, obtener todos los datos de esa columna, ordenar las filas y presentar.

Las linea 6 a 91 se encargan de todo este proceso (el 68% del código)

:::tip
La idea central es entender como está estructurado el HTML para poder identificar en donde aplicar el listener y como se pueden extraer los datos necesarios para los calculos
:::

_Go for esos cocos_

El código es open source y está disponible en [cocos-order-panel | Github](https://github.com/yagopajarino/cocos-orden-panel)
