# PECK
## _Grupo 11_
### _UML_
![uml](https://user-images.githubusercontent.com/82326212/146695043-7413bead-f2f4-4ee2-9cbc-4a8b9589814a.png)
# Link del juego
https://javixxu.github.io/PVLI-G11/

# Link herramienta de gestión del proyecto
https://www.pivotaltracker.com/n/projects/2531976

# Link Twitter
https://twitter.com/CoupleGamesSt?t=Zcgib8-mqbFca1xUYV6Kww&s=09

# Documento de diseño de videojuego.
![Captura de pantalla (426)](https://user-images.githubusercontent.com/82326212/147148858-74902515-fe75-4119-9f8e-789cdf8bd266.png)

Nombre de los autores y correo electrónico de contacto: 
- Simona Antonova Mihaylova simoanto@ucm.es
- Sara Isabel García Moral sigms02@ucm.es
- Javier Comas de Frutos javcomas@ucm.es
- Adrián Montero Castrillo admont02@ucm.es

Versión 1.7 –22 diciembre 2021

## Características

| Resumen |Grupo 11 |
| ------ | ------ |
| Géneros: Plataformas 2D | Modos: Single player |
|Público objetivo:Edad 12, idioma español| Plataformas: Web |
| Cantidades:  Escenario: Las calles de Bodega Bay|Objetos: Power-ups|
|Armas: Periquito|Personajes: Cathy, Mitch, los pájaros|
| Requisitos mínimos:| Navegador Web|

## Descripción
 
 Peck es un juego de plataformas 2D en el que nuestra protagonista, Cathy Brenner, una simple niña de 11 años, trata de huir de unas bandadas de pájaros asesinos que están sembrando el caos en Bodega Bay. Para poder escapar de esta pesadilla deberá llegar al coche de su hermano Mitch. Sin embargo, llegar hasta él supondrá todo un reto ya que deberá esquivar y defenderse de los ataques de los diferentes pájaros, sorteando diversos obstáculos y ayudándose de diversos power ups.

### Versiones del documento
Histórico de versiones y control de cambios
- 25/09/2021-Generación de la idea
- 30/09/2021-Fin Preproducción
- 31/10/2021- Hito 1
- 27/11/2021- Hito 2
- 20/12/2021- Hito 3
- 22/12/2021- Release

### Tabla de contenidos

1.Aspectos Generales

1.1.Vista del jugador y Relato Breve de Partida.

2.Jugabilidad

2.1. Mecánicas de personajes y escenarios , controles y cámara.

2.2. Objetivo , refuerzo , castigos y dinámicas básicas del personaje.

2.3. Estética: Temática y resonancia, target, experiencia y narrativa.

3.Menús y Modos de Juego

3.1.Configuración.

3.2.Interfaz y Control.

4.Contenido

4.1.Historia.

4.2.Niveles.

4.3.Personajes y enemigos.

4.4.Objetos.

4.5.Referencias y bibliografía.

# 1. Aspectos generales

Peck es un juego de plataformas 2D estilo scroll lateral, en el que controlamos a Cathy Brenner, una niña que tiene la mala suerte de que en su undécimo cumpleaños, la localidad en la que reside, Bodega Bay, es atacada por bandadas de pájaros con un inexplicable instinto asesino. Su objetivo principal será escapar de este truculento suceso huyendo de Bodega Bay en el coche de su hermano Mitch. Para ello deberá atravesar el lugar partiendo de su fiesta de cumpleaños, pero esto no será fácil ya que debido al caos creado por los continuos ataques de los pájaros, Bodega Bay se encuentra arrasada. Debido a esto, Cathy deberá sortear los distintos obstáculos que se encuentre (escombros, vallas, coches...), mientras se intenta defender de los ataques de las aves.

## 1.1 Relato breve y parcial de una partida típica 
Aparecemos en el primer nivel, controlando a Cathy, recogemos del suelo una llave, que usamos para eliminar a dos aguiluchos, avanzamos hasta que un cuervo impacta contra nosotros, restandonos 1 corazón de salud, caemos en un charco de lodo que reduce nuestra velocidad, por lo que una gaviota nos impacta sin poder esquivarla, perdiendo otros 1.5 corazones. Encontramos una cola, que nos aumenta la velocidad, saltamos por encima un profundo hoyo repleto de pinchos sin recibir ningún daño, nos impactan consecutivamente dos gorriones, perdiendo 0.5 corazones por cada golpe. Tras ello, nos encontramos justo a punto de pasar al siguiente nivel, pero justo caemos en una alcantarilla, y al aparecer en la anterior, un cuervo nos asesta un golpe y nos quedamos sin vidas restantes

# 2. Jugabilidad
## 2.1 Mecánica
### 2.1.1 Mecánicas del personaje
- Movimiento: La partida se desarrolla en un solo plano lateral, en el que Cathy únicamente podrá moverse hacia izquierda o derecha. Además tendrá la capacidad de saltar para pasar distintas zonas de los niveles y esquivar tanto obstáculos como enemigos.

![cathy_run](https://user-images.githubusercontent.com/82326212/147149212-3c762b8a-d548-4b24-a82b-71e468bed916.png)

- Vida: Cathy dispone de 5 corazones de salud, que se ven reflejados en la interfaz de usuario y puede perder al colisionar con los diferentes enemigos. Si se queda sin corazones, muere y perdemos la partida, apareciendo una pantalla de Game Over que nos da tanto la opciión de reiniciar el nivel como de regresar al menú principal. En los niveles habrá diversos obstáculos que también harán daño. Dependiendo del tipo de pájaro y obstáculo con el que colisione, perderá más o menos vida.
La vida se resetea a los 5 corazones iniciales al reiniciar/pasar de nivel.

![HEART](https://user-images.githubusercontent.com/82326212/147149267-342958c8-b976-4a69-bd90-65a9a6de9531.png)

- Recoger/Consumir power ups: Si Cathy pasa por encima de un power up , lo almacenaremos en nuestro inventario, siempre y cuando esté vacío. En el inventario solo podremos llevar un item, que podremos consumir con la tecla E, desapareciendo del inventario el power up y aplicandose el efecto del mismo. No podremos sustituir el power up guardado por otro.

![Captura de pantalla (428)](https://user-images.githubusercontent.com/82326212/147149773-65557e7a-bf29-4963-8314-933be16ce7db.png)

#### 2.1.2 Mecánicas de escenario
El escenario consta de una serie de plataformas y obstáculos por las que la protagonista deberá moverse y esquivar para alcanzar la meta. Cathy podrá recoger distintos objetos que le proporcionarán power-ups con ventajas que le ayudarán a escapar.
Obstáculos que bloquean el paso:
- Vallas (Fences), escombros (Debris) y coches (Car): La protagonista deberá saltar estos obstáculos para poder avanzar

![car](https://user-images.githubusercontent.com/82326212/147149863-cd484eaf-0800-4704-989a-919a84e8a50a.png)

![fence](https://user-images.githubusercontent.com/82326212/147149899-0793f1d6-dd76-46c9-8302-7e16b17d0505.png)

![escombros](https://user-images.githubusercontent.com/82326212/147149948-64af75f4-64cf-4a81-b05e-643a314fc91d.png)

Por otro lado, podemos encontrarnos con trampas (obstáculos que quitan vida):
- Pinchos (Spikes): Quitan medio corazón mientras se esté en contacto con ellos.

![spikes](https://user-images.githubusercontent.com/82326212/147149104-4fab6934-d624-4e07-abbc-6472dc234c45.png)

- Alcantarilla (Sewer): Al caer en una alcantarilla, además de perder un corazón, Cathy se teletransportara a la posicion de la última alcantarilla que haya sobrepasado en el nivel.
 
![alcantarilla](https://user-images.githubusercontent.com/82326212/147149030-c1bc8dc1-48df-4c35-adcd-5f63122c0c4b.png)

- Charco de lodo(Puddle): Si Cathy colisiona con un charco de lodo, se reducirá su velocidad a la mitad y como consecuencia la altura de su salto. El efecto dura 5 segundos desde que se pisa por primera vez.

![mud](https://user-images.githubusercontent.com/82326212/147149072-f0b71455-25ac-403e-bff3-d1891cd57672.png)


### 2.1.3 Cámara
La cámara tendrá movimiento de scroll lateral y seguirá al jugador cuando este avance, viéndose tan solo una parte del nivel y no éste completo. La partida se desarrolla en un único plano lateral. 

![Captura de pantalla (426)](https://user-images.githubusercontent.com/82326212/147148984-01eb441d-f304-4d26-9121-07fb02a836ba.png)


## 2.2 Dinámica
El objetivo de Peck consiste en escapar de los violentos pájaros que atacan a la población de Bodega Bay huyendo de la ciudad, mientras se esquivan obstáculos y ataques de las aves. 
Para ganar, Cathy deberá llegar al coche de su hermano, que se encuentra al final del segundo nivel, y así escapar de la ciudad.

Se pierde al quedarse sin vidas (muriendo la protagonista), tras haber sufrido los diferentes ataques de las aves o haber caído en las trampas. Es a la vez un sistema de castigo ya que deberá empezarse de nuevo el nivel.
Como sistema de puntuación, habrá un temporizador que contabilizará el tiempo que tarda el jugador en pasarse el nivel.

## 2.3 Estética

_Temática_

Peck está inspirado en la película de 1963 de Alfred Hitchcock, “Los pájaros”. El juego se ambienta en la Bodega Bay de los años 60 por lo que la ropa, los coches e infraestructuras concuerdan con la época. También continuando con la temática de los pájaros, cuervos, gaviotas, aguiluchos y gorriones provocan destrozos en la ciudad y por ello encontramos escombros, vallas, coches mal aparcados..

_Target_

Este juego irá orientado principalmente a personas de más de 12 años debido a la sensación de violencia que se transmite. También estará orientado al público más cinéfilo al estar basada en una película por lo que quizás sea mejor comprendido por un público más adulto.

_Experiencia_

El usuario experimentará cierta tensión al no saber cuándo ni dónde aparecerán los pájaros que le atacarán. Además experimentará cierta sensación de frenesí y nerviosismo debido a las ansias que provoca el querer escapar del terrible caos de la ciudad. Cuando consiga completar un nivel y/o  una zona dde dificultad alta, se sentirá feliz y satisfecho.

_Colores_

El escenario del juego tendrá unos colores apagados y oscuros, con el objetivo de transmitir que el escenario está ligeramente devastado.

![N|Solid](https://media.discordapp.net/attachments/884555645414699018/893091942873854052/paletton_2.png)

Tanto los enemigos como el personaje tendrán colores más vivos que el escenario para poder diferenciarlos.

![N|Solid](https://media.discordapp.net/attachments/884555645414699018/893091944740290620/paletton_1.png)

Para la implementación de los sprites se utilizará la técnica del “pixel art”.

# 3. Menús y modos de juego 
Peck dispondrá únicamente de un modo de juego, que será el modo Single Player, y de diversos menús:

- Menú principal

![Captura de pantalla (430)](https://user-images.githubusercontent.com/82326212/147150244-53581c51-931a-4c9f-bdcd-99361dc5de19.png)

- Menú de pausa: Desde la propia partida podremos acceder a un menú de pausa.

![Captura de pantalla (432)](https://user-images.githubusercontent.com/82326212/147150329-3b4178fd-e80a-47ec-ac4f-b8c93e2d0369.png)

## 3.1 Configuración

El menú de pausa tendrá las opciones de:
- Reanudar el juego
- Salir de la partida (volver al menú principal)
- Configuración del sonido
- Panel de controles

El menú principal dará acceso a:
- Iniciar la Partida
- Panel de controles


## 3.2 Interfaz y control

![Captura de pantalla (427)](https://user-images.githubusercontent.com/82326212/147149616-2090813d-9f3d-4814-9763-079c5bbe2cc6.png)

En la parte superior izquierda de la pantalla, se encuentran la vida del jugador (representadas las vidas restantes por corazones), como el inventario, donde podremos llevar un power-up.
Por otro lado, en la parte derecha, encontraremos un contador del tiempo que lleva la partida en curso y un botón de pausa, que al ser pulsado pausa la escena de juego y abre el menú de pausa.


# 4. Contenido
## 4.1 Historia

El día del undécimo cumpleaños de Cathy Brenner una bandada de gaviotas, cuervos y gorriones se abalanza sobre la población costera de Bodega Bay de forma inexplicable, provocando un terrible caos y numerosas víctimas en la localidad. Cathy huye frenéticamente con sus periquitos (regalo de Mitch Brenner) en mano hacia el coche de su hermano para poder escapar de ese tremendo tormento, habiéndose convertido en el peor día de su vida.

## 4.2 Niveles

Los niveles estarán predefinidos en el diseño, es decir, siempre habrá el mismo número de enemigos.
El juego consta de dos niveles en los que la dificultad aumenta gradualmente. Ambos niveles están ambientados en Bodega Bay y se darán en un escenario similar, el primer nivel más orientado a la zona residencial de Bodega Bay, y el segundoo a la play. El final o la meta de los dos será el coche de Mitch Brenner.

En ambos niveles habrá ciertas zonas en las que la concentración de enemigos será mayor de la usual, por ello, alrededor de estas zonas encontraremos objetos que nos servirán de ayuda.

Los niveles están diseñados e implementados con Tiled.


## 4.3 Personajes y enemigos

Protagonista: Cathy Brenner. Ocupa 55 x 80 píxeles.

![cathy_idle](https://user-images.githubusercontent.com/82326212/147147094-0e44382f-cf18-4fd6-96cc-844df699e3ab.png)

Los enemigos tendrán la habilidad de atacar a Cathy colisionando con ella. Son los siguientes:

- Cuervo: Cuervo: Enemigo hostil que ataca en línea recta, dándose la vuelta cada cierto tiempo persiguiendo a Cathy. Tiene un daño de 1 corazón.

![ravens](https://user-images.githubusercontent.com/82326212/147145868-1c244867-29a0-4dca-8acc-71bfbe500860.png)

- Gaviota: Enemigo hostil que realiza movimientos circulares alrededor de un punto fijo. Tiene un daño de 1.5 corazones .

![seagullsSprite](https://user-images.githubusercontent.com/82326212/147146353-47fc9985-8f07-445f-9ed1-3881ea8417e1.png)

- Gorrión: Enemigo hostil que se mueve en semicírculos tocando el suelo (es decir, dando saltitos). Es el enemigo con menor daño,0.5 corazones. Es el enemigo de menor tamaño

![gorrion](https://user-images.githubusercontent.com/82326212/147146490-9c08300a-1414-4f39-af63-aa1787ac5cac.png)

Aguilucho: Enemigo hostil que se mueve con una dirección fija cuyo destino será la posición del jugador en el momento en el que se genere el enemigo, es decir, si el jugador se mueve, no será perseguido. El movimiento que realiza este enemigo es con forma de parábola cóncava y tiene un daño de 1 corazón, al igual que el cuervo. Es el enemigo de mayor tamaño

![aguilucho](https://user-images.githubusercontent.com/82326212/147147034-eba6c0d4-b32b-4cfb-a6bf-9f4416c39538.png)


| Daño producido |por los enemigos: |
| ------ | ------ |
| Gorrión: 0,5 corazones | Cuervo y Aguilucho: 1 corazón |
|Gaviota: | 1,5 corazones |

### 4.3.1 Controles

![controles](https://user-images.githubusercontent.com/82326212/147147496-a69ff196-5bbd-4376-a8ee-9b50b6c6357a.png)


Controles de movimiento:
- Teclas “D” ó “Right Arrow” para movernos hacia la derecha
- Teclas “W”, “Up Arrow” ó “Space Bar” para saltar
- Teclas “A” ó “LeftArrow” para movernos hacia la izquierda
- Tecla “E” para consumir el power-up almacenado

- Menú de pausa: Al pulsar el botón rojo situado en la parte superior derecha de la pantalla, aparecerá el menú de pausa que contendrá distintas opciones.

## 4.4 Objetos
Los objetos tienen una posición predefinida en cada nivel en el escenario de juego, y se recogen al colisionar con ellos, desapareciendo estos del mapa. En Peck disponemos de tres power ups:

- Llave para la jaula: Al activar el power up de la llave, Cathy lanza un periquito bomba que elimina a los enemigos que estén en un rango de 500 píxeles de ancho y 300 de alto mediante una explosión

![key](https://user-images.githubusercontent.com/82326212/147147871-f4db7c58-d791-44dc-a1a3-470a51828a80.png)

![periquito](https://user-images.githubusercontent.com/82326212/147147891-1577b936-8ccf-43c1-92f6-d520db7e2172.png)


- Vendas: Recuperan un corazón entero de salud, nunca superando la vida máxima de 5 corazones.

![bandages](https://user-images.githubusercontent.com/82326212/147147984-a7e0c597-d465-4264-b413-0387887adbb7.png)

-Cola :Su efecto duplica la velocidad de Cathy durante 5 segundos.

![cola](https://user-images.githubusercontent.com/82326212/147148033-ba216056-d201-414b-9225-bd0102cb6390.png)


# Referencias
- Basado en “Los pájaros” (película de 1963 - Alfred Hitchcock).

- Jugabilidad basada en la saga Super Mario Bros. Al final de los niveles de esta saga hay banderas que sirven de meta para dar por terminado el nivel y pasar al siguiente, en cambio, en Peck será el coche del hermano de la protagonista. El estilo de los niveles y las mecánicas del personaje principal están basadas en las de Mario.
# Bibliografía
- https://www.shutterstock.com/es/image-vector/vector-illustration-crow-style-pixel-art-1018668868
- https://www.istockphoto.com/es/vector/gorri%C3%B3n-pixel-art-aislado-sobre-fondo-blanco-peque%C3%B1o-icono-de-p%C3%A1jaro-de-8-bits-gm1147100877-309309198
https://www.shutterstock.com/es/image-vector/old-school-8-bit-pixel-art-663595156
- https://w3g3a5v6.ssl.hwcdn.net/upload2/game/1311855/4907671?GoogleAccessId=uploader@moonscript2.iam.gserviceaccount.com&Expires=1639579429&Signature=aEdrk2KM0OlJ9QDHed%2FiVqZUrWMP9sM4syZYHZdg0feFjk4sauMhVRb9AwLIbksLBJue3CtC%2BxEmuipd%2BHgw1TVrsxRAnV69njrujLZvCVy0P8hap3mslFsn8EZLiR%2F3bKQTvkY5OjW1vazwMJ6eIZyDOQjq4JDpJUvTgkUDPFK0ioqNdaXXKnv191iqhhVcJUdE%2BBQd%2BDWMeS0G9U66K2%2Brmau5RbcS7Sw3W3rdP2a4AKWlpFKofnRFnd4HOmW3cwIuSVG21dXZoPlxUalwUHKS%2B6Fq1FGYWB7h1hNp%2F89t3dQ7MU58mZJu2EK1QAUkulS2E5ZuRvR3tuSd3vxddg==&hwexp=1639579689&hwsig=9c1f19c9d83d5e5352b2e97017b6f909
https://www.pinterest.ch/pin/807129564441953561/
- https://es.123rf.com/photo_84161725_adhesivos-venda-salud-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o.html
- https://mx.depositphotos.com/
- https://freesound.org
- https://www.piskelapp.com/
