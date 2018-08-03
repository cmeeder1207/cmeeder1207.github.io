
//computers options
// index for easy mode {if i can get it working}
var vowel =['a','e','i','o']
// index for hard mode
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties

var wins = 0;
var losses = 0;
var guesses = 10;













//user event 
var mode=[vowel,alphabet]   

var i =0


    $(".easy").on("click", function() {
        mode[i]
    })

    $(".hard").on("click", function() {
        mode[i + 1]
    })

    

   document.onkeydown = function(event) {
    var userGuess = event.key;
 var computerChoice = mode[i][Math.floor(Math.random() * mode[i].length)];
    console.log(computerChoice)
    
        //logic for scoreboard
    if(userGuess === computerChoice){
        wins++;
        
    }else{
        guesses--;
        
    }

    if(guesses === 0){
        losses++
        guesses=10
        
    }
    
    

        //push scores to ui
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#guesses").html("Guesses: " + guesses);
    $("#computerG").html("Computers Previous Choice: " + computerChoice);
    $("#userG").html(userGuess);
        //originally a test to see if my js was running.
    if(losses === 0 && guesses===1){
        var areyou = prompt("Are You Happy?")
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "Assets/Evil_Laugh.mp3");
        audioElement.play();
        var audioElement = document.createElement("audio");
        
        
       
 
     
    }
   
    if (wins===5){

        alert("You Did it!!!")
    }

    if (wins===5){

        alert("You Already Did it...")
    }

    if (wins===7){

        alert("Your cheating")
        $( "background" ).last().addClass( "black" );
        $( "text" ).last().addClass( "black" );

    
    }
    
       
    
    if (losses===2||losses===6){      
         var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "Assets/over.mp3.mp3");
        audioElement.play();

        alert("game over");
        guesses=7
        wins=6
        losses=6
        document.write(" <style>body{background-image: url(https://thumbs.dreamstime.com/b/game-over-background-black-red-57773681.jpg)}</style><h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1> <h1>you lose </h1><h1>REFRESH PAGE TO PLAY AGAIN</h1> ")
        $('html,body').animate({scrollTop: document.body.scrollHeight},{duration: 30000});
        
    }
  //push scores to console log {debugging only}


    // console.log("Your Choice: " + userGuess)
    // console.log("Computers Choice: " + computerChoice)
    // console.log ("Wins:" + wins)
    // console.log("Losses: " + losses)
    // console.log("Guesses: " + guesses)
} 

