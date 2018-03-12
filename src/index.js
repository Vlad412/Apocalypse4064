import 'phaser';
// import { config } from '../config';
import Boot from './scenes/Boot';
import Game from './scenes/Game';

let config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
            debug: true
        }
    },
    scene: [
        Boot,
        Game
    ]
};

let game = new Phaser.Game(config);
