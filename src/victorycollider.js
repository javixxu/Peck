
export default class VictoryCollider extends Phaser.GameObjects.Sprite
{
    constructor(scene, player, x, y) {
        super(scene,x, y, 'car'); 
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.scene.physics.add.collider(this, player);
    }
    preUpdate() {
        super.preUpdate();
        if(this.scene.physics.overlap(this.scene.player,this)){
            this.scene.scene.start('victoryscene');
        }
    }
}