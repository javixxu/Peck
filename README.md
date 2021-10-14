# FRENZY RAIL

## _Grupo 11_

Documento de diseño de videojuego
Nombre de los autores y correo electrónico de contacto: 
- Simona Antonova Mihaylova simoanto@ucm.es
- Sara Isabel García Moral sigms02@ucm.es
- Javier Comas de Frutos javcomas@ucm.es
- Adrián Montero Castrillo admont02@ucm.es

Versión 1.1 – 19 de septiembre de 2021

## Características

| Resumen |Grupo 11 |
| ------ | ------ |
| Géneros: Sigilo, Acción | Modos: Single player |
|Público objetivo: A partir de 12 años| Plataformas: Web|
| Requisitos mínimos: Google Chrome(recomendado)|Idioma: Inglés|

## Descripción
 
 Frenzy Rail es un juego estilo top-down ambientado en el interior de un tren , donde nuestro protagonista, Guy Haines, es una estrella del tenis que tiene que viajar a Berlín para  participar en un torneo. Sin embargo, su trayecto se ve adulterado por un chantaje, según el cual deberá matar a ciertos pasajeros sin ser visto, si reniega, su padre será asesinado. Guy tendrá que hacer frente a esta adversidad y convertirse en un sigiloso homicida, evadiendose de las atentas miradas de los pasajeros.


## _2.1 Mecánica_
### 2.1.1 Mecánicas del personaje
- Vida: Nuestro personaje no tendrá puntos de salud ni una barra de vida como tal. La partida se reseteara al último punto de control si nos descubren.
- Movimiento:  Movimiento en 8 direcciones en un plano 2D de forma continua. Nuestro personaje se puede desplazar de dos maneras:
> Andando: Desplazamiento normal de nuestro jugador, a velocidad constante.

>Corriendo: Disponemos de una barra de estamina, que al activarla nos permite desplazarnos al doble de velocidad que cuando el jugador va andando, durante un tiempo limitado de 3 segundos. Podremos restablecer esta barra consumiendo un café.

- Acciones:
>-Interactuar con objetos varios para resolver puzzles y avanzar.

>-Matar: elimina objetivos a melé con un cuchillo o con veneno en objetos que entregará a sus objetivos.

>-Dialogar: conversaciones triviales y/o obtener pistas de otros personajes.

>-Disfrazarse: el personaje principal podrá cambiar de aspecto pero solo en una habitación concreta (el baño)

>-Estamina: El personaje dispondrá de una barra de resistencia que se gastará si corre y que solo se             rellenará mediante el consumo de objetos específicos (café). Si la barra se vacía por completo el personaje no podrá correr.

### 2.1.2 Mecánicas de escenario
- Objetos: Se podrá interactuar con objetos, para capacitarnos de lograr diversos objetivos y poder acceder a las distintas zonas del mapa al encadenar una serie de acciones a través de puertas, algunas cerradas. Parte del escenario estará bloqueada y será accesible involucrando objetos  

- Pasajeros: A lo largo del mapa se distribuyen una serie de pasajeros que se moverán por el escenario de juego. Algunos de ellos serán claves para llevar a cabo ciertos asesinatos, proporcionando pistas.

- Contrarreloj: Si el protagonista es visualizado por uno de los objetivos, tendrá 3 segundos para escapar de su campo de visión. Por otro lado, si un pasajero nos ve asesinando a un objetivo, perderemos y volveremos al último punto de control. 

### 2.1.2.1 Mecánicas de los enemigos
- Vida: Los objetivos del personaje morirán al asestarles un único golpe.
- Tipos: 
>Estáticos: enemigos que están fijos en un lugar.

>Dinamicos: enemigos que se moverán por el mapa y dificultarán su asesinato

### 2.1.3 Controles
- Personaje principal:
>Flechas y las teclas WASD: movimiento

>Espacio: Interacción con los objetos.

>Q: Para abrir nuestro cuaderno de misiones.

>Click Derecho: coger objetos y interactuar con ellos

>E: Para acceder al inventario de objetos 

### 2.1.4 Cámara
Se utiliza una vista top down 2D.
La cámara se encuentra fija enfocando al vagón completo, haciendo que el personaje se pueda mover libremente. Cuando pase a otro vagón, la cámara cambia a esa ubicación mostrándola al completo.

## 2.2 Dinámica
La dinámica principal de Frenzy Rail consiste en ir asesinando a los objetivos que nos marca el propio juego, moviéndonos por los vagones del tren. Para ello será necesario ir combinando las distintas mecánicas y elementos interactivos del escenario.

La forma de ganar será eliminar a todos los enemigos sin ser visto y llegar a Berlín. En definitiva, el jugador no puede ser pillado con las manos en la masa.

Cada vez que el jugador es visto asesinando por un integrante del vagón o por el propio objetivo, la partida se reanudará en el último punto de guardado (checkpoint). Si estos sucesos ocurren en tres ocasiones, seremos detenidos por la policía y perderemos la partida.

## 2.3 Estética
Frenzy Rail aporta al jugador la sensación de estar atrapado en una pesadilla. Guy Haines se ve obligado a acabar con sus objetivos, para poder salvar la vida de su padre. Asesinando fríamente en un tren, sin saber siquiera si las víctimas son merecedoras de ello, sintiéndote en la piel de un criminal sin escrúpulos, cuando eres únicamente un deportista de viaje a Berlín. Por otro lado, proporcionará al jugador unas ganas abrumadoras de acabar con el chantajista, y así poder continuar con normalidad su vida de deportista.

# 3. Menús y modos de juego
Frenzy Rail dispondrá de diversos menús:

- Menú principal: El juego contará con un menú principal que tendrá un botón de jugar(únicamente existe el modo Un Jugador), información sobre los controles y redes sociales del juego.
- Menú de pausa: Desde la propia partida podremos acceder a un menú de pausa. Incluirá un botón de reanudar partida, acceso al menú de ajustes y vuelta al menú principal, 
- Menú De Ajustes:El jugador podrá acceder a información sobre los controles y regular tanto el volumen como el brillo.

## 3.1 Configuración
El menú de ajustes dispondrá las opciones de:

- Ajustar el volumen del juego
- Ajustar el brillo
- Mapa de los controles


