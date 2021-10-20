const { Player } = require("./player");
const prompt = require('prompt-sync')();


class Human extends Player{
    constructor(name, score){
        super();
        // this.name = name;
        // this.score = 0  
    }

    //prompt for input from user...RPSLS

    gestureChoice(){
        console.log('Pick a gesture: Rock, Paper, Scissors, Lizard, Spock');
        let pick = prompt(); 
        return pick;
    }
}

module.exports = {Human: Human};