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



    function validatorBtn() {
      var green = $(this).css(email);
      var red = $(this).css(email);

      console.log(green);


      if (green == 'color', 'green') {
        alert('Mange tak for din tilmeldelse')
      } else (var == 'color', 'red')
        alert('den indtastede mail er ikke korrekt')


    }
});
