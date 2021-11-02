import scene from './scene.js';
/**
 * Clase para los powerUp refresco, que al ser
 * recogidos por el jugador, duplican su velocidad durante
 * 5 segundos
 * @extends Phaser.GameObjects.Sprite
 */
 export default class Cola extends Phaser.GameObjects.Sprite {
  
    /**
     * Constructor de Star
     * @param {Sceme} scene Escena en la que aparece la estrella
     * @param {number} x coordenada x
     * @param {number} y coordenada y
     */
    constructor(scene, x, y) {
      super(scene, x, y, 'cola');
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds();
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
         
          this.destroy(); 
          this.scene.cola();
          
        //this.player.speed=this.player.poweredSpeed;
        
          
      }
    }
  }