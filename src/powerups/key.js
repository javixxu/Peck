import PowerUp from "./powerUp.js";
 /** 
  * Clase que hereda de PowerUp y representa la llave.
  * Al ser activado, se genera un trigger en la posición del jugador
  * que elimina a los enemigos en un rango 
  * de 500 píxeles de ancho y 300 de alto
  */
export default class Key extends PowerUp {
 
  constructor(scene, player, x, y) {
    super(scene, x, y, 'key');
    this.player = player;
  }

  preUpdate() {
    super.preUpdate();

    if (this.scene.physics.overlap(this.player, this)) {
      if (this.player.current == 'empty') {
        this.scene.powerUpPickSoundEffect();
        this.player.seeAtUI('key');
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
      }
    }
  }
}