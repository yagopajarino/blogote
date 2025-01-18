[title]: <> (Codeforces 799)
[category]: <> (problem solving)
[date]: <> (2022/06/16)
[pandoc]: <> (--mathjax)

Notas del [Contest 799 de Codeforces](https://codeforces.com/contest/1692).

Datos del contest

| Fecha         | 14/06/2022 |
| ------------- | ---------- |
| Div           | 4          |
| # problems    | 8          |
| Solved        | 3          |
| Rating gained | +164       |

## Problem A. Marathon

[Enunciado del problema](https://codeforces.com/contest/1692/problem/A)

Piden devolver la cantidad de participantes que están por delante de Timur en una maratón de 4 participantes, nos dan las ditancias recorridas por cada uno de los participantes.

Ejemplo

**Input**

```txt
4
2 3 4 1
10000 0 1 2
500 600 400 300
0 9999 10000 9998
```

**Output**

```txt
2
0
1
3
```

### Resolución

El primer elemento del input es la distancia recorrida por Timur, queremos saber cuantos rivales hay por delante, es decir cuantos recorrieron más distancia que Timur.

#### Implementación en python

```python
import sys
ncases = int(input())

def solve():
    tiempos = [int(x) for x in input().split(" ")]
    res.append(len([x for x in tiempos[1:] if x > tiempos[0]]))

res = []
for x in range(ncases):
    solve()

[print(n) for n in res]
```

## Problem B. All distinct

[Enunciado del problema](https://codeforces.com/contest/1692/problem/B)

Nos dan un arreglo de `int` al que se le puede realizar la sgte operación:

- Seleccionar dos indices, $i, j$ tales que $i <j$
- Remover los elementos $a_i, a_j$ del arreglo.

Nos piden determinar la longitud final del arreglo tal que esta sea máxima y que todos los elementos que lo forman sean distintos.

Ejemplo.

**Input**

```txt
4
6
2 2 2 3 3 3
5
9 1 9 9 1
4
15 16 16 15
4
10 100 1000 10000
```

**Output**
2
1
2
4

### Resolución

Fue por lejos el que más me costó del contest. Primero intenté armar una estructura con cada termino y la cantidad de apariciones que tenía en la secuencia. Luego me quedaba con los elementos que tuvieran cantidad de apariciones impar.

Esta estrategia fallaba en el tercer ejemplo, pues solo contemplaba eliminar elementos iguales.

Después de verlo mucho (mucho) tiempo y hacer algunos ejemplos en papel, vi que el tamaño máximo al que se podía llegar era la cantidad de elementos distintos del arreglo. (como en el caso 4 del ejemplo).

Con los elementos repetidos pueden pasar dos cosas, o bien los puedo eliminar a todos de a pares, o bien me queda alguno suelto, y como no puedo tener repetidos al final de las operaciones, necesito quitar uno de los _únicos_.

#### Implementación en python

```python
import sys
ncases = int(input())

def solve():
    n = int(input())
    nUniq = len(set([int(x) for x in input().split(" ")]))
    nDifs = n - nUniq
    res.append(nUniq - (nDifs % 2))

res = []
for x in range(ncases):
    solve()

[print(n) for n in res]
```

## Problem C. Where’s the bishop?

[Enunciado del problema](https://codeforces.com/contest/1692/problem/C)

Nos dan un tablero de ajedrez con las posiciones a las que puede atacar un alfil. Piden determinar la posición en la que se encuentra el alfil. Aseguran que no se encuentra en los bordes.

Ejemplo

**Input**

```txt
3


.....#..
#...#...
.#.#....
..#.....
.#.#....
#...#...
.....#..
......#.


#.#.....
.#......
#.#.....
...#....
....#...
.....#..
......#.
.......#


.#.....#
..#...#.
...#.#..
....#...
...#.#..
..#...#.
.#.....#
#.......
```

**Output**

```txt
4 3
2 2
4 5
```

### Resolución

Sabiendo que el alfil ataca en sus diagonales, alcanza con verificar cual es el casillero tal que las cuatro celdas en las diagonales y el casillero contienen “#”.

#### Implementación en python

```python
import sys
ncases = int(input())

def solve():
    empty = input()
    matrix = [[x for x in input()] for n in range(8)]
    for i in range(1,7):
        for j in range(1,7):
            if  (matrix[i-1][j-1] == "#")   and \
                (matrix[i-1][j+1] == "#")   and \
                (matrix[i][j] == "#")       and \
                (matrix[i+1][j-1] == "#")   and \
                (matrix[i+1][j+1] == "#"):
	                res.append(f"{i+1} {j+1}")

res = []
for x in range(ncases):
    solve()

[print(n) for n in res]
```
