import Player from '../player.js';
import Platform from '../platform.js';
import Crow from '../birds/crow.js';
import Floor from '../floor.js';
import Cola from '../powerups/cola.js';
import Car from '../obstacles/car.js';
import Fence from '../obstacles/fence.js';
import Debris from '../obstacles/debris.js';
import Seagull from '../birds/seagull.js';
import Puddle from '../obstacles/puddle.js';
import VictoryCollider from '../victorycollider.js';
import Sewer from '../obstacles/sewer.js';
import Bandages from '../powerups/bandages.js';
import Sparrow from '../birds/sparrow.js';
import Spikes from '../obstacles/spikes.js';
import Key from '../powerups/key.js';
import Harrier from '../birds/harrier.js'
/**
 * Escena principal del juego. La escena se compone de una serie de plataformas 
 * sobre las que se sitúan las bases en las podrán aparecer las estrellas. 
 * El juego comienza generando aleatoriamente una base sobre la que generar una estrella. 
 */
export default class Level extends Phaser.Scene {
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
    this.muteVol = 0;
    this.midVol = 0.1;
    this.fullVol = 0.3;
    this.generalVolume = this.fullVol;
    this.muted = false;
    this.playing=true;
    this.time=0;
  }
  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    //DIMENSIONES
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;
    

    this.createAligned(this, large, 'city', 1);



    this.player = new Player(this, 200, 300, 5);
    for (let i = 0; i < large; i += 60) {
      this.ground = new Floor(this, this.player, i, height - 10);
    }
    this.cola = new Cola(this, 600, 300);
    this.birdseed = new Key(this, 100, 450);
    this.crow = new Crow(this, this.player, 500, 100, 'crow');
    this.harrier = new Harrier(this, this.player, 1500, 180, 'harrier');
    this.seagull = new Seagull(this, this.player, 500, 250);
    this.sparrow = new Sparrow(this, this.player, 50, 200);
    new Bandages(this, 850, 250, 'bandage');
    this.spikes = new Spikes(this, this.player, 1800, 470, 'spikes');
    new Fence(this, this.player, 1500, height - 120, 'fence');
    new Debris(this, this.player, 2155, height - 50, 'debris')
    //new Car(this, this.player, 1000, height-38, 'car');
    new VictoryCollider(this, this.player, 6000, height - 38);
    this.puddle = new Puddle(this, this.player, 3000, height - 10, 'puddle')
    new Platform(this, this.player, this.sparrow, 150, 350);
    new Platform(this, this.player, this.sparrow, 850, 350);
    new Platform(this, this.player, this.sparrow, 5000, 350);
    this.groupAlcantarillas = this.add.group();
    this.createSewer(height - 50);

    this.background = this.add.image(500, 250, 'panel').setScrollFactor(0);
    this.resume = this.add.image(500, 100, 'button').setScale(1.2).setScrollFactor(0).setInteractive();
    this.exit = this.add.image(500, 400, 'exit').setScale(1.5).setScrollFactor(0).setInteractive();
    this.fullsound = this.add.image(500, 250, 'sound').setScale(1.5).setScrollFactor(0).setInteractive();
    this.midsound = this.add.image(500, 250, 'midsound').setScale(1.5).setScrollFactor(0).setInteractive();
    this.mutesound = this.add.image(500, 250, 'mute').setScale(1.5).setScrollFactor(0).setInteractive();
    this.background.setVisible(false);
    this.resume.setVisible(false);
    this.exit.setVisible(false);
    this.fullsound.setVisible(false);
    this.midsound.setVisible(false);
    this.mutesound.setVisible(false);

    this.backgroundMusic();
    //menú de pausa
    this.pause = this.add.image(970, 30, 'pause').setScale(0.1).setScrollFactor(0).setInteractive();
    this.pause.on("pointerdown", () => {
      this.playing=false;
      this.soundtrack.stop();
      this.tiempoPausa = true;
      this.physics.pause();

      this.background.setVisible(true);
      this.resume.setVisible(true);
      this.exit.setVisible(true);
      if (this.generalVolume === this.fullVol) {
        this.fullsound.setVisible(true);
      }
      else if (this.generalVolume === this.midVol) {
        this.midsound.setVisible(true);
      }
      else{
        this.mutesound.setVisible(true);
      }
      this.fullsound.on("pointerdown", () => {
        
        this.fullsound.setVisible(false);
        this.midsound.setVisible(true);
        this.clickSoundEffect();
        this.generalVolume = this.midVol;
      });
      this.midsound.on("pointerdown", () => {
        this.midsound.setVisible(false);
        this.mutesound.setVisible(true);
        this.clickSoundEffect();
        this.muted = true;
        this.generalVolume = this.muteVol;
      });
      this.mutesound.on("pointerdown", () => {
        this.mutesound.setVisible(false);
        this.fullsound.setVisible(true);
        this.clickSoundEffect();
        this.muted = false;
        this.generalVolume = this.fullVol;
      });

      this.resume.on("pointerdown", () => {
        //this.scene.stop();
        this.playing=true;
        this.clickSoundEffect();
        this.background.setVisible(false);
        this.resume.setVisible(false);
        this.exit.setVisible(false);
        this.fullsound.setVisible(false);
        this.midsound.setVisible(false);
        this.mutesound.setVisible(false);
        this.physics.resume();
        this.soundtrack.stop();
        this.backgroundMusic();
      });
      this.exit.on("pointerdown", () => {
        //this.scene.stop();
        this.playing=true;
        this.scene.stop();
        this.clickSoundEffect();
        this.scene.start('menu');
      });
    });
    this.tiempoTotal = 0; this.tiempo;
    this.tiempoPausa = false;
    this.timerLabel = this.add.text(800, 10, "").setScrollFactor(0);
    
    this.physics.world.setBounds(0, 0, large, height);
    this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);
  }
  init() {
    console.log('inicio');
    //por si es la pruimera vez q se inicia el juego
    if (this.tiempoTotal == undefined) this.tiempoTotal = 0;
    this.tiempo = this.tiempoTotal;
    console.log(this.tiempo);
    

  }
  createAligned(scene, large, texture, scrollFactor) {
    const w = scene.textures.get(texture).getSourceImage().width;
    const cant = Math.ceil(large / w) * scrollFactor;

    let x = 0;

    for (let i = 0; i < cant; i++) {
      const b = scene.add.image(x, scene.scale.height, texture)
        .setOrigin(0, 1)
        .setScrollFactor(scrollFactor);

      x += b.width;
    }
  }
  bandagePickt() {
    this.player.bandageEffect();
  }
  /**
   * metodo para crear las alcantarillas , poner en orden creciente es decir de menor posicion a mas adelante
  */
  createSewer(h) {
    this.groupAlcantarillas.add(new Sewer(this, this.player, 2000, h, 'alcantarilla'));
    this.groupAlcantarillas.add(new Sewer(this, this.player, 2500, h, 'alcantarilla'));
    this.groupAlcantarillas.add(new Sewer(this, this.player, 3500, h, 'alcantarilla'));
  }
  UltimaSobrePasada() {
    let w = this.groupAlcantarillas.getChildren(); let desplazamiento = 175

    for (let i = this.groupAlcantarillas.getLength() - 1; i > -1; i--) {
      if (w[i].isPassed()) {
        return w[i].getPos() - desplazamiento;
      }
    }
    return w[0].getPos() - desplazamiento;
  }

  update(t, dt) {
    this.soundtrack.resume();
    this.tiempoTotal = t;
    let x = parseInt((t - this.tiempo) / 1000);
    this.timerLabel.text = ('Time: ' + x);
  }
  //MUSICA DE FONDO
  backgroundMusic(){
    const config = {
      mute: this.muted,
      volume: this.generalVolume,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };
    this.soundtrack = this.sound.add("backsound", config);
    this.soundtrack.play();
  }
  // sonido de los powerups al cogerlos
  powerUpPickSoundEffect() {
    const config = {
      mute: false,
      volume: this.generalVolume,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.pickupSound = this.sound.add("pickup", config);
    this.pickupSound.play();
  }
  // sonido de los powerups al consumirlos
  powerUpConsumeSoundEffect() {
    const config = {
      mute: false,
      volume: this.generalVolume,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.powerSound = this.sound.add("usepowerup", config);
    this.powerSound.play();
  }
  // sonido de al colisionar con obstaculos que hacen daño
  hurtSoundEffect() {
    const config = {
      mute: false,
      volume: this.generalVolume,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.hurtSound = this.sound.add("hurt", config);
    this.hurtSound.play();
  }
  sewerSoundEffect() {
    this.player.sewerEffect();
    const config = {
      mute: false,
      volume: this.generalVolume + 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.fallSound = this.sound.add("fall", config);
    this.fallSound.play();
  }
  clickSoundEffect() {
    const config = {
      mute: false,
      volume: this.generalVolume,
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