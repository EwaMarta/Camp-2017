
document.getElementById("continue").addEventListener("click", validation);

function validation()
event.preventDefault();
var form = document.getElementById("transfer"),
    rules = {
        "number-input": /^[0-9]{26}$/,
        "sum-input": /[0-9]{1}/,
        "title-input": /[0-9a-z]{5}/,
        "datepicker": /^\d{2}\/\d{2}\/\d{4}$/,

    };

for (var elem in rules) {
    if (form[elem]) {
        if (!rules[elem].test(form[elem].value)) {
            alert('Pole ' + elem + ' ma nieprawidłową wartość');
            form[elem].style.background = 'red';
            return false;
        }
        else {
            form[elem].style.background = '';
        }
    }
}
alert('Wszystko OK:)');
return true;
    };

    //   {   if ($('input:radio', this).is(':checked')) {
    // } 
    // else {
    //     alert('Please select something!');
    //     return false;
    // }