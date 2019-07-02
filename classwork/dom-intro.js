console.log('hello');

document.body.style.backgroundColor = 'pink';

let heading= document.getElementById('heading');
heading.style.color= 'black'

let paragraph = document.getElementById('paragraph');
paragraph.style.color= 'black';
paragraph.style.fontFamily= 'Georgia, serif';
paragraph.style.fontStyle= 'italic';
paragraph.style.fontSize= '25px';
paragraph.style.backgroundColor= 'red'
paragraph.style.padding = '30px';
paragraph.style.margin = '60px'

let listed= document.getElementsByTagName('li');
console.log(listed);

listed[0].style.fontSize= '40px';

let orderedList = document.getElementsByTagName('ol');
// for(let i =0; i<orderedList.length; i++){
//     orderedList[0].style.color= 'blue';
//     orderedList[0].style.fontSize= '28px'
//     orderedList[1].style.color= 'brown';
//     orderedList[1].style.fontSize= '28px';
//     orderedList[2].style.color= 'darkOrange';
//     orderedList[2].style.fontSize= '28px';
// }


function changeFontStyle(array){
    
for(let i =0; i<array.length; i++){
    array[i].style.fontStyle= 'italic';
    
}

}

changeFontStyle(orderedList);