
/**
 * Clase que hace q se visualize las vidas , puntos y power ups que dispone el jugador
 * 
 */
 export default class UIPlayer extends Phaser.GameObjects.Sprite {

    constructor(scene,player,numslife,maxLife,score,powerups){
        super(scene,player,numslife,maxLife,score,powerups);
        
        this.scene=scene;
        this.GameMaxLife=maxLife;        
        //VIDA ACTUAL
        this.vidaACT=numslife;
        //tamaño del corazon
        this.w=this.scene.textures.get('corazon').getSourceImage().width;
        //barra de vida
        this.Barradevida=this.scene.add.group();
        this.score=score;
        this.player=player;
        //this.CreacionVidas(numslife);
       //FALTA LA ASIGNACION DE LOS POWER UPS
       this.CreacionVidasGroup();
    }
   
    CreacionVidasGroup() {   
              
        this.puestos=0;this.x=this.player.x-125;
        for(let i=0;i<this.GameMaxLife;i+=0.5){
            
            if(this.puestos%2==0){   
                             
                this.Barradevida.create(this.x,45,'corazon').setScrollFactor(0); 
                                
            }
            else{
               this.Barradevida.create(this.x,45,'corazon').setFlip(true,false).setScrollFactor(0);  
                this.x+=20+this.w/2;           
            }                              
            this.puestos++;
            if(i>=this.vidaACT){
                let entity= this.Barradevida.getLast(true,false);
                this.Barradevida.killAndHide(entity);
            }
        }                            
    }
    PerderVida(golpe){       
        if(this.vidaACT-golpe<0)golpe=0;
        for(let i=0;i<golpe;i+=0.5){
            let entity= this.Barradevida.getLast(true,false);
            this.Barradevida.killAndHide(entity);
        }
        this.vidaACT-=golpe;
    }
    GanarVida(vidaM){
        if(vidaM+this.vidaACT>5)vidaM=this.GameMaxLife-this.vidaACT;
        for(let i=0;i<vidaM;i+=0.5){
           let x= this.Barradevida.getFirstDead(false,false);
           x.setVisible(true);
           x.setActive(true);
        }
        this.vidaACT+=vidaM;
    }
}