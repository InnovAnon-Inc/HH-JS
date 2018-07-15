function intDiv (a, b) {
 const result = a / b;
 if (result >= 0)
  return Math.floor (result);
 else
  return Math.ceil (result);
}

function sum (array) { return array.reduce ((x, y) => x + y); }

function binaryLog (n) { return Math.log (n) / Math.log (2); }
