const { AI } = require('./AI');
const { Human } = require('./human');

class Game{
    constructor(){
        this.playerOne;
        this.playerTwo;

       
    }

    mainRun(){
        getChoice();
        pickGesture();
    }

    getWinner(){
        let man = this.gesture.Human;
        let bot = this.gesture.AI;
            if()
    }


}

module.exports = {
    Game: Game,
};
