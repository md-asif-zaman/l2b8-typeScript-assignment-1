# Access Modifiers in TypeScript OOP

Access modifiers control the visibility and accessibility of class properties and methods in TypeScript.

TypeScript provides the following access modifiers:

1. `public`
2. `private`
3. `protected`
4. `readonly`

---

## 1. Public

- `public` is the default access modifier in TypeScript classes.
- If we do not specify an access modifier, TypeScript automatically treats the property or method as `public`.
- Public properties and methods can be accessed from inside the class and outside the class.
- We can also modify public properties from outside the class.

### Example:

```ts
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const dog = new Animal("Dog");

dog.name = "Cat";

console.log(dog.name); // Cat
```

---

## 2. Private

- `private` properties and methods can only be accessed within the same class.
- Private properties cannot be accessed directly from outside the class.
- Child classes cannot access private properties or methods of their parent class.
- We cannot directly modify private properties from outside the class.
- We can use getter and setter methods to access and modify private properties in a controlled way.

### Example:

```ts
class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    this._baseSalary = newSalary;
  }
}

const employee1 = new Employee("Mir", 2000);

employee1.baseSalary = 3000;

console.log(employee1.baseSalary); // 3000
```

**Note:** Getter and setter methods provide controlled access to private
