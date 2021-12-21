export default class PowerUp extends Phaser.GameObjects.Sprite {
    /*
    * Clase para los Power Ups
    */
    constructor(scene, x, y, name) {
        super(scene, x, y, name);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
    }
}
