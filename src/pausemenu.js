/**
 * Escena de pausa de juego. 
 * Si se pulsa el botón de resume, se vuelve a iniciar el juego.
 */
 export default class PauseMenu extends Phaser.Scene {
 
  constructor() {
    super({ key: 'pausemenu' });
  }
   /**
    * Creación de la escena. Tan solo contiene el texto que indica que el juego se ha acabado
    * @override
    */
  create() {
    this.background = this.add.image(500,250,'panel');
    this.resume = this.add.image(500,100,'resume').setScale(0.5,0.5).setInteractive();
    this.exit= this.add.image(500,400,'resume').setScale(0.5,0.5).setInteractive();
   
    this.resume.on("pointerdown", ()=> {
    this.scene.stop();
    this.scene.resume('level');
    });
    this.exit.on("pointerdown", ()=> {
      this.scene.stop();
      this.scene.stop('level');
      this.scene.start('menu');
      });
  } 
}