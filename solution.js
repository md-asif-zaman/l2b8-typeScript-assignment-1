//* Problem 1
const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};
// console.log(multiplyValue(7, 0));
//* Problem 2
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value === true) {
            return "Active";
        }
        return "Inactive";
    }
};
// console.log(processInput(true));
//* Problem 3
const formatCoordinate = (arr) => {
    return `Location: ${arr[2]} (${arr[0]}, ${arr[1]})`;
};
// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
//* Problem 4
const concatenateArrays = (...array) => {
    const ar = [];
    for (const arr of array) {
        for (const a of arr) {
            ar.push(a);
        }
    }
    return ar;
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished === true && course.students >= minStudents);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
// console.log(getPopularCourses(courses, 80));
//* Problem 6
const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
// console.log(pluckValues(users, "name"));
//* Problem 7
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());
//* Problem 8
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
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
export {};
