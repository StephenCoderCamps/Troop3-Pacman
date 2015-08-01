var context = document.getElementById('myCanvas').getContext("2d");
var img = new Image();
img.onload = function () {
    context.drawImage(img, 0, 0);
};
img.src = "Content/Pacman_Pics/pacmanpic.png";
//# sourceMappingURL=pacmanJS.js.map
