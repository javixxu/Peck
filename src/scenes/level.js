import Player from '../player.js';
import Crow from '../birds/crow.js';
import Cola from '../powerups/cola.js';
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
 * Nivel 1 del juego 
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
    this.playing = true;
    this.timeScene = 0;
  }
  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    //DIMENSIONES
    const width = this.scale.width;
    const height = this.scale.height;
    const large = width * 10;

    this.createAligned(this, large, 'backgroundlvl1', 1);

    this.player = new Player(this, 0, 300, 5);
    new VictoryCollider(this, this.player, 7300, 175);
    this.groupAlcantarillas = this.add.group();
    this.createSewer(height - 30);
    this.createTileMap();
    this.createEnemies();
    this.createPowerUps();
    this.createObstacles();
    this.createPause();
    this.backgroundMusic();
    this.timerLabel = this.add.text(800, 10, "").setScrollFactor(0);

    this.physics.world.setBounds(0, 0, large, height);
    this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);
  }
  init() {
    this.timeScene = 0;
    this.lose = true;
  }
  /**
   * Creación del tilemap
   */
  createTileMap() {
    this.map1 = this.make.tilemap({
      key: 'map1',
      tileWidth: 64,
      tileHeight: 64
    });
    const tileset1 = this.map1.addTilesetImage('tilesetForest', 'patronesLevel1');
    //this.backgroundLayer = this.map.createLayer('Background', tileset1);
    this.groundLayer = this.map1.createLayer('Floor', tileset1);
    this.physics.add.collider(this.player, this.groundLayer);
    this.groundLayer.setCollisionBetween(0, 999);

  }
  /**
   * Creación de enemigos del Tiled
   */
  createEnemies() {
    //gorriones
    for (const sparrow of this.map1.getObjectLayer('Sparrows').objects) {
      this.sparrow = new Sparrow(this, this.player, sparrow.x, sparrow.y, 'sparrow');
      this.physics.add.collider(this.sparrow, this.groundLayer);
    }
    //cuervos
    for (const crow of this.map1.getObjectLayer('Crows').objects) {
      this.crow = new Crow(this, this.player, crow.x, crow.y, 'crow');
      this.physics.add.collider(this.crow, this.groundLayer);
    }
    //aguiluchos
    for (const harrier of this.map1.getObjectLayer('Harriers').objects) {
      this.harrier = new Harrier(this, this.player, harrier.x, harrier.y, 'harrier');
      this.physics.add.collider(this.harrier, this.groundLayer);
    }
    //gaviotas
    for (const seagull of this.map1.getObjectLayer('Seagulls').objects) {
      this.seagull = new Seagull(this, this.player, seagull.x, seagull.y, 'seagull');
      this.physics.add.collider(this.seagull, this.groundLayer);
    }
  }
  /**
  * Creación de powerUps
  */
  createPowerUps() {
    //cola
    for (const cola of this.map1.getObjectLayer('Colas').objects) {
      this.cola = new Cola(this, this.player, cola.x, cola.y);
      this.physics.add.collider(this.cola, this.groundLayer);
    }
    //vendas
    for (const bandage of this.map1.getObjectLayer('Bandages').objects) {
      this.bandage = new Bandages(this, bandage.x, bandage.y,this.player, 'bandage');
      this.physics.add.collider(this.bandage, this.groundLayer);
    }
    //llaves
    for (const key of this.map1.getObjectLayer('Keys').objects) {
      this.key = new Key(this, this.player, key.x, key.y);
      this.physics.add.collider(this.key, this.groundLayer);
    }
  }
  /**
  * Creación de obstáculos
  */
  createObstacles() {
    //puddle
    for (const puddle of this.map1.getObjectLayer('Puddles').objects) {
      this.puddle = new Puddle(this, this.player, puddle.x, puddle.y, 'puddle');
    }
    //spikes
    for (const spikes of this.map1.getObjectLayer('Spikes').objects) {
      this.spikes = new Spikes(this, this.player, spikes.x, spikes.y, 'spikes');
    }
  }

  /**
  * Menú de pausa
  */
  createPause() {
    //creación botones/paneles
    this.background = this.add.image(500, 250, 'panel').setScrollFactor(0).setVisible(false);
    this.controls = this.add.image(500, 250, 'controles').setScale(0.75).setScrollFactor(0).setVisible(false);
    this.back = this.add.image(500, 400, 'exit').setScale(0.75).setScrollFactor(0).setVisible(false).setInteractive();
    this.resume = this.add.image(420, 190, 'button').setScale(1.2).setScrollFactor(0).setInteractive().setVisible(false);
    this.help = this.add.image(580, 200, 'controlsButton').setScale(2).setScrollFactor(0).setInteractive().setVisible(false);
    this.exit = this.add.image(580, 330, 'exit').setScale(1.5).setScrollFactor(0).setInteractive().setVisible(false);
    this.fullsound = this.add.image(430, 330, 'sound').setScale(1.5).setScrollFactor(0).setInteractive().setVisible(false);
    this.midsound = this.add.image(440, 330, 'midsound').setScale(1.5).setScrollFactor(0).setInteractive().setVisible(false);
    this.mutesound = this.add.image(420, 330, 'mute').setScale(1.5).setScrollFactor(0).setInteractive().setVisible(false);
    this.pause = this.add.image(970, 30, 'pause').setScale(0.1).setScrollFactor(0).setInteractive();
    //si pulsas pausa
    this.pause.on("pointerdown", () => {
      this.playing = false;
      this.soundtrack.stop();
      this.physics.pause();
      this.clickSoundEffect();
      this.background.setVisible(true);
      this.resume.setVisible(true);
      this.help.setVisible(true);
      this.exit.setVisible(true);
      //gestión del volumen
      if (this.generalVolume === this.fullVol) {
        this.fullsound.setVisible(true);
      }
      else if (this.generalVolume === this.midVol) {
        this.midsound.setVisible(true);
      }
      else {
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
      //reanudar partida
      this.resume.on("pointerdown", () => {
        this.playing = true;
        this.clickSoundEffect();
        this.background.setVisible(false);
        this.resume.setVisible(false);
        this.help.setVisible(false);
        this.exit.setVisible(false);
        this.fullsound.setVisible(false);
        this.midsound.setVisible(false);
        this.mutesound.setVisible(false);
        this.physics.resume();
        this.soundtrack.stop();
        this.backgroundMusic();
      });
      //panel de controles
      this.help.on("pointerdown", () => {

        this.clickSoundEffect();
        this.background.setVisible(false);
        this.resume.setVisible(false);
        this.help.setVisible(false);
        this.exit.setVisible(false);
        this.fullsound.setVisible(false);
        this.midsound.setVisible(false);
        this.mutesound.setVisible(false);
        this.controls.setVisible(true);
        this.back.setVisible(true);
      });
      //salir del panel de controles
      this.back.on("pointerdown", () => {
        this.controls.setVisible(false);
        this.back.setVisible(false);
        this.clickSoundEffect();
        this.background.setVisible(true);
        this.resume.setVisible(true);
        this.help.setVisible(true);
        this.exit.setVisible(true);
        if (this.generalVolume === this.fullVol) {
          this.fullsound.setVisible(true);
        }
        else if (this.generalVolume === this.midVol) {
          this.midsound.setVisible(true);
        }
        else {
          this.mutesound.setVisible(true);
        }

      });
      //salir del panel de controles
      this.exit.on("pointerdown", () => {
        //this.scene.stop();
        this.playing = true;
        this.scene.stop();
        this.clickSoundEffect();
        this.scene.start('menu');
      });
    });
  }
  /**
  * Creación de Trigger del powerUp de la llave
  * Realizado con ayuda de las transparencias
  * de físicas en Arcade de la asignatura
  */
  createTrigger() {
    // x, y, width, height
    this.trigger = this.add.zone(this.player.x, this.player.y, 500, 300);
    this.peri = this.add.sprite(this.player.x, this.player.y, 'parakeet');
    this.peri.play({ key: 'explosion', repeat: 0 });
    // Añade un body
    this.physics.world.enable(this.trigger);
    this.trigger.body.setAllowGravity(false);
    this.trigger.body.setImmovable(false);
    this.time.delayedCall(3000, this.destroyZone());
  }
  destroyZone() {
    this.trigger.body.setAllowGravity(true);
  }
  /**
 * Panel de derrota
 */
  gameOver() {
    this.physics.pause();
    this.gameovermusic = this.sound.add("gameovermusic");
    this.clicksound = this.sound.add("buttonclick");
    this.gameovermusic.play();

    this.add.image(500, 250, 'gameoverbackground').setScrollFactor(0);

    this.botonStart = this.add.image(400, 300, 'replay').setScale(1.2).setScrollFactor(0).setInteractive();
    this.exit = this.add.image(550, 300, 'exit').setScale(1.5).setScrollFactor(0).setInteractive();

    this.botonStart.on("pointerdown", () => {
      this.scene.start('level');
      this.gameovermusic.stop();
      this.clicksound.play();
    });
    this.exit.on("pointerdown", () => {
      this.scene.stop();
      this.clicksound.play();
      this.gameovermusic.stop();
      this.scene.start('menu');
    });
  }
  /**
  * Panel de victoria
  */
  victory() {
    this.physics.pause();
    const config = {
      mute: false,
      volume: this.generalVolume,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.winmusic = this.sound.add("winmusic", config);
    this.clicksound = this.sound.add("buttonclick");
    this.winmusic.play();

    this.add.image(500, 250, 'backgroundvictory1').setScrollFactor(0)
    this.finalTime = (this.timeScene / 100).toString();
    this.add.text(410, 150, this.finalTime, { fontFamily: 'CustomFont', fontSize: 64, color: '#d1bf09' }).setScrollFactor(0);
    this.nextbutton = this.add.image(500, 300, 'nextlevel').setScale(1.5).setScrollFactor(0).setInteractive();
    this.botonStart = this.add.image(390, 430, 'replay').setScale(1.2).setScrollFactor(0).setInteractive();
    this.exit = this.add.image(615, 430, 'exit').setScale(1.5).setScrollFactor(0).setInteractive();

    this.nextbutton.on("pointerdown", () => {
      this.winmusic.stop();
      this.clicksound.play();
      this.scene.start('level2');
    });
    this.botonStart.on("pointerdown", () => {
      this.winmusic.stop();
      this.clicksound.play();
      this.scene.start('level');
    });

    this.exit.on("pointerdown", () => {
      this.scene.stop();
      this.winmusic.stop();
      this.clicksound.play();
      this.scene.start('menu');
    });

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
    this.groupAlcantarillas.add(new Sewer(this, this.player, 700, h - 75, 'alcantarilla'));
    this.groupAlcantarillas.add(new Sewer(this, this.player, 1500, h - 120, 'alcantarilla'));
    this.groupAlcantarillas.add(new Sewer(this, this.player, 2500, h - 220, 'alcantarilla'));
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
  timeTimer() {
    let timer = this.time.addEvent({
      delay: 1000,
      callback: this.updateTime,
      callbackScope: this
    });
  }
  updateTime() {
    this.timeScene++;
  }
  update(t, dt) {
    this.soundtrack.resume();
    if (this.playing) {
      this.timeTimer();
    }
    let x = parseInt(this.timeScene / 100);
    this.timerLabel.text = ('Time: ' + x);
    if (this.player.lifes <= 0) {
      if (this.lose) {
        this.lose = false;
        this.gameOver();
        this.soundtrack.stop();
      }
      this.hurtSound.stop();
    }
  }
  // musica de fondo
  backgroundMusic() {
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
  // sonido del periquito
  parakeetSoundEffect() {
    const config = {
      mute: false,
      volume: this.generalVolume + 0.3,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    };
    this.pickupSound = this.sound.add("parakeetsound", config);
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
  // sonido de al colisionar con una alcantarilla
  sewerSoundEffect() {
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
  // sonido de al hacer click
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