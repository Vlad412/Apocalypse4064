import {Bullet} from './Bullet';
export default class Player extends Phaser.GameObjects.Sprite {
    constructor (config) {
        super(config.scene, config.x, config.y, config.key, config.frame);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.scene = config.scene;
        this.gunActive = false;
        this.hp = 10000;


        this.bullets;
        this.speed;
    }

    run (velX, velY) {
        this.body.setVelocity(velX, velY);
    }

    preload () {
    }

    create () {

        //collision bords de map
        this.body.collideWorldBounds = true;

        //variables pour viseur & vélocité
        //let velocity = new Phaser.Math.Vector2();
        //let line = new Phaser.Geom.Line();
        this.velocity = new Phaser.Math.Vector2();
        this.line = new Phaser.Geom.Line();

        //création du viseur
        // this.scene.input.on('pointermove', (pointer) => {
        //     console.log('la souris bouge' + angle);
        //     let angle = Phaser.Math.Angle.Between(this.x, this.y, pointer.x, pointer.y);

        //     Phaser.Geom.Line.SetToAngle(line, this.x + Math.cos(angle) * 60, this.y + Math.sin(angle) * 60, angle, 400);
        //     this.scene.physics.velocityFromRotation(angle, 3000, velocity);
        //     gfx.clear().strokeLineShape(line);
        // }, this);

        this.scene.crosshair = this.scene.add.image(this.scene.sys.game.config.width / 2, this.scene.sys.game.config.height / 2, 'crosshair');

        //son des balles
        this.gun = this.scene.sound.add('gun_shoot');

        //création des balles
        this.bullets = this.scene.physics.add.group({
            classType: Bullet,
            maxSize: 10,
            runChildUpdate: true
        });


        //size
        this.body.setSize(50, 50, true);
        this.body.setCircle(20);

        document.addEventListener("click", () => {
            console.log('bullets group : ' + this.bullets);

            //let angle = Phaser.Math.Angle.Between(this.scene.player.x, this.scene.player.y, this.scene.crosshair.x, this.scene.crosshair.y);

            //console.log(angle);

            let bullete = this.bullets.get();

            //Phaser.Geom.Line.SetToAngle();

            if (bullete) {
                console.log(this.bullets.countActive(true));
                bullete.activate(this.body.x, this.body.y);
                bullete.body.setVelocity(this.velocity.x, this.velocity.y);
                
            }
            this.gun.play();
            this.gunActive = true;

            setTimeout(() => {
                this.gunActive = false;
            }, 100);
            this.anims.play('player_shoot3', true);
            console.log('anims' + this.anims);
        });

    }

    update () {

        //viseur
        let angle = Phaser.Math.Angle.Between(this.x, this.y, this.scene.input.activePointer.x, this.scene.input.activePointer.y);
        Phaser.Geom.Line.SetToAngle(this.line, this.x + Math.cos(angle) * 60, this.y + Math.sin(angle) * 60, angle, 400);
        this.scene.physics.velocityFromRotation(angle, 3000, this.velocity);

        // contrôles de déplacement du joueur
        if (this.scene.cursors.up.isDown && !this.gunActive) {
            this.anims.play('player_walk', true);
            this.body.setVelocityY(-100);
        } else if (this.scene.cursors.down.isDown && !this.gunActive) {
            this.anims.play('player_walk', true);
            this.body.setVelocityY(100);
        } else {
            this.body.setVelocityY(0);
        }

        if (this.scene.cursors.left.isDown && !this.gunActive) {
            this.anims.play('player_walk', true);
            this.body.setVelocityX(-100);
        } else if (this.scene.cursors.right.isDown && !this.gunActive) {
            this.anims.play('player_walk', true);
            this.body.setVelocityX(100);
        } else {
            this.body.setVelocityX(0);
        }

        if ( this.scene.cursors.up.isUp && this.scene.cursors.down.isUp && this.scene.cursors.left.isUp && this.scene.cursors.right.isUp && !this.gunActive) {
            this.anims.play('player_idle', true);
        }

        // lookAt le viseur
        this.rotation = Phaser.Math.Angle.Between(this.x, this.y, this.scene.input.activePointer.x, this.scene.input.activePointer.y);

    }
}