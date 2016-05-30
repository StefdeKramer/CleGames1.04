/// <reference path="ball.ts"/>
class Game {
    
    private ball:Ball;
    private paddle:Paddle;
    
    private utils:Utils;
    
    constructor() {
        
        this.paddle = new Paddle();
        this.ball = new Ball();
        
        // utils
        this.utils = new Utils();
                
        // start game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
        
    }
    
    // game loop
    private gameLoop():void{
        // hier checken of de ball een paddle raakt
        let hit = this.utils.hasOverlap(this.ball, this.paddle);
        if(hit){
            document.getElementsByTagName("ui")[0].innerHTML = "BALL HITS PADDLE!";
            this.ball.hitPaddle();
        }
        
        // ball en paddle updaten
        this.ball.update();
        this.paddle.update();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
} 