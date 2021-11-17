import Button from "./button";
export default class Menu extends Phaser.Scene{
    constructor(){
        super({key:'menu'});
    }
    create(){
        this.playButton=new Button(this,50,50);
    }
    spawn(){
        this.scene.start('level');
    }
}