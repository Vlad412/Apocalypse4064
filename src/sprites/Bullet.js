export class Bullet extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        // scene.physics.world.enable(this);
        //config.scene.add.existing(this);

        this.speed = Phaser.Math.GetSpeed(400, 1);

        Phaser.GameObjects.Image.call(this, scene, 0, 0);

    }

    create() {
    }

    activate(x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
        this.body.setSize(10, 10, true);
        this.body.setCircle(10);
    }

    update(delta) {
        //this.y -= this.speed * delta;
        if (this.body.checkWorldBounds()) {
            this.setActive(false);
            this.setVisible(false);
            this.destroy();
        }
    }
}