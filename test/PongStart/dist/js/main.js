var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.posX = (Math.random() * (window.innerWidth / 2)) + (window.innerWidth / 4);
        this.posY = (Math.random() * (window.innerHeight / 2)) + (window.innerHeight / 4);
        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
        this.move();
    }
    Ball.prototype.hitPaddle = function () {
        this.speedX *= -1;
    };
    Ball.prototype.move = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        if (this.posX + 40 > window.innerWidth || this.posX < 0) {
            this.speedX *= -1;
        }
        if (this.posY + 40 > window.innerHeight || this.posY < 0) {
            this.speedY *= -1;
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Ball.prototype.showHit = function (hit) {
        console.log("hitt");
        if (hit) {
            this.div.style.borderColor = "red";
        }
        else {
            this.div.style.borderColor = "greenyellow";
        }
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.ball = new Ball();
        this.char1 = new Paddle(65, 68, 87, 83);
        this.utils = new Utils();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.char1.move();
        this.ball.move();
        var hit = this.utils.isOverlap(this.char1, this.ball);
        this.char1.showHit(hit);
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Paddle = (function () {
    function Paddle(left, right, up, down) {
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("Paddle");
        document.body.appendChild(this.div);
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        this.posX = Math.floor(200 + Math.random() * 200);
        this.posY = Math.floor(200 + Math.random() * 200);
        this.width = 180;
        this.height = 145;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Paddle.prototype.onKeyDown = function (event) {
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
    Paddle.prototype.onKeyUp = function (event) {
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
    Paddle.prototype.move = function () {
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(-1)";
    };
    Paddle.prototype.showHit = function (hit) {
        if (hit) {
            this.div.style.borderColor = "red";
            console.log("hitt");
        }
        else {
            this.div.style.borderColor = "greenyellow";
        }
    };
    return Paddle;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.isOverlap = function (pad, rec) {
        return (pad.posX < rec.posX + rec.width && pad.posX + pad.width > rec.posX && pad.posY < rec.posY + rec.height && pad.height + pad.posY > rec.posY);
    };
    return Utils;
}());
//# sourceMappingURL=main.js.map