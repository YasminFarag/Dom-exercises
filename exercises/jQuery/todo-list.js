// JS

/* 

button.addEventListener('keypress',(e)=>{
    if(e.key === 'keypress'){
        let lis = document.createElement('li');
        lis.textContent= 'task'
    }

}); */

let button = document.querySelector('#btn');
myCont = document.querySelector('.main')
button.addEventListener('click',()=>{

    /* let ul= document.createElement('ul')
    ul.textContent= 'new Tasks'
    myCont.appendChild(ul)
    document.body.appendChild(myCont) */
let listed= document.getElementById('list')
    let listedItem= document.createElement('li')
   
    listedItem.textContent= document.querySelector('#textInput').value

    listed.appendChild(listedItem)

    //document.body.appendChild(listed)

    // delete button


        let delBtn = document.createElement('button');
        delBtn.textContent ='Delete'
        delBtn.className= 'delete'

        listedItem.appendChild(delBtn);
        //document.body.appendChild(listed)


    let clickOnBtn = document.querySelector('.delete')
  clickOnBtn.addEventListener('click',()=>{
    listed.removeChild(listedItem)

  })
});
