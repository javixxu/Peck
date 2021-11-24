
export default class Cola extends Phaser.GameObjects.Sprite {
 
  constructor(scene, x, y) {
    super(scene, x, y, 'cola');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
    this.y -= this.height;
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
    }
  }
}