import Obstacles from "./obstacles.js";

export default class alcantarilla extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene,player, x, y, name);
        this.x=x;
        this.player=player;
        this.Sobrepasado=false;
        this.collision=false;      
     }
    preUpdate(){
        if(!this.collision&& this.scene.physics.overlap(this.player,this)){
             this.player.AlcantarillaDamage();   
             this.collision=true;                             
             this.collisionCallBack();
             
         }
         if(this.x<this.player.x)this.Sobrepasado=true;
         else if(this.x>this.player.x)this.Sobrepasado=false;
         console.log( this.collision);
    }
     
    Mirar(){return this.Sobrepasado; } 
 
    MirarPos(){return this.x;}
 
    collisionCallBack(){
         let timer=this.scene.time.addEvent( {
             delay:5000,
             callback: this.collision=false,
             callbackScope: this
           });
    }
 
}