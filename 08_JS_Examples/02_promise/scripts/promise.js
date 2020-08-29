function addNumbers(a,b){
return new Promise(function(resolve, reject){
let result =  a +b;
resolve(result);
})
}

let promise = addNumbers(5, 6);

promise.then(
result => alert(`result is ${result}`)
);
