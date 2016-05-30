/**
 * Paddle
 */
class Paddle {
    
    private div:HTMLElement;
        
    private posX : number;
    private posY : number;
    
    constructor() {
        // maak een divje waar de paddle in komt te staan
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        
        // positie
        this.posX = 0;
        this.posY = 200;
                
        this.div.style.transform = "translate(0px, 200px)";
    }
        
    // bal kan positie opvragen
    public getX():number {
        return this.posX;
    }
    
    public getY():number {
        return this.posY;
    }
    
}