import Obstacles from "./obstacles.js";

export default class Sewer extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene, x, y, name);
        this.x=x;
        this.player=player;
        this.passed=false;
        this.collision=false;      
     }
    preUpdate(){
        if(!this.collision && this.scene.physics.overlap(this.player,this)){
            this.player.sewerEffect();
            const config = {
                mute: false,
                volume: 0.7,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: false,
                delay: 0,
              };
              this.fallSound= this.scene.sound.add("fall",config);
              this.fallSound.play();  
            this.collision=true;                             
            this.collisionTimer();
        }

         if (this.x<this.player.x)this.passed=true;
         else if (this.x>this.player.x)this.passed=false;
         
    }
     
    isPassed() {return this.passed; } 
 
    getPos() {return this.x;}
 
    collisionTimer(){
        let timer=this.scene.time.addEvent( {
            delay:5000,
            callback: this.collision=false,
            callbackScope: this
        });
    }
 
}