/**
 * Clase para los objetos estrella que el jugador ha de recoger
 * Una estrella aparece sobre una base. Cuando el jugador la recoge, se crea 
 * una nueva estrella en otra posición, si el juego no ha terminado.
 * @extends Phaser.GameObjects.Sprite
 */
export default class Cola extends Phaser.GameObjects.Sprite {
 
  constructor(scene, x, y) {
    super(scene, x, y, 'cola');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
    this.y -= this.height;
    //this.time=temp;
  }

  /**
   * Redefinición del preUpdate de Phaser
   * @override
   */
   preUpdate() {
    // IMPORTANTE: Si no ponemos esta instrucción y el sprite está animado
    // no se podrá ejecutar la animación del sprite. 
    super.preUpdate();
    let scene=this.scene;
    if (this.scene.physics.overlap(this.scene.player, this)) 
    {
      console.log(scene.player.speed);
      this.scene.speedUp();
      console.log(scene.player.speed);
      let timer=scene.time.addEvent( {
        delay:4000,
        callback:scene.player.setSpeed(),
        callbackScope: this.scene,
      });
      console.log(scene.player.speed);
      this.destroy();
    }
  }
}