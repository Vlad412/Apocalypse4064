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

    }

}
export default Game;