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

    const config = {
      mute: false,
      volume: 0.4,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };
    this.gameovermusic = this.sound.add("gameovermusic",config);
    this.clicksound= this.sound.add("buttonclick");
    this.gameovermusic.play();
    
    this.add.image(500,150,'gameover');
   
    this.botonStart= this.add.image(400,430,'replay').setScale(1.2).setScrollFactor(0).setInteractive();
    this.exit = this.add.image (550, 430, 'exit').setScale(1.5).setInteractive();

    this.botonStart.on("pointerdown", () =>{
      this.scene.start('level');
      this.gameovermusic.stop();
      this.clicksound.play();
     });

    this.exit.on("pointerdown", ()=> {
      this.scene.stop();
      this.clicksound.play();
      this.gameovermusic.stop();
      this.scene.start('menu');
    });
    /*
    this.input.keyboard.on('keydown', function (event) { 
      this.scene.start('level');
    }, this);
    */

  }

}