import {MenuButton} from '../sprites/MenuButton';
class Menu extends Phaser.Scene {
    constructor (test) {
        super({
            key: 'Menu'
        });
    }

    preload () {
    }

    create () {
        let background = this.add.image(400, 300, 'ground');

        let buttonPlay = new MenuButton({
            scene: this,
            x: window.innerWidth / 2,
            y: (window.innerHeight / 2) - ((window.innerHeight/100) * 20),
            key: 'menu',
            frame: 0
        }, 1, 2, () => {
            this.scene.start('Game');
        });


        let buttonSettings = new MenuButton({
            scene: this,
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            key: 'menu',
            frame: 3
        }, 4, 5, () => {
            console.log('start settings');
        });

        let buttonCredits = new MenuButton({
            scene: this,
            x: window.innerWidth / 2,
            y: (window.innerHeight / 2) + ((window.innerHeight/100) * 20),
            key: 'menu',
            frame: 6
        }, 7, 8, () => {
            console.log('see credits');
        });
    }

    update () {
    }

}
export default Menu;