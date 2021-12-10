/**
 * Escena de pausa de juego. 
 * Si se pulsa el botón de resume, se vuelve a iniciar el juego.
 */
export default class PauseMenu extends Phaser.Scene {

  constructor() {
    super({ key: 'pausemenu' });
  }
  create() {
    this.background = this.add.image(500, 250, 'panel');
    this.resume = this.add.image(500, 100, 'button').setScale(1.2).setInteractive();
    this.fullsound = this.add.image(500, 250, 'sound').setScale(1.5).setInteractive();
    this.midsound = this.add.image(500, 250, 'midsound').setScale(1.5).setInteractive();
    this.mutesound = this.add.image(500, 250, 'mute').setScale(1.5).setInteractive();
    this.midsound.setVisible(false);
    this.mutesound.setVisible(false);
    this.exit = this.add.image(500, 400, 'exit').setScale(1.5).setInteractive();
    

    this.resume.on("pointerdown", () => {
      this.scene.stop();
      this.clickeSound(this.generalVolume);
      this.scene.resume('level');
    });
    this.exit.on("pointerdown", () => {
      this.scene.stop();
      this.scene.stop('level');
      this.clickeSound(this.generalVolume);
      this.scene.start('menu');
    });
    
    this.fullsound.on("pointerdown", () => {
      this.fullsound.setVisible(false);
      this.midsound.setVisible(true);
      this.clickeSound(this.generalVolume);
      
    this.midsound.on("pointerdown", () => {
      this.midsound.setVisible(false);
      this.mutesound.setVisible(true);
      this.clickeSound(this.generalVolume);
      
    this.mutesound.on("pointerdown", () => {
      this.mutesound.setVisible(false);
      this.fullsound.setVisible(true);
      this.clickeSound(this.generalVolume);
      
    });
    });
    });
    
  }
  clickeSound(vol) {
    const config = {
      mute: false,
      volume: vol,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.clicksound = this.sound.add("buttonclick", config);
    this.clicksound.play();
  }
}