export default class PowerUp extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, name)
    {
        super(scene, x, y, name);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
    }
}
