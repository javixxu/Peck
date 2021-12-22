import Obstacles from "./obstacles.js";

export default class Sewer extends Obstacles {
    constructor(scene, player, x, y, name) {
        super(scene, x, y, name);
        this.x = x;
        this.player = player;
        this.body.setSize(100, 25);
        this.passed = false;
        this.collision = false;
    }
    preUpdate() {
        if (!this.collision && this.scene.physics.overlap(this.player, this) && !this.player.seeVulnerability()) {
            this.Effect();
            this.scene.sewerSoundEffect();
            this.collision = true;
            this.collisionTimer();
        }

        if (this.x < this.player.x) this.passed = true;
        else if (this.x > this.player.x) this.passed = false;

    }

    isPassed() { return this.passed; }

    getPos() { return this.x; }

    collisionTimer() {
        let timer = this.scene.time.addEvent({
            delay: 5000,
            callback: this.collision = false,
            callbackScope: this
        });
    }
    Effect() {

        this.player.playerDamage(1);
        this.player.x = this.scene.UltimaSobrePasada();

    }

}