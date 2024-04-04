

async function fetchData(location) {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e814600edc1148ee9cc160506242803&q=${location}&aqi=no`);
    const data = await response.json();
    const locationName = data.location.name;
    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;
    const weatherImage = data.current.condition.icon;

      const imgElement = document.getElementById("weatherImage");
      const locationElement = document.getElementById("location");
      const temperatureElement = document.getElementById("temperature");
      const conditionElement = document.getElementById("condition");

          locationElement.textContent = `Location: ${locationName}`;
          temperatureElement.textContent = `Temperature: ${temperature}°C`;
          conditionElement.textContent = `Condition: ${condition}`;
  } catch (error) {
    console.error(error);
  }
}
  document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector("button");
      submitButton.addEventListener("click", () => {
        fetchData(document.getElementById("weatherList").value.toLowerCase());
  });
});
