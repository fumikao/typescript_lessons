class User {
  name: string;
  constructor(name: string) {
    this.name = name;
    User.count++;
  }
  sayHi(): void {
    console.log("hi! i am " + this.name);
  }
  static count: number = 0;
  static showDescription(): void {
    console.log("this class is about users."); 
  }
}

var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);
User.showDescription();