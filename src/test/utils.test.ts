import { filterMinors, Person } from './utils';
import { act, renderHook } from '@testing-library/react-hooks';
import { useNumberGenerator } from '../hooks/Hooks';

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

  test('should increment counter', () => {
    const { result } = renderHook(() => useNumberGenerator());

    act(() => {
      result.current.number;
    });

    expect(result.current.number).toBe(1);
  });
});
