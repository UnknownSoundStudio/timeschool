$('#Err').css('transform', 'translateY(-80px)');

var timer;
function alt(error) {
    clearTimeout(timer);
    $('#Err').css('transform', 'translateY(-80px)');
    $('#Err_Co').text(error);
    $('#Err').css('transform', 'translateY(0px)');
    timer = setTimeout(function() {
        $('#Err').css('transform', 'translateY(-80px)');
    }, 1500);
}
