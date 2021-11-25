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

     this.resume = new Button(this,500,330,'button');
   }
    spawn(){
        this.scene.resume('level');
    }
 }