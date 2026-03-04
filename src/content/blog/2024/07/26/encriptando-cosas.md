---
title: "Encriptando cosas"
description: "Semana uno del core program. Estuvimos viendo una banda de conceptos critográficos, poca práctica, mucha teoría. Bien como para arrancar."
pubDate: 2024-07-26
tags: ["cryptography"]
heroImage: "./20240726-cover.jpeg"
heroImageCaption: "Foamy waves over rocky shore, Chapadmalal, Argentina"
---

Semana uno del core program. Estuvimos viendo una banda de conceptos critográficos, poca práctica, mucha teoría. Bien como para arrancar.

No se bien como organizar este post porque hay un montón de temas para meter, igual voy a hacer una selección de los temas que más me llamaron la atención.

## El problema del eavesdropper

Desde basicamente siempre el ser humano tuvo la necesidad de comunicarse con los otros de forma privada. En su momento, mandabas una carta y esperabas que solo el destinatario sea quien la reciba y lea el contenido, sin embargo en el medio pasaba por un montón de manos.

¿Qué pasaba si alguna de esas manos abría la carta, la leía y la volvía a ensobrar? Nada, probablemente ni vos ni el destinatario sabrían que alguien leyó el mensaje que estaban intercambiando.

:::info
Ese acto de _escuchar secretamente_ se conoce como **eavesdropping**
:::

Ahora bien, que pasaría si vos sos el cartero curioso que quiere leer una carta que no es para él, pero al abrir el sobre te encontrás con un texto como este:

> _Szwl dt pdeld wpjpyoz pdez dzd nclnv azc slmpc pynzyecloz wl vpj. Slnpxpwz dlmpc cpdazyotpyoz l pdep ehppe nzy wl alwlmcl "tyepcgpyetzy" e.wj/IeDj6_

Parece un mensaje escrito en un idioma rarísimo que probablemente no conozcas, o ni siquiera exista. Probablemente se trate de un mensaje encriptado.

Qué hacer si abris el sobre y te encontrás eso? Depende. Si simplemente estabas revisando la correspondencia de un [NPC](https://en.wikipedia.org/wiki/Non-player_character) lo volvés a ensobrar y te olvidás, pero si te interesa podrías intentar descifrar en mensaje oculto en el texto.

Lo siguiente que deberías conocer es el algoritmo de encriptado que se usó y poder desencriptar el mensaje. Suerte con eso.

## Encriptado: the basics

Ahora sí tenemos la motivación para introducir algunos temas particulares del mundo criptográfico. En todos los casos existe un **mensaje** que queremos encriptar para que solo el destinatario sea quien pueda desencriptarlo y leerlo.

Entonces, como en cualquier comunicación, existen dos personas: un **emiso** y un **receptor** del mensaje. Hasta acá nada nuevo.

Lo siguiente es definir algún mecanismo que permita al emisor _encriptar_ el mensaje y enviar al rececptor un **mensaje cifrado** (ciphertext en inglés).

### Caesar Cipher

Uno de los algoritmos más conocidos por su simplicidad es el [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) en honor a Julio Cesar, se dice que lo usaba en sus comunicaciones militares.

Cómo funciona? Simplemente se _shiftea_ el abecedario, se reemplaza cada letra por la que se encuentra _n_ veces después en el abecedario. Con un $$n=3$$ el nuevo abecedario quedaría asi

<table><tbody><tr><td>original</td><td>a</td><td>b</td><td>c</td><td>d</td><td>e</td><td>f</td><td>g</td><td>h</td><td>i</td><td>j</td><td>l</td><td>m</td><td>n</td><td>o</td><td>p</td><td>q</td><td>r</td><td>s</td><td>t</td><td>u</td><td>v</td><td>w</td><td>x</td><td>y</td><td>z</td></tr><tr><td>nueva</td><td>d</td><td>e</td><td>f</td><td>g</td><td>h</td><td>i</td><td>j</td><td>k</td><td>l</td><td>m</td><td>o</td><td>p</td><td>q</td><td>r</td><td>s</td><td>t</td><td>u</td><td>v</td><td>w</td><td>x</td><td>y</td><td>z</td><td>a</td><td>b</td><td>c</td></tr></tbody></table>

Y con esta tabla se cambia cada letra del mensaje

:::info
Podrías probar desencriptar el mensaje de arriba sabiendo esto 👀
:::

### Encriptado simétrico vs asimétrico

Si probaste desencriptar el mensaje original usando el ceaser cipher, seguro hayas tenido que encontrar el _n_ que transforma el mensaje encriptado en el original.

Es que para que un cifrado como el del cesar funcione, se necesita que ambas partes estén de acuerdo en ese _n_ que van a usar, el emisor para encriptar el mensaje y el receptor para desencriptarlo.

:::info
Se dice que Cesar siempre usaba un _n_ igual a 3 para encriptar sus mensajes.
:::

Este tipo de algoritmos se conocen como **simétricos**: ambas partes deben ponerse de acuerdo en un secreto común, una **key**, que les permita operar con el algoritmo.

¿Cómo funcionaría en la realidad? Supongamos que somos un general a punto de partir a la guerra y necesitamos definir una _key_ para intercambiar mensajes con nuestros oficiales, simplemente nos juntamos todos, definimos una _key_ secreta, y cada uno parte conociento el secreto.

En cambio, loa algoritmos de encriptado **asimétricos** eliminan esta necesidad de compartir un secreto común con la otra parte. Seguro hayas escuchado los términos **clave pública** y **clave privada**, veamos como funcionan.

### Algoritmos de clave pública - clave privada

En este caso, cada persona que quiere participar en un intercambio de mensajes genera dos claves, una clave pública, que va a compartir con todo el mundo y una clave privada que no se comparte con nadie.

El algoritmo más famoso de esta clase es, me pongo de pie, [RSA](https://es.wikipedia.org/wiki/RSA). Creado por Rivest, Shamir y Adleman, el algoritmo funciona algo así:

1. Bob quiere recibir mensajes encriptados, para ello genera un conjunto de claves: su clave pública la comparte por internet a todo el mundo, su clave privada la mantiene secreta.
2. Mary quiere enviar el mensaje 'hola' a Bob. Para ello encripta el mensaje usando una función que toma el mensaje 'hola' más la clave pública de Bob y genera un texto encriptado.
3. Bob recibe el texto encriptado y usando su clave privada que él solo sabe, puede descifrar el mensaje que mary le envió.

Parece simple, de hecho lo es ya que se basa en algunos conceptos de módulos y números primos muy sencillos. Vi unos cuantos videos que explicaban como funciona el algoritmo, te dejo el que me pareció más claro.

<iframe width="700" height="400" src="https://www.youtube.com/embed/4zahvcJ9glg?si=_CCbdx7WbidFJSS3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Btw, acabo de descubrir que puedo insertar videos en los posts 🙌🏼

Entonces, en este caso ya no es necesario que las partes se pongan de acuerdo en un secreto para poder encriptar y desencriptar un mensaje, mucho más práctico y eficiente. De hecho hoy en día RSA sigue siendo el estandar a la hora de encriptar mensajes, seguramente tu navegador lo este usando ahora mismo.

:::info
Para mí lo mejor de RSA es que usa conceptos muy simples como números primos, modulos y operaciones sencillas para lograr un algoritmo casi inquebrantable
:::

El siguiente algoritmo de este estilo que vale la pena estudiar se llama AES (Advanced Encription System), te dejó este video de [Computerfile](https://www.youtube.com/@Computerphile) si no estás subscripto te lo recomiendo junto a su primo [Numberphile](https://www.youtube.com/@numberphile)

<iframe width="700" height="400" src="https://www.youtube.com/embed/O4xNJsjtN6E?si=-UBzpQDa-J-NQ0so" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Creo que con estos temas alcanza para tener una buena base de algoritmos de encriptado, sobre todo entender la necesidad y cómo funcionan los algoritmos más famosos: ceasar, RSA, AES.

Antes de terminar, te dejo link a [Rot13 | Codewars](https://www.codewars.com/kata/530e15517bc88ac656000716) por si querés poner en práctica algo de lo aprendido.
