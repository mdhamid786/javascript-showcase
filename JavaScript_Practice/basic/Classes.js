// ======================== Classes and Inheritance ========================
// Classes in JS are syntactic sugar over prototype-based inheritance (ES6+ feature)

// 1. Basic Class
class Person { // class keyword
  constructor(name, age) { // constructor for initializing objects
    this.name = name
    this.age = age
  }
  greet() { // method
    return `Hello, my name is ${this.name}`
  }
}
const alice = new Person("Alice", 25)
console.log(alice.greet()) // Hello, my name is Alice

// 2. Class Inheritance
class Student extends Person { // extends keyword for inheritance
  constructor(name, age, grade) { // child constructor
    super(name, age) // super() calls parent constructor
    this.grade = grade
  }
  study() { // new method in child
    return `${this.name} is studying in grade ${this.grade}`
  }
}
const bob = new Student("Bob", 20, "10th")
console.log(bob.greet()) // inherited method: Hello, my name is Bob
console.log(bob.study()) // Bob is studying in grade 10th

// 3. Static Methods and Properties
class Utils {
  static sum(a, b) { // static method belongs to class, not instance
    return a + b
  }
}
console.log(Utils.sum(5, 10)) // 15

// 4. Getters and Setters
class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  get area() { return this.width * this.height } // getter
  set updateWidth(w) { this.width = w } // setter
}
const rect = new Rectangle(5, 10)
console.log(rect.area) // 50
rect.updateWidth = 20
console.log(rect.area) // 200

// 5. Private Fields (ES2020+)
class BankAccount {
  #balance = 0 // private field
  deposit(amount) { this.#balance += amount }
  getBalance() { return this.#balance }
}
const account = new BankAccount()
account.deposit(100)
console.log(account.getBalance()) // 100
// console.log(account.#balance) // ❌ Error: private field

// ======================== Interview Points ========================
// - Classes = syntactic sugar over prototypes
// - constructor() initializes instance properties
// - extends + super() for inheritance
// - Methods defined in class are on prototype (memory efficient)
// - Static methods/properties belong to class, not instance
// - Getters/setters allow controlled access to properties
// - Private fields (#) for true encapsulation
// - Supports polymorphism, inheritance, and code reuse
// - Always mention prototype-based inheritance under the hood in interviews

// ======================== Practical Example ========================
class Vehicle {
  constructor(brand) { this.brand = brand }
  info() { return `Vehicle brand: ${this.brand}` }
}
class Car extends Vehicle {
  constructor(brand, model) { super(brand); this.model = model }
  info() { return `${super.info()}, Model: ${this.model}` } // method overriding
}
const car = new Car("Toyota", "Corolla")
console.log(car.info()) // Vehicle brand: Toyota, Model: Corolla
