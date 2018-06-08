class GameOver extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'GameOver'
        });
    }

    create () {
        let centerX = this.sys.game.config.width / 2 - 300;
        let centerY = this.sys.game.config.height / 2;
        let text = this.add.text(centerX, centerY,  'Game over... Nice try ;)', {
            color: '#ffffff',
            font: '60px Impact'
        });
    }
}

export default GameOver;