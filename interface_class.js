var User = /** @class */ (function () {
    function User(name) {
        this.score = 0;
        this.name = name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    User.prototype.showScore = function () {
        console.log("score:" + this.score);
    };
    return User;
}());
