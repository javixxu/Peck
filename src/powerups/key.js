import PowerUp from "./powerUp.js";

export default class Key extends PowerUp {
 
  constructor(scene, player, x, y) {
    super(scene, x, y, 'key');
  }

  
  preUpdate() {
    super.preUpdate();
    
     if (this.scene.physics.overlap(this.scene.player, this)) 
    {
      if(this.scene.player.current=='empty'){
        this.scene.powerUpPickSoundEffect();
        this.scene.player.seeAtUI('key');
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
      }
    }
  }
}