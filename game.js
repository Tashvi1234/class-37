class Game {
    constructor () {

    }
    getGameState () {
        //refer to gameState location in DB
        var gameStateRef = database.ref ('/gameState');
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
                function(data){
                   gameState = data.val ();

                }
        );        
    }

    updateGameState (count) {
        var gameStateRef = database.ref ('/');
       gameStateRef.update({"gameState" : count});
    }

    start () {
        if (gameState == 0) {  // begin
            
            // create player
            player = new Player ();
            player.getPlayerCount ();

            // create form 
            form = new Form () ;
            form.display () ;
        }
    }
    
    // all 4 players joined , so start to play
    play () {
        form.hide();

        textSize (30) ;
        text ("Game Start", 120,100);
        Player.getPlayerInfo ();

        if (allPlayers != undefined) {
            var display_position = 130;
            // display all players
            for (var plr in allPlayers){
                /*
                if (plr == "player"+player.index)
                    fill("red");
                else
                    fill ("black");
                    */
                display_position+=20;
                textSize (15) ;
                text (allPlayers[plr].name+": " + allPlayers[plr].distance, 120, display_position);
            }
            
        }
        
        if (keyIsDown (UP_ARROW) && player.index != null) {
            
            player.distance= player.distance + 50; // increment player distance
            player.updatePlayerNameAndDistance ();

        }

    }

} // end of class Player