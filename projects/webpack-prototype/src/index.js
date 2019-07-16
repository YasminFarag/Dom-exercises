import {apiKey} from './token.js';

let button = document.querySelector('#btn')
button.addEventListener('click', ()=>{
  let city= document.querySelector('.inpt').value;
  let value = apiKey
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${value}&units=metric&units=imperial`
  fetch(url)
  .then(function(resp) { return resp.json() })
.then(function(data) {
  weatherdemo(data);
  console.log(data.main.temp)
});


});

function weatherdemo(serverRequest){
  switch(serverRequest.weather[0].main){

   /*  case 'default':
    document.body.style.backgroundImage= 'url("./src/water")
    break; */


    case 'Clear':
    document.body.style.backgroundImage= 'url("./src/sunny.jpeg")'

    break;

    case 'Clouds':
    document.body.style.backgroundImage= 'url("./src/clouds.jpeg")';
    let container= document.querySelector('#container') ;
    container.style.backgroundColor= 'grey';
    container.style.width= '300px';
    container.style.height= '200px';
    container.style.opacity= '0.8';
    container.style.marginLeft= '520px';
    container.style.paddingTop= '30px';
    container.style.color= 'whitesmoke';
    container.style.borderRadius= '10%';

    //horizontal line
    let line=document.querySelector('#line');
    line.style.width= '250px';

    break;

    case 'Rain':
    case 'Drizzle':
    case 'Mist':
    document.body.style.backgroundImage= 'url("./src/cloudy.jpeg")'
    break;

    case 'thunderstorm':
    document.body.style.backgroundImage= 'url("./src/lightning.jpg")'

    break;

    case 'Snow':
    document.body.style.backgroundImage= 'url("./src/snowy.jpg")'

    break;
    default:


    break;
  }
console.log(serverRequest);


let cityName= document.querySelector('#cityname')
let weatherDescription= document.querySelector('#weatherdescription')
let humidity= document.querySelector('#humidty');
let tempreature= document.querySelector('#tempreature');
let wind= document.querySelector('#wind');
let image = document.querySelector('.img')

// print city name
cityName.innerHTML=serverRequest.name


// weather description
let result = serverRequest.weather[0].description
weatherDescription.innerText= result;


tempreature.innerHTML=Math.floor
(serverRequest.main.temp) + '&#8451'


humidity.innerHTML= 'Humidity: ' +  Math.floor(serverRequest.main.humidity) + ' % '

wind.innerHTML= 'Wind Speed: ' + Math.floor(serverRequest.wind.speed) + ' km/hr'

// image.src= 'https://openweathermap.org/img/wn/.png'
//  + serverRequest.weather[0].icon



};








