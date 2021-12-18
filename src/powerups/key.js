import PowerUp from "./powerUp.js";

export default class Key extends PowerUp {
 
  constructor(scene, player, x, y) {
    super(scene, x, y, 'key');
    this.player=player;
  }

  
  preUpdate() {
    super.preUpdate();
    
     if (this.scene.physics.overlap(this.player, this)) 
    {
      if(this.player.current=='empty'){
        this.scene.powerUpPickSoundEffect();
        this.player.seeAtUI('key');
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
      }
    }
  }
}