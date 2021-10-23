
const prompt = require('prompt-sync')();
const {Game} = require('./game')


let game = new Game();


console.log('Enter 1 for Single Player, 2 for Multiplayer');
userInput = prompt(); 
    switch(userInput){
        case '1':
            game.mainRun();      
        break;
        case '2':
            game.mainRunTwo();
        break;  
        default:
    }            
