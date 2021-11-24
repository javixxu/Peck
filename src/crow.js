import Enemies from "./enemies.js";
/**
 * Clase que representa el cuervo.
 */
export default class Crow extends Enemies {
  
  /**
   * Constructor del cuervo
   * @param {Phaser.Scene} scene Escena a la que pertenece el cuervo
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */
  
   constructor(scene, player, x, y, name) {
    super(scene, player, x, y, name);
    
    this.play('raven_right');
    this.scene.tweens.add({
      targets: this,
      x:1200,
      duration:1700,
      ease: 'Sine.easeInOut',
      flipX: true,
      yoyo: true,
      repeat: -1,
    })
  }
  
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    this.crowAttack();
    
  }
  crowAttack(){
    this.scene.physics.moveToObject(this,this.scene.player,300);
  }
  
}