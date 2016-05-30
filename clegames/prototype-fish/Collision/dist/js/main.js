var Paddle = (function () {
    function Paddle() {
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.posX = 0;
        this.posY = 200;
        this.div.style.transform = "translate(0px, 200px)";
    }
    Paddle.prototype.getX = function () {
        return this.posX;
    };
    Paddle.prototype.getY = function () {
        return this.posY;
    };
    return Paddle;
}());
var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.posX = 200;
        this.posY = 210;
        this.speedX = -2;
        this.speedY = 0;
        this.move();
    }
    Ball.prototype.checkPaddle = function (pad) {
        if (this.posX + 40 >= pad.getX() && this.posX <= pad.getX() + 25 && this.posX && this.posY + 40 >= pad.getY() && this.posY <= pad.getY() + 100) {
            this.speedX *= -1;
            console.log("De bal raakt de paddle!");
            document.getElementsByTagName("ui")[0].innerHTML = "De ball raakt de paddle!";
        }
    };
    Ball.prototype.move = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
        if (this.posX > window.innerWidth || this.posX < -40) {
            this.div.remove();
        }
        if (this.posY + 40 > window.innerHeight || this.posY < 0) {
            this.speedY *= -1;
        }
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.paddle = new Paddle();
        this.ball = new Ball();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.ball.checkPaddle(this.paddle);
        this.ball.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map