import Obstacles from "./obstacles.js";
/** 
    * Clase que hereda de obstacles y representa el puddle. 
    * Cuando el player choque con él, se reducirán
    * tanto su velocidad como el alcance de su salto
    * durante 5 segundos. Solo aparece en el primer nivel
    */
export default class Puddle extends Obstacles {
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
