import Boot from './boot.js';
import Menu from './mainmenu.js';
import gameOver from './gameOver.js';
import Level from './scene.js';
import victoriascene from './victoriascene.js'
import PauseMenu from './pausemenu.js';
/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */
 let config = {
    type: Phaser.AUTO,
    width:  1000,
    height: 500,
    backgroundColor: '392542',
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    pixelArt: true,
    scene: [Boot, Menu,Level, gameOver, victoriascene, PauseMenu],
    physics: { 
        default: 'arcade', 
        arcade: { 
            gravity: { y: 400 }, 
            debug: true 
        } 
    }
};

new Phaser.Game(config);