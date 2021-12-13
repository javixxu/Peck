import Obstacles from "./obstacles.js";

export default class Fence extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene, x, y, name);
        this.scene.physics.add.collider(this, player);
        this.body.setSize(225, 195);
    }
}