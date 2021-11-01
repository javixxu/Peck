/** 
 Escena para la precarga de los assets que se usarán en el juego.
  Esta escena se puede mejorar añadiendo una imagen del juego y una 
  barra de progreso de carga de los assets
  @see {@link https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/%7D como ejemplo
    sobre cómo hacer una barra de progreso.
*/
  
 
 export default class Boot extends Phaser.Scene{
        constructor() 
        {
            super({ key: 'boot' }); 
        }

  preload()
  {
        this.load.setPath ('../assets/images/');
        this.load.image ('background2', 'background2.jpg');
        this.load.image('platform', 'platform.png');
        this.load.image('base', 'base.png');
        this.load.image('star', 'star.png');
        this.load.image('player', 'cathy2.png');
        //this.load.image('city', 'city.png');

        this.load.spritesheet('crow','ravens.png',{frameWidth:100, frameHeight:75});
        this.load.spritesheet('still','cathy2.png',{frameWidth:50, frameHeight:75});
        this.load.spritesheet('run','cathy_run.png',{frameWidth:50, frameHeight:75});
        this.load.spritesheet('jump','cathy_jump.png',{frameWidth:50, frameHeight:75});
  }
   
  create(){
      this.scene.start('level');
  }
 }