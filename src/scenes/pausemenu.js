/**
 * Escena de pausa de juego. 
 * Si se pulsa el botón de resume, se vuelve a iniciar el juego.
 */
 export default class PauseMenu extends Phaser.Scene {
 
  constructor() {
    super({ key: 'pausemenu' });
  }
  
  create() {
    this.background = this.add.image(500,250,'panel');
    this.resume = this.add.image(500,150,'resume').setScale(4,4).setInteractive();
    this.exit= this.add.image(500,500,'exit').setScale(4,4).setInteractive();
   
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