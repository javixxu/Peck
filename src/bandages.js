import PowerUp from "./powerUp.js";

export default class Bandages extends PowerUp{
    constructor(scene, x, y) {
        super(scene, x, y, 'bandage');
      
        
      }
    effect(){
        this.scene.bandagePickt();
    }
    preUpdate() {
     
        super.preUpdate();
        
         if (this.scene.physics.overlap(this.scene.player, this)) 
        {
         this.effect();
         this.destroy();
        }
      }
}