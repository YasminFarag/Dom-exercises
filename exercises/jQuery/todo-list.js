// JS

/* 

button.addEventListener('keypress',(e)=>{
    if(e.key === 'keypress'){
        let lis = document.createElement('li');
        lis.textContent= 'task'
    }

}); */

let divider = document.querySelector('.divider')


let button = document.querySelector('.btn');
myCont = document.querySelector('.main')
divider.addEventListener('click',(e)=>{
    if(e.target.className === 'btn'){

   // let ul= document.createElement('ul')
   /*  ul.textContent= 'new Tasks'
    myCont.appendChild(ul)
    document.body.appendChild(myCont) */


let listed= document.getElementById('list')
    let listedItem= document.createElement('li')
   
    listedItem.textContent= document.querySelector('#textInput').value

    listed.appendChild(listedItem)

// delete button
// vanilla js

    let delBtn = document.createElement('button');
        delBtn.textContent ='Remove'
        delBtn.className= 'delete'

        listedItem.appendChild(delBtn);
        console.log(delBtn);
        
    }

    if(e.target.className=== 'delete'){
        e.target.parentElement.remove();
    }

});
    
 
  /*   let clickOnBtn = document.querySelector('.delete')

    

    console.log(clickOnBtn);
    clickOnBtn.addEventListener('click',()=>{

        listed.removeChild(listed.childNodes[0]);

  }) */

  // jQuery


      /* $(document).ready(function(){
        $('.delete').click(function(){

            $(listedItem).hide();
        }); 
 */

       











