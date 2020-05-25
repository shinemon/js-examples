
let name = prompt("What is your name?");

showMessage();

function showMessage(){
    alert("Hello " + name);
}



function showMessage2(from, text){
    alert("showMessage2 alert " + from + " : " + text);
}

showMessage2("John", "Hello");
showMessage2("Mark")


function showMessage3(from, text ="default value"){
    alert("showMessage3 alert " + from + " : " + text);
}

showMessage3("John", "Hello");
showMessage3("Mark")