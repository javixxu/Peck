import Boot from './boot.js';
import Menu from './scenes//mainmenu.js';
import gameOver from './scenes/gameOver.js';
import Level from './scenes/level.js';
import Level2 from './scenes/level2.js';
import Victoryscene from './scenes/victoryscene.js'
    /**
     * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
     * la clase Game de Phaser, encargada de crear e iniciar el juego.
     */
    let config = {
        type: Phaser.AUTO,
        width: 1000,
        height: 500,
        backgroundColor: '392542',
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
        },
        pixelArt: true,
        scene: [Boot, Menu, Level, Level2],
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 400 },
                debug: true
            }
        }
    };  
    new Phaser.Game(config);
    
    
