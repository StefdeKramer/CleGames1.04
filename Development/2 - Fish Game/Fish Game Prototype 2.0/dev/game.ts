/// <reference path="level.ts"/>

class Game { 
    private level:Level;
     
    constructor() {
        this.level = new Level(this);
        
        var sound = new Howl({
            urls: ['js/howler.js-master/background.mp3'],
            loop:true,
            volume:0.75
        }).play();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop(){ 
        this.level.update();
        this.level.draw();
                
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 

