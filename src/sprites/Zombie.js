import Phaser from 'phaser';
export default class Zombie extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key, config.frame);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.scene = config.scene;
        this.attackActive = false;
    }

    create () {
        this.body.setSize(50, 50, true);
        this.body.setCircle(20);

        //collisions
        // this.scene.physics.add.collider(this, this.scene.player, () => {
        //     this.anims.stop();
        //     this.anims.play('zombie_attack', true);
        // });

        // this.setOrigin(0.5, 0.5);
        // un autre moyen pour faire bouger le zombie au joueur sans la rotation & sans le changement de direction si le joueur bouge
        // this.scene.sys.arcadePhysics.moveToObject(this, this.scene.player, 60, 1000);
    }

    // lookAtPlayer () {

    // }

    update () {
        // dès que le joueur est proche du zombie le zombie lui fonce dessus, par contre dès qu'il quitte la zone d'aggro l'aggro disparaît
        let attackInterval;

        if (this.body) {
            let distanceBet = Phaser.Math.Distance.Between(this.scene.player.x, this.scene.player.y, this.body.x, this.body.y);
            if (distanceBet < 250 && distanceBet > 20 )
            {
                this.rotation = Phaser.Math.Angle.Between(this.body.x, this.body.y, this.scene.player.x, this.scene.player.y);

                this.body.setVelocity(Math.cos(this.rotation) * 100, Math.sin(this.rotation) * 100);
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
                console.log(this.scene.player.hp);
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