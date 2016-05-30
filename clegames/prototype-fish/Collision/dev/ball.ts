/// <reference path="paddle.ts"/>

class Ball {
    
    private div : HTMLElement;
    private posX : number;
    private posY : number;
    private speedX : number;
    private speedY : number;
    
    constructor() {
        // creeer een div element
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        
        // positie
        this.posX = 200;
        this.posY = 210;
        
        this.speedX = -2;
        this.speedY = 0;
                
        // plaatsen
        this.move();
    }
    
    // ************************************************************************
    //
    // COLLISION DETECTION
    // check of de bal DIV binnen het gebied van de paddle DIV is
    // snelheid omdraaien als we een paddle raken
    //
    // ************************************************************************
    public checkPaddle(pad:Paddle):void {
        if( this.posX+40 >= pad.getX() && this.posX <= pad.getX() + 25 && this.posX  && this.posY+40 >= pad.getY() && this.posY <= pad.getY()+100) { 
           this.speedX *= -1;
           
           console.log("De bal raakt de paddle!");
           document.getElementsByTagName("ui")[0].innerHTML = "De ball raakt de paddle!";
        }
    }
    
    
    public move() : void {
        this.posX += this.speedX;
        this.posY += this.speedY;
        
        // tekenen
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
        
        // bal uit de game halen als de bal uit het scherm gaat
        if( this.posX > window.innerWidth || this.posX < -40) { 
            this.div.remove();
        } 
        if( this.posY + 40 > window.innerHeight || this.posY < 0) { 
            this.speedY *= -1;
        }
        
    }
}