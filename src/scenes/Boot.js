import 'phaser';
import createAnimations from '../utils/createAnimations';
class Boot extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'Boot'
        });
    }
    preload () {
        //load ground texture
        this.load.image('ground', 'assets/images/ground_texture.jpg');

        //load player
        this.load.atlas('player_idle', 'assets/player/player_idle.png', 'assets/player/player_idle.json');
        this.load.atlas('spritesheet', 'assets/sprite/spritesheet.png', 'assets/sprite/spritesheet.json');

        this.load.image('logo', 'assets/logo.png');
        //another player spritesheet

        // this.load.spritesheet('dude','src/games/firstgame/assets/dude.png',{ frameWidth: 32, frameHeight: 48 });

        // Music to play. Need to cut it for it to loop properly
        // this.load.audio('overworld', [
        //     'assets/music/overworld.ogg',
        //     'assets/music/overworld.mp3'
        // ]);

        // this.load.audioSprite('sfx', [
        //     'assets/audio/sfx.ogg',
        //     'assets/audio/sfx.mp3'
        // ], 'assets/audio/sfx.json', {
        //         instances: 4
        //     });

    }
    create () {
        createAnimations(this);
        console.log("BOOTED");
        this.scene.start('Game');

    }
}

export default Boot;


