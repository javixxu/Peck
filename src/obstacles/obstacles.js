export default class Obstacles extends Phaser.GameObjects.Sprite {
    /*
    * Clase para los obstáculos
    */
    constructor(scene, x, y, name) {
        super(scene, x, y, name);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
    }
    preUpdate() {
        super.preUpdate();
    }
}