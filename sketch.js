
var database; 

var game, form, player ;
var gameState = 0;
var playerCount  = 0;
var allPlayers;

function setup(){
    createCanvas(400,400);
    database = firebase.database(); // connect to DB

    game = new Game ();
    game.getGameState ();
    game.start ();

}

function draw(){
    if (playerCount == 2) {  //no. of players is 2
        game.updateGameState (1);  
    }
    // gameState is 1, all players have joined
    // start to play - racing begins
    if (gameState == 1) {
        clear ();
        game.play ();
    }
}

