import Player from '../sprites/Player';
class Game extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'Game'
        });
        this.player;
        this.cursors;
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

        // this.player1 = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'spritesheet', 'handgun/idle/survivor-idle_handgun_0.png');

        // this.anims.create({
        //     key: 'idle',
        //     frames: this.anims.generateFrameNames('spritesheet', { start: 0, end: 19, zeroPad: 0, prefix: 'handgun/idle/survivor-idle_handgun_', suffix: '.png' }),
        //     frameRate: 20,
        //     repeat: -1
        // });

        // this.player1.anims.play('idle');

        // this.player.anims.play('idle');
        console.log(this.player1);
    }

    update () {
        this.player.update();
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