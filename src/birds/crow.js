import Enemies from "./enemies.js";
/**
 * Clase que representa el cuervo.
 */
export default class Crow extends Enemies {

  constructor(scene, player, x, y, name) {
    super(scene, player, x, y, name);

    this.scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.player = player;
    this.body.setCollideWorldBounds();
    this.body.setSize(80, 55);
    this.play('raven_right');
    this.tween = this.scene.tweens.add({
      targets: this,
      x: this.x + 600,
      duration: 5000,
      ease: 'Sine.easeInOut',
      flipX: true,
      yoyo: true,
      repeat: -1,
    })
  }

  preUpdate(t, dt) {
    if (this.scene.playing == false) {
      this.tween.pause();
    }
    else {
      this.tween.resume();
      super.preUpdate(t, dt);
      this.crowMovement();
      this.Attack();
    }
  }

  crowMovement() {
    if (!this.destroyed)
      this.scene.physics.moveToObject(this, this.scene.player, 300);
  }

  Attack() {
    if (!this.destroyed) {
      if (this.scene.physics.overlap(this.player, this) && !this.player.seeVulnerability()) {
        this.player.playerDamage(1);
        this.player.changeInvulnerability();
      }
    }
  }
}