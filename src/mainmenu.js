import Button from "./button.js";
export default class Menu extends Phaser.Scene{
    constructor(){
        super({key:'menu'});
    }
    create(){
        this.playButton=new Button(this,500,250);
        
    }
    spawn(){
        this.scene.start('level');
    }
}