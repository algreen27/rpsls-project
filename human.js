const { Player } = require("./player");
const prompt = require('prompt-sync')();


class Human extends Player{
    constructor(name){
        super(name);
    }

    //prompt for input from user...RPSLS

    gestureChoice(){
        console.log('Pick a gesture: Rock, Paper, Scissors, Lizard, Spock');
        this.gesture = prompt(); 
            // if(this.gesture !== this.gestures[0] || this.gestures[1] || this.gestures[2] || this.gestures[3] || this.gestures[4]){
            //     console.log('Invalid entry, please try again')
            //     this.gestureChoice();
            // }   
            switch(this.gesture){
                case "Rock":
                    return true;
                break;
                case "Paper":
                    return true;
                break;
                case "Scissors":
                    return true;
                break;
                case "Lizard":
                    return true;
                break;
                case "Spock":
                    return true;
                break;     
                default:
                console.log('Invalid entry, please try again')
                this.gestureChoice();  
                             
                    
            }

    }
}

module.exports = {Human: Human};