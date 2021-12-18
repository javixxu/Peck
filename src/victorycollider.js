
export default class VictoryCollider extends Phaser.GameObjects.Sprite {
    constructor(scene, player, x, y,nextScene) {
        super(scene, x, y, 'car');
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
        this.scene.physics.add.collider(this, player);
        //Para que no salten mil paneles
        this.collideOne=true;
    }
    preUpdate() {
        super.preUpdate();
        if (this.collideOne&&this.scene.physics.overlap(this.scene.player, this)) {
            this.scene.soundtrack.stop();
            this.collideOne=false;
           // if(this.scene.scene.key=='level2') this.scene.scene.start('victoryscene');
           // else {this.scene.scene.start(nextScene);}
           this.scene.victory();
           
        }
    }
}