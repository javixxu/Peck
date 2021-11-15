/**
 * Escena de fin de juego. Cuando se han recogido todas las estrellas, se presenta un
 * texto que indica que el juego se ha acabado.
 * Si se pulsa cualquier tecla, se vuelve a iniciar el juego.
 */
export default class gameOver extends Phaser.Scene
{
  /**
  * Constructor de la escena
  */
  constructor() {
    super({ key: 'gameOver' });
  }
  /**
   * Creación de la escena. Tan solo contiene el texto que indica que el juego se ha acabado
   * @override
   */
  create() {
    this.add.text(520, 350, 'Cathy Ha Muerto! :(\nPulsa cualquier tecla para volver a jugar')
      .setOrigin(0.5, 0.5)  // Colocamos el pivote en el centro de cuadro de texto 
      .setAlign('center');  // Centramos el texto dentro del cuadro de texto

    this.add.image(500,150,'gameover')

    this.input.keyboard.on('keydown', function (event) { 
      this.scene.start('level');
    }, this);
  }
}