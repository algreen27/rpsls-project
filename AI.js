const { Player } = require("./player");


class AI extends Player{
    constructor(name){
        super(name);
        
        
        
    }

    //use random to select RPSLS
    //store results

    pickGesture(){
       this.gesture = this.gestures[Math.floor(Math.random() * this.gestures.length)];
    }
}

module.exports = {AI: AI};