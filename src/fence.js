import Obstacles from "./obstacles.js";

export default class Fence extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene, player, x, y, name); 
    }
    
      preUpdate() {
        super.preUpdate();
      }
}