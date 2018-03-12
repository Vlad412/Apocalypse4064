export default function createAnimations(scene) {
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNames('spritesheet', { start: 1, end: 19, zeroPad: 0, prefix: 'handgun/idle/survivor-idle_handgun_', suffix: '.png' }),
        frameRate: 20,
        repeat: -1
    });

     scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNames('spritesheet', { start: 1, end: 19, zeroPad: 0, prefix: 'handgun/move/survivor-move_handgun_', suffix: '.png' }),
            frameRate: 20,
            repeat: -1
        });

        console.log('sector clear !');
}