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

import addr = UserModule.AddressModule;
console.log(addr.zip);