const { doBinaryAddition } = require('../binary-addition');

describe('doBinaryAddition(binary1, binary2)', () => {
  it('should return binary 1 when binary 2 is not defined', () => {
    const binary1 = '01';
    expect(doBinaryAddition(binary1, undefined)).toBe(binary1);
  });

  it('should return binary 2 when binary 1 is not defined', () => {
    const binary2 = '01';
    expect(doBinaryAddition(binary2, undefined)).toBe(binary2);
  });

  test.each([
    ['0', '0', '0'],
    ['00', '01', '01'],
    ['01', '01', '10'],
    ['1', '1', '10'],
    ['1', '0', '1'],
    ['0', '1', '1'],
    ['10', '01', '11'],
    ['11', '01', '100'],
    ['10', '10', '100'],
    ['111', '111', '1110'],
    ['1010', '0011', '1101'],
    ['10101010', '11001100', '101110110']
  ])(
    'should add "%s" + "%s" amd return "%s"',
    (binary1, binary2, expected) => {
      const result = doBinaryAddition(binary1, binary2);
      expect(result).toBe(expected);
    }
  );
});
