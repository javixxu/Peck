import Player from '../player.js';
import Crow from '../birds/crow.js';
import Cola from '../powerups/cola.js';
import Obstacles from '../obstacles/obstacles.js';
import Seagull from '../birds/seagull.js';
import VictoryCollider from '../victorycollider.js';
import Bandages from '../powerups/bandages.js';
import Sparrow from '../birds/sparrow.js';
import Spikes from '../obstacles/spikes.js';
import Key from '../powerups/key.js';
import Harrier from '../birds/harrier.js'

/**
* Nivel 2 del juego 
*/
export default class Level2 extends Phaser.Scene {
    constructor() {
        super({ key: 'level2' });
        this.muteVol = 0;
        this.midVol = 0.1;
        this.fullVol = 0.3;
        this.generalVolume = this.fullVol;
        this.muted = false;
        this.playing = true;
        this.time = 0;
    }
    /**
    * Creación de los elementos de la escena principal de juego
    */
    create() {
        //DIMENSIONES
        const width = this.scale.width;
        const height = this.scale.height;
        const large = width * 10;

        this.createAligned(this, large, 'beach', 1);

        this.player = new Player(this, 50, 300, 5);
        this.createTileMap();
        this.createEnemies();
        this.createPowerUps();
        this.createObstacles();
        this.createPause();
        this.backgroundMusic();


        this.tiempoTotal = 0; this.tiempo;
        this.tiempoPausa = false;
        this.timerLabel = this.add.text(800, 10, "", { fontFamily: 'CustomFont' }).setScrollFactor(0);

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
        this.map2 = this.make.tilemap({
            key: 'map2',
            tileWidth: 64,
            tileHeight: 64
        });
        const tileset1 = this.map2.addTilesetImage('tilesetbeach', 'patronesLevel2');
        this.waterLayer = this.map2.createLayer('Water', tileset1);
        this.sandLayer = this.map2.createLayer('Sand', tileset1);

        this.physics.add.collider(this.player, this.waterLayer);
        this.physics.add.collider(this.player, this.sandLayer);

        this.sandLayer.setCollisionBetween(0, 999);
        this.waterLayer.setCollisionBetween(0, 999);
    }
    createAligned(scene, large, texture, scrollFactor) {
        const w = scene.textures.get(texture).getSourceImage().width; //Ancho de la imagen de fondo
        const cant = Math.ceil(large / w) * scrollFactor; //Calculo la cantidad de imagenes necesarias

        let x = 0;

        for (let i = 0; i < cant; i++) {
            const b = scene.add.image(x, scene.scale.height, texture)
                .setOrigin(0, 1)
                .setScrollFactor(scrollFactor);

            x += b.width;
        }
    }
    /**
     * Creación de enemigos del Tiled
     */
    createEnemies() {
        //gorriones
        for (const sparrow of this.map2.getObjectLayer('Sparrows').objects) {
            this.sparrow = new Sparrow(this, this.player, sparrow.x, sparrow.y);
            this.physics.add.collider(this.sparrow, this.sandLayer);
        }
        //cuervos
        for (const crow of this.map2.getObjectLayer('Crows').objects) {
            this.crow = new Crow(this, this.player, crow.x, crow.y, 'crow');
            this.physics.add.collider(this.crow, this.sandLayer);
        }
        //aguiluchos
        for (const harrier of this.map2.getObjectLayer('Harriers').objects) {
            this.harrier = new Harrier(this, this.player, harrier.x, harrier.y, 'harrier');
            this.physics.add.collider(this.harrier, this.sandLayer);
        }
        //gaviotas
        for (const seagull of this.map2.getObjectLayer('Seagulls').objects) {
            this.seagull = new Seagull(this, this.player, seagull.x, seagull.y, 'seagull');
            this.physics.add.collider(this.seagull, this.sandLayer);
        }
    }
    /**
     * Creación de powerUps
     */
    createPowerUps() {
        //cola
        for (const cola of this.map2.getObjectLayer('Colas').objects) {
            this.cola = new Cola(this, this.player, cola.x, cola.y);
            this.physics.add.collider(this.cola, this.groundLayer);
        }
        //vendas
        for (const bandage of this.map2.getObjectLayer('Bandages').objects) {
            this.bandage = new Bandages(this, bandage.x, bandage.y, 'bandage');
            this.physics.add.collider(this.bandage, this.sandLayer);
        }
        //llaves
        for (const k of this.map2.getObjectLayer('Keys').objects) {
            this.keys = new Key(this, this.player, k.x, k.y);
            this.physics.add.collider(this.keys, this.sandLayer);
        }
    }
    /**
     * Creación de obstáculos
     */
    createObstacles() {
        for (const fences of this.map2.getObjectLayer('Fences').objects) {
            this.fences = new Obstacles(this, fences.x, fences.y, 'fence');
            this.physics.add.collider(this.fences, this.sandLayer);
            this.physics.add.collider(this.fences, this.player);
        }
        for (const victorycollider of this.map2.getObjectLayer('VictoryCollider').objects) {
            this.victorycollider = new VictoryCollider(this, this.player, victorycollider.x, victorycollider.y);
            this.physics.add.collider(this.victorycollider, this.sandLayer);
        }
        for (const debris of this.map2.getObjectLayer('Debris').objects) {
            this.debris = new Obstacles(this, debris.x, debris.y, 'debris');
            this.physics.add.collider(this.debris, this.sandLayer);
            this.physics.add.collider(this.debris, this.player);
        }
        for (const car of this.map2.getObjectLayer('Cars').objects) {
            this.car = new Obstacles(this, car.x, car.y, 'redcar');
            this.physics.add.collider(this.car, this.sandLayer);
            this.physics.add.collider(this.car, this.player);
        }
        //spikes
        for (const spikes of this.map2.getObjectLayer('Spikes').objects) {
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
        this.resume = this.add.image(400, 160, 'button').setScale(1.2).setScrollFactor(0).setInteractive().setVisible(false);
        this.help = this.add.image(600, 160, 'controlsButton').setScale(2).setScrollFactor(0).setInteractive().setVisible(false);
        this.exit = this.add.image(600, 350, 'exit').setScale(1.5).setScrollFactor(0).setInteractive().setVisible(false);
        this.fullsound = this.add.image(400, 350, 'sound').setScale(1.5).setScrollFactor(0).setInteractive().setVisible(false);
        this.midsound = this.add.image(400, 350, 'midsound').setScale(1.5).setScrollFactor(0).setInteractive().setVisible(false);
        this.mutesound = this.add.image(400, 350, 'mute').setScale(1.5).setScrollFactor(0).setInteractive().setVisible(false);
        this.pause = this.add.image(970, 30, 'pause').setScale(0.1).setScrollFactor(0).setInteractive();
        //si pulsas pausa
        this.pause.on("pointerdown", () => {
            this.playing = false;
            this.soundtrack.stop();
            this.tiempoPausa = true;
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
                //this.scene.stop();
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
            //salir
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
            this.scene.start('level2');
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
    /* 
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

        this.add.image(500, 250, 'backgroundvictory').setScrollFactor(0);
        this.finalTime = (this.timeScene / 100).toString();
        this.add.text(370, 100, this.finalTime, { fontFamily: 'CustomFont', fontSize: 64, color: '#d1bf09' }).setScrollFactor(0);
        this.botonStart = this.add.image(410, 300, 'replay').setScale(1.2).setScrollFactor(0).setInteractive();
        this.exit = this.add.image(615, 300, 'exit').setScale(1.5).setScrollFactor(0).setInteractive();
        //repetir nivel
        this.botonStart.on("pointerdown", () => {
            this.winmusic.stop();
            this.clicksound.play();
            this.scene.start('level2');
        });
        //salir
        this.exit.on("pointerdown", () => {
            this.scene.stop();
            this.winmusic.stop();
            this.clicksound.play();
            this.scene.start('menu');
        });
    }
    bandagePickt() {
        this.player.bandageEffect();
    }
    timeTimer() {
        let timer = this.time.addEvent({
            delay: 1000,
            callback: this.updateTime,
            callbackScope: this
        });
    }
    /**
     * Actualizar tiempo
     */
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
    //MUSICA DE FONDO
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
        this.soundtrack = this.sound.add("backsound2", config);
        this.soundtrack.play();
    }
    /**
     * Sonido al recoger powerUp
     */
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
    /**
     *  Sonido del periquito bomba
     */
    parakeetSoundEffect() {
        const config = {
            mute: false,
            volume: this.generalVolume + 0.1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0,
        };
        this.pickupSound = this.sound.add("parakeetsound", config);
        this.pickupSound.play();
    }
    /**
     * Sonido al consumir powerUp
     */
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
    /**
     * Sonido al sufrir daño
     */
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
    /**
     * Sonido al clickar botón
     */
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