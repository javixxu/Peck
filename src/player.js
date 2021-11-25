import alcantarilla from './alcantarilla.js';
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
    this.body.setBounceY(0.15);
    this.speed = 300;
    this.speedAux=this.speed;
    //this.speedAux=this.speed;
    this.jumpSpeed = -400;
    this.jumpAux = this.jumpSpeed;
    this.maxLife=5;//vidas máximas
    this.cursors = this.scene.input.keyboard.createCursorKeys();
   
    this.lifes=numslife;
    this.right=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.Jump=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.jump=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);    
    this.powerups;
    this.UI= new UIPlayer(this.scene,this,numslife,this.maxLife,this.score,this.powerups);
    
  
    this.updateScore();
    
  }
  PerderVida(golpe){
    this.lifes-=golpe;
    this.UI.PerderVida(golpe);
  }
  colaEffect(){
    this.speed+=10;
  }
  puddleEffect(){
    this.speed = 200;
    this.jumpSpeed = -250;
  }
  setSpeed(){
    this.speed = this.speedAux;
    this.jumpSpeed = this.jumpAux;
  }
  
  point() {
    this.score++;
    this.lifes+=2.5;
    this.updateScore();
    this.UI.GanarVida(2.5);
  }
  bandageEffect(){
    this.UI.GanarVida(1);
  }
  /**
   * Actualiza la UI con la puntuación actual
   */
  updateScore() {
    //this.label.text = 'PECK HITO 1: ' + this.score;
    this.lifes+=0.5;
  }
  AlcantarillaDamage(){
    this.PerderVida(1);
    this.x=this.scene.UltimaSobrePasada();
  }
  /**
   * Métodos preUpdate de Phaser. En este caso solo se encarga del movimiento del jugador.
   * @override
   */
  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    // COLA
    if(this.scene.physics.overlap(this.scene.cola, this))
    {
      //console.log(this.speed);
        this.colaEffect();
        //console.log(this.speed);
        
        let timer=this.scene.time.addEvent( {
          delay:5000,
          callback: this.setSpeed,
          callbackScope: this
        });

        //console.log(this.speed);
    }
    // PUDDLE
    if(this.scene.physics.overlap(this.scene.puddle, this))
    {
        this.puddleEffect();
        
        let timer=this.scene.time.addEvent( {
          delay:5000,
          callback: this.setSpeed,
          callbackScope: this
        });
    }
    //CUERVO
    if(this.scene.physics.collide(this.scene.crow, this))
    {
        this.PerderVida(0.5);
    }  
    if(this.lifes<=0){
      console.log("PERDER");
      //Que se acabe la partida     
      this.scene.scene.start('gameOver');
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
      console.log(this.speed);
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