
/**
 * Clase que hace q se visualize las vidas , puntos y power ups que dispone el jugador
 * 
 */
 export default class UIPlayer extends Phaser.GameObjects.Sprite {

    constructor(scene,player,numslife,score,powerups){
        super(scene,player,numslife,score,powerups);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.scene=scene;
        //VIDA ACTUAL
        this.vidaACT=numslife;
        //ARRAY DE VIDAS CON LOS CORAZONES 
        this.lifes=[];
        this.w=this.scene.textures.get('corazon').getSourceImage().width;
        
        this.score=score;
        this.player=player;
        this.CreacionVidas(numslife);
       //FALTA LA ASIGNACION DE LOS POWER UPS
    }
    CreacionVidas(numlifes){
        
      this.puestos=0;this.x=this.player.x-125;
 
      for(let i=0;i<numlifes;i+=0.5){
          let img;
            if(this.puestos%2==0)
                img=this.scene.add.image(this.x,45,'corazon').setScrollFactor(0);
            else{
               img=this.scene.add.image(this.x,45,'corazon').setFlip(true,false).setScrollFactor(0);
               this.x+=20+this.w/2;
            }      
            this.puestos++;
            this.lifes.push(img);
        }       
    }
    ActualizarVidas(vidaActual){
        //tamaño del array
        let max=this.lifes.length;
        let aux=this.vidaACT-vidaActual;
        max--;
        while(aux>0&&this.lifes[max]!=null){
            this.lifes.splice(max,1)
            aux-=0.5;
            max--;
           this.puestos--;
           if(this.puestos%2!=0)this.x-=20+this.w/2;
        }
    }
    GanarVida(){
        let img; 
        
        if(this.puestos%2==0){  
            this.x+=40+this.w;          
            img=this.scene.add.image(this.x,45,'corazon').setScrollFactor(0);}
        else{           
           img=this.scene.add.image(this.x,45,'corazon').setFlip(true,false).setScrollFactor(0);           
        }      
        this.puestos++;
        this.x+=20+this.w/2;
        this.lifes.push(img);
        this.vidaACT+=0.5;
        console.log(this.vidaACT)

    }







}