//https://javascript.info/closure
{
  // do some job with local variables that should not be seen outside
  let message = "Hello"; // only visible in this block
  alert(message); // Hello
}

//alert(message)

///////////////

function sayHiBye(firstName, lastName){
    function getFullName(){
        return firstName + " " +  lastName;
    }
alert("Hello " + getFullName());
alert("Bye! " + getFullName());
}
sayHiBye("Sam", "Son");

////////////////

let name = "John";
function sayHi() {
  alert("Hi, " + name);
}
name = "Pete";
sayHi();

/////////////
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?