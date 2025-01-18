[title]: <> (Suma de Gauss)
[category]: <> (math)
[date]: <> (2022/06/16)
[pandoc]: <> (--mathjax)

Debe ser la anecdota más contada por profesores de matemáticas del mundo. La del joven niño prodigio que resuelve un problema mega complicado en muy poco tiempo.

**Capaz no la escuchaste y soy el primero en contartela.**

## Introducción

A mediados de 1800, Alemania, un profesor de matemática da a sus alumnos de primaria un desafiante problema:

> Sumar todos los números naturales del 1 al 100.

Al poco tiempo, mucho antes de los esperado por el profesor, un joven [Carl Friederich Gauss](https://es.wikipedia.org/wiki/Carl_Friedrich_Gauss) entrega su respuesta al profesor, 5050.

No se sabe mucho de la veracidad de esta historia, ni muchos más detalles, pero alcanza para sorprender a todos los que la escuchan por primera vez. (Y posta me sorprendió cuando la esuche en una de mis primeras clases de [álgebra I](https://cms.dm.uba.ar/academico/materias/2docuat2021/Algebra%20I/)).

La pregunta natural que surge es como puede un chico sumar tantos números tan rápido. Veamos como sería la cosa, o como lo hubiera encarado yo:

- 1+2 = 3
- 3+3 = 6
- 6+4 = 10
- 10+5 = 15
- 15+6 = 21
- 21+7 = 28

Y casi que a partir de allí se empieza a complicar la cosa.

Sin embargo, el jóven Carl entendió que:

- 1+100 = 101
- 2+99 = 101
- 3+98 = 101
- …
- 48+53 = 101
- 49+52 = 101
- 50+51 = 101

Y a partir de acá se repite lo mismo con los terminos dados vuelta.

Entonces hay 51 términos que suman 101, luego

$$
 51 \cdot 101 = 5050
$$

Que es efectivamente la suma de todos los números naturales entre 1 y 100.

## Demostración

Lo siguiente que conviene preguntarse es si esta idea se puede extender al resto de los naturales y como se puede probar que se cumple para la suma entre 1 y 47, o entre 1 y 86.

Formalmente, el problema de sumar los primeros $n$ números naturales $S$ se puede expresar como:

$$
S = \sum_{i=1}^{n}i
$$

Miremos lo siguiente, sea $n$ un número natural,

$$
\begin{align*}
S &= 1 +\; \; \; \;\;2\;\;\;\;\:+...+ (n-1) + n \\
S &= n + (n-1) +...+ \; \; \; \;\;2\;\;\;\;\: + 1 \\
\end{align*}
$$

Sumando nos queda,

$$
2S = (n+1) + (n+1) + ... + (n+1) \\
2S = n(n+1) \\
S = \frac{n(n+1)}{2}
$$

Este es el término general de la sumatoria de los $n$ primeros naturales.

### Inducción

Vamos a probar que vale que para todo $n$ natural, la suma de los primeros $n$ naturales es igual a $\frac{n(n+1)}{2}$

Para eso vamos a usar el [principio de inducción](https://es.wikipedia.org/wiki/Inducci%C3%B3n_matem%C3%A1tica). Esencialmente lo que el principio propone es que si probamos (siempre usando los números naturales) que un predicado vale:

1. Para un primer caso (llamado caso base) y,
2. Si vale para un k-ésimo elemento cualquiera implica que vale para el siguiente.

Entonces el predicado vale para cualquier natural.

Definimos entonces el predicado

$$
⁍
$$

Como queremos probar que el predicado vale para cualquier natural, proponemos $n=1$ como caso base.

### Caso base n = 1

Queremos probar que vale el predicado, como es una igualdad vale con probar que ambos lados de la igualdad valen lo mismo.

Luego donde dice $n$ reemplazamos con $1$

$$
p(1): \sum_{i=1}^{1} i = \frac{1(1+1)}{2} \\
p(1): 1 = \frac{2}{2} \\
p(1): 1 = 1 \\
$$

Por lo tanto $p(1)$ es verdadero.

### Paso inductivo

Ahora queremos probar que dado un $k$ natural, vale que $p(k) \implies p(k+1)$

Para probar una [implicación logica](https://es.wikipedia.org/wiki/Implicaci%C3%B3n) alcanza con tomar como verdadero el antecedente, en este caso $p(k)$ y probar que vale el consecuente $p(k+1)$

Entonces, si tomamos que $p(k)$ es verdadero, sabemos que vale

$$
p(k): \sum_{i=1}^{k} i = \frac{k(k+1)}{2}
$$

Y lo que queremos probar es que sabiendo esto, vale

$$
p(k+1): \sum_{i=1}^{k+1} i = \frac{(k+1)(k+1+1)}{2} \\
p(k+1): \sum_{i=1}^{k+1} i = \frac{(k+1)(k+2)}{2} = \frac{k^2 + 3k + 2}{2}
$$

Pero, por definición de la sumatoria

$$
\sum_{i=1}^{k+1} i = (\sum_{i=1}^{k} i) + k+1
$$

Pero ahora puedo reemplazar la sumatoria hasta $k$ por lo que se que vale.

$$
\begin{align*}
\sum_{i=1}^{k+1} i &= (\sum_{i=1}^{k} i) + k+1 \\
&=\frac{k(k+1)}{2} + k+1 \\
&=\frac{k^2+k}{2} + k+1 \\
&=\frac{k^2+k+ 2k+2}{2}  \\
&=\frac{k^2+3k+2}{2}  \\
\end{align*}
$$

Como se quería probar. Entonces así queda probado el paso inductivo y habiendo probado antes el caso base queda probado que $p(n)$ vale para todo número natural.

En conclusión, para cualquier $n$ natural la suma de los primeros $n$ números naturales es igual a $\frac{n(n+1)}{2}$.

## Recursos

- [Toda la verdad sobre la anécdota de Gauss, el niño prodigio, su profesor y la suma de 1 a 100 - La Ciencia de la Mula Francis](https://francis.naukas.com/2010/04/15/iii-carnaval-de-matematicas-toda-la-verdad-sobre-la-anecdota-de-gauss-el-nino-prodigio-su-profesor-y-la-suma-de-1-a-100/#:~:text=Carl%20Friedrich%20Gauss%20obtuvo%20la,Una%20historia%20mil%20veces%20contada.)
- [Suma de Gauss - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Suma_de_Gauss)
- [Carl Friedrich Gauss - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Carl_Friedrich_Gauss)
