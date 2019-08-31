/*
function getStringArray(value: string): string[] {
  return [value, value, value];
}
function getNumberArray(value: number): number[] {
  return [value, value, value];
}
*/

function getArray<T>(value: T): T[] {
  return [value, value, value];
}

console.log(getArray<number>(3))
console.log(getArray<string>("hello"))


interface Result {
  a: number;
  b: number;
}

interface FinalResult {
  a: number;
  b: number;
  c: string;
}

class MyData<T extends Result> {
  constructor(public value: T) {}
  getArray(): T[] {
    return [this.value, this.value, this.value];
  }
}

/*
var v1 = new MyData<string>("hi!");
var v2 = new MyData<number>(234);
console.log(v1.getArray());
console.log(v2.getArray());
*/

var v3 = new MyData<Result>({a: 32, b: 16});
console.log(v3.getArray());

var v4 = new MyData<FinalResult>({a: 32, b: 16, c: "hello"});
console.log(v4.getArray());