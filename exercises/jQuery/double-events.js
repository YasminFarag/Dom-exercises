
// * Create a button that contains some text. 
// * When the user enters the mouse, the text of the button changes to 
// * When the user's mouse leaves, change the text again to 'Dont go please!'.

$('#btn').html('Welcome! Stay forever')

$(document).ready(function(){
    $('#btn').on('mouseenter',function(e){
        if(e.type === 'mouseenter'){
            $('#btn').html('Dont leave me this way!')
        }else{
            $('#btn').css('color', 'green')
        }

    })
})