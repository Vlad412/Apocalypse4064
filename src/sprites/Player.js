export default class Player extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key, config.frame);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.scene = config.scene;
        this.gunActive = false;
        this.hp = 100;
    }

    run (velX, velY) {
        this.body.setVelocity(velX, velY);
    }

    preload () {
    }

    create () {

        this.scene.crosshair = this.scene.add.image(this.scene.sys.game.config.width / 2, this.scene.sys.game.config.height / 2,'crosshair');

        this.gun = this.scene.sound.add('gun_shoot');

        //size
        this.body.setSize(50, 50, true);
        this.body.setCircle(20);

        document.addEventListener("click", () => {
            console.log('BAM !!');
            this.gun.play();
            this.gunActive = true;
            let line = new window.Phaser.Geom.Line(this.body.x, this.body.y, this.scene.crosshair.x, this.scene.crosshair.y);

            if (this.scene.zombies.length > 0) {

                this.scene.zombies.forEach((zomb) => {

                    if (zomb.x > this.body.x && zomb.y < this.scene.crosshair.x && zomb.y > this.body.y && zomb.y < this.scene.crosshair.y) {
                        zomb.destroy();
                        // delete zomb;
                    }
                });
                // if (this.scene.zombie.x > this.body.x && this.scene.zombie.x < this.scene.crosshair.x && this.scene.zombie.y > this.body.y && this.scene.zombie.y < this.scene.crosshair.y) {
                //     this.scene.zombie.destroy();
                //     delete this.scene.zombie;
                // }
            }

            setTimeout(() => {
                this.gunActive = false;
                line = undefined;
            }, 100);
            this.anims.play('player_shoot3', true);
            console.log(this.anims);
        });

    }

    update () {
        // contrôles de déplacement du joueur
        if (this.scene.cursors.up.isDown && !this.gunActive) {
            this.anims.play('player_walk', true);
            this.body.setVelocityY(-100);
        } else if (this.scene.cursors.down.isDown && !this.gunActive) {
            this.anims.play('player_walk', true);
            this.body.setVelocityY(100);
        } else {
            this.body.setVelocityY(0);
        }

        if (this.scene.cursors.left.isDown && !this.gunActive) {
            this.anims.play('player_walk', true);
            this.body.setVelocityX(-100);
        } else if (this.scene.cursors.right.isDown && !this.gunActive) {
            this.anims.play('player_walk', true);
            this.body.setVelocityX(100);
        } else {
            this.body.setVelocityX(0);
        }

        if ( this.scene.cursors.up.isUp && this.scene.cursors.down.isUp && this.scene.cursors.left.isUp && this.scene.cursors.right.isUp && !this.gunActive) {
            this.anims.play('player_idle', true);
        }

        // lookAt le viseur
        this.rotation = Phaser.Math.Angle.Between(this.x, this.y, this.scene.crosshair.x, this.scene.crosshair.y);
    }
}