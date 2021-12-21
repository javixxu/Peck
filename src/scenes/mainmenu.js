/**
   * Escena del menú principal
   */
export default class Menu extends Phaser.Scene {
    constructor() {
        super({ key: 'menu' });
    }
    create() {
        const config = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0,
        };
        this.music = this.sound.add("menumusic", config);
        this.music.play();
        this.background = this.add.image(500, 270, 'menubackground').setScale(2);
        this.controls = this.add.image(500, 250, 'controles').setScale(0.75).setScrollFactor(0).setVisible(false);
        this.backButton = this.add.image(500, 400, 'exit').setScale(0.75).setScrollFactor(0).setVisible(false).setInteractive();
        this.playButton = this.add.image(400, 150, 'button').setScale(2).setScrollFactor(0).setInteractive();
        this.helpButton = this.add.image(600, 150, 'controlsButton').setScale(2).setScrollFactor(0).setInteractive();
        this.menucrow = this.add.sprite(720, 250, 'menu_crow');
        this.menucrow.play({ key: 'crow_menu', loop: true });
        this.playButton.on("pointerdown", () => {
            this.music.stop();
            this.clicksound = this.sound.add("buttonclick");
            this.clicksound.play();
            this.scene.start('level');
        });
        this.helpButton.on("pointerdown", () => {
            this.clicksound = this.sound.add("buttonclick");
            this.clicksound.play();
            this.controls.setVisible(true);
            this.backButton.setVisible(true);
            this.playButton.setVisible(false);
            this.helpButton.setVisible(false);
        });
        this.backButton.on("pointerdown", () => {
            this.clicksound = this.sound.add("buttonclick");
            this.clicksound.play();
            this.controls.setVisible(false);
            this.backButton.setVisible(false);
            this.playButton.setVisible(true);
            this.helpButton.setVisible(true);
        });
    }
}