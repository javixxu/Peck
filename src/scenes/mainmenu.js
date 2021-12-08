

export default class Menu extends Phaser.Scene {
    constructor(){
        super({key:'menu'});
    }
    create(){
        const config = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0,
        };
        this.music= this.sound.add("menumusic",config);
        this.music.play();
        this.playButton=this.add.image(350,250,'button').setScale(2).setScrollFactor(0).setInteractive();
        this.helpButton=this.add.image(600,250,'controlsButton').setScale(2).setScrollFactor(0).setInteractive();
        this.playButton.on("pointerdown", () =>{
            this.music.stop();
            this.clicksound= this.sound.add("buttonclick");
            this.clicksound.play();
            this.scene.start('level');
        });
    }
}