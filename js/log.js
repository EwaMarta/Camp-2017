const button = document.getElementsByClassName("submit-button")[0];
const input  = document.getElementsByClassName("password-input")[0];
var blockError = document.querySelector("form .error");
const eyeButton = document.querySelectorAll("button")[2];


(function(){
    console.log(button, input);
    button.addEventListener("click", event => {
      event.preventDefault();
      console.log(input.value); });
    button.addEventListener("click", function(event) {
      event.preventDefault();
      checkPassword(); });
    eyeButton.addEventListener("click", function(event) {
       event.preventDefault();
       showPassword();
    });


})();
 

function checkPassword() {
    if (input.value.length>0) {
      //window.location.href='project2.html';
      //window.open('project2.html', '_blank');
      checkResponse();
   } else {
      //alert('Nie wypełniono formularza!');
      input.style.border = '2px solid #c00';
    }
}
function checkResponse(){
  $.ajax({
      type: "post",
      data: {
        login: "efi",
        password: input.value
      },
      url: "https://efigence-camp.herokuapp.com/api/login",
      error: function(response) {
        console.log(response.responseText);
        blockError.style.visibility = "visible";
        blockError.innerText = response.responseJSON.message;
      },
      success: function(response) {
        console.log("succes", response);

        input.style.border = "2px solid #0f0";
        blockError.style.visibility = "hidden";
      }
  });
}

function showPassword() {
    input.type === 'password' ? input.type = 'text' : input.type = 'password';
}

