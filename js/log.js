// Brakuje zapytania do backendu :(

(function(){
  const button = document.getElementsByClassName("button-log")[0];
  const input  = document.getElementsByClassName("add")[0];
  
  console.log(button);
    console.log(button, input);
    button.addEventListener("click", event => {
    event.preventDefault();
    console.log( input.value);

    /* Alternatywnie:
      if (!input.value.length)
      if (input.value.length === 0)
      if (input.value.length === false)
    */
    if (input.value.length<1){
      alert('Nie wypełniono formularza!');
      input.style.border = '2px #c00 solid';
    } else {
      window.location.href='project2.html';
    } 
      // Dlaczego ten return? :)
      return true;

  } );
})();
