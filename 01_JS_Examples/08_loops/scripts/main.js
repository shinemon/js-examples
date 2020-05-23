/*
let number;

do{
number = prompt("Enter a number greater than 100.", 0);
}
while (number <= 100 && number);*/


let number;

do {
  number = prompt("Enter a number greater than 100?", 0);
} while (number <= 100 && number);

const myHeading = document.querySelector('h2');
myHeading.textContent = number;