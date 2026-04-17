const countryData = {
  UK: {
    name: "United Kingdom",
    inflation: 4.0,
    interestRate: 3.0,
    debtToGdp: 80,
  },
  US: {
    name: "United States",
    inflation: 3.5,
    interestRate: 5.0,
    debtToGdp: 110,
  },
  DE: {
    name: "Germany",
    inflation: 2.0,
    interestRate: 2.5,
    debtToGdp: 65,
  },
};

function calculateRiskScore(inflation, interestRate, debtToGdp) {
  let inflationScore = 1;
  let interestRateScore = 1;
  let debtScore = 1;

  if (inflation > 6) {
    inflationScore = 3;
  } else if (inflation > 3) {
    inflationScore = 2;
  }

  if (interestRate > 5) {
    interestRateScore = 3;
  } else if (interestRate > 2) {
    interestRateScore = 2;
  }

  if (debtToGdp > 100) {
    debtScore = 3;
  } else if (debtToGdp > 60) {
    debtScore = 2;
  }

  return inflationScore * 0.3 + interestRateScore * 0.2 + debtScore * 0.5;
}

function classifyRisk(score) {
  if (score < 1.7) {
    return "Low Risk";
  } else if (score <= 2.3) {
    return "Medium Risk";
  } else {
    return "High Risk";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const countrySelect = document.getElementById("country-select");
  const selectedCountryDisplay = document.getElementById("selected-country-display");
  const inflationValue = document.getElementById("inflation-value");
  const interestRateValue = document.getElementById("interest-rate-value");
  const debtToGdpValue = document.getElementById("debt-to-gdp-value");
  const riskScoreValue = document.getElementById("risk-score-value");
  const riskLevelValue = document.getElementById("risk-level-value");

  function updateDashboard() {
    const selectedCountry = countrySelect.value;
    const data = countryData[selectedCountry];

    selectedCountryDisplay.textContent = "Showing data for: " + data.name;
    inflationValue.textContent = data.inflation + "%";
    interestRateValue.textContent = data.interestRate + "%";
    debtToGdpValue.textContent = data.debtToGdp + "%";

    const score = calculateRiskScore(
      data.inflation,
      data.interestRate,
      data.debtToGdp
    );

    riskScoreValue.textContent = score.toFixed(1);
    riskLevelValue.textContent = classifyRisk(score);
  }

  countrySelect.addEventListener("change", updateDashboard);

  updateDashboard();
});