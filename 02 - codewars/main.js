/*Sum of all arguments*/

function sum() {
  let suma = 0;
  for(let i in arguments){
    suma += arguments[i];
  }
  return suma;
}

/*First-Class Function Factory*/

function factory(x) {
  return arr1 => arr1.map( a => a * x );
}

/* Calculating with functions*/

function zero(cb) {return cb ? cb(0) : 0}

function one(cb) {return cb ? cb(1) : 1}

function two(cb) {return cb ? cb(2) : 2}

function three(cb) {return cb ? cb(3) : 3}

function four(cb) {return cb ? cb(4) : 4}

function five(cb) {return cb ? cb(5) : 5}

function six(cb) {return cb ? cb(6) : 6}

function seven(cb) {return cb ? cb(7) : 7}

function eight(cb) {return cb ? cb(8) : 8}

function nine(cb) {return cb ? cb(9) : 9}

function plus(n) {return m => m + n;}
function minus(n) {return m => m - n;}
function times(n) {return m => m * n;}
function dividedBy(n) {return m => Math.floor(m / n);}