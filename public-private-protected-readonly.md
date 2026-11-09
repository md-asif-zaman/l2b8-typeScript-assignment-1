# Access Modifiers in TypeScript OOP

## 1. Public

- `public` is the default access modifier in a class.
- By default, all properties and methods are public. If we do not write `public`, TypeScript automatically treats them as public.
- We can access public properties and methods from inside and outside the class.
- We can change public properties from outside the class.

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

- Private properties and methods are only accessible within the same class.
- Private properties are not accessible from outside the class.
- We cannot change private properties from outside the class or from child classes.
- Child classes cannot access their parent class's private properties.
- We can access private properties using getter and setter methods.

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
```

---

## 3. Protected

- Protected properties and methods are only accessible within their own class and child classes.
- Only child classes can access inherited protected properties.
- Protected properties are not accessible from outside the parent and child classes.

### Example:

```ts
class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}
}

class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people`;
  }

  describeManager(): string {
    return `${this.name} earns ${this._baseSalary} people`;
  }
}

const manager = new Manager("Mizan", 40000, 30);
```

---

## 4. Readonly

- `readonly` prevents a property from being reassigned after initialization.
- A value can be assigned inside the constructor.
- A value can be assigned when declaring the property.
- The property cannot be reassigned from outside the class after initialization.

### Example:

```ts
class Employee {
  name: string;
  readonly baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee1 = new Employee("Mir", 2000);

console.log(employee1.baseSalary);
```
