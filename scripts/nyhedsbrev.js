var validateEmail = function nyhedsbrev(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

// Til footeren
$('#email').keyup(function () {

    var value = $(this).val();
    var valid = validateEmail(value);

    if (!valid) {
        $(this).css('color', 'red');
        $('.addbut1').prop('disabled', true);
    } else {
        $(this).css('color', '#2bb673');
        $('.addbut1').prop('disabled', false);
    }
});

// Til nyhedsbrev i bunden af om_os.html
$('#mail').keyup(function () {

    var value = $(this).val();
    var valid = validateEmail(value);

    if (!valid) {
        $(this).css('color', 'red');
        $('.addbut1').prop('disabled', true);
    } else {
        $(this).css('color', '#2bb673');
        $('.addbut1').prop('disabled', false);
    }
});