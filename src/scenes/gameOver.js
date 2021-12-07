/**
 * Escena de gameOver. 
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

    this.add.image(500,150,'gameover');
   
    this.botonStart= this.add.image(925,25,'replay').setScale(0.25).setScrollFactor(0).setInteractive();
    this.botonStart.on("pointerdown", () =>{
      this.scene.start('level');
     });
    /*
    this.input.keyboard.on('keydown', function (event) { 
      this.scene.start('level');
    }, this);
    */

  }

}