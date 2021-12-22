import Enemies from "./enemies.js";
/**
 * Clase que que hereda de Enemies y representa el cuervo.
 * Al chocar con el jugador le hará un daño de 1 corazón
 */
export default class Crow extends Enemies {

  constructor(scene, player, x, y, name) {
    super(scene, player, x, y, name);

    this.scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.player = player;
    this.body.setCollideWorldBounds();
    this.body.setSize(50, 20);
    this.setDamageAttack=1;
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
    if (!this.scene.playing) {
      this.tween.pause();
    }
    else {
      this.tween.resume();
      super.preUpdate(t, dt);
      this.crowMovement();
      this.attack();
    }
  }

  crowMovement() {
    if (!this.destroyed)
      this.scene.physics.moveToObject(this, this.scene.player, 250);
  }

  attack() {
    if (!this.destroyed) {
      if (this.scene.physics.overlap(this.player, this) && !this.player.seeVulnerability()) {
        this.player.playerDamage(this.setDamageAttack);
        this.player.changeInvulnerability();
      }
    }
  }
}