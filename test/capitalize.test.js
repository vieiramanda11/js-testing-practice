import capitalize from '../src/capitalize';

test('returns a string with the first letter capitalized', () => {
  expect(capitalize('capitalize this phrase')).toBe('Capitalize this phrase')
});