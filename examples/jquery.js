//Selecting Elements by ID

$('#demo').html('hello World!');



// jQuery SELECTORS

$(document).ready(function(){
     $('#demo').html('hello leute!')
})


// EVENTS

$(document).ready(function(){
    $('#trigger').click(function(){
        $('#demo').html('Hallo World!!')
    });
});












$(document).ready(function(){
    $('p').click(function(){
        $(this).hide();
    });
});
