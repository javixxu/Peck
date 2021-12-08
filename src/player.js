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
    this.jumpSpeed = -400;
    this.jumpAux = this.jumpSpeed;
    this.maxLife=5;//vidas máximas
    this.cursors = this.scene.input.keyboard.createCursorKeys();
   
    this.lifes=numslife;
    this.invulnerability=false;
    this.consume=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);//tecla para consumir powerUp
    this.right=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.Jump=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.jump=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
    this.bend=this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C); 
    this.powerups;
    this.UI= new UIPlayer(this.scene,this,numslife,this.maxLife,this.score,this.powerups);
    this.current='empty';
    
  }
  playerDamage(hit){
    if(!this.invulnerability){
      console.log('dañoo'+hit)
      this.lifes-=hit;
      this.UI.loseLife(hit);
    }
    
  }
  colaEffect(){
    
    this.speed*=2;
     
    let timer=this.scene.time.addEvent( {
      delay:5000,
      callback: this.setSpeed,
      callbackScope: this
    });
 
  }
  powerUpEffect(currentPowerUp){
    if(currentPowerUp=='cola'){
      this.colaEffect();
    }
    else if(currentPowerUp=='bandage'){
      this.bandageEffect();
    }
  }
  seeAtUI(currentPowerUp){
    if(currentPowerUp=='cola'){
       this.UI.seePowerUp(true,currentPowerUp);
       this.current=currentPowerUp;
    }
    else if(currentPowerUp=='bandage'){
      this.UI.seePowerUp(true,currentPowerUp);
       this.current=currentPowerUp;
    }
    else if(currentPowerUp=='birdseed'){
      this.UI.seePowerUp(true,currentPowerUp);
       this.current=currentPowerUp;
    }

  
  }
  powerupSound()
  {
    const config = {
      mute: false,
      volume: 0.3,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.powerSound= this.scene.sound.add("usepowerup",config);
    this.powerSound.play();
  }
  setSpeed(){
    this.speed = this.speedAux;
    this.jumpSpeed = this.jumpAux;
  }
  
  bandageEffect(){
    this.UI.addLife(1);
  }
 
  sewerEffect(){
    this.playerDamage(1);
    this.x=this.scene.UltimaSobrePasada();
  }
  //Te hace invulnerable
  changeInvulnerability(){
    this.invulnerability=true;
     
    let timer=this.scene.time.addEvent( {
      delay:5000,
      callback: this.setInvulnerability,
      callbackScope: this
    });
  }
  //Te hace vulnerable
  setInvulnerability(){
    this.invulnerability=false;
  }
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
      this.scene.scene.start('gameOver');
    }
   
    if (this.consume.isDown){//si pulso E && this.empty==false
      this. powerupSound();
     this.UI.seePowerUp(false,this.current);//dejo de ver cocacola en la UI
     this.powerUpEffect(this.current);
     this.current='empty';
    }
    if ((this.cursors.up.isDown || this.Jump.isDown || this.jump.isDown)) {
      if(this.body.onFloor()){
        this.body.setVelocityY(this.jumpSpeed);
      }
    }
    else if(this.cursors.down.isDown){
      if(this.body.onFloor()){
        
      this.play('bend_anim');
      console.log('agachado');
      }
    }
    else if (this.cursors.left.isDown ||this.left.isDown) {
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