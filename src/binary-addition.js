const BINARY_BASE = 2;
function doBinaryAddition(binary1, binary2) {
  if (!binary1) return binary2;
  if (!binary2) return binary1;

  if (binary1.length !== binary2.length) {
    throw new Error('Length mismatch');
  }

  // addition
  const { length } = binary1;
  let result = '';

  let carry = 0;

  for (let i = length - 1; i >= 0; i -= 1) {
    const sum =
      Number.parseInt(binary1[i]) +
      Number.parseInt(binary2[i]) +
      carry;

    const dividend = Math.floor(sum % BINARY_BASE);
    carry = Math.floor(sum / BINARY_BASE);
    result = dividend + result;
  }

  if (carry) result = carry + result;

  return result;
}

module.exports = { doBinaryAddition };
