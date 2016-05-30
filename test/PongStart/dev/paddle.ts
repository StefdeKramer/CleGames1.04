class Paddle {
    public div:HTMLElement;
    
    public downkey : number;
    public upkey : number;
    public leftkey : number;
    public rightkey : number;
    public leftSpeed : number = 0;
    public rightSpeed : number = 0;
    public downSpeed : number = 0;
    public upSpeed : number = 0;
    
    // om te zien of objecten elkaar raken moeten ze een public x,y,width,height hebben
    public posX : number;
    public posY : number;
    public width: number;
    public height: number;
    
    constructor(left:number, right:number, up:number, down:number) {
        // maak een divje waar de gif in komt te staan
        this.div = document.createElement("Paddle")
             document.body.appendChild(this.div);
        
        // keys kunnen verschillend zijn voor elke instance van charmeleon
        this.upkey = up;
        this.downkey = down;
        this.leftkey = left;
        this.rightkey = right;
        
        // positie
        this.posX = Math.floor(200 + Math.random()*200);
        this.posY = Math.floor(200 + Math.random()*200);
        this.width = 180;
        this.height = 145;
        
        // keyboard listener
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    
    
    // keyboard input zorgt dat de snelheid wordt aangepast
    public onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upkey:
            this.upSpeed = 5;
            break;
        case this.downkey:
            this.downSpeed = 5;
            break;
        case this.leftkey:
            this.leftSpeed = 5;
            break;
        case this.rightkey:
            this.rightSpeed = 5;
            break;
        }
    }
    
    // speed op 0 alleen als de eigen keys zijn losgelaten
    public onKeyUp(event:KeyboardEvent):void {
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
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px) scaleX(-1)";
    }

    // deze functie toont of we geraakt worden of niet
    public showHit(hit:boolean) : void {
        
        if(hit){
            this.div.style.borderColor = "red";
            console.log("hitt");
        } else {
            this.div.style.borderColor = "greenyellow";
        }
    }
}