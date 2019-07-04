
// * Create a button that contains some text. 
// * When the user enters the mouse, the text of the button changes to 
// * When the user's mouse leaves, change the text again to 'Dont go please!'.

$('#btn').html('Welcome! Stay forever')
$('#btn').css('background-color','red')
$('#btn').css('height','50px')


$('#btn').click(function(){
   $('#btn').css({
       'color' :'white',
       'margin-right': '50px'
        
   })
})

$(document).ready(function(){
    $('#btn').on('mouseenter mouseleave',function(e){
        if(e.type === 'mouseenter'){
            $('#btn').html('Dont leave me this way!')
        } else if(e.type === 'mouseleave'){
            $('#btn').html('just put the mouse over me!')
        }else{
            $('#btn').css('color','black')
        }
        console.log(e.type);
        
            
        

    })
})