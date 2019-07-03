const ul = document.querySelector('ul')

const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    //console.log('yot clicked me!');

    // first way to creat an element

   ul.innerHTML += '<li>new Task</li>'

   // another way to add an element

//    let li = document.createElement('li');
//         li.textContent= 'New Task';
//         ul.append(li)  // will be added to the end
//        // ul.prepend(li)  // will be added to the top

});



// const listedItems= document.querySelectorAll('li');

// listedItems.forEach(item =>{
//     item.addEventListener('click',(event)=>{
//         event.target.style.textDecoration= 'line-through';
//         //event.target.remove(); // will remove each element will be selected

        
//     })
// }) ;

// to remove an element from DOM

/* const ul = document.querySelector('ul')
ul.remove() */


ul.addEventListener('click', (event)=>{
    console.log(event.target);
    if(event.target.nodeName == 'LI')
    event.target.style.textDecoration= 'line-through';

})


