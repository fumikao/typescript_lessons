interface GameUser {
  score: number;
  showScore(): void;
}

class User implements GameUser {
  name: string;
  score: number = 0;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): void {
    console.log("hi! i am " + this.name);
  }
  showScore(): void {
    console.log("score:" + this.score);
  }
}