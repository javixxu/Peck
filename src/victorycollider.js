
export default class VictoryCollider extends Phaser.GameObjects.Sprite {
    constructor(scene, player, x, y) {
        super(scene, x, y, 'car');
        this.scene = scene;
        this.player=player;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.control=false;
    }
    preUpdate() {
        super.preUpdate();
        if (!this.control && this.scene.physics.overlap(this.player, this)) {
            this.control=true;
            this.scene.soundtrack.stop();
            this.scene.victory();
        }
    }
}