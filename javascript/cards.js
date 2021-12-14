let games = {
    dog: {
        dog1 : {
            image : "Images/dog/dog1.png"
        },
        dog2 : {
            image : "Images/dog/dog2.png"
        },
        dog3 : {
            image : "Images/dog/dog3.png"
        },
        dog4 : {
            image : "Images/dog/dog4.png"
        },
        dog5 : {
            image : "Images/dog/dog5.png"
        },
        dog6 : {
            image : "Images/dog/dog6.png"
        },
        dog7 : {
            image : "Images/dog/dog7.png"
        },
        dog8 : {
            image : "Images/dog/dog8.png"
        }
    },
    mario : {
        mario1 : {
            image : "Images/mario/mario1.png"
        },
        mario2 : {
            image : "Images/mario/mario2.png"
        },
        mario3 : {
            image : "Images/mario/mario3.png"
        },
        mario4 : {
            image : "Images/mario/mario4.png"
        },
        mario5 : {
            image : "Images/mario/mario5.png"
        },
        mario6 : {
            image : "Images/mario/mario6.png"
        },
        mario7 : {
            image : "Images/mario/mario7.png"
        },
        mario8 : {
            image : "Images/mario/mario8.png"
        }
    },
    food : {
        food1 : {
            image : "Images/food/food1.png"
        },
        food2 : {
            image : "Images/food/food2.png"
        },
        food3 : {
            image : "Images/food/food3.png"
        },
        food4 : {
            image : "Images/food/food4.png"
        },
        food5 : {
            image : "Images/food/food5.png"
        },
        food6 : {
            image : "Images/food/food6.png"
        },
        food7 : {
            image : "Images/food/food7.png"
        },
        food8 : {
            image : "Images/food/food8.png"
        },
    }
   
}



//function that randomly assigns placement variable to dog/food/mario variables
function numberAssignment(category){
    let numbersUsed = [0];
    let count=1;
    while(count<9){
        let randomNumber1 = Math.floor(Math.random()*17);
        let randomNumber2 = Math.floor(Math.random()*17);
        if(randomNumber1 !== randomNumber2){
            if(!numbersUsed.includes(randomNumber1) && !numbersUsed.includes(randomNumber2)){
                boardAssignment(category,count,randomNumber1,randomNumber2);
                numbersUsed.push(randomNumber1);
                numbersUsed.push(randomNumber2);
                count++;
            }
        }
    }
}

//function that sets placement to either food/mario/dog along with the count
function boardAssignment(category,count,randomNumber1, randomNumber2){
    if(category==="food"){
        switch(count){
            case 1:
                games.food.food1.placement = [randomNumber1,randomNumber2];
                break;
            case 2:
                games.food.food2.placement = [randomNumber1,randomNumber2];
                break;
            case 3:
                games.food.food3.placement = [randomNumber1,randomNumber2];
                break;
            case 4:
                games.food.food4.placement = [randomNumber1,randomNumber2];
                break;
            case 5:
                games.food.food5.placement = [randomNumber1,randomNumber2];
                break;
            case 6:
                games.food.food6.placement = [randomNumber1,randomNumber2];
                break;
            case 7:
                games.food.food7.placement = [randomNumber1,randomNumber2];
                break;
            case 8:
                games.food.food8.placement = [randomNumber1,randomNumber2];
                break;
        }
    }
    else if(category==="dog"){
        switch(count){
            case 1:
                games.dog.dog1.placement = [randomNumber1,randomNumber2];
                break;
            case 2:
                games.dog.dog2.placement = [randomNumber1,randomNumber2];
                break;
            case 3:
                games.dog.dog3.placement = [randomNumber1,randomNumber2];
                break;
            case 4:
                games.dog.dog4.placement = [randomNumber1,randomNumber2];
                break;
            case 5:
                games.dog.dog5.placement = [randomNumber1,randomNumber2];
                break;
            case 6:
                games.dog.dog6.placement = [randomNumber1,randomNumber2];
                break;
            case 7:
                games.dog.dog7.placement = [randomNumber1,randomNumber2];
                break;
            case 8:
                games.dog.dog8.placement = [randomNumber1,randomNumber2];
                break;
        }
    }
    else{
        switch(count){
            case 1:
                games.mario.mario1.placement = [randomNumber1,randomNumber2];
                break;
            case 2:
                games.mario.mario2.placement = [randomNumber1,randomNumber2];
                break;
            case 3:
                games.mario.mario3.placement = [randomNumber1,randomNumber2];
                break;
            case 4:
                games.mario.mario4.placement = [randomNumber1,randomNumber2];
                break;
            case 5:
                games.mario.mario5.placement = [randomNumber1,randomNumber2];
                break;
            case 6:
                games.mario.mario6.placement = [randomNumber1,randomNumber2];
                break;
            case 7:
                games.mario.mario7.placement = [randomNumber1,randomNumber2];
                break;
            case 8:
                games.mario.mario8.placement = [randomNumber1,randomNumber2];
                break;
        }
    }
}
