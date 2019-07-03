const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    console.log('yot clicked me!');
    
});
const listedItems= document.querySelectorAll('li');

listedItems.forEach(item =>{
    item.addEventListener('click',(event)=>{
        event.target.style.textDecoration= 'line-through';
        
        
    })
}) ;

// to remove an element from DOM

/* const ul = document.querySelector('ul')
ul.remove() */


