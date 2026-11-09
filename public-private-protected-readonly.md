# TypeScript Questions & Answers

# Question 1: What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

## Answer:

Both type alias and interface are used to make type and both are almost similar but both has some difference.

We use **interface** when we need type of object and use **type alias** when need unions, intersections, tuples, primitives etc.

## Difference:

### 1. Declaration Merging

We can make more than one interface in same name and TypeScript merge all of the same name interface and merge then to one interface. But in type alias if we do it TypeScript

**Example:**

**Interface:**

```ts
interface IAddress {
  street: string;
  holding: number;
}

interface IAddress {
  streetNo: number;
}
```

**Type Alias:**

```ts
type TAddress = {
  street: string;
  holding: number;
};

// Show Error
type TAddress = {
  streetNo: number;
};
```

### 2. Primitive Types

We can just make interface for object only but using type alias we can make normal type like string, number.

**Example:**

**Type Alias:**

```ts
type TName = string;
```

**Interface:**

```ts
interface IUser {
  name: string;
}
```

### 3. Union
