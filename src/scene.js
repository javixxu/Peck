import Player from './player.js';
import Platform from './platform.js';
import Crow from './crow.js';
import Floor from './floor.js';
import Cola from './cola.js';
import Car from './car.js';
import Fence from './fence.js';
/**
 * Escena principal del juego. La escena se compone de una serie de plataformas 
 * sobre las que se sitúan las bases en las podrán aparecer las estrellas. 
 * El juego comienza generando aleatoriamente una base sobre la que generar una estrella. 
 * Cada vez que el jugador recoge la estrella, aparece una nueva en otra base.
 * El juego termina cuando el jugador ha recogido 10 estrellas.
 * @extends Phaser.Scene
 */
export default class Level extends Phaser.Scene 
{
  /**
   * Constructor de la escena
   */
  constructor() {
    super({ key: 'level' });
  }
  /**
   * Creación de los elementos de la escena principal de juego
   */
  create() {
    //DIMENSIONES
    const width=this.scale.width;
    const height = this.scale.height;
    const large=width*10;
    //background
    //createAligned(large, 'city', 1);
    this.createAligned(this, large,'city',1);
    
    this.stars = 10;
    this.bases = this.add.group();
    this.player = new Player(this, 200, 300, 5);
    for(let i = 0; i < large; i+=60)
    {
      this.ground = new Floor(this, this.player, i, height-10);
    }
    this.cola= new Cola(this,400,400);
    this.crow=new Crow (this, this.player, 50,100, 'crow');
    //this.crow= new Crow(this,50,100);
   
    new Fence(this,this.player, 1500, height-120, 'fence');
    new Car(this, this.player, 1000, height-38, 'car');
    new Platform(this, this.player, this.bases, 150, 350);
    new Platform(this, this.player, this.bases, 850, 350);
    new Platform(this, this.player, this.bases, 5000, 350);
    
    

    this.anims.create({ //correr 1
    key: 'run_anim',
    frames: this.anims.generateFrameNumbers('run', { start: 0, end: 5 }),
    frameRate: 10,
    repeat: -1
    });
    this.anims.create({ //saltar
      key: 'jump_anim',
      frames: this.anims.generateFrameNumbers('jump', { start: 0, end: 2 }),
      frameRate: 4, 
      repeat: -1
    });
    this.anims.create({//en estático
      key: 'still_anim',
      frames: this.anims.generateFrameNumbers('still', { start: 0, end: 6 }),
      frameRate: 8,
      repeat: -1 
    });
    this.anims.create({// movimiento del cuervo
      key: 'raven_right',
      frames: this.anims.generateFrameNumbers('crow', { start: 0, end: 9 }),
      frameRate: 10, // Velocidad de la animación
      repeat: -1    // Animación en bucle
    });
    this.spawn();

    this.physics.world.setBounds( 0, 0, large, height );
    this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);
  }
  createAligned(scene, large, texture, scrollFactor)
  {
    const w = scene.textures.get(texture).getSourceImage().width;
    const cant = Math.ceil(large/w)*scrollFactor;

    let x=0;

    for(let i=0; i<cant; i++){
      const b = scene.add.image(x, scene.scale.height, texture)
      .setOrigin(0,1)
      .setScrollFactor(scrollFactor);

      x+=b.width;
    }
  }
  /**
   * @param {Array<Base>} from Lista de bases sobre las que se puede crear una estrella
   * Si es null, entonces se crea aleatoriamente sobre cualquiera de las bases existentes
   */
  spawn(from = null) {
    Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
  }
  /**
   * Método que se ejecuta al coger una estrella. Se pasa la base
   * sobre la que estaba la estrella cogida para evitar repeticiones
   * @param {Base} base La base sobre la que estaba la estrella que se ha cogido
   */
  starPickt (base) {
    this.player.point();
    if (this.player.score == this.stars) {
      this.scene.start('end');
    }
    else {
      let s = this.bases.children.entries;
      this.spawn(s.filter(o => o !== base));
    }
  }
}