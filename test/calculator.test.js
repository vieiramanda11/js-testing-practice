import calculator from '../src/calculator';

test('adds 1 + 5 and returns 6', () => {
  const result = calculator.add(1,5);
  expect(result).toBe(6)
});

test('subtracts 9 - 3 and returns 6', () => {
  const result = calculator.subtract(9,3);
  expect(result).toBe(6);
});

test('multiplies 2 * 4 and returns 8', () => {
  const result = calculator.multiply(2,4);
  expect(result).toBe(8)
});

test('divide 9 / 3 and returns 3', () => {
  const result = calculator.divide(9,3);
  expect(result).toBe(3)
});

test('throwing an error when the user want to divided by zero', () => {
  const result = () => {
    calculator.divide(5,0);
  } 
  expect(result).toThrow('You cannot divide by zero');
});
