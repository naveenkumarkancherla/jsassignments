class Employee {
    constructor(id, name, doj, salary) {
      this.id = id;
      this.name = name;
      this.doj = doj;
      this.salary = salary;
    }
  }
  
  class Manager extends Employee {
    constructor(id, name, doj, salary, department) {
      super(id, name, doj, salary); //extends from parent class
      this.department = department;
    }
  }
  
  let employee1 = new Employee(1, "naveen chowdary", "2023-07-12", 500000);
  console.log(employee1);
 
  let manager1 = new Manager(2, "naveen naidu", "2020-07-12", 700000, "Management");
  console.log(manager1);
  