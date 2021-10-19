const { Player } = require("./player");


class Human extends Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.score = 0
        
    }
}

module.exports = {Human: Human};