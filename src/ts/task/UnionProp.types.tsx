// Task 2 — Union Types

// Create a function printId that accepts a parameter that can be either a number or a string.

// Inside the function, treat each type differently.
// (For example: if it’s a number, do one thing; if it’s a string, do something else.)

export type UnionProps = {
  types: string | number;
};
