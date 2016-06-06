/// <reference path="gameobject.ts" />
/**
 * Player
 */
class Player extends GameObject {
    private downKey : number;
    private upKey : number;
    private leftKey : number;
    private rightKey : number;
    
    private downSpeed : number = 0;
    private upSpeed : number = 0;
    private leftSpeed : number = 0;
    private rightSpeed : number = 0;
    private speed : number = 1;
    
    private player : number;
    private randomDirection : number = Math.random();
    
    constructor(l:Level, x:number, y:number, width:number, height:number, tagName:string, player:number) {
        super(l, x, y, width, height, tagName);
        
        if(player==1){
            this.upKey=87;
            this.downKey=83;
            this.leftKey=65;
            this.rightKey=68;
        }
        else{
            
            this.upKey = 38;
            this.downKey = 40;
            this.leftKey = 37;
            this.rightKey = 39;
        }
        
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
        
        this.player = player;
    }
    
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upKey:
            this.upSpeed = -7.5;
            break;
        case this.downKey:
            this.downSpeed = 5;
            break;
        case this.leftKey:
            this.leftSpeed = -10;
            this.setDirection(-1);
            break;
        case this.rightKey:
            this.rightSpeed = 10;
            this.setDirection(1);
            break;
        }
    }

    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case this.upKey:
            this.upSpeed = 0;
            break;
        case this.downKey:
            this.downSpeed = 0;
            break;
        case this.leftKey:
            this.leftSpeed = 0;
            break;
        case this.rightKey:
            this.rightSpeed = 0;
            break;
        }
    }
    
    public update() : void {   
        if(this.x+this.leftSpeed<=0){
            this.leftSpeed=0;
        }
        else if(this.x+this.rightSpeed>=innerWidth-this.width){
            this.rightSpeed=0;
        }
        else if(this.y+this.upSpeed<=innerHeight-innerHeight/4){
            this.upSpeed=0;
        }
        else if(this.y+this.downSpeed>=innerHeight-this.height-10){
            this.downSpeed=0;
        }
        
        this.x+=(this.leftSpeed+this.rightSpeed)*this.speed;
        this.y+=(this.upSpeed+this.downSpeed)*this.speed;    
        
        if(this.speed>1.25) this.speed-=0.001;
        else if(this.speed>1) this.speed-=0.1;        
    }
    
    public speedUp() : void{
        this.speed=1.5;
    }
    
    public getPlayer() : number{
        return this.player;
    }
    
    public autoSwim(winner:boolean) : void {    
        let multiplier:number;
        if(winner){
            multiplier=1;
        }
        else{
            multiplier=0.25;
        }
             
        if(this.randomDirection<0.5){       
            this.x-=10*multiplier;              
            this.direction=-1;
            if(this.x < 0 - this.width){
                this.randomDirection=1;
                
                if(winner){
                    this.y = (innerHeight-this.height)/2*Math.random();
                }
                else{
                    this.y = (innerHeight-this.height)/2+((innerHeight-this.height)/2*Math.random());
                }
                
            }
        }
        else{
            this.x+=10*multiplier;
            this.direction=1;
            if(this.x > innerWidth){
                this.randomDirection=0;
                
                if(winner){
                    this.y = (innerHeight-this.height)/2*Math.random();
                }
                else{
                    this.y = (innerHeight-this.height)/2+((innerHeight-this.height)/2*Math.random());
                }
            }
        }
    }
}