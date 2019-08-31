/*
function getStringArray(value: string): string[] {
  return [value, value, value];
}
function getNumberArray(value: number): number[] {
  return [value, value, value];
}
*/
function getArray(value) {
    return [value, value, value];
}
console.log(getArray(3));
console.log(getArray("hello"));
var MyData = /** @class */ (function () {
    function MyData(value) {
        this.value = value;
    }
    MyData.prototype.getArray = function () {
        return [this.value, this.value, this.value];
    };
    return MyData;
}());
/*
var v1 = new MyData<string>("hi!");
var v2 = new MyData<number>(234);
console.log(v1.getArray());
console.log(v2.getArray());
*/
var v3 = new MyData({ a: 32, b: 16 });
console.log(v3.getArray());
var v4 = new MyData({ a: 32, b: 16, c: "hello" });
console.log(v4.getArray());
