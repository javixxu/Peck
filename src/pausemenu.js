/**
 * Escena de pausa de juego. 
 * Si se pulsa el botón de resume, se vuelve a iniciar el juego.
 */
 import Button from "./button.js";

 export default class PauseMenu extends Phaser.Scene
 {
   /**
   * Constructor de la escena
   */
   constructor() {
     super({ key: 'pausemenu' });
   }
   /**
    * Creación de la escena. Tan solo contiene el texto que indica que el juego se ha acabado
    * @override
    */
   create() {
       this.fondo = this.add.image(400,300,'pausebg');
     this.resume = this.add.image(500,300,'resume');
     this.resume.setInteractive();
     this.resume.on("pointerdown", ()=> {
        this.scene.stop();
        this.scene.resume('level');
     });
   }
 }