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
    const config = {
      mute: false,
      volume: 0.1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.winmusic = this.sound.add("winmusic",config);
    this.winmusic.play();
    this.add.image(500,150,'ganar');

    this.botonStart= this.add.image(925,25,'replay').setScale(0.25).setScrollFactor(0).setInteractive();
    this.botonStart.on("pointerdown", () =>{
    this.winmusic.stop();
    this.scene.start('level');
    });
  /*
  this.input.keyboard.on('keydown', function (event) { 
    this.scene.start('level');
  }, this);
  */
  }
 
}