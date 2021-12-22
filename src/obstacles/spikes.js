import Obstacles from "./obstacles.js";

export default class Spikes extends Obstacles {
    /*
    * Clase que hereda de obstáculos y representa los pinchos. Se pasa como parámetro el player, para hacerle daño.
    */
    constructor(scene, player, x, y, name) {
        super(scene, x, y, name);
        this.player = player;
        this.body.setSize(90, 35);
    }
    preUpdate() {
        super.preUpdate();

        if (this.scene.physics.overlap(this.player, this) && !this.player.seeVulnerability()) {
            this.effect();
        }
    }
    effect() {
        this.player.playerDamage(0.5);
        this.player.changeInvulnerability()
    }

}
