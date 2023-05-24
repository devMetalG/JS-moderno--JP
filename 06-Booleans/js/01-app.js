const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);
console.log(boolean3);


// typeof con parentesis
console.log(typeof(boolean1));
// typeof sin parentesis
console.log(typeof boolean2);

// boolean con string no es igual 
console.log(boolean1 == boolean3);

const boolean4 = new Boolean(true);
console.log(boolean4);
console.log(typeof boolean4);