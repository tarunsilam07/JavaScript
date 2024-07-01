const apikey="0652dcd22b63ae0cb7f73da0231ec54e"
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchbox=document.querySelector(".search input")
const searchbutton=document.querySelector(".search button")
let weathericon=document.querySelector('.weather-icon');
async function weather(city){
    const response =await fetch(apiurl+city+`&appid=${apikey}`)
    let data=await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°C';
    document.querySelector('.humidity').innerHTML= data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";
    let current=data.weather[0].main;
    if(current==='Clouds')
        {
            weathericon.src="images__3_-removebg-preview.png";
        }
    else if(current==='Mist' || current==='Haze')
        {
            weathericon.src="147-1478081_foggy-weather-icon-illustration-removebg-preview.png";
        }
    else if(current==='Clear'&& data.main.temp>35 )
        {
            weathericon.src="images__1_-removebg-preview.png"
        }
    else if(current==='Rain')
        {
            weathericon.src="182-1822480_rain-icon-rainy-weather-icon-removebg-preview.png"
        }
    else if(data.main.temp<5)
        {
            weathericon.src="snow-removebg-preview.png"
        }
    else if(current==='Clear'&& data.main.temp>5 && data.main.temp<30 )
        {
             weathericon.src="images__2_-removebg-preview.png"
        }
    else if(current==="Thunderstorm")
        {
            weathericon.src="images__4_-removebg-preview.png"
        }
}

searchbutton.addEventListener("click",()=>{
    weather(searchbox.value);
})
 





