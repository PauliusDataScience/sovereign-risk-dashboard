const classifyRisk = require("../src/js/risk/classifyRisk");

test("classifies low risk correctly", () => {
  expect(classifyRisk(1.4)).toBe("Low Risk");
});

test("classifies medium risk correctly", () => {
  expect(classifyRisk(2.0)).toBe("Medium Risk");
});

test("classifies high risk correctly", () => {
  expect(classifyRisk(2.7)).toBe("High Risk");
});