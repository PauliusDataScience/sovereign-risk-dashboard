document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("country-select");
  const selectedCountryDisplay = document.getElementById(
    "selected-country-display"
  );

  function updateSelectedCountry() {
    const selectedCountryName =
      countrySelect.options[countrySelect.selectedIndex].text;
    selectedCountryDisplay.textContent =
      `Showing data for: ${selectedCountryName}`;
  }

  countrySelect.addEventListener("change", updateSelectedCountry);

  updateSelectedCountry();
});