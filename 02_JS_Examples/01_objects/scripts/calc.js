
let calculator = {

read(){
    this.x = +prompt("Enter first number",0);
    this.y = +prompt("Enter second number",0);
},

sum(){
return "Sum of " + this.x + " and " + this.y + " = "+ (this.x + this.y);
},

mul(){

return this.x * this.y;
}

}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
