

export default class Menu extends Phaser.Scene {
    constructor(){
        super({key:'menu'});
    }
    create(){
        this.playButton=this.add.image(500,250,'button').setScale(4,4).setScrollFactor(0).setInteractive();
        this.playButton.on("pointerdown", () =>{
           this.scene.start('level');
          });
    }
    
}