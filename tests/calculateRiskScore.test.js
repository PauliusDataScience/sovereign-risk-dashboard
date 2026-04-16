const {
  calculateRiskScore,
  getInflationRiskScore,
  getInterestRateRiskScore,
  getDebtToGdpRiskScore,
} = require("../src/js/risk/calculateRiskScore");

test("assigns low inflation risk score", () => {
  expect(getInflationRiskScore(2)).toBe(1);
});

test("assigns medium inflation risk score", () => {
  expect(getInflationRiskScore(4)).toBe(2);
});

test("assigns high inflation risk score", () => {
  expect(getInflationRiskScore(8)).toBe(3);
});

test("assigns low debt-to-GDP risk score", () => {
  expect(getDebtToGdpRiskScore(50)).toBe(1);
});

test("assigns high debt-to-GDP risk score", () => {
  expect(getDebtToGdpRiskScore(120)).toBe(3);
});

test("calculates weighted sovereign risk score", () => {
  expect(calculateRiskScore(4, 3, 80)).toBeCloseTo(2.0);
});