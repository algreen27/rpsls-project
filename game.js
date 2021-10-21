const { AI } = require('./AI');
const { Human } = require('./human');

class Game{
    constructor(){
        this.playerOne;
        this.playerTwo;

       
    }

    mainRun(){
        this.playerOne = new Human('Howard');
        this.playerOne.gestureChoice();
        
        this.playerTwo= new AI('Sheldon');
        this.playerTwo.pickGesture();

        // to select human to human
    }
    
    getWinner(){
        console.log(this.gesture.Human);
        console.log(this.gesture.AI);
        


        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            if(this.gesture.Human == "Rock" && this.gesture.AI == "Scissors"){
                console.log(`${this.playerOne} is the winner!`);

            }


            else if(this.gesture.Human !== this.gesture.AI){
                this.mainRun();
            }


        

             
        }

            
    }


}

module.exports = {
    Game: Game,
};
