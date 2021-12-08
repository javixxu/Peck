/**
 * Escena de pausa de juego. 
 * Si se pulsa el botón de resume, se vuelve a iniciar el juego.
 */
 export default class PauseMenu extends Phaser.Scene {
 
  constructor() {
    super({ key: 'pausemenu' });
  }

  create() {
    this.background = this.add.image (500, 250, 'panel');
    this.resume = this.add.image (500, 100, 'button').setScale(1.2).setInteractive();
    this.soundControl = this.add.image (500, 250, 'sound').setScale(1.5).setInteractive();
    this.exit= this.add.image (500, 400, 'exit').setScale(1.5).setInteractive();
    this.clicksound= this.sound.add("buttonclick");
   
    this.resume.on("pointerdown", ()=> {
      this.scene.stop();
      this.clicksound.play();
      this.scene.resume('level');
    });
    this.exit.on("pointerdown", ()=> {
      this.scene.stop();
      this.scene.stop('level');
      this.clicksound.play();
      this.scene.start('menu');
    });
  } 
}