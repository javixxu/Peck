import Obstacles from "./obstacles.js";

export default class Puddle extends Obstacles {
    /*
    * Clase que hereda de obstáculos y representa el puddle. Se pasa como parámetro el player, para modificar parámetros suyos.
    */
    constructor(scene, player, x, y, name) {
        super(scene, x, y, name);
        this.player = player;
    }
    preUpdate() {
        super.preUpdate();

        if (this.scene.physics.overlap(this.player, this)) {
            this.effect();
        }
    }
    effect() {
        this.player.speed = 200;
        this.player.jumpSpeed = -250;
        // Invulnerabilidad del jugador
        let timer = this.scene.time.addEvent({
            delay: 5000,
            callback: this.player.setSpeed,
            callbackScope: this.player
        });
    }
}
