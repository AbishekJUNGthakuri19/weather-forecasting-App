const apikey="d4ce8872e9d1cccf57d74f8d7d889c2d";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
        // console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="weather image/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="weather image/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="weather image/rain.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="weather image/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="weather image/mist.png"
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none"; // hide the message when the weather is forecasting.
    }
   
    
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
