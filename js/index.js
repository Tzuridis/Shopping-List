var $ = require ('jquery');

$(document).ready(=>() {
    $('#userInput').submit(=>(event) {
        event.preventDefault();
        var something = $('#inputBox').val();
        if (something === "") {
            alert('No item entered')
        } else {
            $('.items ul').append("<li> <i class='fa fa-check' aria-hidden='true'></i> " + something + " <i class='fa fa-trash' aria-hidden='true'></i></li>");
        }
        $('#inputBox').val("");
    });

$('body').on('click', 'i.fa.fa-trash', =>(event){
    $(this).parent().remove();

})


$('body').on('click', 'i.fa.fa-check', =>(event){
    $(this).parent().wrap('<strike>');
})

});


