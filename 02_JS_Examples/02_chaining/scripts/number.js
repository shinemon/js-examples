function repUtilANumber(x) {
x = prompt('Please enter a number');
if (sFinite(x)) {
alert(x);
} else {
repUtilANumber();
}
}

repUtilANumber();