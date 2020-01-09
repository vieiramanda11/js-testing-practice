import caesarCipher from '../src/caesarCipher'

test('wrapping from z to a', () => {
    const result = caesarCipher.encrypt('zzz',1);
    expect(result).toBe('aaa');
});

test('keeping the same case', ()=> {
    const result = caesarCipher.encrypt('MmMm',2);
    expect(result).toBe('OoOo');
});
test('testing punctuation', ()=>{
    const result = caesarCipher.encrypt(',-/', 2);
    expect(result).toBe('./1');
});
test('encrypting a sentence', ()=>{
    const result = caesarCipher.encrypt('attack at dawn', 5);
    expect(result).toBe('fyyfhp?fy?ifbs');
});