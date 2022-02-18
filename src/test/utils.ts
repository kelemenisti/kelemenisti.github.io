export interface Person {
  name: string;
  age: number;
}

function filterMinors(persons: Person[]): Person[] {
  if (!persons) {
    throw Error("person list doesn't have a value");
  }
  return persons.filter((p) => p.age > 18);
}

export { filterMinors };
