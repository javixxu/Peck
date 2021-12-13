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
  create() {
    this.winmusic = this.sound.add("winmusic");
    this.clicksound= this.sound.add("buttonclick");
    this.winmusic.play();

    this.add.image(500, 250, 'backgroundvictory');
    this.add.image(500,150,'ganar').setScale(2);

    this.botonStart= this.add.image(400,430,'replay').setScale(1.2).setScrollFactor(0).setInteractive();
    this.exit = this.add.image (550, 430, 'exit').setScale(1.5).setInteractive();

    this.botonStart.on("pointerdown", () =>{
    this.winmusic.stop();
    this.clicksound.play();
    this.scene.start('level');
    });

    this.exit.on("pointerdown", ()=> {
      this.scene.stop();
      this.winmusic.stop();
      this.clicksound.play();
      this.scene.start('menu');
    });
  
  /*
  this.input.keyboard.on('keydown', function (event) { 
    this.scene.start('level');
  }, this);
  */
  }
 
}