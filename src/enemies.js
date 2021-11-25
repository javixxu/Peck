export default class Enemies extends  Phaser.GameObjects.Sprite
{
    constructor(scene, player, x, y, name)
    {
        super(scene, x, y, name);
        this.scene.add.existing(this);
        //this.scene.physics.add.existing(this);
        //this.scene.physics.add.collider(this, player);
        //this.body.allowGravity = false;
        // Queremos que no se salga de los límites del mundo
        //this.body.setCollideWorldBounds();
        this.speedPos = 200;
        this.speedInv=-200;
        this.speed = -200;
    }

    collision()
    {
        this.setActive(false);
        this.setVisible(false);
        console.log("DESTRUIDO");
    }
}