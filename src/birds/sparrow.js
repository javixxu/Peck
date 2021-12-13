import Enemies from "./enemies.js";
/**
 * Clase que representa el cuervo.
 */
export default class Sparrow extends Enemies {
 
   constructor(scene, player, x, y, name) {
    super(scene, player, x, y, name);
    
    this.scene.physics.add.existing(this);
    this.player=player;
    this.body.setBounceY(1);
    this.body.setCollideWorldBounds();
    this.play('sparrow_fly');
    this.tween=this.scene.tweens.add({
      targets: this,
      x:150,
      duration:1600,
      ease: 'Sine.easeInOut',
      flipX: true,
      yoyo: true,
      repeat: -1,
    })
  }
  /**
   * Métodos preUpdate de Phaser. Se encarga de mover y animar al cuervo
   */
  preUpdate(t,dt) {
    if(this.scene.playing==false){
      this.tween.pause();
    }
    else{
       this.tween.resume();
       super.preUpdate(t,dt);
       this.sparrowAtack();
    }
   
  }

  sparrowAtack()
  {
    if(this.scene.physics.overlap(this.player, this) && !this.player.seeVulnerability())
    {
        this.player.playerDamage(0.5);
        this.player.changeInvulnerability();
    }
  }
}