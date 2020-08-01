function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );
/*
function fibonacci(n){
 if(n <=1) return n;
 return fibonacci(n -1) + fibonacci(n -2);
}

alert( fibonacci(5) );*/


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert(list.value);

  if (list.next) {
    printList(list.next);
  }

}

printList(list);