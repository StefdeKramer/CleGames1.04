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
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.ball = new Ball();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.ball.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Paddle = (function () {
    function Paddle() {
    }
    Paddle.prototype.move = function () {
    };
    return Paddle;
}());
//# sourceMappingURL=main.js.map