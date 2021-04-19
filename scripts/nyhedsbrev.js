var validateEmail = function(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

$('#email').keyup(function() {

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

newsletter.handleInputKeypress = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        newsletter.submitForm();
    }
}
newsletter.input.addEventListener('keypress', (e) => newsletter.handleInputKeypress(e));
document.addEventListener('click', (e) => newsletter.clickHandler(e));
