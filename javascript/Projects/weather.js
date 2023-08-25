async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.cod === '404') {
        document.getElementById('weatherInfo').textContent = 'City not found';
      } else {
        const weatherInfo = `City: ${data.name}, Temperature: ${data.main.temp}°C, Description: ${data.weather[0].description}`;
        document.getElementById('weatherInfo').textContent = weatherInfo;
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  