import Button from "./button.js";

export default class Menu extends Phaser.Scene {
    constructor(){
        super({key:'menu'});
    }
    create(){
        this.playButton=new Button(this,500,250,'button').setScale(8,8);
    }
    spawn(){
        this.scene.start('level');
    }
}