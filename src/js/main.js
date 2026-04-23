const countryData = {
  UK: {
    name: "United Kingdom",
    inflation: 5.7,
    interestRate: 3.0,
    debtToGdp: 80,
    inflationHistory: [2.2, 2.8, 4.0, 5.2, 6.3, 5.7],
  },
  US: {
    name: "United States",
    inflation: 6.2,
    interestRate: 5.0,
    debtToGdp: 110,
    inflationHistory: [1.9, 3.0, 3.5, 4.6, 5.4, 6.2],
  },
  DE: {
    name: "Germany",
    inflation: 3.1,
    interestRate: 2.5,
    debtToGdp: 65,
    inflationHistory: [1.5, 2.2, 2.0, 2.5, 2.8, 3.1],
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
  const loadingMessage = document.getElementById("loading-message");
  const errorMessage = document.getElementById("error-message");
  const countrySelect = document.getElementById("country-select");
  const selectedCountryDisplay = document.getElementById("selected-country-display");
  const inflationValue = document.getElementById("inflation-value");
  const interestRateValue = document.getElementById("interest-rate-value");
  const debtToGdpValue = document.getElementById("debt-to-gdp-value");
  const riskScoreValue = document.getElementById("risk-score-value");
  const riskLevelValue = document.getElementById("risk-level-value");
  const chartCanvas = document.getElementById("inflation-chart");

  let inflationChart;

  function updateDashboard() {
  loadingMessage.hidden = false;
  errorMessage.hidden = true;

  try {
    const selectedCountry = countrySelect.value;
    const data = countryData[selectedCountry];

    if (!data) {
      throw new Error("No data found for selected country");
    }

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

    updateChart(data);
  } catch (error) {
    errorMessage.hidden = false;
    console.error(error);
  } finally {
    loadingMessage.hidden = true;
  }
}

  function updateChart(data) {
    const labels = ["2021", "2022", "2023", "2024", "2025", "2026"];

    if (inflationChart) {
      inflationChart.destroy();
    }

    inflationChart = new Chart(chartCanvas, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: data.name + " Inflation (%)",
            data: data.inflationHistory,
            borderWidth: 2,
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
    });
  }

  countrySelect.addEventListener("change", updateDashboard);

  updateDashboard();
});