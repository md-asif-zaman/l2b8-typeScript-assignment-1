# Type Alias vs Interface in TypeScript

**Question:** What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

**Answer:** Both type alias and interface are used to make type and both are almost similar but both has some difference.

We use interface when we need type of object and use type alias when need unions, intersettions, tuples, primitives etc.

## Difference:

### 1. Declaration Merging

We can make more than one interface in same name and typescript merge all of the same name interface and merge then to one interface. But in type alias if we do it typescript

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

### 2. Object Type vs Primitive Type

We can just make interface for object only but using type alias we can make normal type like string, number

**Example:**

```ts
type TName = string;

interface IUser {
  name: string;
}
```

### 3. Union Types

We can make union using type aliash but we can not do it using interface

**Example:**

```ts
type TID = string | number;

interface IId {
  Id: number;
}
```
