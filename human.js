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
            if(pick !== this.gestures){
                console.log('Invalid entry, please try again')
                this.gestureChoice();
            }   

    }
}

module.exports = {Human: Human};