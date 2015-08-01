/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

// Canvas //
var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const dimension: number = 50;

class Character {
    image: HTMLImageElement;
    xpos: number;
    ypos: number;
    constructor(xpos: number, ypos: number, imgLink: string) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.image = new Image();
        this.image.src = imgLink;
    }
    ai(pacMan: Character) {
        if (pacMan.xpos > this.xpos) {
            this.xpos++;
        }
        else if (pacMan.xpos < this.xpos) {
            this.xpos--;
        }
        else if (pacMan.ypos > this.ypos) {
            this.ypos++;
        }
        else if (pacMan.ypos < this.ypos) {
            this.ypos--;
        }
        else
        {
            alert("GAME OVER!!!")
        }
    }
}



var pacMan = new Character(0, 0, "Content/Pacman_Pics/pacmanpic.png");

var ghostsArray = [
    new Character(6, 8, "Content/Pacman_Pics/blueghost.png"),
    new Character(7, 5, "Content/Pacman_Pics/pinkyghost.png"),
    new Character(10, 5, "Content/Pacman_Pics/redghost.png"),
    new Character(9, 6, "Content/Pacman_Pics/orangeghost.png")
];




enum direction {
    right = 39,
    left = 37,
    up = 38,
    down = 40
};

var xpos: number = 0;
var ypos: number = 0;
window.setInterval(drawCanvas, 333);
window.setInterval(updateCharPos, 1000);
function drawCanvas() {
    ctx.clearRect(0, 0, 1100, 600);
    ctx.drawImage(pacMan.image, pacMan.xpos * dimension, pacMan.ypos * dimension);
    for (var ghost of ghostsArray) {
        ctx.drawImage(ghost.image, ghost.xpos*dimension, ghost.ypos*dimension);
    }

}


function updateCharPos() {
    for (var ghost of ghostsArray) {
        ghost.ai(pacMan);
    }

}







$(document).on("keydown", function (e) {

    window.scrollTo(0, 0);

    switch (e.which) {
        case direction.right: {
            pacMan.xpos += 1;
            break;
        }
        case direction.left: {
            pacMan.xpos -= 1;
            break;
        }
        case direction.up: {
            pacMan.ypos -= 1;
            break;
        }
        case direction.down: {
            pacMan.ypos += 1;
            break;
        }
    }

    console.dir(e);
    console.dir(xpos);
});
