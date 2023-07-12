class Monkey {
    constructor(name) {
      this.name = name;
    }
  
    run() {
      console.log(this.name + " is running.");
    }
  
    shout() {
      console.log(this.name + " is shouting.");
    }
  
    eatBananas() {
      console.log(this.name + " is eating bananas.");
    }
  }
// creation of an objects here
  let monkey1 = new Monkey("Chimpoo");
  let monkey2 = new Monkey("Muchukothi");
// calling of an objects here
  monkey1.run(); 
  monkey1.shout(); 
  monkey1.eatBananas();
  
  monkey2.run();
  monkey2.shout();
  monkey2.eatBananas();
  