import Enemies from "./enemies.js";
/**
 * Clase que representa el cuervo.
 */
export default class Crow extends Enemies {
  
  /**
   * Constructor del jugador
   * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */
  
   constructor(scene, player, x, y, name) {
    super(scene, player, x, y, name);
    
    
    //velocidades para los choques
    //this.speedPos = 200;
    //this.speedInv=-200;
    //this.speed = -200;
  }
  /**
   * Métodos preUpdate de Phaser. Se encarga de mover y animar al cuervo
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    if (this.scene.physics.overlap(this.scene.player, this))
    {
      this.collision();
    }
    //movimiento
    this.body.setVelocityX(this.speed);
    //si choca derecha
    if(this.x > 1000){
      this.setFlip(true,false);
      this.speed=this.speedInv;//velocidad negativa
      this.play('raven_right');
    }
        //si choca izquierda
    else if(this.body.blocked.left){
      this.setFlip(false,false);
      this.speed=this.speedPos;//velocidad positiva
      this.play('raven_right');
    }
  }
}