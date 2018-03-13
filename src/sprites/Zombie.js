import Phaser from 'phaser';
export default class Zombie extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key, config.frame);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.scene = config.scene;
        // config.moveToObject(this.body, this.player, 5);
        // console.log(this.sys.game.config);
        console.log(window.Phaser.Math.Angle);
        // console.log(config.scene.sys.arcadePhysics.moveToObject());

        
    }

    followPlayer () {
        console.log('Player position ( x, y ) : ( ' + this.scene.player.x + ', ' + this.scene.player.y + ' )');
    }

    create () {
        console.log(this.body);
        // un autre moyen pour faire bouger le zombie au joueur sans la rotation & sans le changement de direction si le joueur bouge
        // this.scene.sys.arcadePhysics.moveToObject(this, this.scene.player, 60, 1000);
    }

    // lookAtPlayer () {

    // }

    update () {

        if (window.Phaser.Math.Distance.Between(this.scene.player.x, this.scene.player.y, this.body.x, this.body.y) < 250)
        {
            console.log('zone entered');
            this.rotation = window.Phaser.Math.Angle.Between(this.body.x, this.body.y, this.scene.player.x, this.scene.player.y);

            this.body.setVelocity(Math.cos(this.rotation) * 100, Math.sin(this.rotation) * 100);
            this.anims.play('zombie_walk', true);
        } else {
            this.body.setVelocity(0, 0);
            this.anims.play('zombie_idle', true);
        }

    }
}