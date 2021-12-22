# PECK
## _Grupo 11_
### _UML_
![uml](https://user-images.githubusercontent.com/82326212/146695043-7413bead-f2f4-4ee2-9cbc-4a8b9589814a.png)

https://javixxu.github.io/PVLI-G11/

Documento de diseño de videojuego.

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
25/09/2021-Generación de la idea
30/09/2021-Fin Preproducción
31/10/2021- Hito 1
27/11/2021- Hito 2
20/12/2021- Hito 3
22/12/2021- Release

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

- Vida: Cathy dispone de 5 corazones de salud, que se ven reflejados en la interfaz de usuario y puede perder al colisionar con los diferentes enemigos. Si se queda sin corazones, muere y perdemos la partida, apareciendo una pantalla de GAme Over que nos da tanto la opciión de reiniciar el nivel como de regresar al menú principal. En los niveles habrá diversos obstáculos que también harán daño. Dependiendo del tipo de pájaro y obstáculo con el que colisione, perderá más o menos vida.
La vida se resetea a los 5 corazones iniciales al reiniciar/pasar de nivel.

- Recoger/Consumir power ups: Si Cathy pasa por encima de un power up , lo almacenaremos en nuestro inventario, siempre y cuando esté vacío. En el inventario solo podremos llevar un item, que podremos consumir con la tecla E, desapareciendo del inventario el power up y aplicandose el efecto del mismo. No podremos sustituir el power up guardado por otro.


#### 2.1.2 Mecánicas de escenario
El escenario consta de una serie de plataformas y obstáculos por las que la protagonista deberá moverse y esquivar para alcanzar la meta. Cathy podrá recoger distintos objetos que le proporcionarán power-ups con ventajas que le ayudarán a escapar.
Obstáculos que bloquean el paso:
- Vallas (Fences), escombros (Debris) y coches (Car): La protagonista deberá saltar estos obstáculos para poder avanzar

Por otro lado, podemos encontrarnos con trampas (obstáculos que quitan vida):
- Pinchos (Spikes): Quitan medio corazón mientras se esté en contacto con ellos.

- Alcantarilla (Sewer): Al caer en una alcantarilla, además de perder un corazón, Cathy se teletransportara a la posicion de la última alcantarilla que haya sobrepasado en el nivel.

- Charco de lodo(Puddle): Si Cathy colisiona con un charco de lodo, se reducirá su velocidad a la mitad y como consecuencia la altura de su salto. El efecto dura 5 segundos desde que se pisa por primera vez.



### 2.1.3 Cámara
La cámara tendrá movimiento de scroll lateral y seguirá al jugador cuando este avance, viéndose tan solo una parte del nivel y no éste completo. La partida se desarrolla en un único plano lateral. 



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
- Menú de pausa: Desde la propia partida podremos acceder a un menú de pausa.


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

En la parte superior izquierda de la pantalla, se encuentran la vida del jugador (representadas las vidas restantes por corazones), como el inventario, donde podremos llevar un power-up.
Por otro lado, en la parte derecha, encontraremos un contador del tiempo que lleva la partida en curso y un botón de pausa, que al ser pulsado pausa la escena de juego y abre el menú de pausa.


# 4. Contenido
## 4.1 Historia

El día del undécimo cumpleaños de Cathy Brenner una bandada de gaviotas, cuervos y gorriones se abalanza sobre la población costera de Bodega Bay de forma inexplicable, provocando un terrible caos y numerosas víctimas en la localidad. Cathy huye frenéticamente con sus periquitos (regalo de Mitch Brenner) en mano hacia el coche de su hermano para poder escapar de ese tremendo tormento, habiéndose convertido en el peor día de su vida.

## 4.2 Niveles

Los niveles estarán predefinidos en el diseño, es decir, siempre habrá el mismo número de enemigos.
El juego consta de dos niveles en los que la dificultad aumenta gradualmente. Ambos niveles están ambientados en Bodega Bay y se darán en un escenario similar, el primer nivel más orientado a la zona residencial de Bodega Bay, y el segundoo a la play. El final o la meta de los dos será el coche de Mitch Brenner.

En ambos niveles habrá ciertas zonas en las que la concentración de enemigos será mayor de la usual, por ello, alrededor de estas zonas encontraremos objetos que nos servirán de ayuda.


## 4.3 Personajes y enemigos

Protagonista: Cathy Brenner. Ocupa 1,5 x 1,5.

Los enemigos tendrán la habilidad de atacar a Cathy colisionando con ella. Irán apareciendo aleatoriamente del cielo, volando hacia ella.

- Cuervo: Cuervo: Enemigo hostil que ataca en línea recta, dándose la vuelta cada cierto tiempo persiguiendo a Cathy. Tiene un daño de 1 corazón. Ocupa la mitad que la protagonista.


![N|Solid](https://cdn.discordapp.com/attachments/884555645414699018/891738880787750963/unknown.png)
- Gaviota: Enemigo hostil que realiza movimientos circulares alrededor de un punto fijo. Tiene un daño de 1.5 corazones .Ocupa la mitad que la protagonista.


![N|Solid](https://media.discordapp.net/attachments/884555645414699018/891739115060600832/unknown.png?width=749&height=657)
- Gorrión: Enemigo hostil que se mueve en semicírculos tocando el suelo (es decir, dando saltitos). Es el enemigo con menor daño,0.5 corazones. Ocupa ¼ de la escala de la protagonista.


![N|Solid](https://media.discordapp.net/attachments/884555645414699018/891737841741234226/unknown.png?width=758&height=657)

Aguilucho: Enemigo hostil que se mueve con una dirección fija cuyo destino será la posición del jugador en el momento en el que se genere el enemigo, es decir, si el jugador se mueve, no será perseguido. El movimiento que realiza este enemigo es con forma de parábola cóncava y tiene un daño de 1 corazón, al igual que el cuervo.

![N|Solid](https://st4.depositphotos.com/20277160/38579/v/600/depositphotos_385794022-stock-illustration-vector-of-flying-eagle-mascot.jpg)

| Daño producido |por los enemigos: |
| ------ | ------ |
| Gorrión: 0,5 corazones | Cuervo y Aguilucho: 1 corazón |
|Gaviota: | 1,5 corazones |

### 4.3.1 Controles
Controles de movimiento:
- Teclas “D” ó “Right Arrow” para movernos hacia la derecha
- Teclas “W”, “Up Arrow” ó “Space Bar” para saltar
- Teclas “A” ó “LeftArrow” para movernos hacia la izquierda
- Tecla “E” para consumir el power-up almacenado

- Menú de pausa: Al pulsar el botón rojo situado en la parte superior derecha de la pantalla, aparecerá el menú de pausa que contendrá distintas opciones.

## 4.4 Objetos
Los objetos tienen una posición predefinida en cada nivel en el escenario de juego, y se recogen al colisionar con ellos, desapareciendo estos del mapa. En Peck disponemos de tres power ups:

- Llave para la jaula: Al activar el power up de la llave, Cathy lanza un periquito bomba que elimina a los enemigos que estén en un rango de 500 píxeles de ancho y 300 de alto.

![N|Solid](https://media.discordapp.net/attachments/884555645414699018/893092168477061130/llave.png)
![N|Solid](https://media.discordapp.net/attachments/884555645414699018/892690851443134484/unknown.png?width=492&height=657)


- Vendas: Recuperan un corazón entero de salud, nunca superando la vida máxima de 5 corazones.

![N|Solid](https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170811033/84161725-adhesivos-venda-salud-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg)

-Refresco :Su efecto duplica la velocidad de Cathy durante 5 segundos.
![N|Solid](https://media.discordapp.net/attachments/884555645414699018/904436623834492978/cola.png)


# Referencias
Basado en “Los pájaros” (película de 1963 - Alfred Hitchcock).

Jugabilidad basada en la saga Super Mario Bros. Al final de los niveles de esta saga hay banderas que sirven de meta para dar por terminado el nivel y pasar al siguiente, en cambio, en Peck será el coche del hermano de la protagonista. El estilo de los niveles y las mecánicas del personaje principal están basadas en las de Mario.
# Bibliografía
- https://www.shutterstock.com/es/image-vector/vector-illustration-crow-style-pixel-art-1018668868
- https://www.istockphoto.com/es/vector/gorri%C3%B3n-pixel-art-aislado-sobre-fondo-blanco-peque%C3%B1o-icono-de-p%C3%A1jaro-de-8-bits-gm1147100877-309309198
https://www.shutterstock.com/es/image-vector/old-school-8-bit-pixel-art-663595156
- https://www.istockphoto.com/es/vector/mantequilla-de-man%C3%AD-en-un-tarro-icono-del-arte-p%C3%ADxel-aislado-sobre-fondo-blanco-gm959493560-262011776
https://www.pinterest.ch/pin/807129564441953561/
- https://es.123rf.com/photo_84161725_adhesivos-venda-salud-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o.html
- https://mx.depositphotos.com/
- https://freesound.org
