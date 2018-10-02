export default function createAnimations(scene) {

    // new version small
    scene.anims.create({
        key: 'player_idle',
        frames: scene.anims.generateFrameNames('spritesheet_mini', { start: 0, end: 19, zeroPad: 0, prefix: 'idle/survivor-idle_handgun_', suffix: '.png' }),
        frameRate: 24,
        repeat: -1
    });

    scene.anims.create({
        key: 'player_walk',
        frames: scene.anims.generateFrameNames('spritesheet_mini', { start: 0, end: 19, zeroPad: 0, prefix: 'move/survivor-move_handgun_', suffix: '.png' }),
        frameRate: 24,
        repeat: -1
    });

    scene.anims.create({
        key: 'zombie_idle',
        frames: scene.anims.generateFrameNames('spritesheet_mini', { start: 0, end: 16, zeroPad: 0, prefix: 'idle/skeleton-idle_', suffix: '.png' }),
        frameRate: 24,
        repeat: -1,
        msPerFrame: 100
    });

    scene.anims.create({
        key: 'zombie_walk',
        frames: scene.anims.generateFrameNames('spritesheet_mini', { start: 0, end: 16, zeroPad: 0, prefix: 'move/skeleton-move_', suffix: '.png' }),
        frameRate: 24,
        repeat: -1
    });

    scene.anims.create({
        key: 'zombie_attack',
        frames: scene.anims.generateFrameNames('spritesheet_mini', { start: 0, end: 8, zeroPad: 0, prefix: 'attack/skeleton-attack_', suffix: '.png' }),
        frameRate: 24,
        repeat: -1
    });

    scene.anims.create({
        key: 'player_shoot3',
        frames: scene.anims.generateFrameNames('spritesheet_mini', { start: 0, end: 2, zeroPad: 0, prefix: 'shoot/survivor-shoot_handgun_', suffix: '.png' }),
        frameRate: 24,
        repeat: 0
    });


        console.log('sector clear !');
}