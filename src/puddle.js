import Obstacles from "./obstacles.js";

export default class Puddle extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene, player, x, y, name);
        this.body.enable = false;
    }

    preUpdate(t,dt) {

        super.preUpdate(t,dt);
        if (this.scene.physics.overlap(this.scene.player, this)) 
        {
            
        }
    }
}