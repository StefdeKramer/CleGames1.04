var Charmeleon = (function () {
    function Charmeleon(left, right, up, down) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("charmeleon");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        this.x = Math.floor(200 + Math.random() * 200);
        this.y = Math.floor(200 + Math.random() * 200);
        this.width = 180;
        this.height = 145;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Charmeleon.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
        }
    };
    Charmeleon.prototype.onKeyUp = function (event) {
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
    Charmeleon.prototype.move = function () {
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px) scaleX(-1)";
    };
    Charmeleon.prototype.showHit = function (hit) {
        if (hit) {
            this.div.style.borderColor = "red";
        }
        else {
            this.div.style.borderColor = "greenyellow";
        }
    };
    return Charmeleon;
}());
var Game = (function () {
    function Game() {
        this.char1 = new Charmeleon(65, 68, 87, 83);
        this.char2 = new Charmeleon(37, 39, 38, 40);
        this.utils = new Utils();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.char1.move();
        this.char2.move();
        var hit = this.utils.isOverlap(this.char1, this.char2);
        this.char1.showHit(hit);
        this.char2.showHit(hit);
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.isOverlap = function (c1, c2) {
        return !(c2.x > c1.x + c1.width || c2.x + c2.width < c1.x || c2.y > c1.y + c1.height || c2.y + c2.height < c1.y);
    };
    return Utils;
}());
//# sourceMappingURL=main.js.map