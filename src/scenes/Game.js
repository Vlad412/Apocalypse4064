import Player from '../sprites/Player';
import Zombie from '../sprites/Zombie';
class Game extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'Game'
        });
        this.player;
        this.cursors;
        this.config = test;
    }

    preload () {
    }

    create () {
        let background = this.add.image(400, 300, 'ground');
        let testText = this.add.text(20, 20, 'hello yes it\'s working');

        this.player = new Player({
            scene: this,
            x: 200,
            y: 200,
            key: 'spritesheet',
            frame: 'handgun/idle/survivor-idle_handgun_0.png'
        });
        // this.player.preload();
        this.player.create();

        this.cursors = this.input.keyboard.createCursorKeys();


        this.zombie = new Zombie({
            scene: this,
            x: 650,
            y: 400,
            key: 'spritesheet',
            frame: 'skeleton-idle_0.png'
        });

        this.zombie.create();


        // peut-être utiliser les tweens pour super-pouvoirs
        // this.tweens.add({
        //     targets: this.zombie,
        //     x: this.player.x,
        //     y: this.player.y,
        //     duration: 6000,
        //     ease: 'Cubic',
        //     easeParams: [1.5, 0.5],
        //     delay: 1000
        // });

        // console.log(this.sys.game.config.physics.moveToObject());

    }

    update () {
        this.player.update();
        this.zombie.update();

        // this.config.physics.arcade.moveToObject(this.zombie, this.player, 5);
        // if (this.cursors.left.isDown == true) 
        // {
        //     this.player.run(-200, 0);
        //     console.log('touche appuyée');
        // }

        // if (this.cursors.left.isDown) {
        //     this.player.run(-200, 0);
        //     this.player.anims.play('left', true);
        // }

        // if (this.cursors.left.isDown) {
        //     this.player.anims.play('idle');
        // }

        //  if (this.cursors.left.isDown) {
        //     this.player.run(-200, 0);
        //     this.player.anims.play('walk');
        // } else if (this.cursors.right.isDown) {
        //     this.player.run(200, 0);
        //     this.player.anims.play('walk');
        // } else if (this.cursors.up.isDown) {
        //     this.player.run(0, -200);
        //     this.player.anims.play('walk');
        // } else if (this.cursors.down.isDown) {
        //     this.player.run(0, 200);
        //     this.player.anims.play('walk');
        // } else {
        //     this.player.run(0, 0);
        //     this.player.anims.play('idle');
        //     // this.setVelocity(0);
        // }
    }

}
export default Game;