import Enemies from "./enemies.js";
/**
 * Clase que hereda de Enemies y representa el gorrión.
 *  Al chocar con el jugador le hará un daño de 0.5 corazones
 */
export default class Sparrow extends Enemies {

  constructor(scene, player, x, y, name) {
    super(scene, player, x, y, name);

    this.scene.physics.add.existing(this);
    this.player = player;
    this.body.setBounceY(1);
    this.body.setSize(40, 20);
    this.body.setCollideWorldBounds();
    this.play('sparrow_fly');
    // Tween de movimiento del gorrión
    this.tween = this.scene.tweens.add({
      targets: this,
      x: this.x + 350,
      duration: 1600,
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
      this.attack();
    }
  }

  attack() {
    if (!this.destroyed) {
      if (this.scene.physics.overlap(this.player, this) && !this.player.seeVulnerability()) {
        this.player.playerDamage(0.5);
        this.player.changeInvulnerability();
      }
    }
  }
}