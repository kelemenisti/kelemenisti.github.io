import { filterMinors, Person } from './utils';

export {};
describe('utils.ts', () => {
  it('filters out the person a', () => {
    const persons = [
      { name: 'a', age: 10 },
      { name: 'b', age: 30 }
    ];
    const result = filterMinors(persons);
    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual('b');
  });

  it('returns empty list', () => {
    const persons: Person[] = [];
    const result = filterMinors(persons);
    expect(result.length).toEqual(0);
  });

  it('throws an error on null person list', () => {
    const persons: any = null;
    expect(() => {
      filterMinors(persons);
    }).toThrowError("person list doesn't have a value");
  });
});
