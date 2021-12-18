
export default class VictoryCollider extends Phaser.GameObjects.Sprite {
    constructor(scene, player, x, y) {
        super(scene, x, y, 'car');
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.scene.physics.add.collider(this, player);
    }
    preUpdate() {
        super.preUpdate();
        if (this.scene.physics.overlap(this.scene.player, this)) {
            this.scene.soundtrack.stop();
            if(this.scene.scene.key=='level2') this.scene.scene.start('victoryscene');
            else {this.win=true; this.scene.scene.start('level2');}
        }
    }
}