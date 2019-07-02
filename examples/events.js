
// Function to modify the text content of the paragraph
const changeText=()=>{
    const p =document.querySelector('p')
    p.textContent= 'this paragraph is changed'
}


/* const p =document.querySelector('p')

 const changeText= ()=>{
     p.textContent= 'will i change?!'
 } */

 const button = document.querySelector('button');

 const alerted =()=>{
     alert('will i alert?!')
 }

//  events can be overwritten


button.onclick = changeText;
button.onclick = alerted;