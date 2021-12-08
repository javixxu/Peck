export default class PowerUp extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, name)
    {
        super(scene, x, y, name);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this, true);
    }

    soundEffect()
    {
        const config = {
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0,
        };
        this.pickupSound= this.scene.sound.add("pickup",config);
        this.pickupSound.play();
    }
}
