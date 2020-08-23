function sumAll(...args){
let sum = 0;

for (arg of args){

sum += arg;
}

return sum;
}

alert(sumAll(1, 3, 5, 6, 8));