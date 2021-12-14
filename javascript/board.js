//this is how to make the card flip by taking and putting classes on the board


let cards = document.getElementsByClassName("card");
let picks = 0;
let cardImage1=null;
let cardImage2=null;
let cardElement1=null;
let cardElement2=null;
let playerTurn="one";
let playerOnePoints=0;
let playerTwoPoints=0;
let cardsFinish=0;
for(let i=0; i < cards.length;i++){
    cards[i].addEventListener("click", () => {
        if(cards[i].classList.contains("cardFlip")){
            //cards[i].classList.remove("cardFlip");
        }
        else{
            if(picks<2){
                cards[i].classList.add("cardFlip");
                
                if(picks===0){
                    cardImage1=cards[i].children[1].children[0].src;
                    cardElement1=cards[i];
                    picks++;
                }
                else if(picks===1){
                    cardImage2=cards[i].children[1].children[0].src;
                    cardElement2=cards[i];
                    if(cardImage1===cardImage2){
                        console.log("correct");
                        picks=0;
                        //all cards found
                        let winnerText= document.getElementById("winnerText")
                        if(cardsFinish===7){
                            if(player_mode==="two")
                            {
                            winnerText.style.display="block";
                            if(playerTurn==="one"){
                                playerOnePoints++;
                                document.getElementById("playerOne-score").innerText=playerOnePoints;
                            }
                            else{
                                playerTwoPoints++;
                                document.getElementById("playerTwo-score").innerText=playerTwoPoints;
                            }

                            if(playerOnePoints>playerTwoPoints){
                                winnerText.innerText="Player One Wins";
                            }
                            else if(playerOnePoints<playerTwoPoints){
                                winnerText.innerText="Player Two Wins";
                            }
                            else{
                                winnerText.innerText="Tie Game";
                            }
                            document.getElementById("playerOne").style.color="white";
                            document.getElementById("playerTwo").style.color="white";
                            }
                            else{
                                let finalTime=document.getElementById("final-time");
                                document.getElementById("final-minutes").innerText=document.getElementById("minutes").innerText;
                                document.getElementById("final-seconds").innerText=document.getElementById("seconds").innerText;
                                finalTime.style.display="block";
                                document.getElementById("player-one-counter").style.display="none";
                            }
                        }
                        else{
                            cardsFinish++;
                            //checks player mode
                            if(playerTurn==="one"){
                                playerOnePoints++;
                                document.getElementById("playerOne-score").innerText=playerOnePoints;
                                playerTurn="two";
                                document.getElementById("playerOne").style.color="red";
                                document.getElementById("playerTwo").style.color="green";
                            }
                            else{
                                playerTwoPoints++;
                                document.getElementById("playerTwo-score").innerText=playerTwoPoints;
                                playerTurn="one";
                                document.getElementById("playerOne").style.color="green";
                                document.getElementById("playerTwo").style.color="red";
                            }
                        }
                        
                    }
                    else{
                        console.log("incorrect");
                        picks=0;
                        setTimeout(function () {
                            cardElement1.classList.remove("cardFlip");
                            cardElement2.classList.remove("cardFlip");
                        },750);
                        if(playerTurn==="one"){
                            playerTurn="two";
                            document.getElementById("playerOne").style.color="red";
                            document.getElementById("playerTwo").style.color="green";
                        }
                        else{
                            playerTurn="one";
                            document.getElementById("playerOne").style.color="green";
                            document.getElementById("playerTwo").style.color="red";
                        }
                    }
                    
                } 
            }
           
            

        }     
    });
}