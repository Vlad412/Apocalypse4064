export default function createAnimations(scene) {
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNames('spritesheet', { start: 0, end: 19, zeroPad: 0, prefix: 'handgun/idle/survivor-idle_handgun_', suffix: '.png' }),
        frameRate: 20,
        repeat: -1
    });

     scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNames('spritesheet', { start: 0, end: 19, zeroPad: 0, prefix: 'handgun/move/survivor-move_handgun_', suffix: '.png' }),
            frameRate: 20,
            repeat: -1
        });

    scene.anims.create({
        key: 'zombie_idle',
        frames: scene.anims.generateFrameNames('spritesheet', { start: 0, end: 16, zeroPad: 0, prefix: 'skeleton-idle_', suffix: '.png' }),
        frameRate: 5,
        repeat: -1
    });

    scene.anims.create({
        key: 'zombie_walk',
        frames: scene.anims.generateFrameNames('spritesheet', { start: 0, end: 16, zeroPad: 0, prefix: 'skeleton-move_', suffix: '.png' }),
        frameRate: 24,
        repeat: -1
    });

        console.log('sector clear !');
}