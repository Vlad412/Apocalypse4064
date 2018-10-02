// import Phaser from 'phaser';
export default class Zombie extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture) {
        super(scene, x, y, texture);
        //config.scene.physics.world.enable(this);
        //config.scene.add.existing(this);
        //this.scene = config.scene;
        this.attackActive = false;

        this.circle;

        Phaser.GameObjects.Sprite.call(this, scene, 0, 0, 'spritesheet_mini');
    }

    spawn (x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
        this.body.setSize(50, 50, true);
        this.body.setCircle(20);

    }

    death() {
        this.setActive(false);
        this.setVisible(false);
        this.destroy();
    }

    update () {
        // dès que le joueur est proche du zombie le zombie lui fonce dessus, par contre dès qu'il quitte la zone d'aggro l'aggro disparaît
        let attackInterval;

        if (this.body) {
            let distanceBet = Phaser.Math.Distance.Between(this.scene.player.x, this.scene.player.y, this.body.x, this.body.y);
            if (distanceBet < 250 && distanceBet > 20 )
            {
                this.rotation = Phaser.Math.Angle.Between(this.body.x, this.body.y, this.scene.player.x, this.scene.player.y);

                //les zombies vont sur moi ici
                //this.body.setVelocity(Math.cos(this.rotation) * 100, Math.sin(this.rotation) * 100);
                this.anims.play('zombie_walk', true);
                // if (attackInterval) {
                //     clearInterval(attackInterval);
                // }
            } else if (distanceBet < 20 && distanceBet > 5)
            {
                this.body.setVelocity(0, 0);
                this.anims.play('zombie_attack', true);
                // attackInterval = setTimeout(() => {
                //     this.scene.player.hp -= 20;
                // }, 2000);
                this.scene.player.hp -= 1;
                //console.log(this.scene.player.hp);
            } else {
                // if (attackInterval)  {
                //     clearInterval(attackInterval);
                // }
                this.body.setVelocity(0, 0);
                this.anims.play('zombie_idle', true);
            }
        }
    }
}