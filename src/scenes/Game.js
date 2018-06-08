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

        this.variableSpawn = 1000;
        this.zombies = [];
    }

    preload () {
    }

    getRand (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    create () {
        let background = this.add.image(400, 300, 'ground');
        let testText = this.add.text(20, 20, 'Pre, pre, pre-pre pre-Alpha');

        this.player = new Player({
            scene: this,
            x: 200,
            y: 200,
            key: 'spritesheet_mini',
            frame: 'idle/survivor-idle_knife_0.png'
        });

        this.player.create();

        this.cursors = this.input.keyboard.createCursorKeys();
        console.log(this.cursors);


        // let bb = this.add.sprite(40, 40, 'logo').setOrigin(0, 0);

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

        // clavier
        // this.keys = {
        //     up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
        //     left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
        //     right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
        //     down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        // };


        // collisions
        // console.log(this.player);
        // this.physics.add.collider(this.player, this.zombie, () => {
        //     console.log('test');
        // });

        // zombie spawns

        // if (this.zombies < 10) {
        //     setInterval(() => {
        //         this.zombies.push(this.zombie = new Zombie({
        //             scene: this,
        //             x: this.getRand(300, 700),
        //             y: this.getRand(200, 560),
        //             key: 'spritesheet_mini',
        //             frame: 'idle/skeleton-idle_0.png'
        //         }));
        //         this.zombie.create();
        //     }, this.getRand(500, 1000));

        //     setTimeout(() => {
        //         console.log(this.zombies);
        //     }, 7000);
        // }

        // let variableSpawn = this.getRand(3000, 7000);
        // let spawn = true;
        // let zombies = [];

        // setInterval(() => {
        //     if (spawn)  {
        //         new Zombie({
        //             scene: this,
        //             x: this.getRand(50, 700),
        //             y: this.getRand(10, 560),
        //             key: 'spritesheet_mini',
        //             frame: 'idle/skeleton-idle_0.png'
        //         });
        //     }
        //     spawn = false;
        //     console.log('ya' + zombies);
        // }, 5000);

        //spawneur de zombies
        this.timedEvent = this.time.addEvent({ delay: 3000, callback: this.spawnZombie, callbackScope: this, repeat: 10 });
    }

    update () {
        this.player.update();
        if (this.zombies.length > 0) {
            this.zombies.forEach((zomb) => {
                zomb.update();
            });
            // this.zombie.update();
        }

        // visée à la souris
        this.crosshair.x = this.input.activePointer.x;
        this.crosshair.y = this.input.activePointer.y;


        //Game Over
        if (this.player.hp < 0) {
            this.scene.start('GameOver');
            console.log('gameover');
        }
    }

    spawnZombie () {
        console.log('fonction spawnZombie appellée');
        this.zombies.push(this.zombie = new Zombie({
            scene: this,
            x: this.getRand(300, 700),
            y: this.getRand(200, 560),
            key: 'spritesheet_mini',
            frame: 'idle/skeleton-idle_0.png'
        }));
        this.zombie.create();
    }

}
export default Game;