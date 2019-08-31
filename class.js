var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    /*
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    */
    function User(_name) {
        this._name = _name;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
tom.sayHi();
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(_name, _age) {
        var _this = _super.call(this, _name) || this;
        _this._age = _age;
        return _this;
    }
    AdminUser.prototype.sayHi = function () {
        console.log("my age:" + this._age);
        console.log("my name:" + this._name);
        _super.prototype.sayHi.call(this);
    };
    return AdminUser;
}(User));
var bob = new AdminUser("Bob", 23);
bob.sayHi();
