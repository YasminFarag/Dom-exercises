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

    let listedItem= document.createElement('li')
   
    listedItem.textContent= document.querySelector('#textInput').value

    myCont.appendChild(listedItem)

    document.body.appendChild(myCont)



    // delete button


        let delBtn = document.createElement('button');
        delBtn.textContent ='Delete'
        delBtn.className= 'delete'

        listedItem.appendChild(delBtn);
        document.body.appendChild(listedItem)


    let clickOnBtn = document.getElementsByClassName('delete')

});











// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
