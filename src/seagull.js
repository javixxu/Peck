import Enemies from "./enemies.js";

export default class Seagull extends Enemies
{
    constructor(scene, player, x, y, name) {
        super(scene, player, x, y, name);
    }

    preUpdate(t,dt) {
        super.preUpdate(t,dt);
        this.setOrigin(3.5, 0.5);
        //Phaser.Actions.RotateAroundDistance(this, 400,  300, 0.02, 200);
        //Movimiento circular
        let tween = this.scene.tweens.add({
            targets: this,
            angle: 360.0,
            duration: 1300,
            repeat: 0
          });
      }
}