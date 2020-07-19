
let key = 'key_1';
sessionStorage.setItem(key,"session_Value_1");
localStorage.setItem(key,"local_Value_1");
alert("Session Storage " + sessionStorage.getItem(key));
alert("Local Storage " + localStorage.getItem(key));

//Set Object:
let myObj = { studentName: 'John Smith', course: 'CSC' };
let key2 = 'key_obj_1';
localStorage.setItem(key2, JSON.stringify(myObj));
alert(localStorage.getItem(key2))
// Read item:
let item = JSON.parse(localStorage.getItem(key2));

if(window.sessionStorage){
alert('browser support storage');
}
