
let number = prompt("Provide Prime Number till:", 0);
let prime= [2];

if (number <= 1){
    alert("Your input should be more than 1.")
}

if (number > 1) {
    let remainder = 0;
    for(let i = 2; i <= number; i++){
        for (let j = 2; j < i; j++){
            remainder = i % j;

            if (remainder == 0){
            break;
            }
            prime.push(i);
            break;
            }
    }
    alert(prime)
}