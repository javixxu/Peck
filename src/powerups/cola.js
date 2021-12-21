import PowerUp from "./powerUp.js";

export default class Cola extends PowerUp {
  /*
  * Clase que hereda de PowerUp y representa la cola.
  */
  constructor(scene, player, x, y) {
    super(scene, x, y, 'cola');
    //this.player = player;
  }
  preUpdate() {
    super.preUpdate();

    if (this.scene.physics.overlap(this.scene.player, this)) {
      if (this.scene.player.current == 'empty') {
        this.scene.powerUpPickSoundEffect();
        this.scene.player.seeAtUI('cola');
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
      }
    }
  }
}