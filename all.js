var UserModule;
(function (UserModule) {
    UserModule.name = "fumika";
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-1111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
/*
module UserModule {
  export var name = "fumika";
  export module AddressModule {
    export var zip = "111-1111";
  }
}
*/
/// <reference path="./module2.ts" />
console.log(UserModule.name);
console.log(UserModule.AddressModule.zip);
var addr = UserModule.AddressModule;
console.log(addr.zip);
