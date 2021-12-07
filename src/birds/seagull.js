import Enemies from "./enemies.js";

export default class Seagull extends Enemies
{
  constructor(scene, player, x, y) {
    super(scene, player, x, y);
    this.scene=scene; //Referencia a la escena
    this.player=player; //Referencia al player
    let offset=100; //Distancia entre el centro y la gaviota
    //CONTAINER
    this.container = this.scene.add.container(x, y);
    const centro=this.scene.add.image(0, 0, 'center'); //Imagen del centro
    this.bird=this.scene.physics.add.sprite(offset, 0, 'sg'); //Sprite de la gaviota
    this.bird.body.allowGravity = false; //Quitarle la gravedad a la gaviota
    this.bird.play('seagull_fly'); //Animacion de la gaviota
    //Rellenar el container
    this.container.add([centro, this.bird ]);
  }

  preUpdate(t,dt) {
    super.preUpdate(t,dt);
    const angle=0.02; //Rotacion 
    this.container.rotation-=angle; //Rotacion del container
    this.bird.rotation+=angle; //correcion para que la gaviota no se gire raro

    //Si pongo collide la gaviota se mueve y hace giros cada vez mas grandes
    if(this.scene.physics.overlap(this.player, this.bird))
    {
      this.player.playerDamage(0.5);
      this.player.changeInvulnerability();
    }
  }
}