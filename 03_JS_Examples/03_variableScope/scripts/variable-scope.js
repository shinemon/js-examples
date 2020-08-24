//https://javascript.info/closure
{
  // do some job with local variables that should not be seen outside
  let message = "Hello"; // only visible in this block
  alert(message); // Hello
}

alert(message)