export default class Player extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key, config.frame);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.scene = config.scene;
    }

    run (velX, velY) {
        this.body.setVelocity(velX, velY);
    }

    preload () {
    }

    create () {
    }

    update () {
        if (this.scene.cursors.left.isDown) {
            this.run(-200, 0);
            this.anims.play('walk', true);
        } else if (this.scene.cursors.right.isDown) {
            this.run(200, 0);
            this.anims.play('walk', true);
        } else if (this.scene.cursors.up.isDown) {
            this.run(0, -200);
            this.anims.play('walk', true);
        } else if (this.scene.cursors.down.isDown) {
            this.run(0, 200);
            this.anims.play('walk', true);
        } else {
            this.run(0, 0);
            this.anims.play('idle', true);
            // this.setVelocity(0);
        }

    }
}