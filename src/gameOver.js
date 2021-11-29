/**
 * Escena de gameOver. 
 */
import Button from "./button.js";
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
   
    this.botonStart=new Button(this,500,330,'replay');
    /*
    this.input.keyboard.on('keydown', function (event) { 
      this.scene.start('level');
    }, this);
    */

  }
spawn(){
    this.scene.start('level');
}
}