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

        //spawneur de zombies
        this.timedEvent = this.time.addEvent({ delay: 3000, callback: this.spawnZombie, callbackScope: this, repeat: 10 });


        //création du groupe de zombies (sans spawn)
        this.zombies = this.physics.add.group({
            classType: Zombie,
            maxSize: 10,
            runChildUpdate: true
        });

        //test collision balle -> zombie
        if (this.zombies) {
            console.log("salut en dessous c'est le zombie à tester lelz");
            this.physics.add.overlap(this.zombies, this.player.bullets, this.collisionBalleZombie);
        }

    }

    collisionBalleZombie (zombieEnQuestion) {
        console.log('collision okey ftw');
        zombieEnQuestion.death();

    }

    update () {
        this.player.update();

        // visée à la souris
        this.crosshair.x = this.input.activePointer.x;
        this.crosshair.y = this.input.activePointer.y;


        //Game Over
        if (this.player.hp < 0) {
            this.scene.start('GameOver');
            console.log('gameover');
        }

        //compteur de zombies (debug)
        if (this.zombies) {
            console.log(this.zombies.countActive(true));
        }
    }

    spawnZombie () {
        console.log('fonction spawnZombie appellée');

        let zomb = this.zombies.get();

        if (zomb) {
            console.log(this.zombies.countActive(true));
            zomb.spawn(this.getRand(300, 700), this.getRand(200, 560));
        }

    }

}
export default Game;