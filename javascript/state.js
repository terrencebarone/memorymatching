//states
let player_state = document.getElementById("playerMode-state");
let category_state = document.getElementById("category-state");
let game_state = document.getElementById("game-state");

//player state
//buttons that users push to choose if its single player or two player
let player_mode="";
let one_player_button = document.getElementById("one-player");
let two_player_button = document.getElementById("two-player");
//one player timer and two player score board
let onePlayer_timer = document.getElementById("one-player-container");
let twoPlayer_board = document.getElementById("two-player-container");
//timer variables
let seconds_element = document.getElementById("seconds");
let minutes_element = document.getElementById("minutes");
let seconds=0;
let minutes=0;

one_player_button.addEventListener("click", () => {
     player_state.style.display="none";
     category_state.style.display="block";
     //set playerMode in localstorage
     localStorage.setItem('playerMode',"one");
     player_mode="one";
     
     twoPlayer_board.style.display="none";
     onePlayer_timer.style.display="block";
});
two_player_button.addEventListener("click", () => {
     player_state.style.display="none";
     category_state.style.display="block";
     //set playerMode in localstorage
     localStorage.setItem('playerMode',"two");
     player_mode="two";
     twoPlayer_board.style.display="block";
     onePlayer_timer.style.display="none";
});

//player one counter
function updateTimeCount(){
    if(seconds===60){
        minutes++;
        seconds=0;
        minutes_element.innerText=minutes;
        seconds_element.innerText="00";
    }
    else{
        if(seconds<10){
           let secondString = "0" + seconds.toString();
           seconds_element.innerText=secondString;
           seconds++;
        }
        else{
        seconds++;
        seconds_element.innerText=seconds;
        }
    }
}



//category state
let back_button = document.getElementById("back-button");
let dog_button = document.getElementById("dog-button");
let mario_button = document.getElementById("mario-button");
let food_button = document.getElementById("food-button");

back_button.addEventListener("click", () => {
    player_state.style.display="block";
    category_state.style.display="none";
});
dog_button.addEventListener("click", () => {
    category_state.style.display="none";
    game_state.style.display="grid";
    //set categoryMode in localstorage
    localStorage.setItem('category','dog');
    //sets board positions
    numberAssignment("dog");
    playerMode(player_mode);
    setCardBacks("dog")
    
});
mario_button.addEventListener("click", () => {
    category_state.style.display="none";
    game_state.style.display="grid";
    //set categoryMode in localstorage
    localStorage.setItem('category','mario');
    //sets board positions
    numberAssignment("mario");
    playerMode(player_mode);
    setCardBacks("mario")
 
});
food_button.addEventListener("click", () => {
    category_state.style.display="none";
    game_state.style.display="grid";
    //set categoryMode in localstorage
    localStorage.setItem('category','food');
    //sets board positions
    numberAssignment("food");
    playerMode(player_mode);
    setCardBacks("food")
    

});
function numImage(number,image){
    switch(number){
        case 1:
            document.getElementById("board1").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 2:
            document.getElementById("board2").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 3:
            document.getElementById("board3").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 4:
            document.getElementById("board4").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 5:
            document.getElementById("board5").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 6:
            document.getElementById("board6").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 7:
            document.getElementById("board7").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 8:
            document.getElementById("board8").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 9:
            document.getElementById("board9").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 10:
            document.getElementById("board10").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 11:
            document.getElementById("board11").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 12:
            document.getElementById("board12").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 13:
            document.getElementById("board13").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 14:
            document.getElementById("board14").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 15:
            document.getElementById("board15").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
        case 16:
            document.getElementById("board16").childNodes[1].childNodes[3].childNodes[0].src= image;
        break;
    }
}

function setCardBacks(category){
    //get placement for each card
    if(category==="dog"){
        for(let i=1;i<9;i++){
            if(i===1){
                let number1=games.dog.dog1.placement[0];
                let number2=games.dog.dog1.placement[1];
                let imageForBoth = games.dog.dog1.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===2){
                let number1=games.dog.dog2.placement[0];
                let number2=games.dog.dog2.placement[1];
                let imageForBoth = games.dog.dog2.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===3){
                let number1=games.dog.dog3.placement[0];
                let number2=games.dog.dog3.placement[1];
                let imageForBoth = games.dog.dog3.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===4){
                let number1=games.dog.dog4.placement[0];
                let number2=games.dog.dog4.placement[1];
                let imageForBoth = games.dog.dog4.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===5){
                let number1=games.dog.dog5.placement[0];
                let number2=games.dog.dog5.placement[1];
                let imageForBoth = games.dog.dog5.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===6){
                let number1=games.dog.dog6.placement[0];
                let number2=games.dog.dog6.placement[1];
                let imageForBoth = games.dog.dog6.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===7){
                let number1=games.dog.dog7.placement[0];
                let number2=games.dog.dog7.placement[1];
                let imageForBoth = games.dog.dog7.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else{
                let number1=games.dog.dog8.placement[0];
                let number2=games.dog.dog8.placement[1];
                let imageForBoth = games.dog.dog8.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
           
        }
    }
    else if(category==="mario"){
        for(let i=1;i<9;i++){
            if(i===1){
                let number1=games.mario.mario1.placement[0];
                let number2=games.mario.mario1.placement[1];
                let imageForBoth = games.mario.mario1.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===2){
                let number1=games.mario.mario2.placement[0];
                let number2=games.mario.mario2.placement[1];
                let imageForBoth = games.mario.mario2.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===3){
                let number1=games.mario.mario3.placement[0];
                let number2=games.mario.mario3.placement[1];
                let imageForBoth = games.mario.mario3.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===4){
                let number1=games.mario.mario4.placement[0];
                let number2=games.mario.mario4.placement[1];
                let imageForBoth = games.mario.mario4.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===5){
                let number1=games.mario.mario5.placement[0];
                let number2=games.mario.mario5.placement[1];
                let imageForBoth = games.mario.mario5.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===6){
                let number1=games.mario.mario6.placement[0];
                let number2=games.mario.mario6.placement[1];
                let imageForBoth = games.mario.mario6.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===7){
                let number1=games.mario.mario7.placement[0];
                let number2=games.mario.mario7.placement[1];
                let imageForBoth = games.mario.mario7.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else{
                let number1=games.mario.mario8.placement[0];
                let number2=games.mario.mario8.placement[1];
                let imageForBoth = games.mario.mario8.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
           
        }
    }
    else{
        for(let i=1;i<9;i++){
            if(i===1){
                let number1=games.food.food1.placement[0];
                let number2=games.food.food1.placement[1];
                let imageForBoth = games.food.food1.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===2){
                let number1=games.food.food2.placement[0];
                let number2=games.food.food2.placement[1];
                let imageForBoth = games.food.food2.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===3){
                let number1=games.food.food3.placement[0];
                let number2=games.food.food3.placement[1];
                let imageForBoth = games.food.food3.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===4){
                let number1=games.food.food4.placement[0];
                let number2=games.food.food4.placement[1];
                let imageForBoth = games.food.food4.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===5){
                let number1=games.food.food5.placement[0];
                let number2=games.food.food5.placement[1];
                let imageForBoth = games.food.food5.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===6){
                let number1=games.food.food6.placement[0];
                let number2=games.food.food6.placement[1];
                let imageForBoth = games.food.food6.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else if(i===7){
                let number1=games.food.food7.placement[0];
                let number2=games.food.food7.placement[1];
                let imageForBoth = games.food.food7.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
            else{
                let number1=games.food.food8.placement[0];
                let number2=games.food.food8.placement[1];
                let imageForBoth = games.food.food8.image;
                numImage(number1,imageForBoth);
                numImage(number2,imageForBoth);
            }
           
        }
    }
}





//game state
let leave_game_button = document.getElementById("leave-game-button");

let myTimer=null;
function playerMode(player_mode, myTimer){
    if(player_mode==="one"){
        myTimer = setInterval(updateTimeCount,1000);

        leave_game_button.addEventListener("click", () => {
            game_state.style.display="none";
            player_state.style.display="block";
            clearInterval(myTimer);
            minutes_element.innerText="00";
            seconds_element.innerText="00";
            seconds=0;
            minutes=0;
            //turns cards back over when ou leave game
            let cards = document.getElementsByClassName("card");
            for(let i=0; i < cards.length;i++){
                cards[i].classList.remove("cardFlip");
            }
            document.getElementById("final-time").style.display="none";
            document.getElementById("player-one-counter").style.display="block";
        });
    }
    else{
        leave_game_button.addEventListener("click", () => {
            game_state.style.display="none";
            player_state.style.display="block";
            //turns cards back over when ou leave game
            let cards = document.getElementsByClassName("card");
            for(let i=0; i < cards.length;i++){
                cards[i].classList.remove("cardFlip");
            }
            picks = 0;
            cardImage1=null;
            cardImage2=null;
            cardElement1=null;
            cardElement2=null;
            playerTurn="one";
            playerOnePoints=0;
            playerTwoPoints=0;
            cardsFinish=0;
            document.getElementById("playerOne").style.color="green";
            document.getElementById("playerTwo").style.color="red";
            document.getElementById("playerOne-score").innerText=0;
            document.getElementById("playerTwo-score").innerText=0;
            winnerText.style.display="none";
        });
    }
}




