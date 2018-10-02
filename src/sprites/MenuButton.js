export class MenuButton extends Phaser.GameObjects.Image {
    constructor(config, b, c, onClickFunction) {
        super(config.scene, config.x, config.y, config.key, config.frame);
        config.scene.add.existing(this);

        this.setInteractive({ useHandCursor: true })
        .setFrame(config.frame)
        .on('pointerdown', () => {
            this.setFrame(c);
            onClickFunction();
        })
        .on('pointerover', () => this.setFrame(b) )
        .on('pointerout', () => this.setFrame(config.frame) );
    }
}