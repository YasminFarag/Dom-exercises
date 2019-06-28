// ## Tasks
//1. Select the section with an id of container without using querySelector.

let section = document.getElementById('container');
section.style.fontStyle = 'italic' 

//2- Select the section with an id of container using querySelector

let item = document.querySelector('#container')
    item.style.color= 'blue'



// 3- Select all of the list items with a class of "second"
    let listedItem = document.getElementsByClassName("second");
    for(let i = 0; i<listedItem.length; i++){
        listedItem[i].style.fontWeight = 'bold'
        listedItem[i].style.backgroundColor= '#ccc'
    }




// 4- Select a list item with a class of third, but only the list item inside of the ol tag


let lastItem = document.querySelector('.third:last-child')

lastItem.style.backgroundColor= 'red'


//5. Give the section with an id of container the text "Hello!"
// let changeText = document.getElementById('container')
//     changeText.textContent = 'hello'



// 6. Add the class main to the div with a class of footer.

let addedClass = document.querySelector('.footer');
    addedClass.classList.add('main');

// 7. Remove the class main on the div with a class of footer.

let removed = document.querySelector('.main')
removed.classList.remove('main')
// 8. Create a new li element
let newLi = document.createElement('li');
// 9. Give the li the text "four"
newLi.textContent = 'four'
//10. Append the li to the ul element
document.querySelector('ul').appendChild(newLi)


// 11. Loop over all of the lists inside the ol tag and give them a background color of "green"
let orderedList = document.getElementsByTagName('ol')
for (let i=0; i<orderedList.length; i++){
    orderedList[i].style.backgroundColor= 'green'
}

// 12. Remove the div with a class of footer
let removeClass= document.querySelector('.footer')
removeClass.classList.remove('footer')