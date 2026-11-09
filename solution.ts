//* Problem 1

const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
};

// console.log(multiplyValue(7, 0));

//* Problem 2

const processInput = (value: number | string | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value === true) {
      return "Active";
    }
    return "Inactive";
  }
};

// console.log(processInput(true));

//* Problem 3

const formatCoordinate = (arr: readonly [number, number, string]): string => {
  return `Location: ${arr[2]} (${arr[0]}, ${arr[1]})`;
};

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

//* Problem 4

const concatenateArrays = <T>(...array: T[][]): T[] => {
  const ar: T[] = [];

  for (const arr of array) {
    for (const a of arr) {
      ar.push(a);
    }
  }
  return ar;
};
// console.log(concatenateArrays<number>([1, 2], [3, 4], [5]));

//* Problem 5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course: Course) =>
      course.isPublished === true && course.students >= minStudents,
  );
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

// console.log(getPopularCourses(courses, 80));

//* Problem 6

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item: T) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// console.log(pluckValues(users, "name"));

//* Problem 7

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());

//* Problem 8
const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};

validateAgeAsync(20)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
