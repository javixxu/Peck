import PowerUp from "./powerUp.js";

export default class Cola extends PowerUp {
 
  constructor(scene, x, y) {
    super(scene, x, y, 'cola');
  }

  /**
   * Redefinición del preUpdate de Phaser
   * @override
   */
   preUpdate() {
     
    super.preUpdate();
    
     if (this.scene.physics.overlap(this.scene.player, this)) 
    {
      this.setActive(false);
      this.setVisible(false);
      this.desactive();
    }
  }
}