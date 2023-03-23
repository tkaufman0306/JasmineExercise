

describe('output format tests', function () {
it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00')
});
})

describe('calculations tests', function() {
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});

it('should calculate our home loan payment accurately', function () {
  const values = {
    amount: 380000,
    years: 30,
    rate: 3.625
  };
  expect(calculateMonthlyPayment(values)).toEqual('1732.99')
})

it('should handle terribly high interest rates', function () {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});
})