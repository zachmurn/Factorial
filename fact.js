/*
My implementation of the recursive factorial funtion in JavaScript.
It's slightly more robust than standard implementations in that it handles
a few edge-cases such as:
- Non-Integer Values
- Negative Values
- Zero Values 
*/
function fact(n) {
  if (!Number.isInteger(n)) {
    window.alert("Please enter an integer value.");
  }
  else if (n === 0 ) {
    return 0;
  }
  else if (n < 0) {
    window.alert("Please enter a positive number.");
  }
  else if (n === 1) {
    return 1;
  }
  else {
    return n * fact(n-1);
  }
}

fact("a");
fact(5);
fact(0);
fact(-2);
