
//-------------------------------------//
$(function () {
    $('#datepicker').datepicker();
});
//-------------------------------------//
document.getElementById("add-text").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("new-account").style.visibility="visible";
};
document.getElementById("add-text").addEventListener("dblclick", mySecFunction);

function mySecFunction() {
    document.getElementById("new-account").style.visibility="hidden";
};
// nędzne próby :| , żeby się "odklikiwało"

// var number = 0;
// var plus = document.getElementById("add-text");
// var window = document.getElementById("new-account");

// plus.addEventListener('mouseover', function () {
//     plus.style.backgroundColor="red";
// });

// plus.addEventListener('click', function () {
//     switch (++number) {
//         case 1:
//             window.style.visibility = "visible";
//             break;
//         case 2:
//             window.style.visibility = "hidden";
//             break;
//     }

//     number = 0;
// });