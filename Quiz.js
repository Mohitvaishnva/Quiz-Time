class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player ();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      background("Yellow");
      fill(0);
      textSize(30);
      text("Result of the Quiz",340, 50);
      text("----------------------------",320, 65);
      player.getPlayerInfo();
      if(allplayers !== undefined){
        debugger;
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        text("*NOTE: Player who answered correct are highlighted in green color!",130,230);
  
        for(var plr in allPlayers){
          debugger;
          var correctAns = "1";
          if (correctAns === allPlayers[plr].answer)
            fill("Green")
          else
            fill("red");
  
          display_Answers+=30;
          textSize(20);
          text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 250,display_Answers)
        }
      }
    }
  }