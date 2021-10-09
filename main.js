// "use strict";

import Boot from "./scenes/Boot.js";
import Game from "./scenes/Game.js";

const config = {
    type: Phaser.AUTO,
    width: 800, 
    height: 600,
    physics: {
        default: `arcade`
    },
    scene: [Boot, Game]
}

let game = new Phaser.Game(config);