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

    let ul= document.createElement('ul')
   /*  ul.textContent= 'new Tasks'
    myCont.appendChild(ul)
    document.body.appendChild(myCont) */
let listed= document.getElementById('list')
    let listedItem= document.createElement('li')
   
    listedItem.textContent= document.querySelector('#textInput').value

    listed.appendChild(listedItem)

    //styling listed item

     listed.style.listStyleType= 'none';
    listed.style.fontSize= '18px';
    listed.style.textAlign='center';
    listed.style.fontStyle= 'italic'

    // delete button


        let delBtn = document.createElement('button');
        delBtn.textContent ='Remove'
        delBtn.className= 'delete'

        listedItem.appendChild(delBtn);

// vanilla js 
    let clickOnBtn = document.querySelector('.delete')

    

    console.log(clickOnBtn);
    clickOnBtn.addEventListener('click',()=>{

        listed.removeChild(listed.childNodes[0]);

  })

  // jQuery


      $(document).ready(function(){
        $('.delete').click(function(){

            $(listedItem).hide();
        }); 


        // styling the delete button

        $('.delete').css({
            'background-color':'darkred',
            'width':'auto',
            'color':'white',
            'margin': '15px',
            'text-align': 'center',
            'cursor':'pointer',
            'padding': '5px',

        });
});
});











