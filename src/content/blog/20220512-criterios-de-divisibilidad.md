---
title: "Criterios de Divisibilidad"
description: "¿Por qué vale que un número es par si su última cifra es 0, 2, 4, 6 u 8?"
pubDate: 2022-05-12
tags: ["math"]
heroImage: "../../assets/20220512-cover.jpeg"
heroImageCaption: "Kayak fishing on Falkner Lake, Patagonia, Argentina"
---

¿Por qué vale que un número es **par** si su última cifra es 0, 2, 4, 6 u 8?

¿Cómo sabemos que un número es divisible por 5 si termina en 0 o 5?

¿Y que un número es divisible por 3 si la suma de sus dígitos lo es?

O cómo se justifican [todos estos](https://es.wikipedia.org/wiki/Divisibilidad#Criterios_de_divisibilidad).

### Divisibilidad

El algoritmo de división de números enteros nos dice que:

$$
\forall (a, b) \in \mathbb{Z}^2: \exists (k, r) \in \mathbb{Z}^2 \wedge (0 \leq r < b) / a = k.b + r
$$

> Lista de símbolos matemáticos y su significado. [link](https://es.wikipedia.org/wiki/Anexo:S%C3%ADmbolos_matem%C3%A1ticos)

En palabras,

> *Para todo **a** y **b** enteros, existen **k,** **r** enteros con r entre 0 y **b;** tales que **a** es igual a k*b + r\*

Y coloquialmente llamamos:

- a = dividendo
- b = divisor
- k = cociente
- r = resto

Y entonces, decimos que:

$$
a|b \iff \exists k \in \mathbb{Z}/a = k.b
$$

> 💡 El símbolo “|” significa “divide”

O lo que es lo mismo, que el resto de dividir **a** por **b** es igual a 0.

#### Congruencia

La notación de congruencia, derivada del algoritmo de división, nos permite relacionar el divisor, dividendo y resto de la siguiente manera.

$$
a = k.b + r \iff a \equiv r (b)
$$

En palabras decimos que “_a es congruente a r módulo b”_

Y una de las propiedades de la congruencia, que llamamos “tomar resto” es

$$
a \equiv \text{resto}(a,c) (c)
$$

Por ejemplo,

$$
26 \equiv resto(26, 4)(4) \equiv 2(4)
$$

Pues el restos de dividir a 26 por 4 es igual a 2. Esta propiedad va a ser usada en la demostración de los criterios.

### Sistemas de numeración

A lo largo de la historia han existido (y existen) muchos sistemas de numeración distintos, con ventajas y desventajas entre sí.

https://www.youtube.com/watch?v=ggOPJ8gafPo

Un sistema de numeración no es más que un conjunto de símbolos y reglas que permiten construir todos los números válidos (para ese sistema). Quizás uno de los más reconocidos, distinto al que usamos todos los días, sea el sistema de numeración romano, que utiliza letras y la posición en las que se escriben para identificar los números.

El sistema que usamos hoy en día es el sistema de numeración decimal, o en base 10.

Las reglas de este sistema son simples pero muy poderosas:

1. Se utilizan 10 símbolos: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

2. Todo número _a_ se puede escribir como

$$
a = c_1 \cdot 10^{n} + c_2 \cdot 10^{n-1} + ... + c_{n-1} \cdot 10^{1} + c_{n} \cdot 10^{0}
$$

Donde $n$ es la cantidad de dígitos menos uno del número y $c_i$ es el símbolo en la posición $i$.

> 🔑 Esta es la notación formal para el sistema que usamos de forma natural todos los días

Por ejemplo sabemos que el número,

$$
\begin{align*}
1234 &= 1 \cdot 10^3 + 2 \cdot 10^2 + 3 \cdot 10^1 + 4 \cdot 10^0 \\
1234 &= 1000 + 200 + 30 + 4 \\
\end{align*}
$$

Aunque no estemos haciendo esta suma cada vez que escribimos un número.

Existen otros sistemas de numeración muy usados como el [binario](https://es.wikipedia.org/wiki/Sistema_binario) o el [hexadecimal](https://es.wikipedia.org/wiki/Sistema_hexadecimal)

## ¿Por qué valen los criterios de divisibilidad?

Vamos a ir descubriendo por qué valen los criterios de divisibilidad del dos, tres y cinco.

### Divisibilidad por 2

> Un número es divisible por 2 si: el número termina en una cifra par (0, 2, 4, 6, 8).

Vamos a probar la validez de este criterio (y todos los demás) usando todo lo que estuvimos viendo previamente.

Sabemos que un número $n$ es divisible por $2$ si $\exists k \in \mathbb{Z} / n = 2k$ y por congruencias sabemos que

$$
n = 2k \iff n \equiv 0(2)
$$

Por lo tanto vamos a querer probar que cualquier números es divisible por dos si es congruente a cero módulo 2.

Ahora usamos lo que vimos del sistema de numeración decimal, sabemos que $n$ se puede escribir como

$$
n = c_1 \cdot 10^{r} + c_2 \cdot 10^{r-1} + ... + c_{r-1} \cdot 10^{1} + c_{r} \cdot 10^{0}
$$

Entonces juntando ambas cosas

$$
n \equiv 0(2) \iff c_1 \cdot 10^{r} + c_2 \cdot 10^{r-1} + ... + c_{r-1} \cdot 10^{1} + c_{r} \cdot 10^{0} \equiv 0 (2)
$$

Si ahora tomamos resto a cada sumando

$$
n \equiv 0(2) \iff c_1 \cdot 0^{r} + c_2 \cdot 0^{r-1} + ... + c_{r-1} \cdot 0^{1} + c_{r} \cdot 1 \equiv 0 (2)
$$

Pues sabemos que el resto de dividir a 10 por 2 es igual a 0, y que cualquier número elevado a la 0 es 1.

Por lo tanto nos queda algo del estilo

$$
n \equiv 0(2) \iff c_{r} \cdot 1 \equiv 0 (2) \iff c_{r} \equiv 0(2)
$$

Y esto quiere decir, como queríamos probar, que un número es divisible por 2 (o congruente a cero módulo 2) si termina en un número par.

### Divisibilidad por 3

> Un número es divisible por 3 si: la suma de sus cifras es un múltiplo de 3.

Vamos a usar el mismo razonamiento que en el caso anterior

Sabemos que un número $n$ es divisible por $3$ si $\exists k \in \mathbb{Z} / n = 3k$ y por congruencias sabemos que

$$
n = 3k \iff n \equiv 0(3)
$$

Por lo tanto vamos a querer probar que cualquier números es divisible por dos si es congruente a 0 módulo 3.

Ahora usamos lo que vimos del sistema de numeración decimal, sabemos que $n$ se puede escribir como

$$
n = c_1 \cdot 10^{r} + c_2 \cdot 10^{r-1} + ... + c_{r-1} \cdot 10^{1} + c_{r} \cdot 10^{0}
$$

Entonces juntando ambas cosas

$$
n \equiv 0(3) \iff c_1 \cdot 10^{r} + c_2 \cdot 10^{r-1} + ... + c_{r-1} \cdot 10^{1} + c_{r} \cdot 10^{0} \equiv 0 (3)
$$

Si ahora tomamos resto a cada sumando

<aside>
🔑 Acá está la diferencia con el caso anterior (y con los que sigan).
</aside>

$$
n \equiv 0(3) \iff c_1 \cdot 1^{r} + c_2 \cdot 1^{r-1} + ... + c_{r-1} \cdot 1^{1} + c_{r} \cdot 1 \equiv 0 (3)
$$

En este caso, el resto de dividir a 10 por 3 es igual a 1.

Por lo tanto nos queda algo del estilo

$$
n \equiv 0(3) \iff c_1 + c_2 + ... + c_{r-1} + c_{r} \equiv 0 (3)
$$

Y esto quiere decir, como queríamos probar, que un número es divisible por 3 (o congruente a 0 módulo 3) si la suma de sus cifras (sus $c_i$) es divisible por 3.

### Divisibilidad por 5

> Un número es divisible por 5 si: la última cifra es 0 o 5.

De nuevo usamos los visto en los casos anteriores.

Sabemos que un número $n$ es divisible por $5$ si $\exists k \in \mathbb{Z} / n = 5k$ y por congruencias sabemos que

$$
n = 5k \iff n \equiv 0(5)
$$

Por lo tanto vamos a querer probar que cualquier números es divisible por dos si es congruente a 0 módulo 5.

Ahora usamos lo que vimos del sistema de numeración decimal, sabemos que $n$ se puede escribir como

$$
n = c_1 \cdot 10^{r} + c_2 \cdot 10^{r-1} + ... + c_{r-1} \cdot 10^{1} + c_{r} \cdot 10^{0}
$$

Entonces juntando ambas cosas

$$
n \equiv 0(5) \iff c_1 \cdot 10^{r} + c_2 \cdot 10^{r-1} + ... + c_{r-1} \cdot 10^{1} + c_{r} \cdot 10^{0} \equiv 0 (5)
$$

Si ahora tomamos resto a cada sumando

$$
n \equiv 0(5) \iff c_1 \cdot 0^{r} + c_2 \cdot 0^{r-1} + ... + c_{r-1} \cdot 0^{1} + c_{r} \cdot 1 \equiv 0 (5)
$$

En este caso, el resto de dividir a 10 por 5 es igual a 0.

Por lo tanto nos queda algo muy similar al criterio del 2

$$
n \equiv 0(5) \iff c_{r} \equiv 0 (5)
$$

Y esto quiere decir, como queríamos probar, que un número es divisible por 5 (o congruente a 0 módulo 5) si la última cifra es divisible por 5, o lo que es lo mismo, que termina en 0 o 5.

El último criterio que no vamos a ver acá pero también es muy interesante es el del 11.

## Conclusiones

Crear atajos nos ayuda a resolver problemas de forma eficiente. Gracias a los criterios de divisibilidad, sabemos que el número 19284758403294 es divisible por 2 ya que termina en 4, sin tener que andar haciendo las cuentas.

Muchas veces nos quedamos con _la fórmula_ que nos permite resolver problemas sin saber por qué vale lo que sabemos que es cierto. Los criterios de divisibilidad son ciertos y valen; ya vimos por qué 🤓
