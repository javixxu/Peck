import Star from './star.js';
import scene from './scene.js'

/**
 * Clase que representa el jugador del juego. El jugador se mueve por el mundo usando los cursores.
 * También almacena la puntuación o número de estrellas que ha recogido hasta el momento.
 */
export default class Player extends Phaser.GameObjects.Sprite {
  
  /**
   * Constructor del jugador
   * @param {Phaser.Scene} scene Escena a la que pertenece el jugador
   * @param {number} x Coordenada X
   * @param {number} y Coordenada Y
   */
  
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 250;
    this.jumpSpeed = -300;
    // Esta label es la UI en la que pondremos la puntuación del jugador
    this.label = this.scene.add.text(10, 10, "");
    //NO BORRAR PUEDE SER UTILIZADO MAS ADELANTE
    //this.cursors = this.scene.input.keyboard.createCursorKeys();
   
    this.right=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.Jump=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.Down=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.Up=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

    this.updateScore();
  }
  

  /**
   * El jugador ha recogido una estrella por lo que este método añade un punto y
   * actualiza la UI con la puntuación actual.
   */
  point() {
    this.score++;
    this.updateScore();
  }
  
  /**
   * Actualiza la UI con la puntuación actual
   */
  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }

  /**
   * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
   * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
   * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
   * @override
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    
    if((this.Jump.isDown||this.Up.isDown)&&this.body.onFloor()){
      this.body.setVelocityY(this.jumpSpeed);
      //this.stop();
      //this.play('idle_anim');
    }
    else if(this.Up.isDown){
      //this.stop();
      //this.play('idle_anim');
      //animacion de k se agache
      //Sprite de k este agachado
    }
    if(this.right.isDown){
      this.body.setVelocityX(this.speed); 
      
      this.setFlip(false,false);
      this.stop();
      this.play('run_anim');
    } 
    else if(this.left.isDown){
      this.body.setVelocityX(-this.speed);
      this.setFlip(true,false);
      this.stop();   
      this.play('run_anim');
    }
    else {
      this.body.setVelocityX(0);
      //this.stop();   
      //this.play('idle_anim');
    }
    
  }
  
}
