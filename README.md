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

Versión 1.6 –20 diciembre 2021

## Características

| Resumen |Grupo 11 |
| ------ | ------ |
| Géneros: Plataformas 2D | Modos: Single player |
|Público objetivo:Edad 12, idioma español| Plataformas: Web |
| Cantidades:  Escenario: Las calles de Bodega Bay|Objetos: Power-ups|
|Armas: Periquito|Personajes: Cathy, Mitch, los pájaros|
| Requisitos mínimos:| Navegador Web|

## Descripción
 
 Peck es un juego de plataformas 2D en el que nuestra protagonista, Cathy Brenner, una simple niña de 11 años con una jaula con periquitos, deberá huir de las bandadas de pájaros asesinos que siembran el caos en Bodega Bay. Para poder escapar de esta pesadilla deberá huir en el coche de su hermano Mitch. Sin embargo, llegar hasta él supondrá todo un reto ya que deberá esquivar y defenderse de los ataques de los diferentes pájaros, sorteando diversos obstáculos y ayudándose de sus pequeños periquitos.

### Versiones del documento
Histórico de versiones y control de cambios
25/09/2021-Generación de la idea
30/09/2021-Fin Preproducción

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

Peck es un juego en el que controlamos a Cathy Brenner, una niña que tiene la mala suerte de que en su undécimo cumpleaños, la localidad en la que reside, Bodega Bay, es atacada por varios pájaros con instinto asesino. Su objetivo principal será escapar de este truculento suceso huyendo de Bodega Bay en el coche de su hermano Mitch. Para ello deberá atravesar el lugar partiendo de su fiesta de cumpleaños, pero esto no será fácil ya que debido al caos creado por los continuos ataques de los pájaros, Bodega Bay se encuentra arrasada. Debido a esto, Cathy deberá sortear los distintos obstáculos (saltando o agachándose) que se encuentre (escombros, vallas, coches...), mientras se intenta defender de los ataques de las aves.

## 1.1 Relato breve y parcial de una partida típica 
Aparecemos en Bodega Bay, controlando a Cathy, con su jaula de periquitos en mano. Avanzamos por el nivel, esquivando a sucesivos cuervos, encontramos un bote de alpiste en el suelo, que empleamos para poner una trampa para pájaros, que nos otorgan tres segundos extra de margen para escapar. A continuación, una gaviota impacta contra nosotros, haciéndonos perder un corazón y medio, seguimos avanzando por la calle, recogemos un periquito que explota, eliminando a unos gorriones que estaban cerca. Recuperamos un corazón mediante el uso de una venda, pero poco después tres cuervos impactan contra nosotros de manera muy seguida, y nos quedamos únicamente con dos corazones restantes. Caemos en una alcantarilla, y nada más salir de ella dos gorriones nos atacan, matándonos y perdiendo así la partida.

# 2. Jugabilidad
## 2.1 Mecánica
### 2.1.1 Mecánicas del personaje
- Movimiento: La partida se desarrolla en un solo plano lateral, en el que Cathy únicamente podrá moverse hacia izquierda o derecha. Además tendrá la capacidad de saltar  para esquivar obstáculos.
- Vida: Cathy tendrá 5 corazones que podrá perder al colisionar con los diferentes pájaros enemigos. Si se queda sin corazones, muere y se pierde la partida (regresando al menú principal). En los niveles habrá diferentes trampas que también harán daño. Dependiendo del tipo de pájaro y trampa, perderá más o menos vida.
La vida se resetea al pasar de nivel.
- Recoger/Consumir objetos: Al pasar por encima  de un objeto , lo almacenaremos en nuestro inventario (si está vacío). En el inventario solo podremos llevar un objeto, que podremos consumir con la tecla E. No podremos sustituir el objeto guardado por otro.


#### 2.1.2 Mecánicas de escenario
El escenario consta de una serie de plataformas y obstáculos por las que la protagonista deberá moverse y esquivar para alcanzar la meta. Cathy podrá recoger distintos objetos que le proporcionarán power-ups con ventajas que le ayudarán a escapar.
Obstáculos que bloquean el paso:
- Vallas: La protagonista deberá agacharse para pasar por debajo.
- Escombros: Algunos deberán saltarse y otros deberán pasarse por debajo.
- Coches: Deberán saltarse por encima.

Asimismo, habrá trampas (obstáculos que quitan vida):
- Pinchos: Quitan medio corazón mientras se esté en contacto con ellos.
- Alcantarilla: Quita un corazón al caer en ella. El jugador, tras caer por ella aparecerá justo detrás de ésta.  
- Charco de lodo: si la protagonista cae o se posiciona dentro de uno de estos se reducirá su velocidad a la mitad y como consecuencia la altura de su salto. El efecto dura 5 segundos desde que se pisa por primera vez.



### 2.1.3 Cámara
La cámara tendrá movimiento de scroll lateral y seguirá al jugador, viéndose tan solo una parte del nivel y no éste completo. La partida se desarrolla en un único plano lateral. 

## 2.2 Dinámica
El objetivo de Peck consiste en escapar de los violentos pájaros que atacan a la población de Bodega Bay huyendo de la ciudad mientras se esquivan obstáculos y ataques. 
Para ganar, Cathy deberá llegar al coche de su hermano, que se encuentra al final del nivel, y huir de la ciudad.
Se pierde al quedarse sin vidas (muriendo la protagonista), tras haber sufrido los diferentes ataques de las aves o haber caído en las trampas. Es a la vez un sistema de castigo ya que deberá empezarse de nuevo el nivel.
Como sistema de puntuación, habrá un temporizador que contabilizará el tiempo que tarda el jugador en pasarse el nivel y se  guardará como high-score el tiempo mínimo.

## 2.3 Estética
_Temática_
Peck está inspirado en la película de 1963 de Hitchcock, “Los pájaros”. El juego se ambienta en la Bodega Bay de los años 60 por lo que todos los edificios, ropa, coches e infraestructuras concuerdan con la época. También continuando con la temática de los pájaros, cuervos, gaviotas y gorriones provocan destrozos en la ciudad y por ello encontramos escombros, vallas, coches mal aparcados...

_Target_
Este juego irá orientado principalmente a personas de más de 12 años debido a la sensación de violencia que se transmite. También estará orientado al público más cinéfilo al estar basada en una película por lo que quizás sea mejor comprendido por un público más adulto.

_Experiencia_
El usuario experimentará cierta tensión al no saber cuándo ni dónde aparecerán los pájaros que le atacarán. Además debido a la temática y estética puede que en algunos puntos de la partida experimente cierta sensación de angustia o congoja debido al clima de devastación y violencia que se presenta. 
También se experimentará cierta sensación de frenesí y nerviosismo debido a las ansias que provoca el querer escapar del terrible caos de la ciudad.

_Colores_
El escenario del juego tendrá unos colores apagados y oscuros, con el objetivo de transmitir tensión y miedo.

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
- Salir del juego (volver al menú principal)
- Configuración del sonido

El menú principal dará acceso a:
- Iniciar la Partida
- Información sobre los controles
- Salir del juego


## 3.2 Interfaz y control  
En la parte superior izquierda de la pantalla,  se encuentran la vida del jugador (representada por corazones), como el inventario donde podremos llevar un power-up.
Por otro lado, en la parte derecha, encontraremos un contador de tiempo de lo que lleva la partida en curso y un botón de pausa, que al ser pulsado pausa la escena de juego y abre el menú de pausa.


# 4. Contenido
## 4.1 Historia

El día del undécimo cumpleaños de Cathy Brenner una bandada de gaviotas, cuervos y gorriones se abalanza sobre la población costera de Bodega Bay de forma inexplicable, provocando un terrible caos y numerosas víctimas en la localidad. Cathy huye frenéticamente con sus periquitos (regalo de Mitch Brenner) en mano hacia el coche de su hermano para poder escapar de ese tremendo tormento, habiéndose convertido en el peor día de su vida.

## 4.2 Niveles

Los niveles estarán predefinidos en el diseño, es decir, siempre habrá el mismo número de enemigos.
El juego consta de dos niveles en los que la dificultad aumenta gradualmente. Ambos niveles están ambientados en Bodega Bay y se darán en un escenario similar. El final o la meta de los dos será el coche de Mitch Brenner.
En el segundo nivel aparecerán obstáculos de mayor dificultad con respecto al nivel anterior, por ejemplo más trampas o plataformas más separadas.
En ambos niveles habrá ciertas zonas en las que la concentración de enemigos será mayor de la usual, por ello, alrededor de estas zonas encontraremos objetos que nos servirán de ayuda.


## 4.3 Personajes y enemigos

Protagonista: Cathy Brenner. Ocupa 1,5 x 1,5.

Los enemigos tendrán la habilidad de atacar a Cathy colisionando con ella. Irán apareciendo aleatoriamente del cielo, volando hacia ella.

- Cuervo: Cuervo: Enemigo hostil que ataca en línea recta, dándose la vuelta cada cierto tiempo persiguiendo a Cathy. Ocupa la mitad que la protagonista.


![N|Solid](https://cdn.discordapp.com/attachments/884555645414699018/891738880787750963/unknown.png)
- Gaviota: Enemigo hostil que realiza movimientos circulares alrededor de un punto fijo. Ocupa la mitad que la protagonista.


![N|Solid](https://media.discordapp.net/attachments/884555645414699018/891739115060600832/unknown.png?width=749&height=657)
- Gorrión: Enemigo hostil que se mueve en semicírculos tocando el suelo (es decir, dando saltitos por el suelo), a lo largo de un radio de medio metro. Es a su vez el enemigo más numeroso. Ocupa ¼ de la escala de la protagonista.


![N|Solid](https://media.discordapp.net/attachments/884555645414699018/891737841741234226/unknown.png?width=758&height=657)

Aguilucho: Enemigo hostil que se mueve con una dirección fija cuyo destino será la posición del jugador en el momento en el que se genere el enemigo (no se actualizará de constante), es decir, si el jugador se mueve, no será perseguido. El movimiento que realiza este enemigo es con forma de parábola cóncava.

![N|Solid](https://st4.depositphotos.com/20277160/38579/v/600/depositphotos_385794022-stock-illustration-vector-of-flying-eagle-mascot.jpg)

| Daño producido |por los enemigos: |
| ------ | ------ |
| Gorrión: 0,5 corazones | Cuervo y Aguilucho: 1 corazón |
|Gaviota: | 1,5 corazones |

### 4.3.1 Controles
Controles de movimiento:
- Teclas “D” ó “Right Arrow” para movernos hacia la derecha
- Teclas “S” ó “Down Arrow” para agacharse
- Teclas “W”, “Up Arrow” ó “Space Bar” para saltar
- Teclas “A” ó “LeftArrow” para movernos hacia la izquierda
- Tecla “E” para consumir el power-up almacenado

- Menú de pausa: Al pulsar el botón de pausa situado en la parte superior derecha de la pantalla,  aparecerá  el menú de pausa que contendrá distintas opciones.

## 4.4 Objetos
Los objetos aparecerán aleatoriamente por el escenario de juego, y se recogen al colisionar con ellos, desapareciendo estos del mapa. En Peck disponemos de tres objetos:

- Llave para la jaula: al recogerla, Cathy abre su jaula y lanza  un periquito para eliminar varios cuervos cuando el periquito explota cerca de estos. Cathy dispone 2 periquitos por nivel , en su jaula 

![N|Solid](https://media.discordapp.net/attachments/884555645414699018/893092168477061130/llave.png)
![N|Solid](https://media.discordapp.net/attachments/884555645414699018/892690851443134484/unknown.png?width=492&height=657)


- Vendas: Recuperan un corazón entero de salud, nunca superando la vida máxima de 5 corazones.

![N|Solid](https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170811033/84161725-adhesivos-venda-salud-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg)

-Refresco :La velocidad de Cathy se duplica durante 5 segundos.
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
