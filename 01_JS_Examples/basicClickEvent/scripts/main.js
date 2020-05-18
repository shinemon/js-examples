const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//Event Example
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}