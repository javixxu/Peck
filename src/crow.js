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
    
    this.play('raven_right');
    this.scene.tweens.add({
      targets: this,
      x:700,
      duration:1700,
      ease: 'Sine.easeInOut',
      flipX: true,
      yoyo: true,
      repeat: -1,
    })
  }
  /**
   * Métodos preUpdate de Phaser. Se encarga de mover y animar al cuervo
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    this.crowAttack();
    
  }
  crowAttack(){
    this.scene.physics.moveToObject(this,this.scene.player,300);
  }
  
}