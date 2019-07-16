let button = document.querySelector('#btn')
button.addEventListener('click', ()=>{
  let city= document.querySelector('.inpt').value;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ac731e61d18f2ff0e0c877aef04eaf71&units=metric`
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
    document.body.style.backgroundImage= 'url("./src/clouds.jpeg")'
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



let weatherDescription= document.querySelector('#weatherdescription')
let humidity= document.querySelector('#humidty');
let tempreature= document.querySelector('#tempreature');
let wind= document.querySelector('#wind');
let image = document.querySelector('.img')

let result = serverRequest.weather[0].description
weatherDescription.innerText= result;


tempreature.innerHTML=Math.floor
(serverRequest.main.temp) + '&#8451'


humidity.innerHTML= 'Humidity: ' +  Math.floor(serverRequest.main.humidity) + ' % '

wind.innerHTML= 'Wind Speed: ' + Math.floor(serverRequest.wind.speed) + ' km/hr'

// image.src= 'http://openweathermap.org/img/wn/' + serverRequest.weather[0].icon + ' .png'
};








