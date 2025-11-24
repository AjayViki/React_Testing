// Object Types

// Create a TypeScript object type for a Book that must include:

// a title (string)

// a year (number)

// an optional author (string)
// Then create a variable that uses that type.

export type ObjProps = {
  title: string;
  year: number;
  author?: string;
};
