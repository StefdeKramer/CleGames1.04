class GameObject {
    protected div: HTMLElement;    
    protected x:number;
    protected y:number;
    protected width:number;
    protected height:number;
    protected level:Level;
    protected direction:number=1;
    
    public getBounds():Rectangle {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }
    
    public setDirection(direction:number){
         this.direction = direction;
    }

    constructor(l:Level, x:number, y:number, width:number, height:number, tagName:string) {
        this.level = l;
        
        this.div = document.createElement(tagName);
        this.level.div.appendChild(this.div);
        
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scaleX("+this.direction+")";
    }
    
    public drawreverse() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px) scaleX(-1)";
    }
}