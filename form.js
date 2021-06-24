class Form {
    constructor () {
        this.input = createInput ("Name") ;
        this.button = createButton ("Play");
        this.greeting = createElement ("h2");
        var title = createElement ("h2");
        title.html ("Car Racing Game");
        title.position (130,0);

        this.input.position (130,160);

        this.button.position (250,200);        
            
    }

    hide () {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        
    }
    
    display () {

   
        this.button.mousePressed (()=> {
            this.input.hide ();
            this.button.hide ();

            var name = this.input.value (); // player's name 

            playerCount=playerCount+1; // player joined

            // update player's details in DB
            player.updatePlayerNameAndDistance (name);
            player.updatePlayerCount (playerCount);

            this.greeting.html ("Hello " + name);
            this.greeting.position (130,160);
        });
    

    }
}