import Enemies from "./enemies.js";
/**
 * Clase que representa el aguilucho.
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
        this.fallSpeed = 150;
        this.descenso = true;
        this.ascenso = false;
        this.lastPos;
        this.collision = true;
        this.play('harrier_anim');

    }
    preUpdate(t, dt) {

        if (this.scene.playing == true) {
            super.preUpdate(t, dt);
            if (this.x - this.player.x <= 375) {
                //CASO 1 EL BICHO TIENE QUE BAJAR DE FORMA DIAGONAL
                //if (!this.destroyed) {
                    if (this.descenso && this.y + 55 < this.playerY) {
                        this.body.setVelocity(-this.fallSpeed, this.fallSpeed);
                        this.lastPos = this.x;
                    }
               // }

                //CASO HA LLEGADO A SU LIMITE DE MOVIMIENTO RECTO Y QUEREMOS Q ASCIENDA

                else if (!this.destroyed && this.x < this.lastPos - 200) {
                    this.body.setVelocityY(-this.fallSpeed);
                    this.descenso = false;
                    this.ascenso = true;
                }
                //CASO HAY LLEGADO A SU LIMITE DE MOVIMIENTO LATERAL DESCENDENTE Y QUEREMOS Q AVANCE RECTO UNOS METROS
                else if (!this.destroyed && !this.ascenso) {
                    this.body.setVelocityY(0);
                    this.descenso = false;
                }
            }
            //si se va fuera del rango queremos q ascienda
            else if (!this.destroyed && !this.descenso) {
                this.body.setVelocityY(-this.fallSpeed);
            }
            //tener cuidado con el timer de invencibilidad del jugador
            if (!this.destroyed) {
                if (this.collision && this.scene.physics.overlap(this.player, this) && !this.player.seeVulnerability()) {
                    this.player.playerDamage(1);
                    this.collision = false;
                    console.log('CHOQUEE')
                }
            }

        }

    }
}