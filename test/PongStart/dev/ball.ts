class Ball {
    
    public div : HTMLElement;
    public posX : number;
    public posY : number;
    public speedX : number;
    public speedY : number;
    
    public width: number;
    public height: number;
    
    constructor() {
        // creeer een div element
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        
        
        // positie
        this.posX = (Math.random() * (window.innerWidth/2)) + (window.innerWidth/4);
        this.posY = (Math.random() * (window.innerHeight/2)) + (window.innerHeight/4);
        
        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
                
        // plaatsen
        this.move();
    }
    
    public hitPaddle(){
        this.speedX *= -1;
    }
    
    public move() : void {
        this.posX += this.speedX;
        this.posY += this.speedY;
        
        // als we buiten beeld gaan dan de snelheid omdraaien
        if( this.posX + 40 > window.innerWidth || this.posX < 0) { 
            this.speedX *= -1;
        }
        
        if( this.posY + 40 > window.innerHeight || this.posY < 0) { 
            this.speedY *= -1;
        }
        
        // transform gebruiken om de positie op het scherm aan te passen
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
  public showHit(hit:boolean) : void {
      console.log("hitt");
        if(hit){
            this.div.style.borderColor = "red";
        } else {
            this.div.style.borderColor = "greenyellow";
        }
        
        
  }}