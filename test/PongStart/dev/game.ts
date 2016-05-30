/// <reference path="ball.ts"/>
class Game {
    public ball: Ball;
    public char1: Paddle;
    public utils: Utils;
    
      // geef hier de ball instance een naam
    // ...
    
    constructor() {
       this.ball = new Ball();
       this.char1 = new Paddle(65, 68, 87, 83);
        // maak hier een ball instance
        // ...
      this.utils = new Utils();
      
        // start de game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
    public gameLoop(){
        this.char1.move();
        this.ball.move();
     
        let hit:boolean = this.utils.isOverlap(this.char1, this.ball);
        this.char1.showHit(hit);
        // this.ball.showHit(hit);
     
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 