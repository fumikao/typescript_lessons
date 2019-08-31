enum Signal {
  Red = 0,
  Blue = 1,
  Yellow = 2
}

var result: Signal;
// if (result == Signal.Yellow) { ... }
// if (result == Signal['Yellow']) { ... }

console.log(Signal[2]);

// ----------------------

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3))
// console.log(add(5, "hello")) コンパイル時にエラー

// ---------------------

var add2 = (a: number, b: number): number => a + b;
console.log(add(5, 3))

// --------------------

function add3(a: number, b: number): number;
function add3(a: string, b:string): string;

function add3(a: any, b: any) {
  if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
  return a + b;
}

console.log(add3(5, 3));
console.log(add3("hello", "world"));