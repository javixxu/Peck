export default class Button extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y,nombre) {
    super(scene, x, y, nombre);
    this.scene.add.existing(this).setInteractive();
    this.on("pointerdown", () =>{
      this.scene.spawn()
    });
  }
  
  preUpdate() 
  {
    super.preUpdate();
  }
  
}
