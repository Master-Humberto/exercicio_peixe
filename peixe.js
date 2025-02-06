var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene : { 
        preload : preload,
        create : create,
        update : update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload(){
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('baiacu', 'assets/baiacu.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('crustaceo', 'assets/crustaceo.png');
}

function create(){
    this.add.image(400,300,'mar');
    // this.add.image(400,300, 'baiacu').setOrigin(0.5, 0.5).setFlip(true, false);
    this.add.image(400,525, 'logo').setScale(0.5);
    this.add.image(750,525, 'crustaceo').setOrigin(0.9, 0.9);
    peixinho = this.add.image(400,300, 'baiacu');

}

function update(){
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}