"use strict";

/*RPSLS User Stories 
 
Out of 65 points 
Using the concepts of OOP by creating classes and using objects (instances of those classes) to interact with each other, create a console version of the classic game Rock Paper Scissors Lizard Spock. 
User stories: 
(5 points): As a developer, I want to make good, consistent commits.  

(15 points): As a developer, I want to find a way to properly incorporate inheritance into my game. 

(5 points): As a developer, I want to account for and handle bad user input, ensuring that any user input is validated and reobtained if necessary. 

(10 points): As a developer, I want to store all of the gesture options/choices in an array. I want to find a way to utilize the array of gestures within my code (display gesture options, assign player a gesture, etc). 

(10 points): As a player, I want the correct player to win a given round based on the choices* made by each player.  

(10 points): As a player, I want the game of RPSLS to be at minimum a ‘best of three’ to decide a winner. 

(10 points): As a player, I want the option of a single player (human vs AI) or a multiplayer (human vs human) game.  

* Rock crushes Scissors  
Scissors cuts Paper 
Paper covers Rock 
Rock crushes Lizard 
Lizard poisons Spock 
Spock smashes Scissors 
Scissors decapitates Lizard 
Lizard eats Paper 
Paper disproves Spock 
Spock vaporizes Rock  
https://www.youtube.com/watch?v=cSLeBKT7-sM */


//Class player
//Object player 1 & 2
//Score (property on the player)

//Player1.score = 7; 

//Object – Human, Computer

//Gestures (could be objects but start with using them as strings) 
//Classes 
//Player -
//Human – inherits from Player
//AI – inherits from Player
//Game – responsible for handling game itself (flow of how game works)
//Game will have two player objects 
//2 of the games member variables are player 1 or player 2
//(Object will have two other objects – check in demo for info)

//Check out resources from portal - creating dice game demo and code on there as well
//PLANNED
///Two player game
///Each player rolls a 6 sided dice (or chooses a card)
//// The dice are compared and the winning player gets a point
//// best of 5 games

///What classes do I need? 
//Player
//Die or Cards (single then make as many instances as needed)
//Game (rules/game manager)

class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;   
        this.chosenCard = null;
        
        this.play = [];

        this.play.push(new Card("Rock"));
        this.play.push(new Card("Paper"));
        this.play.push(new Card("Scissors"));
        this.play.push(new Card("Lizard"));
        this.play.push(new Card("Spock"));
    }



    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random)* this.play.length;
        return randomNumber; 
        
    }

    chooseCard() {
        let revealedCard = generateRandomNumber();
        this.chosenCard = this.play[revealedCard];
        console.log ("The card is" + this.chosenCard.gesture);

    }
}


class Game {
    constructor() {
        this.playerOne = new Player("Player 1");
        this.playerTwo = new Player("Player 2");
        
        

    }


displayRules(){
    console.log ("Welcome to the ROCK PAPER SCISSORS LIZARD SPOCK Game!"); 
    console.log ("Two players will flip a card to determine which item they are."); 
    console.log ("One point is scored by the player who has the card showing an item that trumps the other player's item as indicated below:");
    console.log (" Rock crushes Scissors") + "\n";
                ("Scissors cuts Paper") + "\n";
                ("Paper covers Rock") + "\n";
                ("Rock crushes Lizard") + "\n";
                ("Lizard poisons Spock") + "\n";
                ("Spock smashes Scissors") + "\n";
                ("Scissors decapitates Lizard") + "\n";
                ("Lizard eats Paper") + "\n";
                ("Paper disproves Spock") + "\n";
                ("Spock vaporizes Rock");  
    console.log ("The first player to 3 points wins the game.")
}

    runGame() {

        //Give instructions to call functions/methods
        //displayrules
        //Ask number of players
        


    }

    playerRoundChoice(){
    this.playerOne.chooseCard();
    console.log (this.playerOne.chosenCard.gesture);

    this.playerTwo.chooseCard();
    console.log (this.playerOne.chosenCard.gesture);

    }

    compareGestures(){




    }
        ///??? Need if/then = 1 point???  Compare Cards 
      ///How do I make this determine when to stop at best of 3? 
      ///How do I connect the random number to the card to reveal?

      calculateScore() {

        let totalScore = 0; 

        for (let i = 0; i < 5; i++) {
            this.chooseCard(card); 
        }

    } 
}

class Card {
    constructor(cardValue) {
        this.gesture = cardValue;   
    }

    //?????? can I call the length of the array established in the Game Class here?
   
}

// "main" method that executes all the game object by using other methods; call it at the end
runGame() {
    this.displayRules();
} 


chooseGame(); {
    alert("How many playrers? 1 or 2")
    return 

}
///????? why is this grayed out? 
compareCards(); {

}






let game = new Game();
console.log('game', game);

game.runGame();
