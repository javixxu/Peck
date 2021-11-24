import Obstacles from "./obstacles.js";

export default class alcantarilla extends Obstacles
{
    constructor(scene, player, x, y, name) {
        super(scene,player, x, y, name);
        this.x=x;
       this.player=player;
       this.Sobrepasado=false;      
    }
    preUpdate(){
       if( this.scene.physics.collide(this.player,this)){

            this.player.AlcantarillaDamage();
            
            console.log('dañooo');
                 
        }
        if(this.x<this.player.x)this.Sobrepasado=true;

    }
    
    Mirar(){return this.Sobrepasado; } 

    MirarPos(){return this.x;}
   
}