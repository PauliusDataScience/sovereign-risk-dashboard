function classifyRisk(score) {
  if (score < 1.7) return "Low Risk";
  if (score <= 2.3) return "Medium Risk";
  return "High Risk";
}

module.exports = classifyRisk;