export default class Enemies extends Phaser.GameObjects.Sprite {
    constructor(scene, player, x, y, name) {
        super(scene, x, y, name);
        this.scene.add.existing(this);
        this.speedPos = 200;
        this.speedInv = -200;
        this.speed = -200;
        this.destroyed = false;
    }

    collision() {
        this.setActive(false);
        this.setVisible(false);
    }
    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        if (this.scene.physics.overlap(this, this.scene.trigger)) {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
            this.destroyed = true;
        }
    }
}