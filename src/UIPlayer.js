/**
 * Clase que representa la interfaz de usuario del jugador,
 * en ella se visualizan las vidas y el inventario 
 */
export default class UIPlayer extends Phaser.GameObjects.Sprite {

    constructor(scene, player, numslife, maxLife, score, powerups) {
        super(scene, player, numslife, maxLife, score, powerups);

        this.scene = scene;
        this.gameMaxLife = maxLife;
        //VIDA ACTUAL
        this.currentLife = numslife;
        //tamaño del corazon
        this.w = this.scene.textures.get('corazon').getSourceImage().width;
        //barra de vida
        this.lifeGroup = this.scene.add.group();
        this.score = score;
        this.player = player;

        this.createLivesGroup();
        this.scene.add.image(70, 100, 'inventory').setScrollFactor(0).setScale(2.5, 2.5);
        this.cola = this.scene.add.image(62, 90, 'cola').setScrollFactor(0).setScale(0.5, 0.5).setVisible(false);
        this.bandage = this.scene.add.image(62, 90, 'bandage').setScrollFactor(0).setScale(0.5, 0.5).setVisible(false);
        this.birdseed = this.scene.add.image(62, 90, 'key').setScrollFactor(0).setScale(0.7, 0.7).setVisible(false);
    }
    /**
 * Creación grupo de vidas
 */
    createLivesGroup() {

        this.positions = 0; this.x = 50;

        for (let i = 0; i < this.gameMaxLife; i += 0.5) {

            if (this.positions % 2 === 0) {
                this.lifeGroup.create(this.x, 45, 'corazon').setScrollFactor(0);
            }
            else {
                this.lifeGroup.create(this.x, 45, 'corazon').setFlip(true, false).setScrollFactor(0);
                this.x += 20 + this.w / 2;
            }
            this.positions++;

            if (i >= this.currentLife) {
                let entity = this.lifeGroup.getLast(true, false);
                this.lifeGroup.killAndHide(entity);
            }
        }
    }
    /**
 * Perder vida
 */
    loseLife(hit) {
        if (this.currentLife - hit < 0) hit = 0;

        for (let i = 0; i < hit; i += 0.5) {
            let entity = this.lifeGroup.getLast(true, false);
            this.lifeGroup.killAndHide(entity);
        }
        this.currentLife -= hit;
    }
    /**
 * Ganar vida
 */
    addLife(maximLife) {
        if (maximLife + this.currentLife > 5) maximLife = this.gameMaxLife - this.currentLife;

        for (let i = 0; i < maximLife; i += 0.5) {
            let x = this.lifeGroup.getFirstDead(false, false);
            x.setVisible(true);
            x.setActive(true);
        }
        this.currentLife += maximLife;
    }
    /**
     * Visualizar powerUp en el inventario 
     */
    seePowerUp(visible, pU) {
        if (pU == 'cola') this.cola.setVisible(visible);

        else if (pU == 'bandage') {
            this.bandage.setVisible(visible);
        }
        else if (pU == 'key') {
            this.birdseed.setVisible(visible);
        }
    }
}