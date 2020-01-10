const arrayAnalysis = array => ({
  average: array.reduce((accumulator, current) => accumulator + current) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});

export default arrayAnalysis;
