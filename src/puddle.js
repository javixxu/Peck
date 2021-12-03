import Obstacles from "./obstacles.js";

export default class Puddle extends Obstacles
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
    effect()
    {
        this.scene.player.speed = 200;
        this.scene.player.jumpSpeed = -250;
    
        let timer=this.scene.time.addEvent( {
            delay:5000,
            callback: this.scene.player.setSpeed,
            callbackScope: this.scene.player
        });
    }
}
