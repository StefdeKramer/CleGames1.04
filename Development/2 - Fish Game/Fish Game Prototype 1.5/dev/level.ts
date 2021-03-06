/// <reference path="smallfish.ts"/>
/// <reference path="bigfish.ts"/>
/// <reference path="playerfish.ts"/>
/// <reference path="box.ts" />


class Level {
    private game:Game;
    private height:number;
    private width:number;
    private smallFishes: Array<SmallFish>;
    private bigFishes: Array<BigFish>;
    private boxes: Array<Box>;
    private player:Player;
    
    public div: HTMLElement;
    public display:ScoreDisplay;  
    
    constructor(g:Game) {
        this.game = g;       
        this.div = document.createElement("level");
        document.body.appendChild(this.div);
        this.height=innerHeight;
        this.width=innerWidth;
        this.div.style.height = this.height+"px";
        this.div.style.width = this.width+"px"; 
        this.display = new ScoreDisplay(this);
        
        this.smallFishes = new Array<SmallFish>();
        for(var i=1; i <= 10; i++){           
            let randomizerX : number = Math.random();
            let randomizerY : number = Math.random();
            
            let width = 132;
            let height = 100;
            let x=(innerWidth-width)*randomizerX;
            let y=(innerHeight-height)*randomizerY;
            let boost:boolean;
            if(i<=5){
                boost=false;
            } 
            else{
                boost=true;
            }
           
            
            this.smallFishes.push(new SmallFish(this, x, y, width, height, "smallfish", randomizerX, boost));
        }
        
        this.bigFishes = new Array<BigFish>();
        for(var i=1; i <= 2; i++){
            let randomizerX : number = Math.random();
            let randomizerY : number = Math.random();
            
            let width = 348;
            let height = 200;
            let x=(innerWidth-width)*randomizerX;
            let y=(innerHeight-height)*randomizerY;
            
            //Makes sharks swim above player spawnzone
            if(y>=innerHeight-height*2){
                y-=height;
            }
            
            this.bigFishes.push(new BigFish(this, x, y, width, height, "bigfish", i));
        }
        
        this.boxes = new Array<Box>();
        for(var i=1; i <= 5; i++){
            let multiplier:number;
            let type:string;
            let width:number;
            let height:number;
            
            switch (i) {
                case 1:
                    type="star";
                    width=96;
                    height=96;
                    multiplier=2;
                    break;
                case 2:
                    type="coin";
                    width=100;
                    height=100; 
                    multiplier=2;      
                    break;
                case 3:
                    type="coinsmall";
                    width=50;
                    height=50;      
                    multiplier=1;
                    break; 
                case 4:
                    type="clock";
                    width=100;
                    height=100;    
                    multiplier=3;  
                    break;  
                case 5:
                    type="thunder";
                    width=45;
                    height=100;      
                    multiplier=3;
                    break;                  
                default:
                    break;
            }
            
            let randomX : number = innerWidth*Math.random();
            let randomY=(-innerHeight*Math.random()*multiplier)-innerHeight;  
            
            this.boxes.push(new Box(this, randomX, randomY, width, height, type));
        }
        
        let bottomY = innerHeight-185;
        let centerX = (innerWidth/2)-213/2;
        this.player = new Player(this, centerX, bottomY, 213, 175, "playerfish");
    }
    
    public update() : void {  
        let playerBounds:Rectangle = this.player.getBounds();
        this.player.update();
        
        for(let fish of this.smallFishes){
            let smallFishBounds:Rectangle = fish.getBounds();
            let hitSmallFish = playerBounds.hitsSmallFish(smallFishBounds);
            
            if(hitSmallFish){
                this.display.updateScores(10);
                fish.eaten();
                let boost = fish.getBoost();
                let fishIsBoost=fish.getFishIsBoost();
                if(boost&&fishIsBoost){
                    fish.setBoost(false, 1);
                }
            }
            
            fish.update();
        }

        for(let fish of this.bigFishes){
            let bigFishBounds:Rectangle = fish.getBounds();
            let hitBigFish = playerBounds.hitsBigFish(bigFishBounds);
            
            if(hitBigFish){
                this.display.updateScores(-1);
            }
            fish.update();
        }        
        
        for(let box of this.boxes){
            let boxBounds:Rectangle = box.getBounds();
            let hitBox = playerBounds.hitsBox(boxBounds);
            let type = box.getBoxType();
            
            if(hitBox){
                switch (type) {
                    case "clock":
                        box.eaten();
                        for(let fish of this.bigFishes){
                            fish.slowDown();
                        }
                        for(let fish of this.smallFishes){
                            fish.slowDown();
                        }
                        this.player.speedUp();
                        break;
                
                    case "coin":
                        box.eaten();
                        this.display.updateScores(250);
                        break;
                        
                    case "coinsmall":
                        box.eaten();
                        this.display.updateScores(50);
                        break;
                        
                    case "star":
                        box.eaten();
                        for(let fish of this.smallFishes){
                            let boost=fish.getBoost();
                            if(!boost){
                                fish.setBoost(true, 1);
                            }
                        }
                        break;  
                        
                    case "thunder":
                        box.eaten();
                        for(let fish of this.smallFishes){
                            fish.eaten();
                            this.display.updateScores(5);
                            let boost = fish.getBoost();
                            let fishIsBoost=fish.getFishIsBoost();
                            if(boost&&fishIsBoost){
                                fish.setBoost(false, 1);
                                this.display.updateScores(5);
                            }
                        }              
                } 
            }
            switch (type) {
                case "clock":
                    box.update(3);
                    break;
            
                case "coin":
                    box.update(2);
                    break;
                    
                case "coinsmall":
                    box.update(1);
                    break;
                    
                case "star":
                    box.update(2);
                    break;  
                    
                case "thunder":
                   box.update(3); 
                }
        }
    }
    
    public draw() : void {       
        for(let fish of this.smallFishes)
        {
            let direction = fish.getDirection();
            
            if(direction<0.5){
                fish.drawreverse();
            }
            else{
                fish.draw();
            }
        }
        
        for(let fish of this.bigFishes)
        {
            let direction = fish.getDirection();
            
            if(direction<0.5){
                fish.drawreverse();
            }
            else{
                fish.draw();
            }
        }
        
        for(let box of this.boxes){
            box.draw();
        }
        
        this.player.draw();
    }
}