$(document).ready(function() {
    $('#userInput').submit(function(event) {
        event.preventDefault();
        var something = $('#inputBox').val();
        if (something === "") {
            alert('No item entered')
        } else {
            $('.items ul').append("<li> " + something + "</li>");
        }
        $('#userInput')[0].reset();
    });

});
