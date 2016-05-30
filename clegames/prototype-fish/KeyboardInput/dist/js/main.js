var Charmander = (function () {
    function Charmander(left, right, up, down) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("charmander");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        this.posX = 200 + Math.random() * 200;
        this.posY = 200 + Math.random() * 200;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Charmander.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                this.direction = -1;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                this.direction = 1;
                break;
        }
    };
    Charmander.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
        }
    };
    Charmander.prototype.move = function () {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(" + this.direction + ")";
    };
    return Charmander;
}());
var Game = (function () {
    function Game() {
        this.char1 = new Charmander(37, 39, 38, 40);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.char1.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map