async function getWeather(){

    const city = document.getElementById("city").value;

    const apiKey = "16752f24850c30bd2ccf7cc035e23a01";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await axios.get(url);

        const data = response.data;

        document.getElementById("result").innerHTML = `

        <div class="weather-output">

            <h2>${data.name}</h2>

            <div class="big-temp">
                ${Math.round(data.main.temp)}°C
            </div>

            <p>${data.weather[0].main}</p>

            <div class="extra-info">

                <div class="info-card">
                    <h4>Humidity</h4>
                    <p>${data.main.humidity}%</p>
                </div>

                <div class="info-card">
                    <h4>Wind Speed</h4>
                    <p>${data.wind.speed} m/s</p>
                </div>

                <div class="info-card">
                    <h4>Visibility</h4>
                    <p>${data.visibility / 1000} km</p>
                </div>

                <div class="info-card">
                    <h4>Pressure</h4>
                    <p>${data.main.pressure} hPa</p>
                </div>

            </div>

        </div>

        `;

    } catch(error){

        document.getElementById("result").innerHTML = `
        <p style="color:#ff9b9b; margin-top:20px;">
            Unable to fetch weather data
        </p>
        `;
    }
}
