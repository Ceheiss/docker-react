import { generateNumber } from './Adder';
import { numberAdder } from './Adder';

it('should return a value of type number', () => {
  const result = generateNumber();
  expect(typeof result).toBe('number');
});

it('should add two numbers', () => {
  const result = numberAdder(2, 3);
  expect(result).toBe(5);
});
