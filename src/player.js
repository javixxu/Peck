import Star from './star.js';
import scene from './scene.js';
import UIPlayer from './UIPlayer.js';
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
  constructor(scene, x, y, numslife) {
    
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.speedAux=this.speed;
    //this.speedAux=this.speed;
    this.jumpSpeed = -400;
    // Esta label es la UI en la que pondremos la puntuación del jugador
    this.label = this.scene.add.text(850, 10, "");
    this.label.setScrollFactor(0);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
   
    this.lifes=numslife;
    this.right=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.Jump=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.jump=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //this.pintarVidas();
    this.powerups;
    this.UI= new UIPlayer(this.scene,this,numslife,this.score,this.powerups);
    this.updateScore();
    this.lifes=3;
    this.UI.ActualizarVidas(this.lifes);
    
  }
  PerderVida(golpe){
    this.lifes-=golpe;
    this.UI.ActualizarVidas(this.lifes);
  }
  colaEffect(){
    this.speed*=10;
    
  }
  setSpeed(){
    this.speed=this.speedAux
  }
  /**
   * El jugador ha recogido una estrella por lo que este método añade un punto y
   * actualiza la UI con la puntuación actual.
   */
  point() {
    this.score++;
    this.lifes+=0.5;
    this.updateScore();
    this.UI.GanarVida();
  }
  
  /**
   * Actualiza la UI con la puntuación actual
   */
  updateScore() {
    this.label.text = 'PECK HITO 1: ' + this.score;
    this.lifes+=0.5;
  }
  
  /* playerAnimations(){
    
    if(this.cursors.up.isDown || this.Jump.isDown || this.jump.isDown){
        this.stop;
        this.play('jump_anim');
       }
    else if(this.cursors.right.isDown || this.right.isDown){
      //this.stop;
      this.setFlip(false,false);
      this.play('run_anim');
    }
    else if(this.cursors.left.isDown ||this.left.isDown){
      //this.stop;
      this.setFlip(true,false);
      this.play('run_anim');
    }
    else if( this.body.setVelocityX(0))
    {
      this.stop;
      this.play('still_anim');
    }
  } */
 /* pintarVidas(){
    
    let x=this.body.x-100;
    let puestos=0;
    const w = this.scene.textures.get('corazon').getSourceImage().width;
    for(let i=0;i<this.lifes;i+=0.5){
      if(puestos%2==0)
      this.scene.add.image(x,45,'corazon').setScrollFactor(0);
      else{
       this.scene.add.image(x,45,'corazon').setFlip(true,false).setScrollFactor(0);
       x+=20+w/2;
      }      
      puestos++;
    }
  }
  */
  /**
   * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
   * Como se puede ver, no se tratan las colisiones con las estrellas, ya que estas colisiones 
   * ya son gestionadas por la estrella (no gestionar las colisiones dos veces)
   * @override
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    if(this.lifes<=0){
      console.log("PERDER");
      //Que se acabe la partida
      document.location.reload();
    }

    if ((this.cursors.up.isDown || this.Jump.isDown || this.jump.isDown)) {
      if(this.body.onFloor()){
        this.body.setVelocityY(this.jumpSpeed);
      }
    }
    if (this.cursors.left.isDown ||this.left.isDown) {
      this.body.setVelocityX(-this.speed);
      this.setFlip(true,false);
      this.play('run_anim', true);
      if(!this.body.onFloor()){
        this.play('jump_anim')
      }
    }
    else if (this.cursors.right.isDown || this.right.isDown) {
      this.body.setVelocityX(this.speed);
      this.setFlip(false,false);
      this.play('run_anim', true);
      if(!this.body.onFloor()){
        this.play('jump_anim')
      }
    }
    else {
      this.body.setVelocityX(0);
      this.play('still_anim');
      if(!this.body.onFloor()){
        this.play('jump_anim')
      }
    }
    
  }
}