import Enemies from "./enemies.js";
/**
 * Clase que que hereda de Enemies y representa la gaviota.
 * Al chocar con el jugador le hará un daño de 1.5 corazones
 */
export default class Seagull extends Enemies {
  constructor(scene, player, x, y) {
    super(scene, player, x, y);
    this.scene = scene; //Referencia a la escena
    this.player = player; //Referencia al player
    let offset = 80; //Distancia entre el centro y la gaviota
    this.container = this.scene.add.container(x, y);
    const centro = this.scene.add.image(0, 0, 'center').setVisible(false); //Imagen del centro
    this.bird = this.scene.physics.add.sprite(offset, 0, 'sg');
    this.bird.body.allowGravity = false; //Quitarle la gravedad a la gaviota
    this.bird.body.setSize(60, 25);
    //Animacion de la gaviota cuando no esta pausado
    if (this.scene.playing) { this.bird.play('seagull_fly'); }
    //Rellenar el container
    this.container.add([centro, this.bird]);
  }

  preUpdate(t, dt) {

    if (this.scene.playing) {
      super.preUpdate(t, dt);

      const angle = 0.02; //Rotacion 
      this.container.rotation -= angle; //Rotacion del container
      this.bird.rotation += angle; //correcion para que la gaviota no se gire raro
      this.attack();

      if (this.scene.physics.overlap(this.bird, this.scene.trigger)) {
        this.setActive(false);
        this.setVisible(false);
        this.bird.setVisible(false);
        this.bird.setActive(false);
        this.destroy();
        this.bird.destroy();
      }
    }
    else {
      this.bird.play('seagull_fly');
    }
  }
  attack() {
    if (this.scene.physics.overlap(this.player, this.bird) && !this.player.seeVulnerability()) {
      this.player.playerDamage(1.5);
      this.player.changeInvulnerability();
    }
  }
}