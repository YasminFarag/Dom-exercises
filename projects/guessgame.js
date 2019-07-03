
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
    //console.log(randomNum);

   //let myButton = document.querySelector('button') 
document.getElementById('button').onclick= function(){
    let GuessNumber = randomNum

    let counter = 1;

    //let guess = parseInt(prompt('Please enter a number from 1-10'))
    //let guess= document.querySelector('#iteminput').value



    var userInput= document.getElementById('iteminput');
    while(userInput != GuessNumber && counter < 3){
        //userInput= ('incorrect number! please try again')
        let heading = document.getElementsByClassName('header')
        heading.textContent= 'Wrong!!!';
        let p = document.getElementsByTagName('p')
        p.textContent= 'Try again! You have 2 attempts left'


        counter ++
    }

    if(userInput === GuessNumber && counter < 3){
        heading.textContent= 'you did it !';
        
    }else {
        heading.textContent= 'Hard Luck!';
        
    }

}

//numberGenerator()
