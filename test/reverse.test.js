import reverseString from '../src/reverseString';

test('throwing an error when the parameter is not a string', () => {
  const noStringCase = () => {
    reverseString(7);
  };
  expect(noStringCase).toThrow('A String is expected');
});

test('Reversing a string', () => {
  const result = reverseString('jest');
  expect(result).toBe('tsej');
});