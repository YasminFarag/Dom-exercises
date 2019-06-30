// change the body tag's style so it has a font-family of "Arial, sans-serif"


let changeFont = document.querySelector('body');             changeFont.style.fontFamily = "sans-serif";



// replace each of the spans (nickname, favorites, hometown) with your own information

let personalInfo = document.getElementById('nickname')
        personalInfo.textContent='Yasmin'


let favorites =document.getElementById('favorites')
        favorites.textContent='Reading'


        let homeTown = document.getElementById('hometown')
        homeTown.textContent='Cairo'


// Iterate through each li and change the class to "list-item"

let newClass = document.getElementsByTagName('li')
       for (let i = 0; i < newClass.length; i++){
               newClass[i].className= "list-item"

               
        //        newClass[i].style.color = 'red'
       }



// Add a style tag that sets a rule for .list-item to make the color red.


let newStyle = document.getElementsByClassName('list-item')
       for(let i =0; i<newStyle.length; i++){
               newStyle[i].style.color = 'red'
       }