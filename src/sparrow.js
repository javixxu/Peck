import Enemies from "./enemies.js";
/**
 * Clase que representa el cuervo.
 */
export default class Sparrow extends Enemies {
 
   constructor(scene, player, x, y, name) {
    super(scene, player, x, y, name);
    
    this.scene.physics.add.existing(this);
    //this.body.allowGravity = false;
    this.body.setBounceY(1);
    this.body.setCollideWorldBounds();
    this.play('sparrow_fly');
    this.scene.tweens.add({
      targets: this,
      x:150,
      duration:1600,
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
  }
}