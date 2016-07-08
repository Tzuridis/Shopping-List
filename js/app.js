$(document).ready(function() {
    $('#userInput').submit(function(event) {
        event.preventDefault();
        var something = $('#inputBox').val();
        if (something === "") {
            alert('No item entered')
        } else {
            $('.items ul').append("<li> <i class='fa fa-check' aria-hidden='true'></i> " + something + " <i class='fa fa-trash' aria-hidden='true'></i></li>");
        }
        $('#inputBox').val("");
    });

$('body').on('click', 'i.fa.fa-trash', function(event){
    $(this).parent().remove();

})


$('body').on('click', 'i.fa.fa-check', function(event){
    $(this).parent().wrap('<strike>');
})

});


