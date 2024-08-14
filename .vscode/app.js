const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = "3e249665f1fd28575b7c16a1934a3999";

async function weather_fn(cName) {
    const temp = `${url}?q = ${cName}&appid = ${apiKey}& units=metric`;
    // to catch any errors and will bo logged in the console
    try { 
        // to send a get req to the API and await ensures execution is paused until promise returned by fetch is resolved or rejected
        const request=new Request(temp)
        const response = await fetch(request);
        const data = await response.json();
        if (response.ok) {weatherShowFn(data) }
        else {
            alert('City not found.Please try again!')
         }
}
    catch (error) { console.error('An error occurred when fetching weather data', error) }  
    
}
//  a function to display the weather data on the webpage
let weatherShowFn = (data) => {
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    $("#temperature").html(`${data.main.temp}°C`);
    $('#description').text(data.weather[0].description)
    $('#windspeed').html('Wind Speed:${data.wind.speed}m/s')
    $('#weather_icon').attr('src', `...`)
    $('#weather_info').fadeIn()
}
