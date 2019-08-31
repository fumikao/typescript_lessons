var Signal;
(function (Signal) {
    Signal[Signal["Red"] = 0] = "Red";
    Signal[Signal["Blue"] = 1] = "Blue";
    Signal[Signal["Yellow"] = 2] = "Yellow";
})(Signal || (Signal = {}));
var result;
// if (result == Signal.Yellow) { ... }
// if (result == Signal['Yellow']) { ... }
console.log(Signal[2]);
// ----------------------
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
// console.log(add(5, "hello")) コンパイル時にエラー
// ---------------------
var add2 = function (a, b) { return a + b; };
console.log(add(5, 3));
function add3(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return a + b;
}
console.log(add3(5, 3));
console.log(add3("hello", "world"));
