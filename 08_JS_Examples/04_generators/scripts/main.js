function* generators(){

yield 1;
yield 2;
yield 3;
return 4;
}

let sequences = generators();

for (let sequence of sequences){
alert (sequence);
}