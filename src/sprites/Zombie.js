export default class Zombie extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key, config.frame);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.scene = config.scene;
    }

    update () {
        this.anims.play('zombie_idle', true);

        
    }
}