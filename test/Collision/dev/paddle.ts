/**
 * Paddle
 */
class Paddle {
    
    private div:HTMLElement;
        
    public x : number;
    public y : number;
    public width: number;
    public height: number;
    
    constructor() {
        // maak een divje waar de paddle in komt te staan
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        
        // positie
        this.x = 0;
        this.y = 200;
        this.width = 25;
        this.height = 100;
                
       
    }
    
    public update() : void {
        // hier de toetsen uitlezen - in deze demo uitgezet omdat dit alleen over collision detection gaat
        this.draw();
    }
    
    // tekenen
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }
    
}