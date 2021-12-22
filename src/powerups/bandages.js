import PowerUp from "./powerUp.js";
/**
  * Clase que hereda de PowerUp y representa las vendas.
  * Al ser utilizado, el jugador recupera una vida
  * (nunca superando su vida máxima, 5)
  */
export default class Bandages extends PowerUp {

  constructor(scene, x, y) {
    super(scene, x, y, 'bandage');
    this.body.setSize(50, 50);
  }

  preUpdate() {
    super.preUpdate();

    if (this.scene.physics.overlap(this.scene.player, this)) {
      if (this.scene.player.current == 'empty') {
        this.scene.powerUpPickSoundEffect();
        this.scene.player.seeAtUI('bandage');
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
      }
    }
  }
}