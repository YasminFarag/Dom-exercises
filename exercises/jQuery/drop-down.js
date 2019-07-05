/* function press(){
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
 */



  document.querySelector('.dropdown').addEventListener('mouseover',openMenu)

  function openMenu(){
      document.querySelector('.dropdown-content').classList.toggle('show')


  }