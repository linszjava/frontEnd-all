var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello ".concat(this.name, ", you are ").concat(this.age, " years old"));
    };
    return Person;
}());
// new Person('John', 30).greet()
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.greet = function () {
        _super.prototype.greet.call(this);
        console.log("Your salary is ".concat(this.salary));
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    return Employee;
}(Person));
// new Employee('John', 30, 1000).greet()
var emp = new Employee('John', 30, 1000);
console.log(emp.getSalary());
emp.setSalary(3000);
console.log(emp);
var NumUtil = /** @class */ (function () {
    function NumUtil() {
    }
    NumUtil.add = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (a, b) { return a + b; }, 0);
    };
    NumUtil.PI = 3.14;
    return NumUtil;
}());
console.log(NumUtil.add(3, 5));
console.log(NumUtil.PI);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming the earth...');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('woof woof');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.makeSound();
dog.move();
