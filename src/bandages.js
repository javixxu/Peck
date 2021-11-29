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
          if(this.scene.player.current=='empty'){
            this.scene.player.seeAtUI('bandage');
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
          }
         
        
        }
      }
}