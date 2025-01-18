[title]: <> (La Conjetura de Thor 🐶)
[category]: <> (math)
[date]: <> (2023/04/02)
[pandoc]: <> (--mathjax)

Los que me conocen saben que una de mis rutinas favoritas es salir a pasear con mi amigo Thor 🐶 (golden retriever de 2 años) todos los días por la noche, normalmente de 22:30 a 23:30.

## El juego de los edificios

Una de esas noches, mientras caminaba por el barrio y se ocurrió el siguiente juego:

> _Cada edificio tiene un número de puerta que lo identifica, en mi barrio son todos de cuatro dígitos. El juego consiste en tomar ese número y determinar si usando los cuatro dígitos y las operaciones suma, resta y multiplicación se puede llegar a otro número que tenga resto 0 al dividirlo por 10 (o que sea congruente a 0 módulo 10)_

Hay que usar todos los dígitos y cada dígito solo puede ser usado una sola vez.

Va un ejemplo. Digamos que estás caminando por la calle y querés jugar. Mirás el número de edificio y ves un 3687 anotado en la puerta.

$$
3687 \implies (8+7) * 6 *3 = 270 \equiv 0 (10)
$$

Entonces, como encontraste el 270 a partir del 3687, ganás un punto y seguís al siguiente edificio.

<aside>
💡 Si se encuentra una combinación, se dice que ese número es **combinable**

</aside>

En este caso, el **3687 es combinable**

## La conjetura de Thor

Al principio era bastante complicado determinar si un número de puerta de edificio era combinable o no, pero después de un par de noches jugando mientras paseaba, empecé a encontrar algunos patrones que ayudan a darse cuenta fácil si un número lo es.

Por ejemplo y quizás la más intuitiva, si dentro de las cuatro cifras que tengo, hay dos de ellas que suman 10, luego el número es combinable. Por ejemplo con el 4671:

$$
4671 \implies (4+6) * 7 * 1 = 70 \equiv 0 (10)
$$

Un par de noches más tarde, estaba encontrando combinaciones para todos los números de puerta que me cruzaba, parecía raro pero funcionaba, así surgió **La Conjetura de Thor** que dice así:

> _Para todo número natural de cuatro cifras, usando todos sus dígitos una sola vez y las operaciones suma, resta, multiplicación se puede encontrar otro número tal que al dividirlo por 10 tenga resto cero._

Ya no me quedaba con los números que me cruzaba en la calle, buscaba generalizarlo a todos los números de cuatro cifras 🤯

## Probando la conjetura

Para probar la conjetura se me ocurrió lo siguiente: defino el conjunto de los naturales de cuatro digitos $NC$ (No Combinables), meto todos los números no combinables ahí dentro y cuento cuantos elementos tiene $NC$. Luego la conjetura es cierta si la cantidad de elementos en $NC$ es igual a 0.

Parto asumiendo que todos los números de cuatro cifras son no combinables, luego $NC = \{ 1000, 1001, …, 9998, 9999 \}$ y $\#NC = 10*10*10*10 = 10^4 = 10000$

<aside>
💡 El símbolo # se usa para nombrar el cardinal: cantidad de elementos de un conjunto.

</aside>

### Reglas de combinabilidad

Hay ciertas reglas que automáticamente convierten a un número en combinable y bajan el cardinal de $NC$

1. Si el número contiene 2 digitos iguales es combinables pues $(a-a) * c = 0, \forall a,c \in \mathbb{N}$

   $\#NC = 10 * 9 * 8 * 7 = 5040$

2. Si el número contiene un 0 es combinable pues $0 * c = 0, \forall c \in \mathbb{N}$

   $\#NC = 9*8*7*6 = 3024$

3. Si el número contiene un 5 es combinable. Imaginemos que un número tiene al 5 entre sus dígitos y $d_1, d_2, d_3$ los demás dígitos que pueden ser cualquiera de $\{ 1,2,3,4,6,7,8,9 \}$. Si elijo dos de esos números al azar, me aseguro que:

   1. Uno de ellos es par o
   2. Ambos son impares y por lo tanto la suma es par pues $a+b = 2k+1 + 2j + 1 = 2k +2j + 2 = 2(k+j+1) \implies a+b$ es par

   Por lo tanto $5*p = 5*2k = 10*k \equiv 0 (10), \forall p \equiv 0 (2)$

   $\#NC = 8*7*6*5 = 1680$

Con estas tres reglas automáticamente bajamos la cantidad de candidatos no combinables, de 10000 a 1680.

Hasta acá todas las reglas que se me ocurrieron para bajar la cantidad de no combinables. Lo siguiente que hice fue intentar encontrar un número que no sea combinable, eligiendo cifras una a la vez.

### En busca del contraejemplo

Voy a llamar $d_1, d_2, d_3, d_4$ a los dígitos del número, el orden es indistinto. Los dígitos válidos son $\{1,2,3,4,6,7,8,9\}$ y no puede haber duplicados.

- Si $d1=1$
  - $d_2 \in \{2,3,7,8\}$
  - Luego quedan 4 dígitos para ubicar en tres posiciones posibles. Hay $\binom{4}{3}$ = 4 elecciones posibles: 378, 278, 238, 237
  - Pero $3+7 = 10$ y $2+8=10$.
  - Luego todos los números que tienen 1 son combinables
- Si $d_1=2$
  - $d_2 \in \{4,6,7,9\}$
  - Usando la misma lógica de antes: las posibles elecciones son 679, 479, 469, 467
    - 679 es combinable pues $6+7+9 - 2 = 20$
    - 479 es combinable pues $4+7+9 = 20$
    - 469 y 467 son combinables pues $4+6=10$
  - Luego todos los números que tienen 2 son combinables
- Si $d_1 = 3$
  - $d_2 \in \{4,6,8,9\}$
  - Posibles elecciones: 689, 489, 469, 468
    - 689 es combinable pues $6+8+9-3 = 20$
    - 489 es combinable pues $8+9+3 = 20$
    - 469 y 467 es combinable pues $4+6 = 10$
  - Luego todos los números que tienen 3 son combinables
- Si $d_1 = 4$
  - $d_2 \in \{7,8,9\}$
  - Solo se puede armar el 4789 pero es combinable pues $(7+8)*4 = 60$
  - Luego todos los números que tienen 4 son combinables
- Si $d_1 = 6$
  - $d_2 \in \{7,8\}$
  - Pero solo quedan 2 digitos para tres restantes.
  - Luego todos los números que tienen 6 son combinables

En este punto solo quedan los dígitos $\{7,8,9\}$ para formar un número de 4 cifras.

Por lo tanto, al no poder generar un número que no sea combinable y al barrer todos los casos posibles, pruebo que todos los números de cuatro cifras son combinables y la **conjetura de Thor es correcta**.
