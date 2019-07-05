function press(){
    let drop= document.querySelector('.dropdown-content')
    drop.addEventListener('mouseover', function(e){
        if(e.type=== 'mouseover'){
            drop.style.display= ('none')

        }

    })
}
