import scene from './scene.js'

/**
 * Clase que representa el cuervo.
 */
export default class Cuervo extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor del jugador
   * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */
  
  constructor(scene, x, y) {
    super(scene, x, y, 'cuervo');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 250;
    
  
    //NO BORRAR PUEDE SER UTILIZADO MAS ADELANTE
    //this.cursors = this.scene.input.keyboard.createCursorKeys();
   
    
  }
  

 
   
  
  /**
   * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
   * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
   * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
   * @override
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
   
 
   if(this.body.blocked.right){
       this.setFlip(true,false);
       this.body.setVelocityX(-this.speed);
   }
   else if(this.body.blocked.left){
    this.setFlip(true,false);
    this.body.setVelocityX(this.speed);
}
//else this.body.setVelocityX(this.speed);
    
    
  }
 
}