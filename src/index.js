import 'phaser';
// import { config } from '../config';
import Boot from './scenes/Boot';
import Menu from './scenes/Menu';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';

let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
            debug: true
        }
    },
    scene: [
        Boot,
        Menu,
        Game,
        GameOver
    ]
};

let game = new Phaser.Game(config);
