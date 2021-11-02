/**
 * Inicio del juego en Phaser. Creamos el archivo de configuración del juego y creamos
 * la clase Game de Phaser, encargada de crear e iniciar el juego.
 */

let config = {
    type: Phaser.AUTO,
    width:  1000,
    height: 500,
    backgroundColor:'250250',
    //backgroundColor: '392542',
    scale: {
        // mode: Phaser.Scale.FIT,  
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },
    scene:[{create:create}],
    pixelArt: true,
    physics: { 
        default: 'arcade', 
        arcade: { 
            gravity: { y: 400 }, 
            debug: false 
        } 
    }
};
function create(){
    this.add.text(400,200,"It works!")
}

new Phaser.Game(config);