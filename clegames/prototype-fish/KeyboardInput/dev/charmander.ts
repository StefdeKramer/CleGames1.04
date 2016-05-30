class Charmander {
    
    private div:HTMLElement;
    
    private downkey : number;
    private upkey : number;
    private leftkey : number;
    private rightkey : number;
    
    private leftSpeed : number = 0;
    private rightSpeed : number = 0;
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    
    private direction;
    
    private posX : number;
    private posY : number;
    
    constructor(left:number, right:number, up:number, down:number) {
        // maak een divje waar de gif in komt te staan
        this.div = document.createElement("charmander");
        document.body.appendChild(this.div);
        
        // keys kunnen verschillend zijn voor elke instance van charmander
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        
        // positie
        this.posX = 200 + Math.random()*200;
        this.posY = 200 + Math.random()*200;
        
        // keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    
    
    // keyboard input zorgt dat de snelheid wordt aangepast
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 5;
            break;
        case this.downkey:
            this.downSpeed = 5;
            break;
        case this.leftkey:
            this.leftSpeed = 5;
            this.direction = -1;
            break;
        case this.rightkey:
            this.rightSpeed = 5;
            this.direction = 1;
            break;
        }
    }
    
    // speed op 0 alleen als de eigen keys zijn losgelaten
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 0;
            break;
        case this.downkey:
            this.downSpeed = 0;
            break;
        case this.leftkey:
            this.leftSpeed = 0;
            break;
        case this.rightkey:
            this.rightSpeed = 0;
            break;
        }
    }

    
    // bewegen - let op, de move functie wordt door game aangeroepen - animatie is niet smooth als de keydown listener een beweging triggered
    public move() : void {
        
        this.posX = this.posX - this.leftSpeed + this.rightSpeed;
        this.posY = this.posY - this.upSpeed + this.downSpeed;
                        
        // de div positie aanpassen met transform - tip: scaleX kan je gebruiken om de andere kant op te kijken
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px) scaleX("+this.direction+")";
    }

    
}