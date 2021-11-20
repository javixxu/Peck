/**
 * Clase para los objetos estrella que el jugador ha de recoger
 * Una estrella aparece sobre una base. Cuando el jugador la recoge, se crea 
 * una nueva estrella en otra posición, si el juego no ha terminado.
 * @extends Phaser.GameObjects.Sprite
 */
export default class Star extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor de Star
   * @param {Sceme} scene Escena en la que aparece la estrella
   * @param {number} x coordenada x
   * @param {number} y coordenada y
   */
  constructor(scene, x, y) {
    super(scene, x, y, 'star');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, true);
    this.y -= this.height;
  
  }
  /**
   * Redefinición del preUpdate de Phaser
   * @override
   */
  preUpdate() {
    // IMPORTANTE: Si no ponemos esta instrucción y el sprite está animado
    // no se podrá ejecutar la animación del sprite. 
    super.preUpdate();
    if (this.scene.physics.overlap(this.scene.player, this)) {
      // Delegamos en la escena para decidir qué hacer al 
      // haber cogido una estrella
      
      this.scene.starPickt();
      this.destroy();
    }
  }
}