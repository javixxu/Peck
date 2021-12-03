import Obstacles from "./obstacles.js";

export default class Spikes extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene, player, x, y, name);
        
    }
    preUpdate() {
     
        super.preUpdate();
        
         if (this.scene.physics.overlap(this.scene.player, this)) 
        {
            this.effect();
        }
         
        }
        effect(){
            this.scene.player.PerderVida(0.5);
            this.scene.player.changeInvulnerability()
        }
        
      }
