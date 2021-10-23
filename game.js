const { AI } = require('./AI');
const { Human } = require('./human');
const { Human2 } = require('./human2');

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

        this.getWinner();
        
    }
    mainRunTwo(){
        
        this.playerOne = new Human('Howard');
        this.playerOne.gestureChoice();

        this.playerTwo = new Human2('Leonard');
        this.playerTwo.gestureChoiceTwo();

        this.getWinner();
    }



    
    getWinner(){
        console.log(`${this.playerOne.name} chose ${this.playerOne.gesture}`);
        console.log(`${this.playerTwo.name} chose ${this.playerTwo.gesture}`);
        
        while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            if(this.playerOne.score === 3 || this.playerTwo.score === 3){
                console.log(`Final score is ${this.playerOne.name} ${this.playerOne.score} and ${this.playerTwo.name} ${this.playerTwo.score}`);
            }
            if(this.playerOne.gesture == "Rock" && this.playerTwo.gesture == "Scissors"){
                this.playerOne.score++;
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Rock" && this.playerOne.gesture == "Scissors"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            if(this.playerOne.gesture == "Scissors" && this.playerTwo.gesture == "Paper"){
                this.playerOne.score++;
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Scissors" && this.playerOne.gesture == "Paper"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            if(this.playerOne.gesture == "Paper" && this.playerTwo.gesture == "Rock"){
                this.playerOne.score++
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Paper" && this.playerOne.gesture == "Rock"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            if(this.playerOne.gesture == "Rock" && this.playerTwo.gesture == "Lizzard"){
                this.playerOne.score++
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Rock" && this.playerOne.gesture == "Lizard"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            if(this.playerOne.gesture == "Lizard" && this.playerTwo.gesture == "Spock"){
                this.playerOne.score++
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Lizard" && this.playerOne.gesture == "Spock"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            if(this.playerOne.gesture == "Spock" && this.playerTwo.gesture == "Scissors"){
                this.playerOne.score++;
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Spock" && this.playerOne.gesture == "Scissors"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            if(this.playerOne.gesture == "Scissors" && this.playerTwo.gesture == "Lizard"){
                this.playerOne.score++;
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Scissors" && this.playerOne.gesture == "Lizard"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`);
                this.mainRun(); 
            }
            if(this.playerOne.gesture == "Lizard" && this.playerTwo.gesture == "Paper"){
                this.playerOne.score++;
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Lizard" && this.playerOne.gesture == "Paper"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            if(this.playerOne.gesture == "Paper" && this.playerTwo.gesture == "Spock"){
                this.playerOne.score++;
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Paper" && this.playerOne.gesture == "Spock"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            if(this.playerOne.gesture == "Spock" && this.playerTwo.gesture == "Rock"){
                this.playerOne.score++;
                console.log(`${this.playerOne.name} is the winner!`);
                this.mainRun();
            }
            if(this.playerTwo.gesture == "Spock" && this.playerOne.gesture == "Rock"){
                this.playerTwo.score++;
                console.log(`${this.playerTwo.name} is the winner!`); 
                this.mainRun();
            }
            
            if(this.playerOne.gesture == this.playerTwo.gesture){
                this.mainrockRun();               
            }
        


        

             
        }

            
    }


}

module.exports = {
    Game: Game,
};
