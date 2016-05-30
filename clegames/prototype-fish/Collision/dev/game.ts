/// <reference path="ball.ts"/>
class Game {
    
    private ball:Ball;
    private paddle:Paddle;
    
    constructor() {
        
        this.paddle = new Paddle();
        this.ball = new Ball();
                
        // start game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
        
    }
    
    // game loop
    private gameLoop():void{
        this.ball.checkPaddle(this.paddle);
        this.ball.move();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
} 