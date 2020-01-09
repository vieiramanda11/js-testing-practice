const reverseString = (string) => {
    if(typeof string !== 'string') throw new Error('A String is expected');
    return string.split('').reverse().join('');
};
export default reverseString;