//penggunaan DOM
const toggle = document.getElementById('toggleDark'); //icon
const body = document.querySelector('body'); //background color

//penggunaan addEventListener
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');//dark mode = change moon-sun icon
})
function myFunction() {//change dark-mode and light-mode
    body.classList.toggle("dark-mode");
    var content = document.getElementById("myFunction");
    alert("Change Mode Success");// fitur pop up alert
}