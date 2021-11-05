import Player from './player.js';
import Platform from './platform.js';
import Crow from './crow.js';
import Floor from './floor.js';
import Cola from './cola.js';

const createAligned = (scene, large, texture, scrollFactor)=>{
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
    createAligned(this, large, 'city', 1);
    
    this.stars = 10;
    this.bases = this.add.group();
    this.player = new Player(this, 200, 300, 4.5);
    for(let i = 0; i < large; i+=60)
    {
      this.ground = new Floor(this, this.player, i, height);
    }
    this.cola= new Cola(this,400,400);
    this.crow= new Crow(this,100,100);
   
    
    new Platform(this, this.player, this.bases, 150, 350);
    new Platform(this, this.player, this.bases, 850, 350);
    new Platform(this, this.player, this.bases, 5000, 350);
    
    /*this.anims.create({
      key: 'idle_anim',
      frames: this.anims.generateFrameNumbers('idle', { start: 0, end: 3 }),
      frameRate: 8, // Velocidad de la animación
      repeat: -1    // Animación en bucle
    });*/
    this.anims.create({ //correr 1
        key: 'run_anim',
        frames: this.anims.generateFrameNumbers('run', { start: 0, end: 6 }),
        frameRate: 8, // Velocidad de la animación
        repeat: -1  // Animación en bucle
      });
      this.anims.create({ //correr 1
        key: 'jump_anim',
        frames: this.anims.generateFrameNumbers('jump', { start: 0, end: 6 }),
        frameRate: 8, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({//en estático
        key: 'still_anim',
        frames: this.anims.generateFrameNumbers('still', { start: 0, end: 6 }),
        frameRate: 8, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
      this.anims.create({//en estático
        key: 'raven_right',
        frames: this.anims.generateFrameNumbers('crow', { start: 0, end: 8 }),
        frameRate: 8, // Velocidad de la animación
        repeat: -1    // Animación en bucle
      });
    this.spawn();

    this.physics.world.setBounds( 0, 0, large, height );
    this.cameras.main.setBounds(0, 0, large, height);
    this.cameras.main.startFollow(this.player);
  }

  
 

  /**
   * Genera una estrella en una de las bases del escenario
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
  speedUp(){
    this.player.colaEffect();
  }
}