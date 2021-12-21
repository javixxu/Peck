import UIPlayer from './UIPlayer.js';
/**
 * Clase que representa el jugador 
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
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    // Queremos que el jugador no se salga de los límites del mundo
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.speedAux = this.speed;
    this.jumpSpeed = -400;
    this.jumpAux = this.jumpSpeed;
    this.maxLife = 5;//vidas máximas
    this.lifes = numslife;
    this.invulnerability = false;
    this.createInput();
    this.UI = new UIPlayer(this.scene, this, numslife, this.maxLife, this.score, this.powerups);
    this.current = 'empty';

  }
  createInput() {
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.consume = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);//tecla para consumir powerUp
    this.right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.jump = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.space = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }
  playerDamage(hit) {
    if (!this.invulnerability) {
      this.lifes -= hit;
      this.scene.hurtSoundEffect();
      this.UI.loseLife(hit);
    }
  }
  colaEffect() {
    this.speed *= 2;
    let timer = this.scene.time.addEvent({
      delay: 5000,
      callback: this.setSpeed,
      callbackScope: this
    });
  }
  powerUpEffect(currentPowerUp) {
    if (currentPowerUp === 'cola') {
      this.colaEffect();
    }
    else if (currentPowerUp === 'bandage') {
      this.bandageEffect();
    }
    else if (currentPowerUp === 'key') {
      this.keyEffect();
    }
  }
  seeAtUI(currentPowerUp) {
    if (currentPowerUp === 'cola') {
      this.UI.seePowerUp(true, currentPowerUp);
      this.current = currentPowerUp;
    }
    else if (currentPowerUp === 'bandage') {
      this.UI.seePowerUp(true, currentPowerUp);
      this.current = currentPowerUp;
    }
    else if (currentPowerUp === 'key') {
      this.UI.seePowerUp(true, currentPowerUp);
      this.current = currentPowerUp;
    }
  }
  setSpeed() {
    this.speed = this.speedAux;
    this.jumpSpeed = this.jumpAux;
  }
  bandageEffect() {
    this.lifes++;
    this.UI.addLife(1);
  }
  keyEffect() {
    this.scene.createTrigger();
  }
  sewerEffect() {
    this.playerDamage(1);
    this.x = this.scene.UltimaSobrePasada();
  }
  //Te hace invulnerable
  changeInvulnerability() {
    this.invulnerability = true;

    let timer = this.scene.time.addEvent({
      delay: 1000,
      callback: this.setInvulnerability,
      callbackScope: this
    });
  }
  //Te hace vulnerable
  setInvulnerability() {
    this.invulnerability = false;
  }
  //Observadora de la invulnerabilidad
  seeVulnerability() { return this.invulnerability; }

  preUpdate(t, dt) {
    if (this.scene.playing === true) {
      super.preUpdate(t, dt);

      if (this.consume.isDown && this.current != 'empty') {//si pulso E && this.empty==false
        
        if (this.current === 'key') {
          this.scene.parakeetSoundEffect();
        }
        else{
          this.scene.powerUpConsumeSoundEffect();
        }
        this.UI.seePowerUp(false, this.current);//dejo de ver cocacola en la UI
        this.powerUpEffect(this.current);
        this.current = 'empty';
        
      }
      this.Move();
      this.Jump();

    }
  }//pre
  Move() {

    if (this.cursors.left.isDown || this.left.isDown) {
      this.body.setVelocityX(-this.speed);
      this.setFlip(true, false);
      this.play('run_anim', true);
      if (!this.body.onFloor()) {
        this.play('jump_anim')
      }
    }
    else if (this.cursors.right.isDown || this.right.isDown) {
      this.body.setVelocityX(this.speed);
      this.setFlip(false, false);
      this.play('run_anim', true);
      if (!this.body.onFloor()) {
        this.play('jump_anim')
      }
    }
    else {
      this.body.setVelocityX(0);
      this.play('still_anim');
      if (!this.body.onFloor()) {
        this.play('jump_anim')
      }
    }
  }
  Jump() {
    if ((this.cursors.up.isDown || this.space.isDown || this.jump.isDown)) {
      if (this.body.onFloor()) {
        this.body.setVelocityY(this.jumpSpeed);
      }
    }
  }
}