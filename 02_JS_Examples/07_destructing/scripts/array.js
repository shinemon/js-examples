let arr = ["abc", "xyz"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName);
alert(surname);



let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

this.topSalary(salaries);

function topSalary(salaries){

let max = 0;
let maxName = null;

for (const[name,salary] of Object.entries(salaries)){
 if (max < salary){
 max = salary;
 maxName = name;
 }
}
alert(maxName + ' from function.')
 return maxName;

}