[title]: <> (Codeforces 797)
[category]: <> (problem solving)
[date]: <> (2022/06/09)

Notas del [Contest 797 de Codeforces](https://codeforces.com/contest/1690).

## Datos del contest

| Fecha         | 07/06/2022 |
| ------------- | ---------- |
| Div           | 3          |
| # problems    | 7          |
| Solved        | 3          |
| Rating gained | +242       |

## Problem A. Print a pedestal

[Enunciado del problema](https://codeforces.com/contest/1690/problem/A)

Nos dan una cantidad de bloques $n$ y con ellos devolver la distribución de bloques para armar un “podio” tal que la altura de la columna del medio sea mínima.

Ejemplo

**Input**

```txt
6
11
6
10
100000
7
8
```

**Output**

```txt
4 5 2
2 3 1
4 5 1
33334 33335 33331
2 4 1
3 4 1
```

### Resolución

Algunas consideraciones o tips:

- Todas las columnas tienen que tener altura distinta.
- La columna del medio tiene que ser más alta que las otras dos.
- La primer columna tiene que ser más alta que la tercera.
- La suma de las alturas tiene que ser igual a $n$

- No puede haber columnas con altura cero (o negativa)

Lo primero que consideré es que $n/3$ debe ser la altura mínima de la columna del medio.

Luego veo que al dividir por 3, se generan tres clases, en función del resto de dividir a $n$ por 3 (lo llamamos $r$). Imaginemos que a cada columna le asignamos la parte entera de $n / 3$ = k y definimos $c = [k,k,k]$, luego:

- Si $r = 0$ entonces no quedan elementos sueltos para agregar. Quitamos un bloque a la tercer columna y se lo agregamos a la del medio. Así $c = [k, k+1, k-1]$
- Si $r = 1$ entonces hay un elemento suelto para agregar. En este punto hay que separar el análisis en dos casos: $n = 7$ y $n \neq 7$
  - Si $n \neq 7$, quitamos dos elementos a c3, agregamos dos elementos a c2 y uno a c1. Así, $c = [k+1, k+2, k-2]$
  - Si $n \neq 7$ lo que pasa en el caso anterior es que $7/3 = 2*3+1$ luego si restamos dos como decía el item anterior, generaríamos una columna con altura igual a cero. Por lo tanto $c = [k, k+2, k-1]$
- Si $r = 2$ entonces, siguiendo el mismo razonamiento, $c = [k+1, k+2, k-1]$

#### Implementación en python

```python
import sys
ncases = int(input())

def solve():
    nblocks = int(input())
    floorDiv = nblocks // 3
    minHeight = floorDiv if nblocks % 3 == 0 else floorDiv + 1
    if (nblocks % 3 == 0):
        res = [floorDiv, floorDiv + 1, floorDiv - 1]
    elif (nblocks % 3 == 1):
        res = [floorDiv+1, floorDiv + 2, floorDiv - 2] if nblocks != 7 else [floorDiv, floorDiv + 2, floorDiv - 1]
    else:
        res = [floorDiv + 1, floorDiv + 2, floorDiv - 1]
    result.append(res)

result = []
for x in range(ncases):
    solve()

[print(f"{x[0]} {x[1]} {x[2]}") for x in result]
```

## Problem B. Array Decrements

[Enunciado](https://codeforces.com/contest/1690/problem/B)

Nos piden determinar si se puede obtener un arreglo a partir de otro, utilizando sucesivamente la siguiente operación:

- Decrementar cada elemento no nulo de la secuencia en uno.
- Si el i-esimo elemento es nulo queda igual.

Ejemplo.

**Input**

```txt
6
4
3 5 4 1
1 3 2 0
3
1 2 1
0 1 0
4
5 3 7 2
1 1 1 1
5
1 2 3 4 5
1 2 3 4 6
1
8
0
1
4
6
```

**Output**

```txt
YES
YES
NO
NO
YES
NO
```

### Resolución

Sean **a** y **b** secuencias. La solución más intuitiva es hacer un loop por toda la secuencia **a**, ir restando uno a cada elemento de **a** y preguntar al final de cada iteración si es igual a **b**. No testee este caso, pero se nota que puede resultar un algoritmo costoso.

Otra posible implementación consiste en,

- Definimos maxDiff: max(a[i] - b[i] para algún $0 \leq i < |a|$)

Por lo tanto, después de estudiar un poco el problema se ve que,

- diff tiene que ser mayor igual a cero.
- a[i] - b[i] tiene que ser igual a maxDiff para todos los i tales que b[i] ≠ 0
- a[i] - b[i] tiene que ser menor igual a maxDiff para todos los i tales que b[i] = 0

De manera tal que el restar uno a cada elemento sucesivamente se obtenga la secuencia **b.**

#### Implementación en python

```python
import sys
ncases = int(input())

def solve():
    lenList = int(input())
    a = [int(x) for x in str(input()).split(" ")]
    b = [int(x) for x in str(input()).split(" ")]
    n = [(a[n], b[n], a[n] - b[n]) for n in range(lenList)]
    maxDiff = max(x[2] for x in n)
    i = 0
    while (i < lenList and n[i][2] >= 0 and not (n[i][2] < maxDiff and n[i][1] != 0) and n[i][2] <=  maxDiff):
        i += 1
    result.append("YES" if i == lenList else "NO")

result = []
for x in range(ncases):
    solve()

[print(x) for x in result]
```

## Problem C. Restoring the Duration of Tasks

[Enunciado](https://codeforces.com/contest/1690/problem/C)

Piden que dadas una secuencia **a** de tiempo de recepción de una tarea y **b** los tiempos de finalización de una tarea, determinar la duración de ejecución de una tarea considerando,

1. Comienza al llegar la primera tarea.
2. Si llega una tarea antes de finalizar la que está en proceso, la manda al final de la fila.
3. Al finalizar una tarea, inmediatamente comienza con la que está al comienzo de la fila.

Ejemplo

```txt
4
3
0 3 7
2 10 11
2
10 15
11 16
9
12 16 90 195 1456 1569 3001 5237 19275
13 199 200 260 9100 10000 10914 91066 5735533
1
0
1000000000
```

**Output**

```txt
2 7 1
1 1
1 183 1 60 7644 900 914 80152 5644467
1000000000
```

Es fácil ver que la primera tarea comienza en cero y termina en b[0].

Luego cada una de las siguientes tareas va a finalizar en b[i] pero va a comenzar en el máximo entre el tiempo de finalización de la tarea anterior y el tiempo de recepción de la tarea.

#### Implementación en python

```python
import sys
ncases = int(input())

def solve():
    ntasks = int(input())
    begTimes = [int(x) for x in str(input()).split(" ")]
    endTimes = [int(x) for x in str(input()).split(" ")]
    times = [(begTimes[i], endTimes[i]) for i in range(ntasks)]
    i = 1
    r = [str(times[0][1] - times[0][0])]
    while i < ntasks:
        r.append(str(times[i][1] - max([begTimes[i], endTimes[i-1]])))
        i += 1
    result.append(" ".join(r))

result = []
for x in range(ncases):
    solve()

[print(x) for x in result]
```
