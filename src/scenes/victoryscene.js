/**
 * Escena de fin de juego. Cuando se han recogido todas las estrellas, se presenta un
 * texto que indica que el juego se ha acabado.
 * Si se pulsa cualquier tecla, se vuelve a iniciar el juego.
 */


 export default class Victoryscene extends Phaser.Scene {
   /**
   * Constructor de la escena
   */
  constructor() {
  super({ key: 'victoryscene' });
  }
   /**
    * Creación de la escena. Tan solo contiene el texto que indica que el juego se ha acabado
    * @override
    */
  create() {
  this.add.image(500,150,'ganar');

  this.botonStart= this.add.image(975,25,'replay').setScale(0.1).setScrollFactor(0).setInteractive();
  this.pause.on("pointerdown", () =>{
    this.scene.start('level');
   });
  /*
  this.input.keyboard.on('keydown', function (event) { 
    this.scene.start('level');
  }, this);
  */
  }
 
}