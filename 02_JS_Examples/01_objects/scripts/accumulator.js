
function Accumulator (startingValue){
    this.number = startingValue;
    this.read = function(){
        this.number += +prompt("Enter a valid number",0);
        };

     this.value =  function(){
     return this.number;
     }
}

let accumulator =  new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.value());

alert(accumulator.number);


