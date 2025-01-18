[title]: <> (Searching Algorithms)
[category]: <> (algoritmos)
[date]: <> (2022/06/02)
[pandoc]: <> (--mathjax)

¿Cómo buscar un elemento en una secuencia, arreglo, lista, etc de la mejor forma posible?

Imaginemos que tenemos la lista de números enteros `lista = [1, 5, 9, 2, 6, 3, 5, 12, 8]` y queremos saber si el número 7 se encuentra en ella. En otras palabras, buscamos al 7 en la lista.

El algoritmo más _intuitivo_ para este caso es el de ir preguntando en cada posición de la lista si se encuentra el 7. Lo implementamos.

```cpp
#include <vector>
using namespace std;

bool busquedaLineal(vector<int> v, int n) {
	int i = 0;
	while (i < v.size() && v[i] != n) {
		i++;
	}
	return i < v.size();
}

// En el caso del ejemplo
n = 7;
vector<int> lista = {1,5,9,2,6,3,5,12,8};
busquedaLineal(lista, n) // returns false
```

Este algoritmo se llama búsqueda lineal (_lineal search_)

Después de verlo un rato, podemos ver que en el peor de los casos, este es aquel en el que el número no está en la lista (como el del ejemplo) el algoritmo pregunta en cada posición del arreglo. Para listas pequeñas puede no importarnos que la recorra toda, pero imaginemos buscar un elemento en una secuencia de miles o millones de ellos.

La pregunta que surge entonces es saber si existe un proceso mejor que solucione el mismo problema, es decir, si existe un algoritmo más **eficiente.**

> 💡 Más adelante vemos que significa que un algoritmo sea mejor o más eficiente que otro.

Cambiemos el problema ligeramente y veamos cómo surge casi instantáneamente (y de manera muy intuitiva) un algoritmo mejor para resolverlo.

Imaginemos ahora que la lista que tenemos esta ordenada, sí, nada más (y nada menos) que eso. Existe ahora un algoritmo más eficiente que permita buscar un elemento en esta nueva lista ordenada.

Acá es donde va un **SPOILER ALERT** para que aquel que quiera tomarse un rato para pensar el algoritmo.

## Old school dictionary

Utilicemos el siguiente ejemplo (casi fuera de época) que se asemeja al problema que estamos intentando resolver.

¿Cuál es la mejor forma de encontrar una palabra de un diccionario de papel?

Si en el caso de la lista de números no había surgido una idea de cómo resolver el problema, en este caso, con palabras en lugar de números y un diccionario en lugar de lista, casi seguro que uno se imagina por dónde va la cosa.

La 23a edición del [Diccionario de la RAE](https://es.wikipedia.org/wiki/Diccionario_de_la_lengua_espa%C3%B1ola#cite_note-10) tiene 2376 páginas y 93111 términos definidos. Es fácil ver que ir palabra por palabra revisando si es la que estoy buscando no es la mejor estrategia. Naturalmente la estrategia que uno utiliza es:

1. Ir a la palabra del medio (o cerca del medio)
2. Ver si mi palabra está antes que esta.
   1. Si la respuesta es sí, me quedo con la primera mitad
   2. Si la respuesta es no, me quedo con la segunda mitad
3. Vuelvo al paso uno

Queda claro que cada vez que uno vuelva al paso uno de este algoritmo, habrá descartado la mitad de elementos que tenía antes. Sin embargo, usando el algoritmo anterior se iban descartando elementos de a uno.

Y este algoritmo que va dividiendo en dos la lista en la que estoy buscando se llama búsqueda binaria (_binary search_).

Volviendo al ejemplo de la lista de números, ahora ordenada, veamos una posible implementación de este algoritmo.

```cpp
bool busquedaBinaria(vector<int> s, int x) {
	int i = 0;
	int j = s.size() - 1;
	while (j > i + 1) {
		int k = (i+j) / 2;
		if (s[k] > x) {
			j = k;
		} else {
			i = k;
		}
	}
	return s[i] == x;
}
```

Este algoritmo casi cumple con lo pedido, pero esta fallando en algunos casos puntuales. Por ej.:

1. ¿Qué pasa si la lista tiene 0 elementos?
2. ¿Si tiene un elemento?
3. ¿Si el elemento que buscamos es menor al primero de la lista?
4. ¿Si el elemento que buscamos es mayor al último de la lista?

Como el problema no nos limita la lista que podemos recibir como parámetro, tenemos que tener en cuenta estos casos borde. Volviendo a la implementación.

```cpp
bool busquedaBinaria(vector<int> s, int x) {
	if (s.size() == 0){
		return false;
	} else if ( s.size() == 1 ){
		return s[0] == x;
	} else if ( x < s[0] ) {
		return false;
	} else if ( x >= s[s.size()-1] ) {
		return s[s.size()-1] == x;
	} else {
		int i = 0;
		int j = s.size() - 1;
		while (j > i + 1) {
			int k = (i+j) / 2;
			if (s[k] > x) {
				j = k;
			} else {
				i = k;
			}
		}
		return s[i] == x;
	}
}
```

Y así, con una lista ahora **ordenada** podemos resolver el problema de buscar un elemento en la lista de manera más eficiente.

## Big O notation

Tenemos que responder ahora cómo sabemos que un algoritmo es mejor que otro. Decimos que un algoritmo es más eficiente cuando realiza menos operaciones que otro.

Así, en ciencias de la computación surge la notación Big O para clasificar algoritmos de acuerdo al crecimiento en tiempos de ejecución y consumo de recursos a medida que aumenta el tamaño de la entrada.

> Big O clasifica el rendimiento en el peor caso de ejecución posible. Es decir el caso que más operaciones le tome al algoritmo obtener una respuesta.

La definición formal puede encontrarse en [Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation#Formal_definition) aunque no es necesario para entender lo que sigue.

Intuitivamente nos dimos cuenta de que el segundo algoritmo era más eficiente, pues en lugar de buscar en cada elemento de la lista, iba dividiendo la lista en 2 sucesivamente, descartando en cada paso la mitad de los elementos que tenía.

Entonces, si llamamos $n$ al tamaño de la lista, a medida que n crece,

- búsqueda lineal hace $n$ pasos para devolver un resultado
- búsqueda binaria hace $log_2(n)$ pasos para devolver un resultado

Si las vemos en un gráfico

!https://files.realpython.com/media/linear_binary_plot.0fc7428a70f0.png

Vemos que para valores grandes de number of elements de la lista, el algoritmo de búsqueda binaria usa menos pasos para obtener un resultado.

Y por lo tanto podemos concluir que para tamaños de lista _suficientemente_ grandes el algoritmo de búsqueda lineal el más eficiente que el de búsqueda lineal.
