/**
x = a ?? b is
x = (a !== null && a !== undefined) ? a : b;
**/

let a = null;

let b = "Test String";

alert( a ?? b);