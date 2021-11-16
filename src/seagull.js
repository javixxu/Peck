import Enemies from "./enemies.js";

export default class Seagull extends Enemies
{
    constructor(scene, player, x, y) {
        super(scene, player, x, y);
        this.conj=scene.add.group();//Grupo formado por la gaviota 
        this.centro=this.scene.add.image(x+100, y, 'center'); //Centro
        this.centro.setVisible(false); //Para que no se vea el centro
        const bird=this.scene.add.image(x,y,'seagull'); //Imagen de la gaviota
        this.conj.add(bird); //Añadir el pajaro al grupo
    }

    preUpdate(t,dt) {
        super.preUpdate(t,dt);
        this.conj.rotateAround(this.centro, -0.05); //Rota el conjunto alrededor del centro
        //this.setOrigin(3.5, 0.5);
        //Phaser.Actions.RotateAroundDistance(this, 400,  300, 0.02, 200);
        //Movimiento circular
        /** 
        let tween = this.scene.tweens.add({
            targets: this,
            angle: 360.0,
            duration: 1300,
            repeat: 0
          });
        */
      }
}