class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }

  preload() {
    // load audio
    this.load.audio('sfx_select', './assets/blip_select12.wav');
    this.load.audio('sfx_explosion', './assets/explosion.wav');
    this.load.audio('sfx_rocket', './assets/shoot.wav');
    this.load.audio('sfx_background', './assets/background.mp3');
    this.load.spritesheet('space', './assets/space.png', { frameWidth: game.config.width, frameHeight: game.config.height, startFrame: 0, endFrame: 2 });
  }

  create() {

    this.anims.create({
      key: 'earth',
      frames: this.anims.generateFrameNumbers('space', { start: 0, end: 1, first: 0 }),
      frameRate: 5
    });
    let backg = this.add.sprite(0, 0, 'space').setOrigin(0, 0);
    backg.anims.play('earth');             
    backg.on('animationcomplete', () => {    
      backg.anims.play('earth');
    });


    // menu text configuration
    let menuConfig = {
      fontFamily: 'Gill Sans',
      fontSize: '40px',
      //backgroundColor: '#F3B141',
      color: '#843605',
      align: 'right',
      padding: {
        top: 5,
        bottom: 5,
      },
      fixedWidth: 0
    }

    //Easy button setting
    let easy_butt = this.add.text(game.config.width / 2, 300, 'Easy Mode', { fontFamily: "Gill Sans", color: '#0f0' }).setOrigin(0.5);;
    easy_butt.setInteractive();

    easy_butt.on('pointerover', () => {
      easy_butt.setColor('#0000FF')

    });

    easy_butt.on('pointerout', () => {
      easy_butt.setColor('#0f0')

    });

    easy_butt.on('pointerdown', () => {
      // Novice mode
      game.settings = {
        spaceshipSpeed: 3,
        gameTimer: 60000
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");
    });

    //Easy button setting
    let hard_butt = this.add.text(game.config.width / 2, 350, 'Hard Mode', { fontFamily: "Gill Sans", color: '#0f0' }).setOrigin(0.5);;
    hard_butt.setInteractive();

    hard_butt.on('pointerover', () => {
      hard_butt.setColor('#0000FF')

    });

    hard_butt.on('pointerout', () => {
      hard_butt.setColor('#0f0')

    });

    hard_butt.on('pointerdown', () => {
      // Expert mode
      game.settings = {
        spaceshipSpeed: 4,
        gameTimer: 45000
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");
    });

    // show menu text
    this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding - 100, 'Char\'s Revenge', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width / 2, game.config.height / 2, '(F) to fire', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';

  }


  update() {

  }
}