// function searchLocation(){
//     currentLocation();    
// }

// function currentLocation() {
//     navigator.geolocation.getCurrentPosition(success => {
//         lat = success.coords.latitude;
//         lon = success.coords.longitude;
//         fetchWeatherData(lat,lon);
//     });
// }

// function fetchWeatherData(lat, lon) {
//     try {
//         const apiKey = '5b4bee0ba241d092159faf007e166080';
//         // const apiUrl = 
        
//         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(dataArray => result(dataArray))
//             .catch(error => console.error('Error fetching weather data:', error));
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// const button = document.getElementById('getloc');
const resultEleme = document.getElementById('result4'); // Rename the variable
const resultElement = document.getElementById('result6');
const resultElemen = document.getElementById('result3');

function searchLocation() {
    currentLocation();
}

function currentLocation() {
    navigator.geolocation.getCurrentPosition(success => {
        const lat = success.coords.latitude;
        const lon = success.coords.longitude;
        fetchWeatherData(lat, lon);
    });
}

function fetchWeatherData(lat, lon) {
    try {
        const apiKey = '5b4bee0ba241d092159faf007e166080';
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
            .then(response => response.json())
            .then(dataArray => result(dataArray))
            .catch(error => console.error('Error fetching weather data:', error));
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function result(dataArray) {
    try {
        // Check if the response contains the expected properties
        if (dataArray && dataArray.main && dataArray.main.temp) {
            temperature = dataArray.main.temp;
            temperature -= 273.15;
            temperature = temperature.toFixed(2);
            resultEleme.innerHTML =`<div class="e1">
            <h1> Temperature <img class="i1" src="./images/temp.png" alt=""></h1>
            <p class="k1">${temperature}°C</p>
        </div>`;

        if (dataArray && dataArray.main && dataArray.main.temp) {
            hum=dataArray.main.humidity;
            resultElement.innerHTML = `<div class="e1">
            <h1> Humidity <img class="i2" src="./images/humid.png" alt=""></h1>
            <p class="k1">${hum}%rh</p>
        </div>`;
        }


        if (dataArray && dataArray.main && dataArray.main.temp){
            weat = dataArray.weather[0].main.toLowerCase();
        resultElemen.innerHTML = `<div class="e2">
        <h1> Weather
            ${
                weat === "rain"
                    ? '<img class="i3" src="./images/rain.png" alt="">'
                    : weat === "mist"
                        ? '<img class="i4" src="./images/mist.png" alt="">'
                        : weat === "rain"
                            ? '<img class="i6" src="./images/rain.png" alt="">'
                            : weat === "clouds"
                                ? '<img class="i7" src="./images/clouds.png" alt="">'
                                : '<img class="i5" src="./images/clear.png" alt="">'
            }
        </h1>
        <p class="k1">${weat}</p>
    </div>`;
        }
            // console.log('Temperature:', temperature);
            // Perform any other actions with the data
        } else {
            console.error('Invalid data format in the response:', dataArray);
        }
    } catch (error) {
        console.error('Error processing weather data:', error);
    }
}
