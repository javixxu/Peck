import PowerUp from "./powerUp.js";
/** 
  * Clase que hereda de PowerUp y representa la cola.
  * Al ser activado, la velocidad de player se duplicará
  * durante 5 segundos.
  */
export default class Cola extends PowerUp {
  constructor(scene, player, x, y) {
    super(scene, x, y, 'cola');
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