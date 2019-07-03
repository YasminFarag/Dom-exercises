
// Function to modify the text content of the paragraph
const changeText=()=>{
    const p =document.querySelector('p')
    p.textContent= 'this paragraph is changed'
}


/* const p =document.querySelector('p')

 const changeText= ()=>{
     p.textContent= 'will i change?!'
 } */

 

//  const alerted =()=>{
//      alert('will i alert?!')
//  }

//  events can be overwritten


//button.onclick = changeText;
// button.onclick = alerted;


// In the above example, the button click would only display an alert, and not change the p text, since the alert() code was the last one added to the property



// Event Listeners


// listen for event 'click'
const button = document.querySelector('button');
button.addEventListener('click', changeText)

// An anonymous function on an event listener
 // An anonymous function is a function that is not named




 // Test the keyCode, key, and code properties

 document.addEventListener('keydown', event=>{
     console.log(`keycode:${event.keyCode}`);
     console.log(`key:${event.key}`);
     console.log(`code:${event.code}`);
     
 })
