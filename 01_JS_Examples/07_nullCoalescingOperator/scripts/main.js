/**
a ?? b is
(a !== null && a !== undefined) ? a : b;

nullish coalescing operator ?? provides a short way to choose a “defined” value from the list
**/

let a = null;

let b = "Test String";

alert( a ?? b);