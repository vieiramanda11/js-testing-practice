import arrayAnalysis from '../src/arrayAnalysis';

test('returns average, minimun, maximum and length of numbers in an array', () => {
  const result = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual(result);
});
