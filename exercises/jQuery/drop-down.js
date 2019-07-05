function press(){
    let drop= document.querySelector('#mainul')
//     drop.addEventListener('mouseover', function(e){
//         if(e.type=== 'mouseover'){
//             drop.style.display= ('none')

//         }

//     })
// }

    if(drop.className === 'mymenu'){
        drop.className += 'responsive'
    }else{
        drop.className = 'mymenu'
    }
}


/* function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
 */