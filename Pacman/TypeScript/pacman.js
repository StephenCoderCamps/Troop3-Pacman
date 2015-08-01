/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
// Canvas //
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dimension = 50;
var Character = (function () {
    function Character(xpos, ypos, imgLink) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.image = new Image();
        this.image.src = imgLink;
    }
    Character.prototype.ai = function (pacMan) {
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
        else {
            alert("GAME OVER!!!");
        }
    };
    return Character;
})();
var pacMan = new Character(0, 0, "Content/Pacman_Pics/pacmanpic.png");
var ghostsArray = [
    new Character(6, 8, "Content/Pacman_Pics/blueghost.png"),
    new Character(7, 5, "Content/Pacman_Pics/pinkyghost.png"),
    new Character(10, 5, "Content/Pacman_Pics/redghost.png"),
    new Character(9, 6, "Content/Pacman_Pics/orangeghost.png")
];
var direction;
(function (direction) {
    direction[direction["right"] = 39] = "right";
    direction[direction["left"] = 37] = "left";
    direction[direction["up"] = 38] = "up";
    direction[direction["down"] = 40] = "down";
})(direction || (direction = {}));
;
var xpos = 0;
var ypos = 0;
window.setInterval(drawCanvas, 333);
window.setInterval(updateCharPos, 1000);
function drawCanvas() {
    ctx.clearRect(0, 0, 1100, 600);
    ctx.drawImage(pacMan.image, pacMan.xpos * dimension, pacMan.ypos * dimension);
    for (var _i = 0; _i < ghostsArray.length; _i++) {
        var ghost = ghostsArray[_i];
        ctx.drawImage(ghost.image, ghost.xpos * dimension, ghost.ypos * dimension);
    }
}
function updateCharPos() {
    for (var _i = 0; _i < ghostsArray.length; _i++) {
        var ghost = ghostsArray[_i];
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
//# sourceMappingURL=pacman.js.map