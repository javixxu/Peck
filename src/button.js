export default class Button extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
      super(scene, x, y, 'button');
      this.scene.add.existing(this).setInteractive();
      this.on("pointerdown", () =>{
        this.scene.spawn();
      });
    }
    
    preUpdate() {
      super.preUpdate();
      
    }
    
  }