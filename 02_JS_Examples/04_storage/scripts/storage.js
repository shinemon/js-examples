
let key = 'key_1';

sessionStorage.setItem(key,"session_Value_1");

localStorage.setItem(key,"local_Value_1");

alert("Session Storage " + sessionStorage.getItem(key));

alert("Local Storage " + localStorage.getItem(key));