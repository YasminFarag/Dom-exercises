
// function getRandom(min,max){
//     min= Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max -min +1) + min)

// }
// console.log(getRandom(1,10));

// function guessingGame(){
//     let numberToBeGuessed= getRandom(1,10);

//     let count =1;

//     let guess = parseInt(prompt('Please enter a number from 1-10'))

//     while(guess !== numberToBeGuessed && count < 3){
//         guess = prompt('wrong! try again')

//         count++
//     }
//     if(guess === numberToBeGuessed && count <3){
//         console.log('success!');
        
//     }else{
//         console.log('Hard Luck!');
        
//     }
// }
// guessingGame()



// solution 

let randomNum= Math.floor(Math.random()* 10 +1)


    console.log(randomNum);

    
function numberGenerator(){
    let userGuess = randomNum

    let counter = 1;

    let guess = parseInt(prompt('Please enter a number from 1-10'))

    while(guess != userGuess && counter < 3){
        guess= prompt('incorrect number! please try again')

        counter ++
    }

    if(guess === userGuess && counter < 3){
        console.log('you did it !');
        
    }else {
        console.log('Hard Luck!');
        
    }

}

numberGenerator()
