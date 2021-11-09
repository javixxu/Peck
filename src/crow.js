
/**
 * Clase que representa el cuervo.
 */
export default class Crow extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor del jugador
   * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */
  
  constructor(scene, x, y) {
    super(scene, x, y, 'crow');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.allowGravity = false;
    // Queremos que el cuervo no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    //velocidades para los choques
    this.speedPos = 200;
    this.speedInv=-200;
    this.speed = -200;
  }
  /**
   * Métodos preUpdate de Phaser. Se encarga de mover y animar al cuervo
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    //movimiento
    this.body.setVelocityX(this.speed);
        //si choca derecha
    
    if(this.body.blocked.right){
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