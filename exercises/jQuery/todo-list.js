// JS

/* 

button.addEventListener('keypress',(e)=>{
    if(e.key === 'keypress'){
        let lis = document.createElement('li');
        lis.textContent= 'task'
    }

}); */

let button = document.querySelector('#btn');
myCont = document.querySelector('.container')
button.addEventListener('click',()=>{


    let listedItem= document.createElement('li')
   
    listedItem.textContent= document.querySelector('#textInput').value

    myCont.appendChild(listedItem)

    document.body.appendChild(myCont)



})

/* function press(){

   
} */


