function getInflationRiskScore(inflation) {
  if (inflation <= 3) return 1;
  if (inflation <= 6) return 2;
  return 3;
}

function getInterestRateRiskScore(interestRate) {
  if (interestRate <= 2) return 1;
  if (interestRate <= 5) return 2;
  return 3;
}

function getDebtToGdpRiskScore(debtToGdp) {
  if (debtToGdp <= 60) return 1;
  if (debtToGdp <= 100) return 2;
  return 3;
}

function calculateRiskScore(inflation, interestRate, debtToGdp) {
  const inflationScore = getInflationRiskScore(inflation);
  const interestRateScore = getInterestRateRiskScore(interestRate);
  const debtScore = getDebtToGdpRiskScore(debtToGdp);

  return (
    inflationScore * 0.3 +
    interestRateScore * 0.2 +
    debtScore * 0.5
  );
}

module.exports = {
  calculateRiskScore,
  getInflationRiskScore,
  getInterestRateRiskScore,
  getDebtToGdpRiskScore,
};