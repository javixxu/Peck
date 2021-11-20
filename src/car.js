import Obstacles from "./obstacles.js";

export default class Car extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene, player, x, y, name); 
        
        this.scene.physics.add.collider(this, player);
    }
}