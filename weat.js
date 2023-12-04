
// // const button = document.getElementById('getloc')

// // async function getData(lat, long){
// //     const promise=await fetch(
// //         `http://api.weatherapi.com/v1/current.json?key=967b79616f4148bf973180351230312&q=${lat},${long}&aqi=yes`
// //     )
// // }
// // async function gotLocation(position){
// // const result = await getData(position.coords.latitude, position.coords.longitude);
// // console.log(result);

// // }

// // function failedToGet(){
// //     console.log('there was some issue');
// // }

// // button.addEventListener('click', async () =>{
// //     navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)
// // });




const button = document.getElementById('getloc');

async function getData(lat, long) {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=967b79616f4148bf973180351230312&q=${lat},${long}&aqi=yes`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        data = await response.json();
        data=data.current.temp_c
        result.innerHTML=`
        <h5 class="a8">Present atmospheric conditions at your current locale is ${data}°C</h5>
        ` // Return the data from the API

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to handle it outside this function
    }
}

async function gotLocation(position) {
    try {
        result = await getData(position.coords.latitude, position.coords.longitude);
        result=result.current.temp_c
        result.innerHTML=`
        <h5 class="a8">Temperature is ${result}</h5>
        `

    } catch (error) {
        console.error('Error getting location:', error);
        // Handle the error as needed
    }
}

function failedToGet() {
    console.log('There was some issue');
}

button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});



