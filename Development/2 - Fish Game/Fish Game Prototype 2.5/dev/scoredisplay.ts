/**
 * ScoreDisplay
 */
class ScoreDisplay {
    private score:number = 0;
    private s1:number=0;
    private s2:number=0;
    private level:Level;
    private div : Element;
    private div2 : Element;
    private div3 : Element;
    
    constructor(l:Level) {
        this.div = document.getElementsByTagName("ui")[0];
        this.div2 = document.getElementsByTagName("ui2")[0];
        this.level = l;
        this.div.innerHTML = "0";
        this.div2.innerHTML = "0";  
    }
    
    public updateScores(score:number, player:number){
        if(player==1){
            this.s1+=score;
        }
        else{
            this.s2+=score;
        }
        this.display();
    }
    
    public getScores(player:number):number{
        if(player==1){
            return this.s1
        }
        else{
            return this.s2;
        }
    }
    
    private display(){
         this.div.innerHTML = ""+Math.floor(this.s1);
         this.div2.innerHTML = ""+Math.floor(this.s2);
    }
    
}