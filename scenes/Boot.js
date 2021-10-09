

export default class Boot extends Phaser.Scene {
    constructor(){
        super({
            key: `boot`
        });
    }

    preload(){
        this.load.image(`bg`, `assets/background2d.png`);
        this.load.spritesheet(`princess`, `assets/characters.png`, {frameWidth: 32, frameHeight: 128});
        this.load.image(`monster`, `assets/monsters-0.png`);
        this.load.image(`fire`, `assets/fire.png`);
        this.load.image(`floor`, `assets/groundFloor.png`);
        this.load.image(`floatingFloor`, `assets/floatingFloor.png`);

        this.load.on(`complete`, () => {
            this.scene.start(`play`);
        } )
    }

    create(){
        const textStyle = {
            fontFamily: `sans-serif`,
            fontSize: `40px`, 
            color: `#ffffff`
        };
        const loadingString = `Loading...`;
        this.add.text(100, 100, loadingString, textStyle);

        
    }

    update(){

    }

}