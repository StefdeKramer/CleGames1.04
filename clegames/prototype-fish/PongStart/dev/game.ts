/// <reference path="ball.ts"/>
class Game {
    
    // geef hier de ball instance een naam
    // ...
    
    ball;
    
    constructor() {
        
        // maak hier een ball instance
        // ...
         this.ball = new Ball();

           
        // start de game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
    private gameLoop(){
        // roep hier de move functie van de bal aan
        ///
        this.ball.move();
        
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 