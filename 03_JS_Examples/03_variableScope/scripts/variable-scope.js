//https://javascript.info/closure
{
  // do some job with local variables that should not be seen outside
  let message = "Hello"; // only visible in this block
  alert(message); // Hello
}

//alert(message)


function sayHiBye(firstName, lastName){
    function getFullName(){
    return firstName + " " +  lastName;
    }

alert("Hello " + getFullName());
alert("Bye! " + getFullName());
}

sayHiBye("Sam", "Son");