import Enemies from "./enemies.js";

export default class Seagull extends Enemies
{
    constructor(scene, player, x, y) {
      super(scene, player, x, y);
      let offset=100;
      this.container = this.scene.add.container(x+offset, y);
      const centro=this.scene.add.image(0, 0, 'center');
      this.bird=this.scene.add.sprite(offset,0, 'sg');
      this.bird.play('seagull_fly');
      this.container.add([ centro, this.bird ]);
    }

    preUpdate(t,dt) {
      super.preUpdate(t,dt);
      const angle=0.02; //Rotacion 
      this.container.rotation-=angle; //Rotacion del container
      this.bird.rotation+=angle; //correcion para que la gaviota no se gire raro
        
      }
}