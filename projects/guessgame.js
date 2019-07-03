
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

    let heading = document.querySelector('.header')
    let p = document.querySelector('.paragraph')
    let counter = 1;
   function guessingGame(){

 

   
    let userInput= document.querySelector('#iteminput');
   

    if(userInput == randomNum && counter < 3) {
        heading.textContent= 'Success!!!';
        p.textContent= `the number is ${randomNum} ,You got the number correctly after ${counter} attempts`  
       
    } 
    
    
    else if(userInput != randomNum && counter < 3){   
        heading.textContent= 'Wrong!!!';
        p.textContent= `Try again! You have ${3-counter} attempts left`;
        counter ++
    }else{
        heading.textContent= 'Sorry!!!'; 
        p.textContent= ` You couldn't guess the number, the number was ${randomNum}`;
        counter++
    }
};



//let guess = parseInt(prompt('Please enter a number from 1-10'))
    //let guess= document.querySelector('#iteminput').value
  
    //  while(userInput != GuessNumber && counter < 3){
    // counter ++
    // l
    //  }


    