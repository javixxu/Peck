import PowerUp from "./powerUp.js";

export default class Birdseed extends PowerUp {
 
  constructor(scene, player, x, y) {
    super(scene, x, y, 'birdseed');
  }

  
  preUpdate() {
    super.preUpdate();
    
     if (this.scene.physics.overlap(this.scene.player, this)) 
    {
      if(this.scene.player.current=='empty'){
        this.scene.powerUpSoundEffect();
        this.scene.player.seeAtUI('birdseed');
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
      }
    }
  }
}