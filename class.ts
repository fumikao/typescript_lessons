class User {
  /*
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  */
  constructor(protected _name: string) {    
  }
  sayHi(): void {
    console.log("hi! i am " + this._name);
  }
  get name() {
    return this._name;
  }
  set name(newValue: string) {
    this._name = newValue;
  }
}

var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
tom.sayHi();


class AdminUser extends User {
  private _age: number;
  constructor(_name: string, _age: number) {
    super(_name);
    this._age = _age;
  }
  public sayHi(): void {
    console.log("my age:" + this._age);
    console.log("my name:" + this._name);
    super.sayHi();
  }
}

var bob = new AdminUser("Bob", 23);
bob.sayHi();