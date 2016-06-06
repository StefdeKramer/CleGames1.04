/**
 * ScoreDisplay
 */
class ScoreDisplay {
    private score:number = 0;
    private level:Level;
    private div : Element;
    
    constructor(l:Level) {
        this.div = document.getElementsByTagName("ui")[0];
        this.level = l;
        this.div.innerHTML = "Eet de kleine vissen en ontwijk de haai!"; 
    }
    
    public updateScores(score:number){
        this.score+=score;
        this.display();
    }
    
    public getScores():number{
        return this.score;
    }
    
    private display(){
         this.div.innerHTML = Math.floor(this.score)+" punten!";
    }
    
}