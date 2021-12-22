import Enemies from "./enemies.js";
/**
 * Clase que que hereda de Enemies y representa el aguilucho.
 * Al chocar con el jugador le hará un daño de 1 corazón
 */
export default class Harrier extends Enemies {
    constructor(scene, player, x, y, name) {
        super(scene, player, x, y, name);
        this.player = player;
        this.playerX = this.player.x;
        this.playerY = this.player.y;
        this.scene.physics.add.existing(this);
        this.body.allowGravity = false;
        this.body.setBounceY(1);
        this.body.setCollideWorldBounds();
        this.body.setSize(80, 30);
        this.setDamageAttack=1;
        this.fallSpeed = 150;
        this.descenso = true;
        this.ascenso = false;
        this.lastPos;
        this.collision = true;
        this.play('harrier_anim');

    }
    preUpdate(t, dt) {

        if (this.scene.playing) {
            super.preUpdate(t, dt);
            if (this.x - this.player.x <= 375) {
                // Bajar diagonal
                if (!this.destroyed) {
                    if (this.descenso && this.y + 55 < this.playerY) {
                        this.body.setVelocity(-this.fallSpeed, this.fallSpeed);
                        this.lastPos = this.x;
                    }
                }

                // Ascender

                else if (!this.destroyed && this.x < this.lastPos - 200) {
                    this.body.setVelocityY(-this.fallSpeed);
                    this.descenso = false;
                    this.ascenso = true;
                }
                // Avanza recto
                else if (!this.destroyed && !this.ascenso) {
                    this.body.setVelocityY(0);
                    this.descenso = false;
                }
            }
            // Ascender
            else if (!this.destroyed && !this.descenso) {
                this.body.setVelocityY(-this.fallSpeed);
            }
            // Invencibilidad del jugador
            if (!this.destroyed) {
                this.attack();
            }

        }

    }
    attack() {
        if (this.collision && this.scene.physics.overlap(this.player, this) && !this.player.seeVulnerability()) {
            this.player.playerDamage(this.setDamageAttack);
            this.collision = false;

        }
    }
}